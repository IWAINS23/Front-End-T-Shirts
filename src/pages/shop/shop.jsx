import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { motion } from "framer-motion";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Front End T Shirts</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
