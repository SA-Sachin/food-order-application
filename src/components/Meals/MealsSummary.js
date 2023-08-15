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
      <p>
        Immerse yourself in our warm and inviting ambiance as our friendly staff
        cater to your every need. Whether you're looking for a romantic dinner
        for two, a family gathering, or a special celebration, our restaurant
        offers the perfect setting for any occasion.
      </p>
      <p>
        Discover our diverse menu, featuring an array of delectable dishes
        inspired by both local and international cuisines. From succulent steaks
        to aromatic curries, from fresh seafood to indulgent desserts, our menu
        has something to satisfy every palate.
      </p>
      <p>
        Join us today and embark on a culinary adventure that will tantalize
        your taste buds and leave you craving for more. We look forward to
        serving you and providing a dining experience that exceeds your
        expectations.
      </p>
    </div>
  );
};

export default MealsSummary;
