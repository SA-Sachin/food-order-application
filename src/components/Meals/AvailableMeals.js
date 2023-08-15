import React from "react";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Soup",
    description: "Veg soup",
    price: 350,
  },
  {
    id: "m2",
    name: "Rice",
    description: "Gee Rice",
    price: 420,
  },
  { id: "m3", name: "kottu", description: "Chicken kottu", price: 500 },
  {
    id: "m4",
    name: "Burger",
    description: "Big mac",
    price: 500,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return;
  <div>
    <ul>{mealslist}</ul>
  </div>;
};

export default AvailableMeals;
