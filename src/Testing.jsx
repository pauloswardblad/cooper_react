import React, { Component } from "react";

import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from './modules/auth';
import DisplayPerformanceData from "./components/DisplayPerformanceData";

import BmiForm from "./components/BmiForm";
import BmiMessage from "./components/BmiMessage";
import { calculateBmi } from "./helpers/bmiHelper";
import DisplayBmiData from "./components/DisplayBmiData";

let performanceDataIndex;
let bmiDataIndex;

class Testing extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false,
    unit: "",
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

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
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button id="hide-index" onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
            </>
          )
        } else {
          performanceDataIndex = (
            <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
          )
        }
        if (this.state.renderIndex) {
          bmiDataIndex = (
            <>
              <DisplayBmiData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <button id="hide-index" onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
            </>
          )
        } else {
          bmiDataIndex = (
            <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
          )
        }
        break;
      }

    return (
      <>
        <h1>Health Tracker and Calculators</h1>
        {renderLogin}
        <h2>Calculate Cooper Test </h2>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
          authenticated={this.state.authenticated}
          entrySaved={this.state.entrySaved}
          entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
        />
        {performanceDataIndex}
        <div>
          <h3>BMI Calculator</h3>
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
            entrySaved={this.state.entrySaved}
            entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
          />
        )}
        {bmiDataIndex}
        </div>
      </>
    );
  }
}



export default Testing;