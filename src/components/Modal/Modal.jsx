import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleModal from "./Modal.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Order from "../Order/OrderDetails";

const Modal = ({body, setOpen, item}) => {
  return (
  <div className={styleModal.modal_container}>
    <div className={styleModal.title}>
          {body === 'ingredients' && <p className="text text_type_main-large">Детали ингридиента</p>}
          <button onClick={() => setOpen(false)} className={styleModal.button}><CloseIcon type="primary" /></button>
    </div>
    {body === 'ingredients' ? <IngredientDetails item={item}/> : <Order/>}
  </div>
)
}

export default Modal;
