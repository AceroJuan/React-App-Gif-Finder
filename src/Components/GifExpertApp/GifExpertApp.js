import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";
import "animate.css";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1 className="animate__animated animate__fadeIn">Gif Expert App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
