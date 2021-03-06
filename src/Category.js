import React from 'react';


const Category = ( { categories, filterCategory }) => {
    return  <div className="btn-container">
    {categories.map((category, index) => {
      return (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterCategory(category)}
        >
          {category}
        </button>
      );
    })}
  </div>
}

export default Category