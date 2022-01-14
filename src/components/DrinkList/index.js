import React from "react";

// import Input from "../Input";

function DrinkList({ name, image }) {
  return (
    <div>
      <ul>
        <li>
          {name}<br></br> <img src={image} alt="" className="imag-1"/>
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
