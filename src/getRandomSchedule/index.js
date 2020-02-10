const getValidSchedules = require('./getValidSchedules/index.js');
const uuidv4 = require('uuid/v4');

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

exports.handler = async (event) => {

  const getOneDayFeature = (timeArr) => {
    let isFirstClass = true;
    let first_class_time = -1;
    let last_class_time = -1;
    let total_class_time = 0;
    let num_classes = 0;
    for (let i = 0; i < timeArr.length; i++) {
      if (timeArr[i] === 1) {
        num_classes += 1;
        if (isFirstClass) {
          first_class_time = i;
          isFirstClass = false;
        }
        let j = i;
        for (; j < timeArr.length; j++) {
          if (timeArr[j] === 0) break;
          total_class_time += 1;
        }
        last_class_time = j;
        i = j;
      }
    }
    return [first_class_time, last_class_time, total_class_time, num_classes];
  };

  const scheduleToFeatures = (schedule) => {
    const early_class = Math.random();
    const together_class = Math.random();
    const even_dist = Math.random();
    const [mon_first_class_time, mon_last_class_time, mon_total_class_time, mon_num_classes] = getOneDayFeature(schedule[0]);
    const [tue_first_class_time, tue_last_class_time, tue_total_class_time, tue_num_classes] = getOneDayFeature(schedule[1]);
    const [wed_first_class_time, wed_last_class_time, wed_total_class_time, wed_num_classes] = getOneDayFeature(schedule[2]);
    const [thu_first_class_time, thu_last_class_time, thu_total_class_time, thu_num_classes] = getOneDayFeature(schedule[3]);
    const [fri_first_class_time, fri_last_class_time, fri_total_class_time, fri_num_classes] = getOneDayFeature(schedule[4]);
    return [early_class, together_class, even_dist, mon_first_class_time, mon_last_class_time, mon_total_class_time, mon_num_classes, tue_first_class_time, tue_last_class_time, tue_total_class_time, tue_num_classes, wed_first_class_time, wed_last_class_time, wed_total_class_time, wed_num_classes, thu_first_class_time, thu_last_class_time, thu_total_class_time, thu_num_classes, fri_first_class_time, fri_last_class_time, fri_total_class_time, fri_num_classes];
  };

  if (!event || !event.body) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify('Missing request body!')
    };
  }

  let body = JSON.parse(event.body);
  if (!body.courses_info) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify('Missing courses info!')
    };
  }

  if (!body.filtered_courses) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify('Missing filtered course!')
    };
  }

  const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });

  const [validSchedules, validScheduleTimeObjs] = getValidSchedules(body);

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

  if (validScheduleTimeObjs.length < 10) {
    for (let i = 0; i < validScheduleTimeObjs.length; i++) {
      const schedule = validScheduleTimeObjs[i];
      const features = scheduleToFeatures(schedule);
      const entriesObj = {};
      entriesObj.id = uuidv4();
      featureHeaders.forEach((x, i) => entriesObj[x] = features[i]);
      entriesObj.schedule = validSchedules[i];
      entriesObj.rating = [];
      const params = {
        TableName: 'schedule_data',
        Item: entriesObj
      };
      try {
        await docClient.put(params).promise();
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
  }
  else {
    const interval = validScheduleTimeObjs.length / 10;
    for (let i = 0; i < 10; i++) {
      const idx = Math.floor(i * interval);
      const features = scheduleToFeatures(validScheduleTimeObjs[idx]);
      const entriesObj = {};
      entriesObj.id = uuidv4();
      featureHeaders.forEach((x, i) => entriesObj[x] = features[i]);
      entriesObj.schedule = validSchedules[idx];
      entriesObj.rating = [];
      const params = {
        TableName: 'schedule_data',
        Item: entriesObj
      };
      try {
        await docClient.put(params).promise();
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
  }
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify('Success!')
  };
};
