import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";  // but here we will get the current user value  that we set in signin component after successful login


import { CartContext } from "../../contexts/cart.context";


import "./navigation.styles.scss";


import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from '../../components/cart-icon/cart-icon.component'


import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {

  const {currentUser, setCurrentUser} = useContext(UserContext); // here we are getting value and setting in signin component component

  console.log(' current user from navigation component =', currentUser);


  // const signOutHandler = async() =>{ // humne ye is liay bnaya firebasse se signout karne k bad humne apne userContext bhi clear karna ha 

  //   await signOutUser(); // calling firebase utils function


  //   // now we need to clear the user context as well

  //   // setCurrentUser(null);  // v. important as we sign the user out   now gets handled in user.context.jsx





  // }


  const { isCartOpen } = useContext(CartContext); 
  return (

    <Fragment>

      <div className="navigation">

        <Link className="logo-container" to="/">

          <CrwnLogo className="logo" />

        </Link>

        <div className="nav-links-container">

          <Link className="nav-link" to="/shop">

            SHOP

          </Link>

          {/*here we are going to implement the sign in and sign out functionality useing turnery operator*/}
          {
            currentUser ? 
            
              (<span className="nav-link" onClick={signOutUser}> SIGN OUT</span>)
              : 
              
              (<Link className="nav-link" to="/auth">

            SIGN IN

          </Link>
          )}

          <CartIcon/>

        </div>

        {isCartOpen && <CartDropdown/>} {/* if is cart open is true then we will show it */}

      </div>

      {/* we have used it to render nav bar for every page */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
