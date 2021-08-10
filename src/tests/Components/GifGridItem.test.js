import React from "react";
import "@testing-library/jest-dom";
import GifGridItem from "../../Components/GifGridItem/GifGridItem";
import { shallow } from "enzyme";

describe("pruebas en GifGridItem", () => {
  const title = "titulo de prueba";
  const url = "https://localhost:3000/image.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe mostrar <GifGridItem /> de manera correcta", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener la imagen igual al url y alt de props", () => {
    const img = wrapper.find("img");
    // console.log(img.props());
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe("info of " + title);
  });

  test("debe tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    // console.log(div.prop("className"));
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
