import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductDetails from '../customer/Components/Product/ProductDetails/ProductDetails';
import Product from '../customer/Components/Product/Product/Product';
import Navigation from '../customer/Components/Navbar/Navigation';
import Cart from '../customer/Components/Cart/Cart';
import { ThemeProvider } from '@mui/material/styles';
import { customerTheme } from '../Admin/them/customeThem';
import Order from '../customer/Components/orders/Order';
import OrderDetails from '../customer/Components/orders/OrderDetails';
import Checkout from '../customer/Components/Checkout/Checkout';
import Footer from '../customer/Components/footer/Footer';
import PaymentSuccess from '../customer/Components/paymentSuccess/PaymentSuccess';
import RateProduct from '../customer/Components/ReviewProduct/RateProduct';
import Homepage from '../Pages/Homepage';
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
