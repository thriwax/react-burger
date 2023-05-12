import {
  string,
  number,
  arrayOf,
  shape,
  func,
  element,
  oneOf,
  oneOfType
} from "prop-types";
export const ingredients = {
  _id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  proteins: number.isRequired,
  fat: number.isRequired,
  carbohydrates: number.isRequired,
  calories: number.isRequired,
  price: number.isRequired,
  image: string.isRequired,
  image_mobile: string.isRequired,
  image_large: string.isRequired,
  __v: number,
};
export const TBurgerConstructor = {
  buns: shape(ingredients).isRequired,
  basket: arrayOf(shape(ingredients)).isRequired,
  setBasket: func.isRequired,
};
export const TBurgerIngredients = {
  setBuns: func,
  setBasket: func,
  basket: arrayOf(shape(ingredients)).isRequired,
  ingredients: arrayOf(shape(ingredients)).isRequired,
};
export const TModalOverlay = {
  children: element.isRequired,
};
export const THeaderItem = {
  text: string,
  children: element.isRequired,
};
export const TIngredientParams = {
  params: number,
  title: string,
};
export const TCategory = {
  setBasket: func,
  title: string,
  basket: oneOfType([arrayOf(shape(ingredients)), string]).isRequired,
  ingredients: arrayOf(shape(ingredients)).isRequired,
  link: string,
};
export const TIngredientCard = {
  item: shape(ingredients).isRequired,
  setBasket: func.isRequired,
  basket: oneOfType([arrayOf(shape(ingredients)), string]).isRequired,
};
export const TModal = {
  setOpen: func,
  body: oneOf(["ingredients", "order"]),
  item: shape(ingredients),
};
export const TIngredientDetails = {
  item: shape(ingredients),
};
export const TOrderDetails = {
  setOpen: func,
};
