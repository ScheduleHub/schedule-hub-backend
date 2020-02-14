const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });


exports.handler = async(event) => {
  const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const params = {
    TableName: 'schedule_data',
    ProjectionExpression: 'id'
  };

  let responseData = [];

  try {
    let result = await docClient.scan(params).promise();
    result = result.Items;
    const idList = [];
    for (let i = 0; i < 5; i++) {
      let id = result[getRandomInt(result.length)].id;
      while (idList.includes(id)) {
        id = result[getRandomInt(result.length)].id;
      }
      idList.push(id);
      const localParams = {
        TableName: 'schedule_data',
        Key: {
          'id': id
        },
        ProjectionExpression: 'id, schedule, early_class, even_dist, together_class'
      };
      try {
        const newResult = await docClient.get(localParams).promise();
        responseData = responseData.concat(newResult.Item);
      }
      catch (err) {
        return {
          statusCode: 500,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(`Unable to get item. ${err}`)
        };
      }
    }
  }
  catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(`Unable to get item. ${err}`)
    };
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(responseData)
  };
};
