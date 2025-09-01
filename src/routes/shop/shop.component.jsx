
import { useContext, userContext } from 'react';


import { ProductsContext } from '../../contexts/products.context';


import ProductCard from '../../components/product-card/product-card.component'


import './shop.styles.scss'

const Shop = ()=>{
    const {products} = useContext(ProductsContext);   // hum ProductConstext ma se products nikal rahe destruturing kar rahe 

  return (
    <div className='products-container'>

        {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>


  )
} 


export default Shop;