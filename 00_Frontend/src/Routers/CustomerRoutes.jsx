import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductDetails from '../Customer/Components/Product/ProductDetails/ProductDetails';
import Product from '../Customer/Components/Product/Product/Product';
import Navigation from '../Customer/Components/Navbar/Navigation';
import Cart from '../Customer/Components/Cart/Cart';
import { ThemeProvider } from '@mui/material/styles';
import { customerTheme } from '../Admin/Theme/CustomerTheme';
import Order from '../Customer/Components/Orders/Order';
import OrderDetails from '../Customer/Components/Orders/OrderDetails';
import Checkout from '../Customer/Components/Checkout/Checkout';
import Footer from '../Customer/Components/Footer/Footer';
import PaymentSuccess from '../Customer/Components/PaymentSuccess/PaymentSuccess';
import RateProduct from '../Customer/Components/ReviewProduct/RateProduct';
import Homepage from '../Pages/Homepage';
import Profile from '../Customer/Components/Profile/Profile';
const CustomerRoutes = () => {
  const location = useLocation();
  console.log('routes');
  const showNavigation = location.pathname !== '*';

  return (
    <div>
      <ThemeProvider theme={customerTheme}>
        {showNavigation && <Navigation />}
        <Routes>
          <Route path='/login' element={<Homepage />}></Route>
          <Route path='/register' element={<Homepage />}></Route>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/home' element={<Homepage />}></Route>
          <Route
            path='/:lavelOne/:lavelTwo/:lavelThree'
            element={<Product />}></Route>
          <Route
            path='/product/:productId'
            element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/account/order' element={<Order />}></Route>
          <Route
            path='/account/order/:orderId'
            element={<OrderDetails />}></Route>
          <Route path='/profile/' element={<Profile />}></Route>
          <Route
            path='/account/rate/:productId'
            element={<RateProduct />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default CustomerRoutes;
