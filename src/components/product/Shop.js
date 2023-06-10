import React from "react";
import Cart from "./Cart";
import Modal from "./Product";

const Shop = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Cart />
      <Modal />
    </div>
  );
};

export default Shop;
