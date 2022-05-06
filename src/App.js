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
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category categories={categories} filterCategory={filterCategory} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
