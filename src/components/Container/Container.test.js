import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Container } from "./Container";

configure({ adapter: new Adapter() });

const simulateChangeonInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue }
  });
  return wrapper.find(inputSelector);
};

describe("<Container />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Container />);
  });

  it("renders an empty text field with a user prompt", () => {
    expect(wrapper.find(".text-input").at(0).props().placeholder).toStrictEqual(
      "Enter a character"
    );
  });

  it('renders a button with text "Submit"', () => {
    expect(wrapper.find(".submit").props().type).toBe("submit");
    expect(wrapper.find(".submit").props().value).toBe("Submit");
  });

  it("saves the input state", () => {
    const updateInput = simulateChangeonInput(
      wrapper,
      ".text-input",
      "saul goodman"
    );
    expect(updateInput.props().value).toEqual("saul goodman");
  });
});
