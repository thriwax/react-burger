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
