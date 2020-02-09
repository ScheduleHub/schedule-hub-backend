const empty = {};

const missingBody = {
  params: {}
};

const missingCoursesInfo = {
  params: {},
  body: JSON.stringify({
    filtered_courses: [
      [[[8660], [8661], [6098]]],
      [[[6701], [6702, 6703, 6704, 6705, 6706, 6853], [8504]]]
    ]
  })
};

const missingFilteredCourses = {
  params: {},
  body: JSON.stringify({
    courses_info: [
      [
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6094,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: "101",
          related_component_2: "201",
          enrollment_capacity: 75,
          enrollment_total: 68,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:00",
                end_time: "11:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4021"
              },
              instructors: ["Lushman,Brad"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8660,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: "102",
          related_component_2: "201",
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4058"
              },
              instructors: ["Hackman,Rob"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6126,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 75,
          enrollment_total: 68,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "313"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8661,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "2035"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6098,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 140,
          enrollment_total: 128,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "03/02",
                end_date: "03/02",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: null,
                room: null
              },
              instructors: ["Anderson,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        }
      ],
      [
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6700,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 247,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "DC",
                room: "1350"
              },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6701,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 300,
          enrollment_total: 182,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "STC",
                room: "1012"
              },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 7285,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 156,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:00",
                end_time: "17:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "DC",
                room: "1351"
              },
              instructors: ["Cummings,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6702,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 108,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4058"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6703,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 82,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6704,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6705,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 94,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6706,
          section: "TUT 105",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 106,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6853,
          section: "TUT 106",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 71,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4058"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 8504,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 800,
          enrollment_total: 585,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:50",
                weekdays: "W",
                start_date: "02/26",
                end_date: "02/26",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: null,
                room: null
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        }
      ]
    ]
  })
};

const normal = {
  params: {},
  body: JSON.stringify({
    courses_info: [
      [
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6094,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: "101",
          related_component_2: "201",
          enrollment_capacity: 75,
          enrollment_total: 68,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:00",
                end_time: "11:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4021"
              },
              instructors: ["Lushman,Brad"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8660,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: "102",
          related_component_2: "201",
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4058"
              },
              instructors: ["Hackman,Rob"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6126,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 75,
          enrollment_total: 68,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "313"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8661,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "2035"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6098,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 140,
          enrollment_total: 128,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "03/02",
                end_date: "03/02",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: null,
                room: null
              },
              instructors: ["Anderson,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:01:36-05:00"
        }
      ],
      [
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6700,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 247,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "DC",
                room: "1350"
              },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6701,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 300,
          enrollment_total: 182,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "STC",
                room: "1012"
              },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 7285,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 156,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:00",
                end_time: "17:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "DC",
                room: "1351"
              },
              instructors: ["Cummings,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6702,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 108,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4058"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6703,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 82,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6704,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6705,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 94,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6706,
          section: "TUT 105",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 106,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "PHY",
                room: "150"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6853,
          section: "TUT 106",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 71,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: "MC",
                room: "4058"
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 8504,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 800,
          enrollment_total: 585,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:50",
                weekdays: "W",
                start_date: "02/26",
                end_date: "02/26",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: {
                building: null,
                room: null
              },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-03T10:04:22-05:00"
        }
      ]
    ],
    filtered_courses: [
      [[[8660], [8661], [6098]]],
      [[[6701], [6702, 6703, 6704, 6705, 6706, 6853], [8504]]]
    ]
  })
};

const basic = {
  params: {},
  body: JSON.stringify({
    courses_info: [
      [
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8660,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: "102",
          related_component_2: "201",
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: ["Hackman,Rob"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8661,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6098,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 140,
          enrollment_total: 128,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "03/02",
                end_date: "03/02",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Anderson,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5829,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 160,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["D'Alessio,Serge"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:44-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6504,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 380,
          enrollment_total: 354,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "M",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:44-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6035,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1260,
          enrollment_total: 1040,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/10",
                end_date: "02/10",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:44-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5839,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 179,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Hamilton,Jordan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:45-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6397,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 350,
          enrollment_total: 246,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "RCH", room: "101" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:45-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6036,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1440,
          enrollment_total: 1169,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/24",
                end_date: "02/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:45-05:00"
        }
      ],
      [
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5759,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 200,
          enrollment_total: 198,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "CS Majors (incl CFM and SE) ",
              enrollment_capacity: 150,
              enrollment_total: 86
            }
          ],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Skrzydlo,Diana"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6344,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 147,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/14",
                end_date: "01/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/28",
                end_date: "01/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "02/11",
                end_date: "02/11",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/03",
                end_date: "03/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/17",
                end_date: "03/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/31",
                end_date: "03/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6029,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 500,
          enrollment_total: 351,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "02/06",
                end_date: "02/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Van Doormaal,Steve"]
            },
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "03/12",
                end_date: "03/12",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "01/24",
                end_date: "01/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "02/28",
                end_date: "02/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "03/27",
                end_date: "03/27",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: [
                "Skrzydlo,Diana",
                "Van Doormaal,Steve",
                "Beliveau,Audrey"
              ]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        }
      ],
      [
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 6998,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 167,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:00",
                end_time: "11:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Scholz,Guenter"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 6999,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 149,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Scholz,Guenter"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7000,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 92,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "235" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7001,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 92,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "M",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "145" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7002,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 92,
          enrollment_total: 46,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "235" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7003,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 92,
          enrollment_total: 47,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "T",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "235" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7004,
          section: "TUT 105",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 66,
          enrollment_total: 55,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "T",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7188,
          section: "TUT 106",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 66,
          enrollment_total: 43,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4041" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "122",
          units: 0.5,
          title: "Waves, Electricity and Magnetism",
          note: "Choose TUT section for Related 1.",
          class_number: 7116,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 500,
          enrollment_total: 316,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:37-05:00"
        }
      ]
    ],
    filtered_courses: [
      [[[8660], [8661], [6098]]],
      [[[5829], [6504], [6035]]],
      [[[5839], [6397], [6036]]],
      [[[5759], [6344], [6029]]],
      [
        [[6998], [7000, 7001, 7002, 7003, 7004, 7188], [7116]],
        [[6999], [7000, 7001, 7002, 7003, 7004, 7188], [7116]]
      ]
    ]
  })
};

const medium = {
  params: {},
  body: JSON.stringify({
    courses_info: [
      [
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8660,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: "102",
          related_component_2: "201",
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: ["Hackman,Rob"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8661,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6098,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 140,
          enrollment_total: 128,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "03/02",
                end_date: "03/02",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Anderson,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5829,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 160,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["D'Alessio,Serge"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:44-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6504,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 380,
          enrollment_total: 354,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "M",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:44-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6035,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1260,
          enrollment_total: 1040,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/10",
                end_date: "02/10",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:44-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5839,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 179,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Hamilton,Jordan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:45-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6397,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 350,
          enrollment_total: 246,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "RCH", room: "101" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:45-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6036,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1440,
          enrollment_total: 1169,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/24",
                end_date: "02/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:05:45-05:00"
        }
      ],
      [
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6700,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 247,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6701,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 300,
          enrollment_total: 182,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 7285,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 156,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:00",
                end_time: "17:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Cummings,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6702,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 108,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6704,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6705,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 94,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6706,
          section: "TUT 105",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 106,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 8504,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 800,
          enrollment_total: 585,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:50",
                weekdays: "W",
                start_date: "02/26",
                end_date: "02/26",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:07:36-05:00"
        }
      ],
      [
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5759,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 200,
          enrollment_total: 198,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "CS Majors (incl CFM and SE) ",
              enrollment_capacity: 150,
              enrollment_total: 86
            }
          ],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Skrzydlo,Diana"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6149,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 24,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "Not open to CS Majors ",
              enrollment_capacity: 150,
              enrollment_total: 15
            }
          ],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0050" },
              instructors: ["Beliveau,Audrey"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6343,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 129,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "Not open to CS Majors ",
              enrollment_capacity: 150,
              enrollment_total: 82
            }
          ],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0050" },
              instructors: ["Beliveau,Audrey"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5760,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 200,
          enrollment_total: 122,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "01/17",
                end_date: "01/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "01/31",
                end_date: "01/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "03/06",
                end_date: "03/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "03/20",
                end_date: "03/20",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "04/03",
                end_date: "04/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6277,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 82,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "01/17",
                end_date: "01/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "01/31",
                end_date: "01/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "03/06",
                end_date: "03/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "03/20",
                end_date: "03/20",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "04/03",
                end_date: "04/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6344,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 147,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/14",
                end_date: "01/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/28",
                end_date: "01/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "02/11",
                end_date: "02/11",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/03",
                end_date: "03/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/17",
                end_date: "03/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/31",
                end_date: "03/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6029,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 500,
          enrollment_total: 351,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "02/06",
                end_date: "02/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Van Doormaal,Steve"]
            },
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "03/12",
                end_date: "03/12",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "01/24",
                end_date: "01/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "02/28",
                end_date: "02/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "03/27",
                end_date: "03/27",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: [
                "Skrzydlo,Diana",
                "Van Doormaal,Steve",
                "Beliveau,Audrey"
              ]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:09:30-05:00"
        }
      ]
    ],
    filtered_courses: [
      [[[8660], [8661], [6098]]],
      [[[5829], [6504], [6035]]],
      [[[5839], [6397], [6036]]],
      [
        [[6700], [6702, 6704, 6705, 6706], [8504]],
        [[6701], [6702, 6704, 6705, 6706], [8504]],
        [[7285], [6702, 6704, 6705, 6706], [8504]]
      ],
      [
        [[5759], [5760, 6277, 6344], [6029]],
        [[6149], [5760, 6277, 6344], [6029]],
        [[6343], [5760, 6277, 6344], [6029]]
      ]
    ]
  })
};

const big = {
  params: {},
  body: JSON.stringify({
    courses_info: [
      [
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5759,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 200,
          enrollment_total: 198,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "CS Majors (incl CFM and SE) ",
              enrollment_capacity: 150,
              enrollment_total: 86
            }
          ],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Skrzydlo,Diana"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6149,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 24,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "Not open to CS Majors ",
              enrollment_capacity: 150,
              enrollment_total: 15
            }
          ],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0050" },
              instructors: ["Beliveau,Audrey"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6343,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 129,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "Not open to CS Majors ",
              enrollment_capacity: 150,
              enrollment_total: 82
            }
          ],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0050" },
              instructors: ["Beliveau,Audrey"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5760,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 200,
          enrollment_total: 122,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "01/17",
                end_date: "01/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "01/31",
                end_date: "01/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "03/06",
                end_date: "03/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "03/20",
                end_date: "03/20",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "04/03",
                end_date: "04/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6277,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 82,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "01/17",
                end_date: "01/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "01/31",
                end_date: "01/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "03/06",
                end_date: "03/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "03/20",
                end_date: "03/20",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "04/03",
                end_date: "04/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6344,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 147,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/14",
                end_date: "01/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/28",
                end_date: "01/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "02/11",
                end_date: "02/11",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/03",
                end_date: "03/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/17",
                end_date: "03/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/31",
                end_date: "03/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6029,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 500,
          enrollment_total: 351,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "02/06",
                end_date: "02/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Van Doormaal,Steve"]
            },
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "03/12",
                end_date: "03/12",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "01/24",
                end_date: "01/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "02/28",
                end_date: "02/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "03/27",
                end_date: "03/27",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: [
                "Skrzydlo,Diana",
                "Van Doormaal,Steve",
                "Beliveau,Audrey"
              ]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        }
      ],
      [
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6700,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 247,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6701,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 300,
          enrollment_total: 182,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 7285,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 156,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:00",
                end_time: "17:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Cummings,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6702,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 108,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6704,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6705,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 94,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6706,
          section: "TUT 105",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 106,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 8504,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 800,
          enrollment_total: 585,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:50",
                weekdays: "W",
                start_date: "02/26",
                end_date: "02/26",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5837,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 180,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "AL", room: "116" },
              instructors: ["Nelson,Jen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5838,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 178,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Nelson,Jen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5839,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 179,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Hamilton,Jordan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5840,
          section: "LEC 004",
          campus: "UW U",
          associated_class: 4,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 180,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "RCH", room: "101" },
              instructors: ["Hamilton,Jordan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5841,
          section: "LEC 005",
          campus: "UW U",
          associated_class: 5,
          related_component_1: "104",
          related_component_2: "202",
          enrollment_capacity: 120,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "MATHPHYS and PHYS students ",
              enrollment_capacity: 120,
              enrollment_total: 36
            }
          ],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4061" },
              instructors: ["Waite,Michael"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5879,
          section: "LEC 006",
          campus: "UW U",
          associated_class: 6,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 152,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Castaneda Santos,Diana"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5971,
          section: "LEC 008",
          campus: "UW U",
          associated_class: 8,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 140,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Krivodonova,Lilia"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6117,
          section: "LEC 009",
          campus: "UW U",
          associated_class: 9,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 160,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["Liu,Jun"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5972,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 385,
          enrollment_total: 383,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6400,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 120,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4059" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6036,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1440,
          enrollment_total: 1169,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/24",
                end_date: "02/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6232,
          section: "TST 202",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 120,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/24",
                end_date: "02/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5829,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 160,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["D'Alessio,Serge"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5830,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 144,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Knoll,Carrie"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5831,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 125,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Knoll,Carrie"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5832,
          section: "LEC 004",
          campus: "UW U",
          associated_class: 4,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 159,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Trelford,Ryan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5833,
          section: "LEC 005",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 130,
          enrollment_total: 124,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["D'Alessio,Serge"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5834,
          section: "LEC 006",
          campus: "UW U",
          associated_class: 6,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 130,
          enrollment_total: 124,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STP", room: "105" },
              instructors: ["Bauman,Shane"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5969,
          section: "LEC 007",
          campus: "UW U",
          associated_class: 7,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 158,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Trelford,Ryan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6116,
          section: "LEC 008",
          campus: "UW U",
          associated_class: 8,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 85,
          enrollment_total: 48,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "AL", room: "116" },
              instructors: ["Akash,Mukto"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6504,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 380,
          enrollment_total: 354,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "M",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6035,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1260,
          enrollment_total: 1040,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/10",
                end_date: "02/10",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        }
      ],
      [
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6094,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: "101",
          related_component_2: "201",
          enrollment_capacity: 75,
          enrollment_total: 68,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:00",
                end_time: "11:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4021" },
              instructors: ["Lushman,Brad"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8660,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: "102",
          related_component_2: "201",
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: ["Hackman,Rob"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6126,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 75,
          enrollment_total: 68,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "313" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 8661,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 60,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        },
        {
          subject: "CS",
          catalog_number: "146",
          units: 0.5,
          title:
            "Elementary Algorithm Design and Data Abstraction (Advanced Level)",
          note: null,
          class_number: 6098,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 140,
          enrollment_total: 128,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "03/02",
                end_date: "03/02",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Anderson,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-09T00:02:43-05:00"
        }
      ]
    ],
    filtered_courses: [
      [
        [[5759], [5760, 6277, 6344], [6029]],
        [[6149], [5760, 6277, 6344], [6029]],
        [[6343], [5760, 6277, 6344], [6029]]
      ],
      [
        [[6700], [6702, 6704, 6705, 6706], [8504]],
        [[6701], [6702, 6704, 6705, 6706], [8504]],
        [[7285], [6702, 6704, 6705, 6706], [8504]]
      ],
      [
        [[5837], [5972], [6036]],
        [[5838], [5972], [6036]],
        [[5839], [5972], [6036]],
        [[5840], [5972], [6036]],
        [[5841], [6400], [6232]],
        [[5879], [5972], [6036]],
        [[5971], [5972], [6036]],
        [[6117], [5972], [6036]]
      ],
      [
        [[5829], [6504], [6035]],
        [[5830], [6504], [6035]],
        [[5831], [6504], [6035]],
        [[5832], [6504], [6035]],
        [[5833], [6504], [6035]],
        [[5834], [6504], [6035]],
        [[5969], [6504], [6035]],
        [[6116], [6504], [6035]]
      ],
      [
        [[6094], [6126], [6098]],
        [[8660], [8661], [6098]]
      ]
    ]
  })
};

const huge = {
  params: {},
  body: JSON.stringify({
    courses_info: [
      [
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 5914,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 49,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: ["Holtby,Dan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 5924,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 88,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2038" },
              instructors: ["Brecht,Tim"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6003,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 56,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:00",
                end_time: "11:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: ["Holtby,Dan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6004,
          section: "LEC 004",
          campus: "UW U",
          associated_class: 4,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 88,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:00",
                end_time: "11:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2038" },
              instructors: ["Brecht,Tim"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6048,
          section: "LEC 005",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 91,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: ["Tompkins,Dave"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6109,
          section: "LEC 006",
          campus: "UW U",
          associated_class: 6,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 87,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2038" },
              instructors: ["Reetz,Adrian"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6214,
          section: "LEC 007",
          campus: "UW U",
          associated_class: 7,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 89,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:00",
                end_time: "14:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: ["Tompkins,Dave"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6215,
          section: "LEC 008",
          campus: "UW U",
          associated_class: 8,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 83,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:00",
                end_time: "14:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2038" },
              instructors: ["Reetz,Adrian"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6260,
          section: "LEC 009",
          campus: "UW U",
          associated_class: 9,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 82,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:50",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: ["Nasr Esfahani,Navid"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6261,
          section: "LEC 010",
          campus: "UW U",
          associated_class: 10,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 90,
          enrollment_total: 40,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:00",
                end_time: "17:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2035" },
              instructors: ["Nasr Esfahani,Navid"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6005,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6006,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 63,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4042" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6008,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 64,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4060" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6010,
          section: "TUT 106",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 55,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4060" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6049,
          section: "TUT 108",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6111,
          section: "TUT 110",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 47,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STP", room: "105" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 6217,
          section: "TUT 112",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 65,
          enrollment_total: 58,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4042" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        },
        {
          subject: "CS",
          catalog_number: "136",
          units: 0.5,
          title: "Elementary Algorithm Design and Data Abstraction",
          note: "Choose TUT section for Related 1.",
          class_number: 5964,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 900,
          enrollment_total: 753,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "03/02",
                end_date: "03/02",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Akinyemi,John"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:02:00-05:00"
        }
      ],
      [
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5759,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 200,
          enrollment_total: 198,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "CS Majors (incl CFM and SE) ",
              enrollment_capacity: 150,
              enrollment_total: 86
            }
          ],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Skrzydlo,Diana"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6149,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 24,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "Not open to CS Majors ",
              enrollment_capacity: 150,
              enrollment_total: 15
            }
          ],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0050" },
              instructors: ["Beliveau,Audrey"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6343,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 129,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "Not open to CS Majors ",
              enrollment_capacity: 150,
              enrollment_total: 82
            }
          ],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0050" },
              instructors: ["Beliveau,Audrey"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 5760,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 200,
          enrollment_total: 122,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "01/17",
                end_date: "01/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "01/31",
                end_date: "01/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "03/06",
                end_date: "03/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "03/20",
                end_date: "03/20",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            },
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "F",
                start_date: "04/03",
                end_date: "04/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6277,
          section: "TUT 102",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 82,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "01/17",
                end_date: "01/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "01/31",
                end_date: "01/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "02/14",
                end_date: "02/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "03/06",
                end_date: "03/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "03/20",
                end_date: "03/20",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "F",
                start_date: "04/03",
                end_date: "04/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6344,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 150,
          enrollment_total: 147,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/14",
                end_date: "01/14",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "01/28",
                end_date: "01/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "02/11",
                end_date: "02/11",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/03",
                end_date: "03/03",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/17",
                end_date: "03/17",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            },
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "T",
                start_date: "03/31",
                end_date: "03/31",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "0010" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        },
        {
          subject: "STAT",
          catalog_number: "230",
          units: 0.5,
          title: "Probability",
          note:
            "Choose TUT for Related 1. LEC 081 - Feb 28, 8-10PM EST. Must be written in a proctored, face-to-face environment. Additional details listed in the course.",
          class_number: 6029,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 500,
          enrollment_total: 351,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "02/06",
                end_date: "02/06",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Van Doormaal,Steve"]
            },
            {
              date: {
                start_time: "16:30",
                end_time: "18:20",
                weekdays: "Th",
                start_date: "03/12",
                end_date: "03/12",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Skrzydlo,Diana"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "01/24",
                end_date: "01/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "02/28",
                end_date: "02/28",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: ["Beliveau,Audrey"]
            },
            {
              date: {
                start_time: "18:30",
                end_time: "20:00",
                weekdays: "F",
                start_date: "03/27",
                end_date: "03/27",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: [
                "Skrzydlo,Diana",
                "Van Doormaal,Steve",
                "Beliveau,Audrey"
              ]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:06:31-05:00"
        }
      ],
      [
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6700,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 247,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6701,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 300,
          enrollment_total: 182,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: ["Idziak,Stefan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 7285,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 250,
          enrollment_total: 156,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:00",
                end_time: "17:20",
                weekdays: "TTh",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1351" },
              instructors: ["Cummings,Karen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6702,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 134,
          enrollment_total: 108,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "Th",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4058" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6704,
          section: "TUT 103",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6705,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 94,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 6706,
          section: "TUT 105",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 133,
          enrollment_total: 106,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "PHY", room: "150" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        },
        {
          subject: "PHYS",
          catalog_number: "112",
          units: 0.5,
          title: "Physics 2",
          note: "Choose TUT section for Related 1.",
          class_number: 8504,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 800,
          enrollment_total: 585,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:50",
                weekdays: "W",
                start_date: "02/26",
                end_date: "02/26",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:04:45-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5837,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 180,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "AL", room: "116" },
              instructors: ["Nelson,Jen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5838,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 178,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Nelson,Jen"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5839,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 179,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "DC", room: "1350" },
              instructors: ["Hamilton,Jordan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5840,
          section: "LEC 004",
          campus: "UW U",
          associated_class: 4,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 180,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "RCH", room: "101" },
              instructors: ["Hamilton,Jordan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5841,
          section: "LEC 005",
          campus: "UW U",
          associated_class: 5,
          related_component_1: "104",
          related_component_2: "202",
          enrollment_capacity: 120,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [
            {
              reserve_group: "MATHPHYS and PHYS students ",
              enrollment_capacity: 120,
              enrollment_total: 36
            }
          ],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4061" },
              instructors: ["Waite,Michael"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5879,
          section: "LEC 006",
          campus: "UW U",
          associated_class: 6,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 152,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Castaneda Santos,Diana"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5971,
          section: "LEC 008",
          campus: "UW U",
          associated_class: 8,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 140,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "15:30",
                end_time: "16:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Krivodonova,Lilia"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6117,
          section: "LEC 009",
          campus: "UW U",
          associated_class: 9,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 180,
          enrollment_total: 160,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "09:30",
                end_time: "10:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["Liu,Jun"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 5972,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 385,
          enrollment_total: 383,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "M3", room: "1006" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6400,
          section: "TUT 104",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 120,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "17:30",
                end_time: "18:20",
                weekdays: "W",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "4059" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6036,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1440,
          enrollment_total: 1169,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/24",
                end_date: "02/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "138",
          units: 0.5,
          title: "Calculus 2 For Honours Mathematics",
          note: "Choose TUT for Related 1. LEC 005 is auto-enrolled.",
          class_number: 6232,
          section: "TST 202",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: null,
          enrollment_capacity: 120,
          enrollment_total: 65,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/24",
                end_date: "02/24",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        }
      ],
      [
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5829,
          section: "LEC 001",
          campus: "UW U",
          associated_class: 1,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 160,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["D'Alessio,Serge"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5830,
          section: "LEC 002",
          campus: "UW U",
          associated_class: 2,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 150,
          enrollment_total: 144,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "13:30",
                end_time: "14:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Knoll,Carrie"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5831,
          section: "LEC 003",
          campus: "UW U",
          associated_class: 3,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 125,
          enrollment_total: 123,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "11:30",
                end_time: "12:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Knoll,Carrie"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5832,
          section: "LEC 004",
          campus: "UW U",
          associated_class: 4,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 159,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "10:30",
                end_time: "11:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Trelford,Ryan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5833,
          section: "LEC 005",
          campus: "UW U",
          associated_class: 5,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 130,
          enrollment_total: 124,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "08:30",
                end_time: "09:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2066" },
              instructors: ["D'Alessio,Serge"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5834,
          section: "LEC 006",
          campus: "UW U",
          associated_class: 6,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 130,
          enrollment_total: 124,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "14:30",
                end_time: "15:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STP", room: "105" },
              instructors: ["Bauman,Shane"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 5969,
          section: "LEC 007",
          campus: "UW U",
          associated_class: 7,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 160,
          enrollment_total: 158,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "MC", room: "2065" },
              instructors: ["Trelford,Ryan"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6116,
          section: "LEC 008",
          campus: "UW U",
          associated_class: 8,
          related_component_1: null,
          related_component_2: "201",
          enrollment_capacity: 85,
          enrollment_total: 48,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "12:30",
                end_time: "13:20",
                weekdays: "MWF",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "AL", room: "116" },
              instructors: ["Akash,Mukto"]
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6504,
          section: "TUT 101",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 380,
          enrollment_total: 354,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "16:30",
                end_time: "17:20",
                weekdays: "M",
                start_date: null,
                end_date: null,
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: "STC", room: "1012" },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        },
        {
          subject: "MATH",
          catalog_number: "136",
          units: 0.5,
          title: "Linear Algebra 1 for Honours Mathematics",
          note: "Choose TUT section for Related 1.",
          class_number: 6035,
          section: "TST 201",
          campus: "UW U",
          associated_class: 99,
          related_component_1: "99",
          related_component_2: null,
          enrollment_capacity: 1260,
          enrollment_total: 1040,
          waiting_capacity: 0,
          waiting_total: 0,
          topic: null,
          reserves: [],
          classes: [
            {
              date: {
                start_time: "19:00",
                end_time: "20:50",
                weekdays: "M",
                start_date: "02/10",
                end_date: "02/10",
                is_tba: false,
                is_cancelled: false,
                is_closed: false
              },
              location: { building: null, room: null },
              instructors: []
            }
          ],
          held_with: [],
          term: 1201,
          academic_level: "undergraduate",
          last_updated: "2020-02-08T23:03:52-05:00"
        }
      ]
    ],
    filtered_courses: [
      [
        [[5914], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[5924], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6003], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6004], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6048], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6109], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6214], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6215], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6260], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]],
        [[6261], [6005, 6006, 6008, 6010, 6049, 6111, 6217], [5964]]
      ],
      [
        [[5759], [5760, 6277, 6344], [6029]],
        [[6149], [5760, 6277, 6344], [6029]],
        [[6343], [5760, 6277, 6344], [6029]]
      ],
      [
        [[6700], [6702, 6704, 6705, 6706], [8504]],
        [[6701], [6702, 6704, 6705, 6706], [8504]],
        [[7285], [6702, 6704, 6705, 6706], [8504]]
      ],
      [
        [[5837], [5972], [6036]],
        [[5838], [5972], [6036]],
        [[5839], [5972], [6036]],
        [[5840], [5972], [6036]],
        [[5841], [6400], [6232]],
        [[5879], [5972], [6036]],
        [[5971], [5972], [6036]],
        [[6117], [5972], [6036]]
      ],
      [
        [[5829], [6504], [6035]],
        [[5830], [6504], [6035]],
        [[5831], [6504], [6035]],
        [[5832], [6504], [6035]],
        [[5833], [6504], [6035]],
        [[5834], [6504], [6035]],
        [[5969], [6504], [6035]],
        [[6116], [6504], [6035]]
      ]
    ]
  })
};

export default {
  empty,
  missingBody,
  missingCoursesInfo,
  missingFilteredCourses,
  normal,
  basic,
  medium,
  big,
  huge
};
