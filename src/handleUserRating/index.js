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
	for (const obj of body) {
		if (!obj.id || (typeof obj.id) != 'string') {
			return {
				statusCode: 400,
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify('Missing/Incorrect id!')
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
