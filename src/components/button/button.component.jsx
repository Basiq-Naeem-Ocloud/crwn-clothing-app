
import './button.styles.scss'
/*
We have three types of button in our app

1- default
2- inverted
3- google sign in button

so we will create a button type enum like thing:
and we will giuve this type to button and style based on it dynamically
*/

const BUTTON_TYPE_CLASSES ={
    google: 'google-sign-in',
    inverted: 'inverted'
}



const Button = ({children, buttonType, ...otherProps}) =>{  // other props represents other things like type of button like: type: submit

    return (
        
        <button 
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
        >
            {children}
        </button>
    )


}


export default Button;