import scheduleInputHandler from "../index";
import testObj from "./testCases";

(async () => {
  for (const test in testObj) {
    const response = await scheduleInputHandler.handler(testObj[test]);
    console.log(`
-------------------------------------------
Test result of "${test}":
-------------------------------------------
${JSON.stringify(response, null, 2)}
-------------------------------------------
`);
  }
})();
