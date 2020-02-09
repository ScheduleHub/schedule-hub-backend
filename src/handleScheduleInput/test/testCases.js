const empty = {};

const missingBody = {
  params: {}
};

const missingId = {
  params: {},
  body: JSON.stringify({
    sections: [1234, 5678, 9012, 3456, 7890]
  })
};

const missingSections = {
  params: {},
  body: JSON.stringify({ id: "xxxxx" })
};

const normal = {
  params: {},
  body: JSON.stringify({
    id: "xxxxxx",
    sections: [1234, 5678, 9012, 3456, 7890, 1234]
  })
};

export default { empty, missingBody, missingId, missingSections, normal };
