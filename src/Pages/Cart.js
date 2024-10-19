//The help icon is not a button. 
//To get information the user can hover over it and information about shipping will pop up
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components

const Cart = () => {
  const cartItems = useSelector(state => state.products.cartItems);
  const totalPrice = useSelector(state => state.products.totalPrice);
  
  const [showModal, setShowModal] = useState(false);
  const [shipmentMethod, setShipmentMethod] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleShip = () => {
    setShowSuccess(true);
    setShowModal(false); // Close the shipment modal
  };

  const handleCloseSuccess = () => setShowSuccess(false);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul className="list-group mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} - R{item.price}
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total Price: R{totalPrice}</h3>
          <div className="mt-4">
            <h4>Select Shipping Method</h4>
            <select 
              className="form-select" 
              value={shipmentMethod} 
              onChange={(e) => setShipmentMethod(e.target.value)}
            >
              <option value="">Choose a shipping method...</option>
              <option value="standard">Standard Shipping</option>
              <option value="express">Express Shipping</option>
            </select>
            <button 
              className="btn btn-primary mt-3" 
              onClick={() => setShowModal(true)}
              disabled={!shipmentMethod}
            >
              Ship
            </button>
            <button 
              className="btn btn-info mt-3 ms-2" 
              data-toggle="tooltip" 
              title="Standard Shipping: 5-7 days, for orders not urgent. 
              Express Shipping: 1-3 days, for urgent orders."
            >
              <i className="bi bi-info-circle"></i> Help
            </button>
          </div>
        </div>
      ) : (
        <h5>Your cart is empty!</h5>
      )}

      {/* Success Modal */}
      <Modal show={showSuccess} onHide={handleCloseSuccess}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your items have been shipped successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuccess}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Shipment Method Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Shipment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to ship using {shipmentMethod}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleShip}>
            Confirm Shipment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
