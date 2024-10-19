// This component will be displaying some information about the store and its logos.
//Bootstrap is used for designing the page layout.
//It also contains a button that goes directly to the Products page.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = ({ username }) => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/products');
  };

  return (

 <div className="container mt-5">
            {username && <p>Welcome back, {username}!</p>}

    <div className="container mt-4">
      {/* Header */}
      <header className="text-center mb-4">
        <img src="/images/storelogo1.jpg" alt="Store Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
        <h1 className="mt-3">Welcome to Elegant Beauty Bar!</h1>
        <p>Where we help you access afordable quality make-up products at the comfort of your home.</p>
        <p>Discover a range of amazing products curated just for you.</p>
            
      </header>

      {/* Logo2 */}
      <div className="text-center mb-4">
        <img src="/images/storelogo2.jpg" alt="Landing" className="img-fluid" style={{ width: '100%', maxHeight: '50vh', objectFit: 'cover' }} />
      </div>

      {/* Products Section */}
      <div className="mb-4">
        <h4>We have a variety of products with different shades to accomodate each and every beautiful lady.</h4>
        <div className="d-flex justify-content-between">
          <div className="p-2">
            <img src="/images/display1.jpg" alt="Product 1" className="img-fluid" style={{ width: '300px', height:'300px' }} />
          </div>
          <div className="p-2">
            <img src="/images/display2.jpg" alt="Product 2" className="img-fluid" style={{ width: '280px', height:'300px'  }} />
          </div>
          <div className="p-2">
            <img src="/images/display3.jpg" alt="Product 3" className="img-fluid" style={{ width: '350px', height:'300px' }} />
          </div>
        </div>
      </div>

      {/* Start Shopping Button */}
      <div className="text-right">
        <button
          className="btn btn-primary"
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
          onClick={handleStartShopping}
        >
          Start Shopping
        </button>
      </div>
    </div>
    </div>
  );
};

export default Landing;
