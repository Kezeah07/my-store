import React from 'react';

const Card = ({ product, onBuy }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img src={`https://via.placeholder.com/150?text=${product.name}`} className="card-img-top" alt={product.name} />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">${product.price}</p>
      <button className="btn btn-primary" onClick={() => onBuy(product.id)}>Buy</button>
    </div>
  </div>
);

export default Card;
