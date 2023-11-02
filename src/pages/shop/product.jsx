import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { motion } from "framer-motion";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product" >
      <motion.img src={productImage} whileHover={{ scale: 1.5, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: 360, borderRadius: "100%" }}/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> £{price}</p>
      </div>
      <motion.button className="addToCartBttn" whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: 360, borderRadius: "100%" }} onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </motion.button>
    </div>
  );
};


