import React from "react";
import burgerIngredients from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Category from "../Category/Category";
import {Link} from 'react-scroll'
import propTypes from 'prop-types';

const BurgerIngredients = ({setIngredients, ingredients, setBuns, data}) => {

    const buns = data.filter((item) => item.type === 'bun')
    const sauces = data.filter((item) => item.type === 'sauce')
    const mains = data.filter((item) => item.type === 'main')

    const [current, setCurrent] = React.useState()

    return (
        <div className={burgerIngredients.container}>
           
  
            <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>

            <div style={{ display: 'flex' }}>
                <Link to={'buns'}>
                    <Tab value="bun" active={current === 'bun'} onClick={() => {setCurrent('bun')}}>Булки</Tab>
                </Link>
                <Link to={'sauces'}>
                    <Tab value="sauce" active={current === 'sauce'} onClick={() => {setCurrent('sauce')}}>Соусы</Tab>
                </Link>
                <Link to={'mains'}>
                    <Tab value="main" active={current === 'main'} onClick={() => {setCurrent('main')}}>Начинки</Tab>
                </Link>
            </div>

            <div className={burgerIngredients.listContainer}>
                <Category key={'buns'} title={'Булки'} array={buns} setIngredients={setBuns} ingredients={'burgers'} link={'buns'}/>

                <Category key={'sauces'} title={'Соусы'} array={sauces} setIngredients={setIngredients} ingredients={ingredients} link={'sauces'}/>

                <Category key={'mains'} title={'Начинки'} array={mains} setIngredients={setIngredients} ingredients={ingredients} link={'mains'}/>
            </div>
        
            
        </div>
    )
}

BurgerIngredients.propTypes = {
    setIngredients: propTypes.func,
    ingredients: propTypes.array,
    setBuns: propTypes.func,
    data: propTypes.array

}

export default BurgerIngredients;