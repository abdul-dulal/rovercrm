import React from "react";
import Cart from "./Cart";
import Product from "./Product";
import Modal from "./Product";

const Shop = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Cart />
      <Modal />
    </div>
  );
};

export default Shop;
