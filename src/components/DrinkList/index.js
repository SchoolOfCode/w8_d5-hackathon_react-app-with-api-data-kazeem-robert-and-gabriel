import React from "react";

import Input from "../Input";

function DrinkList({ name, image }) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>
          <img src={image} />
        </li>
      </ul>
    </div>
  );
}

export default DrinkList;
