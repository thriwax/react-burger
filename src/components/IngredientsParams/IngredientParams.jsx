import React from 'react'
import styleModal from './IngredientParams.module.css'

const IngredientParams = ({params, title}) => 
    <li className={styleModal.list_item}>
              <p className="text text_type_main-default text_color_inactive">{title}</p>
              <p
                className="text text_type_main-default text_color_inactive"
                style={{ fontSize: "28px" }}
              >
                {params}
              </p>
    </li>


export default IngredientParams