import React from 'react'
import burgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css';
import IngredientCard from '../IngredientCard/IngredientCard';
import { TCategory } from '../../utils/types';

function Category({setBasket, ingredients, title, basket, link}) {
  
  return (

        <div id={link}>
            <p className="text text_type_main-medium mt-10 mb-6">{title}</p>
            <div className={burgerIngredients.ingredients_container}>
                {ingredients.map((item) => <IngredientCard key={item._id} item={item} setBasket={setBasket} basket={basket}/>)}
            </div>
        </div>

  )
}

Category.propTypes = TCategory

export default Category