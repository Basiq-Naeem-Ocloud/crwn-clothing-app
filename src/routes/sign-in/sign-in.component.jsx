


import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth // function to create auth user into firestore
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();

        // on successful signin we will store user in firestore

        const userDocRef = await createUserDocumentFromAuth(response.user); 
        console.log('response from google login ', response);
    }

    
    return (
        <div>

            <h1>
                Sign In Page
            </h1>

            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
        </div>
    )
}

export default SignIn; 