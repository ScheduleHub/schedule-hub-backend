import scheduleRequestHandler from "../index";
import testObj from "./testCases";

const { PerformanceObserver, performance } = require("perf_hooks");

(async () => {
  for (const test in testObj) {
    var t0 = performance.now();
    const response = await scheduleRequestHandler.handler(testObj[test]);
    console.log(`
-------------------------------------------
Test result of "${test}": (runtime: ${performance.now() - t0} ms)
-------------------------------------------
${JSON.stringify(response)}
-------------------------------------------
  `);
  }
})();
