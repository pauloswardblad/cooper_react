import React from "react";

const BmiForm = props => {

  const wtplaceholder = props.unit == "imperial" ?  "Weight in lbs" : "Weight in kgs"
  const htplaceholder = props.unit == "imperial" ? "Height in inches" : "Height in cm" 

  return (
    <form onSubmit={props.onSubmitHandler}>
      <select
        name="unit"
        id="unit"
        type="text"
        default="metric"
        onChange={props.onChangeHandler}
      >
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={wtplaceholder}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder={htplaceholder}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default BmiForm;