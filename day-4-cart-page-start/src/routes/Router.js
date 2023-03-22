import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../components/views/HomePage";
import ProductDetailsPage from "../components/views/ProductDetailsPage";
import CartCheckout from "../components/views/CartCheckout";
import ContactUs from "../components/views/ContactUs";
import PageNotFound from "../components/views/PageNotFound";

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<HomePage/>}/>
                <Route path="/product/:id" element={<ProductDetailsPage/>}/>
                <Route path="/cart" element={<CartCheckout/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/product/*" element={<PageNotFound/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    );
}

export default Router;
