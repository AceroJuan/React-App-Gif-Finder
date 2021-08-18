import useGifs from "../../utils/hooks/useGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("pruebas en useGifs hook", () => {
  test("debe retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGifs("Batman"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("debe retornar arreglo de imagenes y loading false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGifs("Batman"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(15);
    expect(loading).toBe(false);
  });
});
