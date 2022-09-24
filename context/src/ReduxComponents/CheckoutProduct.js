import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { selectProduct } from '../reducer/productSlice';

import{productRemove,productIncrease,productDecrease} from '../reducer/productSlice'

function CheckoutProduct({ id, title, price, image,quantity },index) {
 
  const dispatch = useDispatch()
  function handleRemove({id}){
    dispatch(productRemove({id}))
  }
  
  function handleIncrease({id}) {
dispatch(productIncrease({id}))
    
  }
  function handleDecrease({id}) {

dispatch(productDecrease({id}))    
  }
  const quant=useSelector(state=>state.product);
  
  return (
   <div>
   
      <div className='checkoutProduct'>

        <img className="checkout__image" src={image} alt="" />

        <div>
          <p className='checkout__price'>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
        <h2 className='checkout__title'>{title}</h2>
         <div className='checkout__increment'>
<button className='btn1' onClick={()=>handleIncrease({id})} >+</button>
<p className='qnt'>{quantity}</p>
<button className='btn1' onClick={()=>handleDecrease({id})}>-</button>
        </div> 
  <button className='btnn' onClick={() => handleRemove({id})}>Delete</button>
      </div>
    
    </div>
    </div>
  )
}

export default CheckoutProduct