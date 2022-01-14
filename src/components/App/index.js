import { useEffect } from "react";
import "./App.css";

function App() {
  async function fetchData() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon`
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });

  return <div className="App"></div>;
}

export default App;
