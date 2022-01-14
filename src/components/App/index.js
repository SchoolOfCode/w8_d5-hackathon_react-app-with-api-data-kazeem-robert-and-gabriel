import { useEffect } from "react";
import "./App.css";
import Input from "../Input"

function App() {
  async function fetchData(drink) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });

  return <div className="App"><Input onSubmit={fetchData}/></div>;
}

export default App;
