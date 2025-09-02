

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'


import { useNavigate } from 'react-router-dom';  // very important we are making the button go to cart to goto checkout page  

import './cart-dropdown.styles.scss'


import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () =>{

    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler =()=>{

        navigate('/checkout');   {/*we wanted when the button gets clicked we wanted to goto checkout page to do that we are using useNAvigate*/}
    }

    return (

        <div className='cart-dropdown-container'>

            <div className='cart-items'>
                {cartItems.map((item) => (

                    <CartItem key={item.id} cartItem={item} />
                        
                    ))}
            </div>

            <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button> {/*we wanted when this button gets clicked we wanted to goto checkout page to do that we are using useNAvigate*/}

        </div>

    );
};



export default CartDropdown;