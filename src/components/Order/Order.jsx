import React from 'react';
import stylesOrder from './Order.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import AcceptIcon from '../UI/AcceptIcon/AcceptIcon'

const Order = (props) => {
  return (
    <div className={stylesOrder.wrapper}>
        <div className={stylesOrder.main}>
            <CloseIcon type="primary" onClick={() => props.setOpen(false)}/>
            <p className="text text_type_digits-large" style={{textShadow: '0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)', paddingTop: '40px'}}>034536</p>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <AcceptIcon />
            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
    </div>
  )
}

export default Order