'use strict';

const uuidv4 = require('uuid/v4');
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
	if (!body.features || !Array.isArray(body.features) || body.features.length !== 23) {
		return {
			statusCode: 400,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Missing/Incorrect features!')
		};
	}
	if (!body.rating || (typeof body.rating) !== 'number' || body.rating < 0 || body.rating > 100) {
		return {
			statusCode: 400,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Missing/Incorrect rating!')
		};
	}

	const entriesObj = {};

	const featureHeaders = ['early_class',
		'together_class',
		'even_dist',
		'mon_first_class_time',
		'mon_last_class_time',
		'mon_total_class_time',
		'mon_num_classes',
		'tue_first_class_time',
		'tue_last_class_time',
		'tue_total_class_time',
		'tue_num_classes',
		'wed_first_class_time',
		'wed_last_class_time',
		'wed_total_class_time',
		'wed_num_classes',
		'thu_first_class_time',
		'thu_last_class_time',
		'thu_total_class_time',
		'thu_num_classes',
		'fri_first_class_time',
		'fri_last_class_time',
		'fri_total_class_time',
		'fri_num_classes'
	];

	entriesObj.id = uuidv4();
	featureHeaders.forEach((x, i) => entriesObj[x] = body.features[i]);
	entriesObj.rating = body.rating;

	const params = {
		TableName: 'features',
		Item: entriesObj
	};

	try {
		await docClient.put(params).promise();
		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify('Success!')
		};
	} catch (err) {
		return {
			statusCode: 500,
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(`Unable to add item. Error: ${err}`)
		};
	}
};
