import React, { Component } from "react";

import BmiForm from "./components/BmiForm";
import BmiMessage from "./components/BmiMessage";
import { calculateBmi } from "./helpers/bmiHelper";


class BmiApp extends Component {
  state = {
    unit: "",
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height,
      this.state.unit
    );
    
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };


  render() {
    return (
      <div>
        
        <h1>BMI Calculator</h1>
        <p>Choose the unit of measure for your weight and height, then enter the data to calculate your BMI.</p>
      <div>
        <BmiForm
          unit={this.state.unit}
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
        />
        {this.state.bmiValue && (
          <BmiMessage
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
          />
        )}
        </div>
      </div>
    );
  }
}

export default BmiApp;