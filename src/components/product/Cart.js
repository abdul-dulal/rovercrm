import React, { useState } from "react";
import { TbUserPlus } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import CustomerModal from "./AddCustomerModal";
import AddNote from "./AddNote";
import Shiping from "./Shiping";
import Items from "./Items";
import ProductTable from "./ProductTable";

const Cart = () => {
  const [modal, setModal] = useState("");

  return (
    <div className="bg-white shadow-md py-5 w-full">
      <div className="flex flex-wrap items-center ml-5  ">
        <div className="border border-primary  h-8 lg:w-5/12 md:w-7/12 w-5/12 rounded-sm">
          <h1>hello</h1>
        </div>
        <div className="flex py-1">
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
              className="flex whitespace-nowrap list-none border lg:border-l-0  border-primary text-primary sm:text-sm text-[13px] items-center px-2 py-[5px]  font-normal hover:bg-primary hover:text-white cursor-pointer transition duration-500"
            >
              <span> {icon}</span> {title}
            </li>
          ))}
        </div>
        {modal === "Add Customer" && <CustomerModal setModal={setModal} />}
        {modal === "Note" && <AddNote setModal={setModal} />}
        {modal === "Shiping" && <Shiping setModal={setModal} />}
        {modal === "Items" && <Items setModal={setModal} />}
      </div>
      <ProductTable />
    </div>
  );
};

export default Cart;
