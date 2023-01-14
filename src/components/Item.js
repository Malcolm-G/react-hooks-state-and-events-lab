import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  let className = inCart?"in-cart":"";
  let buttonText = inCart?"Remove From Cart":"Add to Cart"

  function buttonClick(e){
    setInCart((inCart)=>(!inCart));
  }


  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={buttonClick} >{buttonText}</button>
    </li>
  );
}

export default Item;
