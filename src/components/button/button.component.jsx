
import {BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'
/*
We have three types of button in our app

1- default
2- inverted
3- google sign in button

so we will create a button type enum like thing:
and we will giuve this type to button and style based on it dynamically
*/

export const BUTTON_TYPE_CLASSES ={
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}


const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>(

    {

        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,

        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,


    }[buttonType]

)



const Button = ({children, buttonType, ...otherProps}) =>{  // other props represents other things like type of button like: type: submit

    const CustomButton = getButton(buttonType);

    return (
        
        <CustomButton {...otherProps}>
            
             {children}
        </CustomButton>
    )


}


export default Button;