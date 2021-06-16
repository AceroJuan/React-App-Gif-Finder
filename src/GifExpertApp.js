import React, { useState } from "react";
// import PropTypes from "prop-types";
import AddCategory from "./Components/addCategory/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "one punch",
    "samurai x",
    "dragon ball",
  ]);

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
          {categories.map((category, id) => {
            return <li key={id}>{category}</li>;
          })}
        </ul>
      </main>
    </>
  );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
