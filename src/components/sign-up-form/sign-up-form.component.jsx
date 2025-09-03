import { useState, useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'


import FormInput from '../../components/form-input/form-input.component'

import Button from "../button/button.component";

import './sign-up-form.styles.scss'



const defaultFormFields = {

    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;  // destructring the fields as initilaiiy the formFields is equal to defaulFormFields

    // const {setCurrentUser} = useContext(UserContext);  // very important we ahve initialize it inside the compoent 

    // console.log('formFields = ', formFields );


    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event)=>{

        event.preventDefault(); // we are saying we dont want any default behavior of form we are saying all of what gonna happen we will handle it by ourself; 

        // console.log('inisde handleSubmit')

        if(password !== confirmPassword)
        {
            alert('password do not match');
            return; // imp if password did not match we will not perform anything
        }

        try {

            const response = await createAuthUserWithEmailAndPassword(email, password);
            console.log('response from email passwrod user = ', response);



            // setCurrentUser(response.user); // setting the user on successful response

            const createdUser = await createUserDocumentFromAuth(response.user, {displayName});  // we are passing deisplayName in additional information of this fucntion as email password function did not retrun this and we are using the form's display name 
            
            console.log('emailPassword created user = ',  createdUser);

            resetFormFields();
        } catch (error) {

            if(error.code === 'auth/email-already-in-use')
            {
                alert('email already in use by some other user')
            }
            else{
            console.log(' error while creaating email password user = ', error); 


            }

            
        }

    }

    const handleChange = (event)=>{

        const {name, value} = event.target;  // name basically is the field name we gave to each field below

        setFormFields({...formFields, [name]: value});  // we are spreading the rest of the value so that they donot change only the newly added value should change of thta specific field



    }

     return (

        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>   {/*luckily react have privided use this function callback */}


                <FormInput  
                    label = "Display Name"
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName"
                    value={displayName} 
                    />
                    {/* display name that we defined above this is circular*/}


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


                <FormInput 
                    label = "Confirm Password"
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword"
                    value={confirmPassword}
                    />


                <Button type="submit">Sign Up</Button> { /* when this button gets clicked as its type is submit the above callback gets run veey important */ }



            </form>
        </div>

    )


}


export default SignUpForm;