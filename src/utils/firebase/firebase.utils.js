// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { 
    getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider
    } from 'firebase/auth';



import {
    getFirestore,
    doc,  //to get instance of doc
    getDoc, //. to get "data" of a document
    setDoc,    // to set "data" of a document 

} from 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6taYW1N2sVnNkvq1ys43u_Ueb40qqI_I",
  authDomain: "crwn-clothing-db-1ec04.firebaseapp.com",
  projectId: "crwn-clothing-db-1ec04",
  storageBucket: "crwn-clothing-db-1ec04.firebasestorage.app",
  messagingSenderId: "827662834183",
  appId: "1:827662834183:web:b289892a97f78655f628a2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();  // here we are using provider for google signin

provider.setCustomParameters({
    prompt: "select_account"
});

//creating auth instance and exporting it
export const auth = getAuth();



// you can have multiple different providers
export const signInWithGooglePopup = () => signInWithPopup( auth, provider ) // vimp thing to notice we ahve passed the auth and provider here 


// create db instance to access db throughout the app and export it
export const db = getFirestore();


// making a function here to store the auth user into our firestore


export const createUserDocumentFromAuth = async (userAuth) => { // we will pass the auth user from signin component here 

    // doc takes three parameters 
    // 1- db connection or db reference
    //2- collection name we want to work with
    // 3- id of record we wanted to access / create / update

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log('user document =', userDocRef);

    const userSnapshot = await getDoc(userDocRef);  // we are using getDoc to get the document 

    console.log('user snapshot = ', userSnapshot);

    console.log('user snapshot = ', userSnapshot.exists());



    if(!userSnapshot.exists()){ // if user does not exists in table then create it

        // destructure from param object

        const { displayName, email, photoURL } = userAuth; // param object
        const createdAt = new Date();


        // use try-catch block

        try{
             await setDoc(userDocRef, { // we are using userDocRef. userDoc Ref holds th uid of user and we are storing data againt the uid we receives
            displayName,
            email,
            photoURL,
            createdAt

        })


        }catch(error)
        {
            console.log('error creating user = ', error);

        }

       
    }
    
    return userDocRef; 



}