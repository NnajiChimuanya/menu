import React, { useState } from 'react';
import Items from "./Items"
import Menu from './Menu';
import Category from './Category';



var menuCategories = ["all", ...new Set(Items.map(item => item.category))]


function App() {
  const [menuItems, setItems] = useState(Items)
  const [categories, setCategories] = useState(menuCategories)



  const filterCategory = (category) => {

    if(category === "all") {
      return setItems(Items)
    }
    let newItems = Items.filter((item) => item.category === category)
    setItems(newItems)
  }
 
  return (
    <div className="container">
     <div className='header'>
      <h2>Hola</h2>
      <Category categories={categories} filterCategory={filterCategory} />
     </div>

     
      <div className='menu'>
        
        <Menu items={menuItems} />
      </div>
    </div>
  );
}

export default App;
