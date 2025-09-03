



import {ShoppingIcon, CartIconConatiner, ItemCount} from "./cart-icon.styles.jsx";



import { useContext } from "react";

import { CartContext } from '../../contexts/cart.context'

// import svg logo

// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"; we moved this to cart-icon.styles file with tag name ShoppingIcon

const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext); 

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); // if true then setting is false if false then setting it true
  return (

    <CartIconConatiner onClick={toggleIsCartOpen}>

      <ShoppingIcon className='shopping-icon' />

      <ItemCount> {cartCount} </ItemCount> {/* number of items present inside cart*/}
       
    </CartIconConatiner>
  )
};

export default CartIcon;
