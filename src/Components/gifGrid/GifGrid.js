import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getGifs();
  }, []);
  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=1q8bsMLFhZWuVmX3BpYp4CJw8RJqIyKR";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>mas</button>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
