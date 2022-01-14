import React from "react";
import { useState } from "react";
import "./index.css";

// import Input from "../Input";

function DrinkList({ name, image, id }) {
  const [selectedDrinkProperties, setSelectedDrinkProperties] = useState("");
  async function handleClick(e) {
    // console.log(e.target.id);
    // setDrinkId(e.target.id);
    let newId = e.target.id;
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${newId}`
    );
    const data = await response.json();
    setSelectedDrinkProperties(data.drinks[0]);
    console.log(data.drinks[0]);
  }

  return (
    <div>
      <ul>
        <li id="drink">
          {name}
          <br></br>
          <div>
            <img onClick={handleClick} id={id} src={image} alt="" />
            <ul id="ingredient-list">
              <li>
                {selectedDrinkProperties.strMeasure1}
                {selectedDrinkProperties.strIngredient1}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure2}
                {selectedDrinkProperties.strIngredient2}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure3}
                {selectedDrinkProperties.strIngredient3}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure4}
                {selectedDrinkProperties.strIngredient4}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure5}
                {selectedDrinkProperties.strIngredient5}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure6}
                {selectedDrinkProperties.strIngredient6}
              </li>
              <li>
                {selectedDrinkProperties.strMeasure7}
                {selectedDrinkProperties.strIngredient7}
              </li>
            </ul>
            <br></br>
            {selectedDrinkProperties.strInstructions}
          </div>
        </li>
      </ul>
    </div>
  );
}

export function DrinkInst({ alcohol }) {
  return (
    <div>
      <ul>
        <li>{alcohol}</li>
      </ul>
    </div>
  );
}

export default DrinkList;
