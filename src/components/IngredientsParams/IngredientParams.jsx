import React from 'react'
import styleModal from './IngredientParams.module.css'
import { TIngredientParams } from '../../utils/types'

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

IngredientParams.propTypes = TIngredientParams
export default IngredientParams