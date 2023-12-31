import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Delicious Food for You</h2>
      <p>
        Welcome to our restaurant, where culinary delights await you. Indulge in
        a gastronomic journey like no other, where flavors blend harmoniously to
        create memorable dining experiences. Our talented chefs meticulously
        craft each dish with the finest ingredients, ensuring that every bite is
        a moment of pure delight.
      </p>
    </div>
  );
};

export default MealsSummary;
