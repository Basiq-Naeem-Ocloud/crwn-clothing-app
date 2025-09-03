

import {createContext , useState, useEffect} from 'react';

import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils.js'

// import SHOP_DATA from '../shop-data.js';


export const CategoriesContext = createContext ({ // calling createContext which we have imported from react first line
    categoriesMap: {}, // inilializing with empty object 

});



export const CategoriesProvider = ({children}) =>{ // now we will usi thei ProductsProvider in index.js and wrap our app inside this tag

    const [categoriesMap, setCategoriesMap] = useState({}); // setting default value to the PRODUCTS we have in shop_data.json file

    useEffect(()=>{

        // we ahve created a new function inside useEffect to call a async function as getCategoriesAndDocument is an async function
        const getCategoriesMap = async ()=>{

            const catgoryMap = await getCategoriesAndDocuments();
            // console.log('category map from use Effect = ', catgoryMap);

            setCategoriesMap(catgoryMap);

        }

         getCategoriesMap();

    }, [])
    
    const value = {categoriesMap}; 

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}