

import './cart-item.styles.scss'


// this component is for to show each cart item also with price and quantity in cart 
// we will use it in cart dropdown component

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem

    return(
        <div className='cart-item-container'>

            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>

            <span className='name'> {name} </span>

            <span className='price'> {quantity} x ${price} </span>

            </div>
        </div>
    )

}


export default CartItem; 