

import './category.styles.scss'
import { useContext, useState, useEffect, Fragment } from 'react';

import { useParams } from 'react-router-dom'

import { CategoriesContext } from '../../contexts/categories.context';


import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {

   const {category }  = useParams();  // we are getting it from purl params

   const {categoriesMap} = useContext(CategoriesContext);

   const [products, setProducts] = useState(categoriesMap[category]);   

   useEffect(()=>{

    setProducts(categoriesMap[category]); // category : hats , jackts etc
 
   },[category, categoriesMap]) // when category changes and when categoriesMAp changes


   return (

    <Fragment>


        <h2 className='category-title'>{category.toUpperCase()}</h2>

        <div className='category-container'>


        {/* as our data is coming asychronously thats why we added this safeguard like if products is present the render*/}
        { products &&  
            products.map((product)=> <ProductCard key={product.id} product={product}/>)
        }
    </div>
    </Fragment>

   )

}


export default Category