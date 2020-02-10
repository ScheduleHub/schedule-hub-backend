const empty = {};

const missingBody = {
  params: {}
};

const missingFeatures  = {
  params: {},
  body: JSON.stringify({
    rating: 100
  })
};

const incorrectFeatures_1  = {
  params: {},
  body: JSON.stringify({
    features: "abc",
    rating: 100
  })
};

const incorrectFeatures_2  = {
  params: {},
  body: JSON.stringify({
    features: {},
    rating: 100
  })
};

const incorrectFeatures_3  = {
  params: {},
  body: JSON.stringify({
    features: [],
    rating: 100
  })
};

const missingRating = {
  params: {},
  body: JSON.stringify({
    features: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  })
}

const incorrectRating_1 = {
  params: {},
  body: JSON.stringify({
    rating: "abc",
    features: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  })
}

const incorrectRating_2 = {
  params: {},
  body: JSON.stringify({
    rating: [],
    features: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  })
}

const incorrectRating_3 = {
  params: {},
  body: JSON.stringify({
    rating: -1,
    features: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  })
}

const incorrectRating_4 = {
  params: {},
  body: JSON.stringify({
    rating: 101,
    features: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  })
}

const normal = {
  params: {},
  body: JSON.stringify({
    rating: 100,
    features: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
  })
}

export default {
  empty,
  missingBody, 
  missingFeatures,
  incorrectFeatures_1,
  incorrectFeatures_2,
  incorrectFeatures_3,
  missingRating,
  incorrectRating_1,
  incorrectRating_2,
  incorrectRating_3,
  incorrectRating_4,
  normal
}
