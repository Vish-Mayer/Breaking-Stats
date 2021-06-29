import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { Navbar } from "./components/Navbar/Navbar";

configure({ adapter: new Adapter() });

const setup = () => {
  let wrapper = shallow(<App />);

  return { wrapper };
};

describe("<Info />", () => {
  const { wrapper } = setup();

  it("renders the name of the application", () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });
});
