import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal"; 

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>55.20</span>
      </div>
      <div className={classes.actions}>
        <button
          className={`${classes.button} ${classes.closeButton}`}
          onClick={props.onClose}
        >
          Close
        </button>
        <button className={`${classes.button} ${classes.orderButton}`}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
