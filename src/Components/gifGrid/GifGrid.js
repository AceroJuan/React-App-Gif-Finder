import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GifGridItem from "../gifGridItem/GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=rick%26morty&limit=10&api_key=1q8bsMLFhZWuVmX3BpYp4CJw8RJqIyKR";
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
    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div>
        <ul className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ul>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
