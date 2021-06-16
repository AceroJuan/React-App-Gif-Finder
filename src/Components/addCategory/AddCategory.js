import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValid, setInputValid] = useState("");

  const handleInputValid = (e) => {
    setInputValid(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValid.trim().length > 2) {
      setCategories((category) => [...category, inputValid]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValid} onChange={handleInputValid} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
