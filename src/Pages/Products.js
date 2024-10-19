import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectProducts, selectTotalPrice } from '../store/productSlice';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);

  const handleBuy = (id) => {
    dispatch(addToCart(id));
  };

  return (
    
    <div className="container mt-5">
      <h1 className="text-center">Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>

            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>R{product.price}</strong></p>
                <button className="btn btn-primary" onClick={() => handleBuy(product.id)}>
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right">
        <h3>Total Price: R{totalPrice}</h3>
        <Link to="/cart" className="btn btn-secondary">Go to Cart</Link>
      </div>
    </div>
   
  );
};

export default Products;
