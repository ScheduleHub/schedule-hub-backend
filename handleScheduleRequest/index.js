"use strict";
const event = require("./data");
const emptyEvent = require("./emptyData");

const handler = event => {
  // TODO implement

  const timeToIdx = (h, m) => {
    h * 6 + m / 10;
  };

  const validate = (oneDayTimeArray, timeList) => {
    let isValid1 = true;
    const startIdx = timeToIdx(timeList[0], timeList[1]);
    const endIdx = timeToIdx(timeList[2], timeList[3]);
    for (let i = startIdx; i < endIdx; i++) {
      if (oneDayTimeArray[i] === 1) {
        isValid1 = false;
        break;
      } else {
        oneDayTimeArray[i] = 1;
      }
    }
    return isValid1;
  };

  let response = null;

  let validSchedules = [];

  if (!!event && event.body) {
    let body = event.body;
    if (!body.courses_info || !body.filtered_courses) {
      response = {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify("Please add at least one course.")
      };
      console.log(response);
    } else {
      let courses_info = body.courses_info;
      let filtered_courses = body.filtered_courses;
      const courseCodeToTime = new Map(); // time: [[startHH,startMM,endHH,endMM], [...], ...]
      for (var i = 0; i < courses_info.length; i++) {
        var course = courses_info[i];
        for (var j = 0; j < course.length; j++) {
          var section = course[j];
          if (section.campus === "ONLN ONLINE") continue;
          let flag = true; // not closed
          let timeObj = {
            every_week: [null, null, null, null, null],
            one_day: []
          };
          for (var k = 0; k < section.classes.length; k++) {
            var oneClass = section.classes[k];
            if (oneClass.date.is_closed) {
              console.log("class closed");
              flag = false; // one class is closed
              break;
            } else {
              let [startHr, startMin] = oneClass.date.start_time.split(":");
              let [endHr, endMin] = oneClass.date.end_time.split(":");
              startHr = parseInt(startHr);
              startMin = parseInt(startMin);
              endHr = parseInt(endHr);
              endMin = parseInt(endMin);
              let weekdays = oneClass.date.weekdays;
              if (oneClass.date.start_date === null) {
                // every week case
                if (weekdays.includes("M")) {
                  timeObj.every_week[0] = [startHr, startMin, endHr, endMin];
                } else if (weekdays.includes("Th")) {
                  timeObj.every_week[3] = [startHr, startMin, endHr, endMin];
                  weekdays = weekdays.replace("Th", "");
                } else if (weekdays.includes("T")) {
                  timeObj.every_week[1] = [startHr, startMin, endHr, endMin];
                } else if (weekdays.includes("W")) {
                  timeObj.every_week[2] = [startHr, startMin, endHr, endMin];
                } else if (weekdays.includes("F")) {
                  timeObj.every_week[4] = [startHr, startMin, endHr, endMin];
                }
              } else {
                // one day case
                timeObj.one_day = [
                  ...timeObj.one_day,
                  {
                    date: oneClass.date.start_date,
                    weekday: weekdays,
                    time: [startHr, startMin, endHr, endMin]
                  }
                ];
              }
            }
          }
          if (flag) {
            // if no closed class
            courseCodeToTime.set(section.class_number, timeObj);
          }
        }
      }
      //result = (list of all courses (list of all combination of compeleteCourseSelectionList))
      let result = filtered_courses.map(x => x.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), [])));
      for (var x in result) {
        for (var y in x) {

        }
      }
      let permutation = result.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat([v], [w]))), []));
      let all_possible_schedules
      for (var schedule in permutation) {
        let isValid1 = true;
        let timeArray = [new Array(143).fill(0), new Array(143).fill(0), new Array(143).fill(0), new Array(143).fill(0), new Array(143).fill(0)];
        for (var course in schedule) {
          for (var section in course) {
            const sectionTimeObj = courseCodeToTime.get(section);
            if (sectionTimeObj === undefined) { // cannot find section number in map
              response = {
                statusCode: 500,
                headers: {
                  "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify('Course code is not found!')
              }
              return response;
            }
            const every_week = sectionTimeObj.every_week;
            for (let i = 0; i < 5; i++) {
              if (every_week[i] === null) continue;
              isValid1 = validate(timeArray[i], every_week[i]);
              if (!isValid1) break;
            }
            if (!isValid1) break;
          }
          if (!isValid1) break;
        }
        let isValid2 = true; // conflict one-day with one-dauy
        let isValid3 = true; // conflict one-day with every-week
        if (isValid1) {
          let one_day_map = {};
          for (var course in schedule) {
            for (var section in course) {
              const one_day = section.one_day;
              if (one_day.length > 0) {
                for (var one_day_obj in one_day) {
                  if (one_day_map.has(one_day_obj.date)) {
                    isValid2 = validate(one_day_map.get(one_day_obj.date), one_day_obj.time);
                    if (!isValid2) break;
                  } else {
                    one_day_map.set(one_day_obj.date, new Array(143).fill(0));
                  }
                  switch (one_day_obj.weekday) {
                    case 'M':
                      isValid3 = validate(timeArray[0], one_day_obj.time);
                      break;
                    case 'T':
                      isValid3 = validate(timeArray[1], one_day_obj.time);
                      break;
                    case 'W':
                      isValid3 = validate(timeArray[2], one_day_obj.time);
                      break;
                    case 'Th':
                      isValid3 = validate(timeArray[3], one_day_obj.time);
                      break;
                    case 'F':
                      isValid3 = validate(timeArray[4], one_day_obj.time);
                      break;
                    default:
                      break;
                  }
                  if (!isValid3) break;
                }
              }
              if (!isValid2 || !isValid3) break;
            }
            if (!isValid2 || !isValid3) break;
          }
        }
        if (isValid1 && isValid2 && isValid3) {
          validSchedules.concat([schedule]);
        }
      }
    }
  } else {
    response = {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify("No Request Body")
    };
    console.log(response);
  }
};

handler(event);