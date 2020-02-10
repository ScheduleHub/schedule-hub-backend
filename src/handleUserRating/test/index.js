import userRatingHandler from "../index";
import testObj from "./testCases";

const { performance } = require("perf_hooks");

(async () => {
  for (const test in testObj) {
    var t0 = performance.now();
    const response = await userRatingHandler.handler(testObj[test]);
    console.log(`
--------------------------------------------------------
Test result of "${test}": (runtime: ${(performance.now() - t0).toFixed(1)} ms)
--------------------------------------------------------
${JSON.stringify(response, null, 2)}
--------------------------------------------------------
  `);
  }
})();
