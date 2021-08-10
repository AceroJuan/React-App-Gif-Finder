import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn animate__delay-1s">
      <img src={url} alt={`info of ${title}`} />
      <p className="card__P">{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
