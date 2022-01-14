import React from "react";

import Input from "../Input";

function DrinkList({ name, image }) {
  return (
    <div>
      <ul>
        <li>
          {name} <img src={image} alt="drink"/>
        </li>
      </ul>
    </div>
  );
}

export default DrinkList;