"use strict";

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });

exports.handler = async event => {
  const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
  if (!event || !event.body) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify("Missing request body!")
    };
  }
  const body = JSON.parse(event.body);
  if (!body.id) {
    return {
      statusCode: 401,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify("Missing quest id!")
    };
  }
  if (
    !body.sections ||
    !Array.isArray(body.sections) ||
    body.sections.length === 0
  ) {
    return {
      statusCode: 402,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify("Missing classes!")
    };
  }
  const questId = body.id.trim();
  const sections = body.sections;
  const params = {
    TableName: "Schedule",
    Item: {
      QuestId: questId,
      Sections: sections
    }
  };

  try {
    await docClient.put(params).promise();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify("Success!")
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(`Unable to add item. Error: ${err}`)
    };
  }
};