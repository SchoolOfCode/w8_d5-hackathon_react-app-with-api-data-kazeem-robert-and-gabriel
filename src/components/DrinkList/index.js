import React from "react";
import "./index.css";

// import Input from "../Input";

function DrinkList({ name, image }) {
  return (
    <div>
      <ul>
        <li>
          {name}
          <br></br> <img src={image} alt="" />
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
