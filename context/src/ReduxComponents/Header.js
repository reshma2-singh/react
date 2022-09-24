import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from "react-redux"
import {selectProduct,cartItems} from "../reducer/productSlice"
import {Link} from "react-router-dom"
function Header() {
    const {cartItems}=useSelector(state=>state.product)
  console.log(cartItems,'ii')
  const getTotalQuantity=()=>{
    let total=0
    cartItems.forEach(item=>{
        total +=item.quantity
    })
    return total
  }
  return (
    <div className='header'>
       
	<div className='banner'>

    </div>
       
     <img className='header__logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1p_FMdsxmKiCULx6mMuDaze19djhv6EDVfw&usqp=CAU"/>
     <Link className='header__link' to ="/">
        <div className='header__home'>
            <h2>Home</h2>
        </div>
        </Link>
        <div className='header__search'> 
<input type="text" className="header__searchInput"/>
<SearchIcon className="header__searchIcon"/>
        </div>
        <div>
            <h2 className='header__name'>Hello User</h2>
        </div>
        <Link className='header__link' to ="/checkout">
        <div  className="header__optionBasket">
        <span className='header__count'>{ getTotalQuantity()||0}</span>
            <ShoppingCartIcon/>
           
        </div>
        </Link>
    
        </div>
  )
}

export default Header