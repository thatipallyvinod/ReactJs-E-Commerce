import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './Component/ProductList';
import Customer from './Component/Customers';

import Login from './Component/Login';
import ShoppingCart from './Component/ShoppingCart';
import NavBar from './Component/NavBar';
import ProductsByCategory from './Component/ProductByCategory';
import ProductDetails from './Component/ProductDetails';
import OrderConfirmed from './Component/OrderConfirmed';
import NotFound from './Component/NotFound';

const routing = (
  <Router>

    <div style={  {textAlign : "center"}  }>
      <h3>e-Commerce Application using React JS</h3>
      <hr/>
        <NavBar /> 
      <hr />
      <p></p>
    </div>


    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Admin" element={<ProductList />} />     
      <Route path="/AllProducts" element={<Customer />} />           
      <Route path="/Login" element={<Login />} />           
      <Route path="/ShoppingCart" element={<ShoppingCart />} />           
      <Route path="/ProductByCategory/:id" element={<ProductsByCategory />} />           
      <Route path="/ProductDetails/:id" element={<ProductDetails />} />           
      <Route path="/OrderConfirmed/:id" element={<OrderConfirmed />} />           
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
