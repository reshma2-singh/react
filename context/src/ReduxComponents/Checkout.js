import React from 'react'
import {useSelector} from "react-redux"

import CheckoutProduct from './CheckoutProduct'



function Checkout() {
  const { cartItems}=useSelector(state=>state.product);
const getTotal=()=>{
  let totalQuantity=0
  let totalPrice=0
  cartItems.forEach(item=>{
    totalQuantity +=item.quantity
    totalPrice +=item.price*item.quantity
  })
  return{totalPrice,totalQuantity}
}
function handleOrder(){
  if(cartItems.length>=2){
   alert("order is successful 😍 ")
  }else{
    alert("please add two different items 🙁")
  }
}
  return (
    <div className='parent'>
        <div className='checkout'>
        <img
          className="checkout__ad"
          src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg"
          alt="img"
        />
       {
      cartItems.length==0?(<h1 className='bkt'>Cart is Empty</h1>):(
            <h3>{cartItems.map((item,index)=>(<CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            index={item.ind}
            key={index}
            />))}</h3>
        )
       }
       </div>
       <div className='subtotal'>
        <h3 className='sub'>Subtotal</h3>
<h2>
  total({getTotal().totalQuantity}items):<strong className='total'>
  ₹{getTotal().totalPrice}
  </strong>
</h2>
<button className='btn2' onClick={handleOrder}>order</button>
       </div>
      
    </div>
  )
}

export default Checkout