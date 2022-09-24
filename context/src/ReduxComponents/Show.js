import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { productUpdate ,cartItems} from '../reducer/productSlice';

function Show(props) {
  const{id,title,price,image,quantity}=props
  const dispatch=useDispatch()
  function handleClick(){
dispatch(productUpdate({id:id,title:title,price:price,image:image,quantity:quantity}))
  }

  return (
    <div className='product'>
      <div className='product__title'>
       <h2>{title}</h2>
       </div> 
       <div className='product__price'>
       <p>
<small>₹</small>
<strong>{price}</strong>
       </p></div>
   
       <img src={image} alt=""/>
      
       <button className='product__btn' onClick={handleClick}  >
        Add
      </button>
      
    </div>
  )
}

export default Show