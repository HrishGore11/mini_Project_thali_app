import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Product/Products";
import Cart from "./Cart/Cart";
import "./styles.css";
import Navbar from "./Navbar/Navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/" element={<Products />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
