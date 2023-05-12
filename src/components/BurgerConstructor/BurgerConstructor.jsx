<<<<<<< Updated upstream
import React from 'react';
import {ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Order from '../Order/Order';
import PriceIcon from '../UI/PriceIcon/PriceIcon';
import burgerConstructor from './BurgerConstructor.module.css';
import propTypes from 'prop-types';

const BurgerConstructor = ({ingredients, buns}) => {
    

    const date = new Date();

    const [open, setOpen] = React.useState(false)

    const openOrder = () => {
        setOpen(true)
    }

    return (
        <div>
            {open && <Order setOpen={setOpen}/>}
            <div className={burgerConstructor.container}>

            <main className={burgerConstructor.listContainer}>
            <div className={burgerConstructor.main}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={buns.name + ' (верх)'}
                    price={buns.price}
                    thumbnail={buns.image}
        
                />
                {ingredients.map((item) => <div key={`${date} + ${item._id}`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    handleClose={(() => console.log('ff'))}
                />
                </div>)}
                {/* <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                /> */}
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={buns.name + ' (низ)'}
                    price={buns.price}
                    thumbnail={buns.image}
                />
                
            </div>
            </main>
            <div className={burgerConstructor.price}>
                <p className="text text_type_digits-medium">610</p>
                <PriceIcon />
                <Button htmlType="button" type="primary" size="large" onClick={() => openOrder()}>Оформить Заказ</Button>
            </div>
        </div>
        </div>
    )
}

BurgerConstructor.propTypes = {
    ingredients: propTypes.array,
    buns: propTypes.object,
}

=======
import {useState} from 'react';
import {ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PriceIcon from '../UI/PriceIcon/PriceIcon';
import burgerConstructor from './BurgerConstructor.module.css';
import { createPortal } from 'react-dom';
import {TBurgerConstructor} from "../../utils/types";
import Modal from "../Modal/Modal";

const BurgerConstructor = ({basket, buns, setBasket}) => {
    const date = new Date();

    const [open, setOpen] = useState(false)

    return (
        <div>
            {open && createPortal(<Modal setOpen={setOpen} body='order'/>, document.body)}
            <div className={burgerConstructor.container}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={buns.name + ' (верх)'}
                    price={buns.price}
                    thumbnail={buns.image}
                />
            <main className={burgerConstructor.listContainer}>
            <div className={burgerConstructor.main}>

                {basket.map((item) => <div key={`${date} + ${item._id}`}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                    handleClose={(() => {})}
                />
                </div>)}


            </div>
            </main>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={buns.name + ' (низ)'}
                    price={buns.price}
                    thumbnail={buns.image}
                />
            <div className={burgerConstructor.price}>
                <p className="text text_type_digits-medium">{basket.reduce((currentSum, currentNumber)=> currentSum + currentNumber.price, 0)+ buns.price}</p>
                <PriceIcon />
                <Button htmlType="button" type="primary" size="large" onClick={() => setOpen(true)}>Оформить Заказ</Button>
            </div>
        </div>
        </div>
    )
}
BurgerConstructor.propTypes = TBurgerConstructor



>>>>>>> Stashed changes
export default BurgerConstructor;