import React from "react";
import useGifs from "../../utils/hooks/useGifs";
import GifGridItem from "../GifGridItem/GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useGifs(category);

  return (
    <>
      {loading && (
        <p className="animate__animated animate__flash">Cargando ... </p>
      )}
      {category ? (
        <h2 className="card-grid__h1">Resultados para {category}</h2>
      ) : null}
      <div className="card-grid">
        {images?.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
