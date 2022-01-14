import React from "react";

// import Input from "../Input";

function DrinkList({ name, image }) {
  return (
    <div>
      <ul>
        <li>
          {name} <img src={image} alt="" />
        </li>
       
      </ul>
    </div>
  );
}

export function DrinkInst({ alcohol }) {
  return (
    <div>
      <ul>
        <li>
          {alcohol} 
        </li>
      </ul>
    </div>
  );
}

export default DrinkList;
