import React from "react";
import "@testing-library/jest-dom";
import GifExpertApp from "../../Components/GifExpertApp/GifExpertApp";
import { shallow } from "enzyme";

describe("pruebas en <GifExpertApp />", () => {
  test("debe mostrar <GifExpertApp /> de manera correcta", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar lista de categorias", () => {
    const categories = ["One punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
