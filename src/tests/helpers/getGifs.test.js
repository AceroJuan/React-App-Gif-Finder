import getGifs from "../../utils/helpers/getGifs";
import "@testing-library/jest-dom";

describe("pruebas en getGifs.js", () => {
  test("debe traer 15 elementos", async () => {
    const gifs = await getGifs("goku");
    expect(gifs.length).toBe(15);
  });

  test("debe verificar un string vacio", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
