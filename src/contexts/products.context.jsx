

import {createContext , useState} from 'react';

import PRODUCTS from '../shop-data.json';


export const ProductsContext = createContext ({ // calling createContext which we have imported from react first line
    products: [], // inilializing with empty array 

});



export const ProductsProvider = ({children}) =>{ // now we will usi thei ProductsProvider in index.js and wrap our app inside this tag

    const [products, setProducts] = useState(PRODUCTS); // setting default value to the PRODUCTS we have in shop_data.json file


    const value = {products}; 

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}