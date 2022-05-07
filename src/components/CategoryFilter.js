import React from "react";

function CategoryFilter({ categories, categoryState, handleCategoryState }) {

  const handleCategory = (category) => {
    handleCategoryState(category);
  }

  const categoryButtons = categories.map(category => (
    //why does the on click below need to be an anonymous function??
    //because we want to pass in "category" but by default an event listener will pass in an event. 
    <button 
        key={category} 
        onClick={() => handleCategory(category)}
        className={category === categoryState ? "selected" : null }
        >
          {category}
        </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
