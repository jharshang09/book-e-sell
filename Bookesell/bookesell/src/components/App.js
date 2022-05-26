import React from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';
import Register from './Register';
import Editproduct from './Editproduct';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Product';
import Cart from './Cart';
import Productlist from './Productlist';

function App() {
  return (
    // <div>
    //   <Header />
    //   <Login />
    //   <Register/>
    //   <Editproduct/>
    //   <Product/>
    //   <Cart/>
    //   <Productlist/>
    //   <Footer/>
    // </div>

      <Router>
        <div className="App"></div>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="*" element={<Productlist />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/edit-product" element={<Editproduct />} />
        </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
