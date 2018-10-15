import React from 'react';

export const searchBar = (products, onAdd, onRemove, onSearch) => {
  return products.filter( (product) => product.name.toUpperCase() === onSearch.toUpperCase()).map((product) =>
    <div className="boxed" key={product.name}>
      <img src={product.image} alt=''/><br/>
      {product.name}<br/>
      {product.currency} {product.price}<br/>
      <button className="addBasket" value="Add" onClick={ () => onAdd(product.name, product.currency, product.price, product.image)}>Add To Cart </button>
      <button className="addBasket" value="Remove From Cart" onClick={ () => onRemove(product.name)}>Remove From Cart </button>
    </div>);
};