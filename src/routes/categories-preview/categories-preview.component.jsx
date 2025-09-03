





import { useContext, Fragment } from 'react';


import { CategoriesContext } from '../../contexts/categories.context';


import CategoryPreview from '../../components/category-preview/category-preview.component'


const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext); // hum ProductConstext ma se products nikal rahe destruturing kar rahe 

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {

        const products = categoriesMap[title];

        return <CategoryPreview key={title} title={title} products={products} />

        
      })}
    </Fragment>
  );
};



export default CategoriesPreview;