// import { Navigation } from "mdi-material-ui";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import About from '../Pages/About';
import Product from '../customer/Components/Product/Product/Product';
import ProductDetails from '../customer/Components/Product/ProductDetails/ProductDetails';
import Cart from '../customer/Components/Product/Cart/Cart';

import AdminPanel from '../Admin/AdminPanel';
import Navigation from '../customer/Components/Navbar/Navigation';

const Routers = () => {
  console.log('inside router');

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className=''>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/men' element={<Product />}></Route>
          <Route
            path='/product/:productId'
            element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

          <Route path='/admin' element={<AdminPanel />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Routers;
