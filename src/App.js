import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Review from "./pages/Review";
import SingleProduct from "./components/SingleProduct";

const App = () => {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' index element={<Home/>}/>
                    <Route path='order'  element={<Order/>}/>
                    <Route path='product'  element={<Products/>}/>
                    <Route path='review'  element={<Review/>}/>
                    <Route path='checkout'  element={<Checkout/>}/>
                    <Route path='single-product'  element={<SingleProduct/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;