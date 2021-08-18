import React from "react";
import "@testing-library/jest-dom";
import GifGrid from "../../Components/GifGrid/GifGrid";
import { shallow } from "enzyme";
import useGifs from "../../utils/hooks/useGifs";
jest.mock("../../utils/hooks/useGifs.js");

describe("Pruebas en <GifGrid />", () => {
  const category = "hola mundo";

  test("debe mostrar <GifGrid /> de manera correcta", () => {
    useGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan imagenes usando useGifs", () => {
    const images = [
      {
        id: "ABC",
        url: "https://localhost:3000/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "https://localhost:3000/cualquier/cosa.jpg",
        title: "Cualquier cosa",
      },
    ];
    useGifs.mockReturnValue({
      data: images,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(images.length);
  });
});
