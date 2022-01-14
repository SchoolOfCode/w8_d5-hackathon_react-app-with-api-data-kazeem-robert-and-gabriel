import { useEffect, useState } from "react";
import "./App.css";
import Input from "../Input";
import DrinkList from "../DrinkList";
import Header from "../Header";

function App() {
  // set the state
  const [drink, setDrink] = useState([]);
  // write an async function to get data from cocktails
  async function fetchData(drink) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}` // use string interpolation to insert the searched drink into the API url
    );
    const data = await response.json();
    const fetchedArray = data.drinks
    setDrink(fetchedArray);
    console.log(fetchedArray)
    
    const idArray = []
    fetchedArray.forEach((item)=>{ return idArray.push(Number(item.idDrink))})
    console.log(idArray)
   

  }

// idDrink;

  // useEffect to run the function every time a new search is made
  useEffect(() => {
    fetchData();
  });
  // use state in useEffect so that page only refreshes when an input is taken

  return (
    <div className="App">
    <Header/>
      <Input onSubmit={fetchData} />
      <div className="drink-display">
        {drink.map((item, index) => {
          return <DrinkList name={item.strDrink} image={item.strDrinkThumb} key={index}/>;
        })}
      </div>
    </div>
  );
}

export default App;
