import React from "react";
import { calculateBmi } from "./helpers/bmiHelper";
import { saveData } from "../modules/performanceData";

const DisplayBMIResult = ({
  unit,
  weight,
  height,
  bmiValue,
  bmiMessage,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = calculateBmi(unit, weight, height, bmiValue, bmiMessage);

  const propsPassed = unit && weight && height? true : false;

  return (
    <>
      {propsPassed && (
        <>
          <p id="bmi-message">
          You are {bmiMessage} with a BMI of {bmiValue}
          </p>
          <p id="bmi-result">Result: {result}</p>
          {authenticated && !entrySaved ? (
            <button
              id="save-result"
              onClick={() => saveData(result, entryHandler)}
            >
              Save entry
            </button>
          ) : (
            <p id="response-message">Your entry was saved</p>
          )}
        </>
      )}
    </>
  );
};

export default DisplayBMIResult;