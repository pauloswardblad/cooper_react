import React from "react";
import { mount } from "enzyme";
import BmiApp from "../BmiApp";

describe("BmiApp component", () => {
  const wrapper = mount(<BmiApp />);
  it("Counts using the metric method", () => {
    wrapper
    .find('select[name="unit"]')
    .simulate("change", { target: {name: 'unit', value: 'metric'}});
    wrapper
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "90" } });
    wrapper
      .find("#height")
      .simulate("change", { target: { name: "height", value: "190" } });
    wrapper.find("bmiform").simulate("submit");
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.93"
    );
  });

  it("Counts using the imperial method", () => {
    wrapper
      .find('select[name="unit"]')
      .simulate("change", { target: { name: 'unit', value: 'imperial' } });
    wrapper
      .find("#weight")
      .simulate("change", { target: { name: "weight", value: "192" } });
    wrapper
      .find("#height")
      .simulate("change", { target: { name: "height", value: "74" } });
    wrapper.find("bmiform").simulate("submit");
    expect(wrapper.find("#bmi-message").text()).toEqual(
      "You are Normal with a BMI of 24.65"
    );
  });
});