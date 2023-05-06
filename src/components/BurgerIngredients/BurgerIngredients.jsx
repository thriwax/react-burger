import React, { useEffect } from "react";
import burgerIngredients from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Category from "../Category/Category";
import { Link } from 'react-scroll'
import propTypes from 'prop-types';

const BurgerIngredients = ({ setIngredients, ingredients, setBuns }) => {

    const [initialIngedients, setInitialIngedients] = React.useState([])

    const [isLoading, setLoading] = React.useState(false)

    const [hasError, setError] = React.useState('')

    useEffect(() => {
        fetch('https://norma.nomoreparties.space/api/ingredients')
            .then(res => res.json()
                .then(r => {
                    setLoading(true)
                    setInitialIngedients(r.data);
                }))
                .catch((err) => setError(err))

    })

    const buns = initialIngedients.filter((item) => item.type === 'bun')
    const sauces = initialIngedients.filter((item) => item.type === 'sauce')
    const mains = initialIngedients.filter((item) => item.type === 'main')

    const [current, setCurrent] = React.useState()



    return isLoading ? (<div className={burgerIngredients.container}>


        <p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>

        <div style={{ display: 'flex' }}>
            <Link to={'buns'}>
                <Tab value="bun" active={current === 'bun'} onClick={() => { setCurrent('bun') }}>Булки</Tab>
            </Link>
            <Link to={'sauces'}>
                <Tab value="sauce" active={current === 'sauce'} onClick={() => { setCurrent('sauce') }}>Соусы</Tab>
            </Link>
            <Link to={'mains'}>
                <Tab value="main" active={current === 'main'} onClick={() => { setCurrent('main') }}>Начинки</Tab>
            </Link>
        </div>

        <div className={burgerIngredients.listContainer}>
            <Category key={'buns'} title={'Булки'} array={buns} setIngredients={setBuns} ingredients={'burgers'} link={'buns'} />

            <Category key={'sauces'} title={'Соусы'} array={sauces} setIngredients={setIngredients} ingredients={ingredients} link={'sauces'} />

            <Category key={'mains'} title={'Начинки'} array={mains} setIngredients={setIngredients} ingredients={ingredients} link={'mains'} />
        </div>


    </div>) : <div>Загрузка</div>
}

BurgerIngredients.propTypes = {
    setIngredients: propTypes.func,
    ingredients: propTypes.arrayOf(propTypes.shape({
        _id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        proteins: propTypes.number.isRequired,
        fat: propTypes.number.isRequired,
        carbohydrates: propTypes.number.isRequired,
        calories: propTypes.number.isRequired,
        price: propTypes.number.isRequired,
        image: propTypes.string.isRequired,
        image_mobile: propTypes.string.isRequired,
        image_large: propTypes.string.isRequired,
        __v: propTypes.number.isRequired,
    }).isRequired).isRequired,
    setBuns: propTypes.func,
    data: propTypes.array

}

export default BurgerIngredients;