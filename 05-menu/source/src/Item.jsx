import React from "react";

const Item = ({ title, price, img, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <p className="item-price">${price}</p>
        </header>
        <span className="item-text">{desc}</span>
      </div>
    </article>
  );
};

export default Item;
