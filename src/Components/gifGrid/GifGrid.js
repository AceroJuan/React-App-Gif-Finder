import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGridItem from "../gifGridItem/GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  console.log(loading);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn ">{category}</h3>
      {loading ? (
        <p className="animate__animated animate__flash animate__delay-2s">
          loading...
        </p>
      ) : null}
      <ul className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </ul>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
