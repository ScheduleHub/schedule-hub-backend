import scheduleInputHandler from "../index";
import empty from "./cases/empty";
import missingId from "./cases/missingId";
import missingSections from "./cases/missingSections";
import normal from "./cases/normal";

const handleScheduleInputTests = { empty, missingId, missingSections, normal };

(async () => {
  for (const test in handleScheduleInputTests) {
    const response = await scheduleInputHandler.handler(
      handleScheduleInputTests[test]
    );
    console.log(`
-------------------------------------------
Test result of "${test}":
-------------------------------------------
${JSON.stringify(response, null, 2)}
-------------------------------------------
`);
  }
})();
