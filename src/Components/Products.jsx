import React from 'react'

function Products(props) {
 
   
    
  return (
    <>
    <div className='product-card'>
     

        <img src={props.img} alt="product-img" className='product-img'/>
        <h4 className='product-name'>{props.productName}</h4>
        <div className='details-product'>
            <img src={require('../images/stars.png')} alt="start-img" className='star'/>
            <p><span className='striked-no'>{props.oldPrice}/-</span><span className='price'><strong>{props.newPrice}/-</strong></span></p>
        </div>
        <button className='add-to-cart' onClick={props.toggle} >ADD TO CART </button>
    </div>
    </>
  )
}

export default Products