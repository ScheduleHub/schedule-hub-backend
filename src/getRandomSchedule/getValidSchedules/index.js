const getValidSchedules = (body) => {
  
  const timeToIdx = (h, m) => h * 6 + m / 10;
  const prepend = (i, lol) => lol.map(lst => [i].concat(lst));

  const perm = lol =>
    !lol.length ? [[]] : lol[0].map(x => prepend(x, perm(lol.slice(1)))).flat();

  const checkEveryWeekConflict = (every_week, scheduleObj, mutate) => {
    for (let i = 0; i < 5; i++) {
      if (every_week[i].length === 0) continue;
      for (let oneClassTime of every_week[i]) {
        let [startHr, startMin, endHr, endMin] = oneClassTime;
        let startIdx = timeToIdx(startHr, startMin);
        let endIdx = timeToIdx(endHr, endMin);
        for (let j = startIdx; j < endIdx; j++) {
          if (scheduleObj.every_week[i][j] === 1) {
            return true;
          }
          if (mutate) scheduleObj.every_week[i][j] = 1;
        }
      }
    }
    return false;
  };

  const checkOneDayConflict = (one_day, scheduleObj) => {
    for (let oneDayObj of one_day) {
      let { time, weekdays, date } = oneDayObj;
      let [startHr, startMin, endHr, endMin] = time;
      if (weekdays.includes("M")) {
        if (
          checkEveryWeekConflict([[time], [], [], [], []], scheduleObj, false)
        )
          return true;
      } else if (weekdays.includes("Th")) {
        if (
          checkEveryWeekConflict([[], [], [], [time], []], scheduleObj, false)
        )
          return true;
        weekdays = weekdays.replace("Th", "");
      } else if (weekdays.includes("T")) {
        if (
          checkEveryWeekConflict([[], [time], [], [], []], scheduleObj, false)
        )
          return true;
      } else if (weekdays.includes("W")) {
        if (
          checkEveryWeekConflict([[], [], [time], [], []], scheduleObj, false)
        )
          return true;
      } else if (weekdays.includes("F")) {
        if (
          checkEveryWeekConflict([[], [], [], [], [time]], scheduleObj, false)
        )
          return true;
      }
      // check conflict with one_day
      let startIdx = timeToIdx(startHr, startMin);
      let endIdx = timeToIdx(endHr, endMin);
      if (scheduleObj[date] === undefined) {
        scheduleObj[date] = new Array(144).fill(0);
        for (let i = startIdx; i < endIdx; i++) {
          scheduleObj[date][i] = 1;
        }
      } else {
        for (let i = startIdx; i < endIdx; i++) {
          if (scheduleObj[date][i] === 1) {
            return true;
          }
          scheduleObj[date][i] = 1;
        }
      }
    }
    return false;
  };
  
  let validSchedules = [];
  let validScheduleTimeObjs = [];

  let courses_info = body.courses_info;
  let filtered_courses = body.filtered_courses;
  let courseCodeToTime = {}; // time: [[startHH,startMM,endHH,endMM], [...], ...]
  for (var i = 0; i < courses_info.length; i++) {
    var course = courses_info[i];
    for (var j = 0; j < course.length; j++) {
      var section = course[j];
      if (section.campus === "ONLN ONLINE") continue;
      let flag = true; // not closed
      let timeObj = {
        every_week: [[], [], [], [], []],
        one_day: []
      };
      for (var k = 0; k < section.classes.length; k++) {
        var oneClass = section.classes[k];
        if (oneClass.date.is_closed) {
          flag = false; // one class is closed
          break;
        } else {
          let [startHr, startMin] = oneClass.date.start_time.split(":");
          let [endHr, endMin] = oneClass.date.end_time.split(":");
          startHr = parseInt(startHr, 10);
          startMin = parseInt(startMin, 10);
          endHr = parseInt(endHr, 10);
          endMin = parseInt(endMin, 10);
          let weekdays = oneClass.date.weekdays;
          if (oneClass.date.start_date === null) {
            // every week case
            if (weekdays.includes("M")) {
              timeObj.every_week[0].push([startHr, startMin, endHr, endMin]);
            }
            if (weekdays.includes("Th")) {
              timeObj.every_week[3].push([startHr, startMin, endHr, endMin]);
              weekdays = weekdays.replace("Th", "");
            }
            if (weekdays.includes("T")) {
              timeObj.every_week[1].push([startHr, startMin, endHr, endMin]);
            }
            if (weekdays.includes("W")) {
              timeObj.every_week[2].push([startHr, startMin, endHr, endMin]);
            }
            if (weekdays.includes("F")) {
              timeObj.every_week[4].push([startHr, startMin, endHr, endMin]);
            }
          } else {
            // one day case
            timeObj.one_day = [
              ...timeObj.one_day,
              {
                date: oneClass.date.start_date,
                weekdays: weekdays,
                time: [startHr, startMin, endHr, endMin]
              }
            ];
          }
        }
      }
      if (flag) {
        // if no closed class
        courseCodeToTime[section.class_number] = timeObj;
      }
    }
  }

  let allCombo = perm(
    filtered_courses.map(course =>
      course.map(oneCourseCombo => perm(oneCourseCombo)).flat()
    )
  ).map(x => x.flat());

  for (let i = 0; i < allCombo.length; i++) {
    let combo = allCombo[i];
    let hasConflict = false;
    let scheduleObj = {
      every_week: [
        new Array(144).fill(0),
        new Array(144).fill(0),
        new Array(144).fill(0),
        new Array(144).fill(0),
        new Array(144).fill(0)
      ]
    };
    for (let sectionCode of combo) {
      let sectionTimeObj = courseCodeToTime[sectionCode];
      if (sectionTimeObj === undefined) {
        return [];
      }
      let every_week = sectionTimeObj.every_week;
      let one_day = sectionTimeObj.one_day;
      hasConflict = checkEveryWeekConflict(every_week, scheduleObj, true);
      hasConflict = hasConflict || checkOneDayConflict(one_day, scheduleObj);
      if (hasConflict) {
        break;
      } else {
        continue;
      }
    }
    if (hasConflict) {
      continue;
    } else {
      validSchedules.push(combo);
      validScheduleTimeObjs.push(scheduleObj.every_week);
    }
  }
  return [validSchedules, validScheduleTimeObjs];
};

module.exports = getValidSchedules;