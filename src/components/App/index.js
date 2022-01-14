import { useEffect, useState } from "react";
import "./App.css";
import Input from "../Input";

function App() {
  // set the state
  const [drink, setDrink] = useState("");
  // write an async function to get data from cocktails
  async function fetchData(drink) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}` // use string interpolation to insert the searched drink into the API url
    );
    const data = await response.json();
    console.log(data);
  }

  // useEffect to run the function every time a new search is made
  useEffect(() => {
    fetchData();
  });
  // use state in useEffect so that page only refreshes when an input is taken

  return (
    <div className="App">
      <Input onSubmit={fetchData} />
    </div>
  );
}

export default App;
