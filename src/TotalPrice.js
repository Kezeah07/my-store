//The total price component keeps the code for the total price from the action that is taken when the user clicks the buy button.
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TotalPrice = () => {
  const { totalPrice } = useSelector(state => state);
  const navigate = useNavigate();

  return (
    <div className="fixed-bottom d-flex justify-content-between p-1 bg-light">
      <h4>Total Price: R{totalPrice}</h4>
      <Button onClick={() => navigate('/cart')}>Go to Cart</Button>
    </div>
  );
};

export default TotalPrice;
