import React from 'react'
import burgerIngredients from '../BurgerIngredients/BurgerIngredients.module.css';
import IngredientCard from '../IngredientCard/IngredientCard';
import propTypes from 'prop-types';

function Category({setIngredients, ingredients, title, array, link}) {
  
  return (

        <div id={link}>
            <p className="text text_type_main-medium mt-10 mb-6">{title}</p>
            <div className={burgerIngredients.ingredients_container}>
                {array.map((item) => {return <IngredientCard key={item._id} item={item} setIngredients={setIngredients} ingredients={ingredients}/>})}
            </div>
        </div>

  )
}

Category.propTypes = {
  setIngredients: propTypes.func,
  setBuns: propTypes.func,
  title: propTypes.string,
  array: propTypes.array,
  link: propTypes.string
}

export default Category