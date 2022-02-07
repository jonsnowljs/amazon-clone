import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>star</p>
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SX679_.jpg" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
