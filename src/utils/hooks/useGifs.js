import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((images) => {
      setState({
        data: images,
        loading: false,
      });
    });
  }, [category]);

  return state; // { data:[], loading:true }
};

export default useGifs;
