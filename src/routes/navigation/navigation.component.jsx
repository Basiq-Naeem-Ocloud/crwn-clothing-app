import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";  // but here we will get the current user value  that we set in signin component after successful login


import { CartContext } from "../../contexts/cart.context";


import {NavigationContainer, LogoContainer, NavLinks, NavLink, } from "./navigation.styles";


import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from '../../components/cart-icon/cart-icon.component'


import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {

  const {currentUser, setCurrentUser} = useContext(UserContext); // here we are getting value and setting in signin component component


  // const signOutHandler = async() =>{ // humne ye is liay bnaya firebasse se signout karne k bad humne apne userContext bhi clear karna ha 

  //   await signOutUser(); // calling firebase utils function


  //   // now we need to clear the user context as well

  //   // setCurrentUser(null);  // v. important as we sign the user out   now gets handled in user.context.jsx





  // }


  const { isCartOpen } = useContext(CartContext); 
  return (

    <Fragment>

      <NavigationContainer>

        <LogoContainer to="/">

          <CrwnLogo className="logo" />

        </LogoContainer>

        <NavLinks>

          <NavLink to="/shop">

            SHOP

          </NavLink>

          {/*here we are going to implement the sign in and sign out functionality useing turnery operator*/}
          {
            currentUser ? 
            
              (<NavLink as='span' onClick={signOutUser}> SIGN OUT</NavLink>) // hum kh rahe is navLink ko humne as a span tag render karwana ha 
              : 
              
              (<NavLink to="/auth">

            SIGN IN

          </NavLink>
          )}

          <CartIcon/>

        </NavLinks>

        {isCartOpen && <CartDropdown/>} {/* if is cart open is true then we will show it */}

      </NavigationContainer>

      {/* we have used it to render nav bar for every page */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
