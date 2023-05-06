import React from 'react';
import {ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../Order/OrderDetails';
import PriceIcon from '../UI/PriceIcon/PriceIcon';
import burgerConstructor from './BurgerConstructor.module.css';
import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const BurgerConstructor = ({ingredients, buns}) => {
    
    const date = new Date();

    const [open, setOpen] = React.useState(false)

    return (
        <div>
            {open && createPortal(<ModalOverlay setOpen={setOpen} body='order'/>, document.body)}
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
                <Button htmlType="button" type="primary" size="large" onClick={() => setOpen(true)}>Оформить Заказ</Button>
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