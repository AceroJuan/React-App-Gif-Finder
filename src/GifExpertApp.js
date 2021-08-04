import React, { useState } from "react";
// import PropTypes from "prop-types";
import AddCategory from "./Components/addCategory/AddCategory";
import GifGrid from "./Components/gifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Samurai X"]);
  //   const handleAdd = () => {
  //     // let newCategory = "sailor moon";
  //     // setCategories(categories.concat(newCategory));
  //     setCategories(["slam dunk", ...categories]);
  //   };
  return (
    <>
      <main>
        <h1>GifExpertApp</h1>
        <AddCategory setCategories={setCategories} />
        <hr />
        <ul>
          {categories.map((category, id) => (
            <GifGrid key={category} category={category} />
          ))}
        </ul>
      </main>
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
