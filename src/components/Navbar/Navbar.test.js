import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar } from "./Navbar";

configure({ adapter: new Adapter() });

const setup = () => {
  let wrapper = shallow(<Navbar />);

  return { wrapper };
};

describe("<Info />", () => {
  const { wrapper } = setup();

  it("renders the name of the application", () => {
    expect(wrapper.find(".Navbar").text()).toEqual("BreakingStats");
  });
});
