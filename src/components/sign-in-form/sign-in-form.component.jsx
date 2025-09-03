import { useState, useContext } from "react";

import {UserContext} from '../../contexts/user.context'

import {
        signInWithGooglePopup,
     createUserDocumentFromAuth,
     signInAuthUserWithEmailAndPassword
    } from '../../utils/firebase/firebase.utils'


import FormInput from '../../components/form-input/form-input.component'

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import './sign-in-form.styles.scss'



const defaultFormFields = {

    email: '',
    password: '',
}

const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;  // destructring the fields as initilaiiy the formFields is equal to defaulFormFields

    // console.log('formFields = ', formFields );

    const { setCurrentUser } = useContext(UserContext);


    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

     const sinInWithGoole = async () => {


        try{
             await signInWithGooglePopup();

                // aslo saying user when we get sign in using google 
        // setCurrentUser(response.user); // storeing complete user received from response 


        // on successful signin we will store user in firestore

        // await createUserDocumentFromAuth(response.user);  // we have move it to user.context.jsx

        // const userDocRef = await createUserDocumentFromAuth(response.user);
        

        // console.log('response from google login ', response);
        }
        catch(error)
        {
            if(error.code === "auth/popup-closed-by-user")
            {
                alert("Google pop up closed by user")
            }

            console.log('error in google sign in ', error);
        }
        
    }

    const handleSubmit = async(event)=>{

        event.preventDefault(); // we are saying we dont want any default behavior of form we are saying all of what gonna happen we will handle it by ourself; 

        // console.log('inisde handleSubmit')

        try {

            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('response = ', response);


            // setting the context of app with just loged in user making it current user. (storing this user's info name token etc)

            //setCurrentUser(response.user); // storeing complete user received from response 

        
            resetFormFields();
        } catch (error) {

            if(error.code === "auth/invalid-credential")
            {
                alert('Incorrect credentials')
            }

            console.log('error in signing in user = ', error);
            
        }

    }

    const handleChange = (event)=>{

        const {name, value} = event.target;  // name basically is the field name we gave to each field below

        setFormFields({...formFields, [name]: value});  // we are spreading the rest of the value so that they donot change only the newly added value should change of thta specific field



    }

     return (

        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>   {/*luckily react have privided use this function callback */}

                <FormInput  
                    label = "Email"
                    type="email" 
                    required 
                    onChange={handleChange}
                    name="email"

                    value={email}
                    
                    />

                <FormInput   
                    label="Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password"
                    value={password}
                    />

                <div className="buttons-container">

                <Button type="submit">Sign In</Button> { /* when this button gets clicked as its type is submit the above callback gets run veey important */ }


                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={sinInWithGoole}>Google sign in</Button>
                </div>

            </form>
        </div>

    )


}


export default SignInForm;