import React from "react";
import { useState } from "react";

function Input({ onSubmit }) {
  const [drink, setDrink] = useState("");
  function getValue(e) {
    setDrink(e.target.value);
    console.log(drink);
  }

  function SearchApI(e) {
    e.preventDefault();

    onSubmit(drink);
  }

  return (
    <form>
      <input onChange={getValue} placeholder="Enter drink here" />
      <button onClick={SearchApI}>Search</button>
    </form>
  );
}

export default Input;
