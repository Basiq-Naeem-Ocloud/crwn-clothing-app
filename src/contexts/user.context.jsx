
import {createContext, useState, useEffect} from 'react'

import {onAuthStateChangedListener, createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null, // simply a function 

});

export const UserProvider = ({children}) => { // we will wrap our app component insid ethis provider component index.js
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};


    useEffect (()=>{ // humne basically user ki state set karne k liay ik centerliazed jaga bna di 

       const unsubscribe =  onAuthStateChangedListener((user)=>{

        console.log('user inside onAuthStateChangedListener', user);

        if(user){ // we we get user object not null then store it in db

            console.log('storing user to db');
             createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);  // if user signed in we store user object if user signed out we store the null
        
        // add signed in user to db: 

        
       }); 

       return unsubscribe;

    }, []);  // passing empty array as we are saying we only wanted to run this only once when component mounts 

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}