import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'
import Layout from '../pages/Layout'
import HomePage from '../pages/HomePage/HomePage'
import Login from '../pages/Login'
import Sign_up from '../pages/Sign_up'
import Product_details from '../pages/Product_details'
import Wishlist from '../pages/Wishlist'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
export default function App_Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />}></Route>
        <Route element={<Layout />}>
            <Route  path="login" element={<Login />}></Route>
            <Route  path="sign_up" element={<Sign_up />}></Route>
            <Route  path="product/" element={<Product_details />}></Route>
            <Route  path="wishlist" element={<Wishlist />}></Route>
            <Route  path="cart" element={<Cart />}></Route>
            <Route  path="checkout" element={<Checkout />}></Route>
            
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
