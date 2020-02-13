'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

exports.handler = async(event) => {

	const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

	if (!event || !event.body) {
		return {
			statusCode: 400,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Missing request body!')
		};
	}
	const body = JSON.parse(event.body);
	if (!body.questId || (typeof body.questId) !== 'string') {
		return {
			statusCode: 400,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Missing/Incorrect questId!')
		};
	}
	const questId = body.questId;
	if (!body.ratingObjs || (typeof body.ratingObjs) !== 'object') {
		return {
			statusCode: 400,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Missing/Incorrect rating objects!')
		};
	}
	for (const obj of body.ratingObjs) {
		if (!obj.id || (typeof obj.id) !== 'string') {
			return {
				statusCode: 400,
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify('Missing/Incorrect schedule id!')
			};
		}
		if (!obj.rating || (typeof obj.rating) !== 'number' || obj.rating < 0 || obj.rating > 100) {
			return {
				statusCode: 400,
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify('Missing/Incorrect rating!')
			};
		}
	}

	let added = 0;
	let failed = 0;
	let err_message = '';
	for (const obj of body) {
		const params = {
			TableName: 'schedule_data',
			Key: { 'id': obj.id },
			UpdateExpression: 'SET rating = list_append(rating, :val)',
			ExpressionAttributeValues: { ':val': [obj.rating] }
		};
		try {
			await docClient.update(params).promise();
			added += 1;
		}
		catch (err) {
			err_message += (err + '\n');
			failed += 1;
		}
	}
	if (added === 0) {
		return {
			statusCode: 500,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(err_message)
		};
	}
	else if (failed === 0) {
		const params1 = {
			TableName: 'quest_id',
			ProjectionExpression: 'id'
		};
		let result = await docClient.scan(params1).promise();
		result = result.Items;
		if (result.includes(questId)) {
			const updateParams = {
				TableName: 'quest_id',
				Key: { 'id': questId },
				UpdateExpression: 'SET count = count + :val',
				ExpressionAttributeValues: { ':val': 1 }
			};
			try {
				await docClient.update(updateParams).promise()
			}
			catch (err) {
				return {
					statusCode: 500,
					headers: {
						'Access-Control-Allow-Origin': '*'
					},
					body: JSON.stringify(err_message)
				};
			}
		}
		else {
			const putParams = {
				TableName: 'quest_id',
				Item: {
					id: questId,
					count: 0
				}
			};
			try {
				await docClient.put(putParams).promise();
			}
			catch (err) {
				return {
					statusCode: 500,
					headers: {
						'Access-Control-Allow-Origin': '*'
					},
					body: JSON.stringify(`Unable to add item. ${err}`)
				};
			}
		}

		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Success!')
		};
	}
	else {
		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(added + ' rating updated.\n' + failed + ' failed to updated\n' + err_message)
		};
	}

};
