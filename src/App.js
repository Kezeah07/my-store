// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Landing from './Pages/Landing';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import './App.css'; // Import the CSS file here

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/landing" element={<Landing />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/cart" element={<Cart />} />

            </Routes>
        </Router>
    );
};

export default App;

