

import {createContext, useState, useEffect} from 'react'



// helper function to update the cartItems array
const addCartItem = (cartItems, productToAdd) =>{ // first param is old array and productToadd is the new product we want to add to array

    // find if cartItems conatins productToAdd


    // if found, increament quantity


    // return the new array with modified cartItems / new cart Item

    // check if the product already exists in cart
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  // if found, increment its quantity
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 } // increase quantity 
        : item
    );
  }

  // if not found, add product with quantity = 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];


}

export const CartContext = createContext({

    isCartOpen: false,
    setIsCartOpen: ()=> {},  // pointing to a function

    cartItems: [], // to keep track which items are added in the cart by user

    addItemToCart: ()=> {},  // humne khud ik customize function bnaya joke cartItems k array me items add kare ga hum setCartItems nahi use kar rahe 

    cartCount: 0,  // property to show cart coint inside cart logo
 })


export const CartProvider = ({children}) =>{
    

    const [isCartOpen, setIsCartOpen] = useState(false);

    const[cartItems, setCartItems]  = useState([]);

    const[cartCount, setCartCount]  = useState(0);


    useEffect(()=>{ // we are using useEffect as we wanted to update cartCount everytime cartItems changes

        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0); // ask chatGpt to explain this line
 
        setCartCount(newCartCount); 

    }, [cartItems])//as we wanted to update cartCount everytime cartItems changes


    const addItemToCart = (productToAdd) =>{ // passing product in param that we wanted to add to cart 

        // first we will check the product is already in the cart then increase the quantity we will use product ID to keep treack of already existing products
        //else simply add it first time 


        setCartItems(addCartItem(cartItems, productToAdd)) // calling helper function addCartItem

        
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}; // we are not exposing the setCartItems for other components but we expose the addItemToCart to set cart items

    return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}