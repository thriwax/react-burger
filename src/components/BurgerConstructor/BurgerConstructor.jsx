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

export default BurgerConstructor;