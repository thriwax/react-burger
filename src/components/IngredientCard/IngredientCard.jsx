<<<<<<< Updated upstream
import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredienCard from './IngredientCard.module.css';
import Modal from '../Modal/Modal';
import propTypes from 'prop-types';

const IngredientCard = ({item, setIngredients, ingredients}) => {

    const [open, setOpen] = React.useState(false)

    const [count, setCount] = React.useState(0)

    const openCard = () => {
        setOpen(true)
    }

    const add = () => {
        setCount(
            count + 1
        )
        ingredients === 'burgers' ? setIngredients(item):setIngredients([...ingredients, item])
    }

    return (
        <div>
            {open && <Modal item={item} setOpen={setOpen}/>}
            <div className={ingredienCard.card} onClick={() => add()}>
            {ingredients !== 'burgers' && <Counter count={ingredients.filter((i) => i._id === item._id).length} size="default" extraClass="m-1" />}
            <img src={item.image} alt='x'/>
            <div className={ingredienCard.price_container}>
                <p className="text text_type_digits-default">{item.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-small" onClick={() => openCard()}>{item.name}</p>
            </div>
        </div>
    )
}

IngredientCard.propTypes = {
    item: propTypes.object,
    setIngredients: propTypes.func,
    buns: propTypes.object,
}

=======
import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientCard from './IngredientCard.module.css';
import Modal from '../Modal/Modal';
import { createPortal } from 'react-dom';
import { TIngredientCard } from '../../utils/types';

const IngredientCard = ({item, setBasket, basket}) => {

    const [open, setOpen] = React.useState(false)

    const [count, setCount] = React.useState(0)


    const add = () => {
        setCount(
            count + 1
        )
        setBasket(basket === 'burgers' ? item : [...basket, item])
    }

    return (
        <div>
            {open && createPortal(<Modal item={item} setOpen={setOpen} body='ingredients'/>, document.body)}
            <div className={ingredientCard.card} onClick={() => add()}>
            {basket !== 'burgers' && <Counter count={basket.filter((i) => i._id === item._id).length} size="default" extraClass="m-1" />}
            <img src={item.image} alt='x'/>
            <div className={ingredientCard.price_container}>
                <p className="text text_type_digits-default">{item.price}</p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-small" onClick={() => setOpen(true)}>{item.name}</p>
            </div>
        </div>
    )
}

IngredientCard.propTypes = TIngredientCard
>>>>>>> Stashed changes
export default IngredientCard;