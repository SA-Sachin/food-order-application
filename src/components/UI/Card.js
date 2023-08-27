import React from 'react';
import "./Card.module.css";

const Card = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Card
