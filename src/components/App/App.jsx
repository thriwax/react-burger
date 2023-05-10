import React, { useEffect } from "react";
import {useState} from 'react';
import app from "./App.module.css";
import { data } from "../../utils/data.js";
import AppHeader from '../AppHeader/AppHeader.jsx'
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {


  const [initialIngreidents, setInitialIngedients] = React.useState([])

    const [isLoading, setLoading] = React.useState(false)

    const [hasError, setError] = React.useState('')

    useEffect(() => {
        const res =  fetch('https://norma.nomoreparties.space/api/ingredients').then(res => { 
          setLoading(true)
          return res.ok ? res.json() : Promise.reject()})
          .then(r => {
            
            setInitialIngedients(r.data)
          })
            console.log(res)

    }, [])

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
    <div className={app.app}>
      <AppHeader />
      {isLoading ? <main className={app.mainContainer}>
        <BurgerIngredients className={app.burgerIngredients} setIngredients={setIngredients} ingredients={ingredients} setBuns={setBuns} initialIngreidents={initialIngreidents}/>
        <BurgerConstructor setIngredients={setIngredients} ingredients={ingredients} buns={buns}/>
      </main> : <div>Загрузка</div>}
    </div>
  );
}

export default App;

