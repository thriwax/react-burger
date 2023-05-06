import React from 'react'
import styleModal from './IngredientDetails.module.css'
import IngredientParams from '../IngredientsParams/IngredientParams'

const IngredientDetails = ({item}) => {
  return (
    <div>
        <div className={styleModal.main}>
          <img src={item.image_large} alt="" />
          <p className="text text_type_main-medium">{item.name}</p>
          <ul className={styleModal.list}>
            <IngredientParams title='Калории,ккал' params={item.calories}/>
            <IngredientParams title='Белки, г' params={item.proteins}/>
            <IngredientParams title='Жиры, г' params={item.fat}/>
            <IngredientParams title='Углеводы, г' params={item.carbohydrates}/>
          </ul>
        </div>
    </div>
  )
}

export default IngredientDetails