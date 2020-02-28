import React from "react";

const BmiMessage = props => {
  return (
    <p id='bmi-message'>
      You are {props.bmiMessage} with a BMI of {props.bmiValue}
    </p>
  );
};

export default BmiMessage;