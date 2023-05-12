<<<<<<< Updated upstream
import React from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleModal from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styleModal.wrapper}>
      <div className={styleModal.modal_container}>
        <div className={styleModal.title}>
          <p className="text text_type_main-large">Детали ингридиента</p>
          <button onClick={() => props.setOpen(false)} className={styleModal.button}><CloseIcon type="primary" /></button>
        </div>
        <div className={styleModal.main}>
          <img src={props.item.image_large} alt="" />
          <p className="text text_type_main-medium">{props.item.name}</p>
          <ul className={styleModal.list}>
            <li className={styleModal.list_item}>
              <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
              <p
                className="text text_type_main-default text_color_inactive"
                style={{ fontSize: "28px" }}
              >
                {props.item.calories}
              </p>
            </li>
            <li className={styleModal.list_item}>
              <p className="text text_type_main-default text_color_inactive">Белки, г</p>
              <p
                className="text text_type_main-default text_color_inactive"
                style={{ fontSize: "28px" }}
              >
                {props.item.proteins}
              </p>
            </li>
            <li className={styleModal.list_item}>
              <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
              <p
                className="text text_type_main-default text_color_inactive"
                style={{ fontSize: "28px" }}
              >
                {props.item.fat}
              </p>
            </li>
            <li className={styleModal.list_item}>
              <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
              <p
                className="text text_type_main-default text_color_inactive"
                style={{ fontSize: "28px" }}
              >
                {props.item.carbohydrates}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
=======
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleModal from "./Modal.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Order from "../Order/OrderDetails";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { TModal } from "../../utils/types";

const Modal = ({ body, setOpen, item }) => {
  document.addEventListener("keydown", ({ code }) => {
    code === "Escape" && setOpen(false);
  });
  return (
    <ModalOverlay setOpen={setOpen}>
      <>
        <div className={styleModal.title}>
          {body === "ingredients" && (
            <p className="text text_type_main-large">Детали ингридиента</p>
          )}
          <button onClick={() => setOpen(false)} className={styleModal.button}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {body === "ingredients" ? (
          <IngredientDetails item={item} />
        ) : (
          <Order setOpen={setOpen} />
        )}
      </>
    </ModalOverlay>
  );
};
Modal.propTypes = TModal;
export default Modal;
>>>>>>> Stashed changes
