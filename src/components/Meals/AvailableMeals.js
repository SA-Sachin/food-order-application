import React from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

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
  const mealslist = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
