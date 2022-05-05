import React from 'react';


const Category = ( { categories, filterCategory }) => {
    return <div>
        {categories.map((category, index) => {
            return <button key={index} onClick={()=>filterCategory(category)}> {category} </button>
        })}
    </div>
}

export default Category