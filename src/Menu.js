import React from 'react';


function Menu({ items }) {

   return(
       <div className='menuItem'>
           {
               items.map(item => {
                   const { name, price, image, description} = item
                   return <div className='row'>
                       <div className='imageDiv col-sm-4'>
                            <img src={image} alt={name} />
                       </div>
                       <div className='descriptionDiv col-sm-8'>
                            <p>{price}</p>
                            <p>{description}</p>
                       </div>
                    </div>
               })
           }
       </div>
   )

}

export default Menu