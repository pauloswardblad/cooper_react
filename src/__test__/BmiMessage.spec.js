import React from "react";
import { shallow } from "enzyme";

import BmiMessage from "../components/BmiMessage";

describe("BmiMessage component", () => {
  const wrapper = shallow(<BmiMessage bmiMessage="Normal" bmiValue="23.59" />);

  it("renders with bmimessage prop", () => {
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 23.59"
    );
  });
});