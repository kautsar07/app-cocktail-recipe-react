import React from "react";

export default function Name(props) {
  return (
    <div>
      <h1>
        Let's make {props.Drink} 
      </h1>
      <h3>Category: {props.Category}</h3>
      <h3>Ingredients</h3>
      
    </div>
  );
}
