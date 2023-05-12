<<<<<<< Updated upstream
import React, { useEffect } from "react";
import {useState} from 'react';
import app from "./App.module.css";
import { data } from "../../utils/data.js";
import AppHeader from '../AppHeader/AppHeader.jsx'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {

  const [isLoading, setLoading] = React.useState(false)

  const [hasError, setError] = React.useState('')

  const [ingredients, setIngredients] = useState([])

  const [buns, setBuns] = useState({
    "_id":"60666c42cc7b410027a1a9b1",
    "name":"Краторная булка N-200i",
    "type":"bun",
    "proteins":80,
    "fat":24,
    "carbohydrates":53,
    "calories":420,
    "price":1255,
    "image":"https://code.s3.yandex.net/react/code/bun-02.png",
    "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
    "__v":0
  })

  useEffect(() => {
  }, [ingredients])


  return (
    isLoading ? <h1>Загрузка</h1> : 
    <div className={app.app}>
      <AppHeader />
      <main className={app.mainContainer}>
        <BurgerIngredients className={app.burgerIngredients} setIngredients={setIngredients} ingredients={ingredients} setBuns={setBuns} data={data}/>
        <BurgerConstructor setIngredients={setIngredients} ingredients={ingredients} buns={buns}/>
      </main>
    </div>
  );
}

export default App;
=======
import {useEffect, useState} from "react";
import app from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {NORMA_API} from "../../utils/burger-api";
function App() {
    const [ingredients, setIngredients] = useState([]);
    const [buns, setBuns] = useState({});
    const [basket, setBasket] = useState([]);

    const [isLoading, setLoading] = useState(false);

    const [hasError, setError] = useState('');
    useEffect(() => {
        fetch(`${NORMA_API}/ingredients`)
            .then((res) => {
                if (res.ok) {
                    res.json().then((r) => {
                        setIngredients(r.data);
                        setBuns(r.data.find((item) => item.type === "bun"))
                    }).then(() => setLoading(true));
                } else {
                    res.json().catch((err) => {
                        setError(err.message);
                    }).then(() => setLoading(true));
                }
            });
    }, []);
    return (
        <div className={app.app}>
            <AppHeader/>
            {isLoading && (hasError || <main className={app.mainContainer}>
                <BurgerIngredients
                    className={app.burgerIngredients}
                    setBasket={setBasket}
                    basket={basket}
                    ingredients={ingredients}
                    setBuns={setBuns}
                />
                <BurgerConstructor
                    setBasket={setBasket}
                    basket={basket}
                    buns={buns}
                />
            </main>)}
        </div>
    );
}

export default App;
>>>>>>> Stashed changes
