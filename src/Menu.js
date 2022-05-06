import React from 'react';


function Menu({ items }) {

   return(
    <div className='section-center'>
    {items.map((menuItem) => {
      const { id, name, image, description, price } = menuItem;
      return (
        <article key={id} className='menu-item'>
          <img src={image} alt={name} className='photo' />
          <div className='item-info'>
            <header>
              <h4>{name}</h4>
              <h4 className='price'>${price}</h4>
            </header>
            <p className='item-text'>{description}</p>
          </div>
        </article>
      );
    })}
  </div>
   )

}

export default Menu