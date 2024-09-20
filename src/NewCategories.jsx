import React from "react";

function NewCategories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <>
            <button
              type="btn"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
}

export default NewCategories;
