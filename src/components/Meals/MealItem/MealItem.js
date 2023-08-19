import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div>
      <li>
        <div>
          <h3>{props.name}</h3>
          <div>{props.description}</div>
          <div>{price}</div>
        </div>
        <div>
          <form></form>
        </div>
      </li>
    </div>
  );
};

export default MealItem;
