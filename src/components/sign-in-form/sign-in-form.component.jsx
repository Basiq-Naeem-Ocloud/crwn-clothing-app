import { useState } from "react";



import {
        signInWithGooglePopup,
     createUserDocumentFromAuth,
     signInAuthUserWithEmailAndPassword
    } from '../../utils/firebase/firebase.utils'


import FormInput from '../../components/form-input/form-input.component'

import Button from "../button/button.component";

import './sign-in-form.styles.scss'



const defaultFormFields = {

    email: '',
    password: '',
}

const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;  // destructring the fields as initilaiiy the formFields is equal to defaulFormFields

    console.log('formFields = ', formFields );


    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

     const sinInWithGoole = async () => {


        try{
                const response = await signInWithGooglePopup();

        // on successful signin we will store user in firestore

        await createUserDocumentFromAuth(response.user);
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

        console.log('inisde handleSubmit')

        try {

            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log('respinse = ', response);

        
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


                <Button type="button" buttonType="google" onClick={sinInWithGoole}>Google sign in</Button>
                </div>

            </form>
        </div>

    )


}


export default SignInForm;