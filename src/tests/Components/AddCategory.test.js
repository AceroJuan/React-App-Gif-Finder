import React from "react";
import "@testing-library/jest-dom";
import AddCategory from "../../Components/AddCategory/AddCategory";
import { shallow } from "enzyme";

describe("Pruebas en <AddCategory />", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("debe mostrar <AddCategory /> de manera correcta", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
});
