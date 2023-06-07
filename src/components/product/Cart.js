import React, { useState } from "react";
import { TbUserPlus } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import CustomerModal from "./AddCustomerModal";
const Cart = () => {
  const [modal, setModal] = useState("");
  return (
    <div className="bg-white shadow-md py-5">
      <div className="flex items-center ml-5  ">
        <div className="border border-primary  h-8 w-[275px] rounded-sm">
          <h1>hello</h1>
        </div>
        <div className="flex py-3">
          {[
            ["Add Customer", <TbUserPlus />],
            ["Note", <CiEdit />],
            ["Shiping", <FaTruckMoving />],
            ["Items", <AiOutlinePlus />],
          ].map(([title, icon]) => (
            <li
              key={title}
              onClick={() => {
                setModal(title);
              }}
              className="flex  list-none border border-l-0  border-primary text-primary items-center px-2 py-1 text-[15px] font-normal hover:bg-primary hover:text-white cursor-pointer transition duration-500"
            >
              <span> {icon}</span> {title}
            </li>
          ))}
        </div>
        {modal === "Add Customer" ? <CustomerModal /> : ""}
        {modal === "Note" ? <CustomerModal /> : ""}
        {modal === "Shiping" ? <CustomerModal /> : ""}
        {modal === "Note" ? <CustomerModal /> : ""}
      </div>
    </div>
  );
};

export default Cart;
