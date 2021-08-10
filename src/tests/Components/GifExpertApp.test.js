import React from "react";
import "@testing-library/jest-dom";
import GifExpertApp from "../../Components/GifExpertApp/GifExpertApp";
import { shallow } from "enzyme";

describe("pruebas en GifExpertApp", () => {
  test("debe mostrar <GifExpertApp /> de manera correcta", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
