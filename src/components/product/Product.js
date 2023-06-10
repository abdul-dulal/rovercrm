import React, { useRef, useState } from "react";
import { RiBarcodeFill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import CategoryProduct from "./CategoryProduct";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineRefresh } from "react-icons/hi";

const Product = () => {
  const [category, setCategory] = useState("Refresh");
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    console.log("click", (scrollContainerRef.current.scrollLeft += 320));
    scrollContainerRef.current.scrollLeft += 320;
  };

  const buttonData = [
    { id: 1, label: "Refresh" },
    { id: 2, label: "Electronics" },
    { id: 3, label: "Home & Lifestyle" },
    { id: 4, label: "Grocery" },
    { id: 5, label: "Cloths" },
    { id: 6, label: "Food & Beverage" },
  ];

  return (
    <div className="bg-white shadow-md rounded-sm p-2 px-4 ">
      <div className="flex  w-full">
        <button className="border border-primary h-9 w-10 flex justify-center items-center ">
          <GoSearch />
        </button>
        <button className="border border-primary border-r-0 h-9 w-10 flex justify-center items-center ">
          <RiBarcodeFill />
        </button>
        <div className="w-full">
          <input
            type="text"
            name=""
            placeholder="Barcode, SKU, Product Name"
            className=" h-9 w-full px-3 placeholder:text-sm placeholder:font-normal placeholder:text-[#495057] border border-primary "
          />
        </div>
      </div>
      <div>
        <div className="flex items-center    mb-3 mt-5 border-t  border-[#ddd]">
          <div class=" flex items-center  h-12 w-4 rounded-l-md opacity-50 bg-gradient-to-r from-gray-300 to-gray-500 text-black font-bold z-50 cursor-pointer hover:opacity-90">
            <span className="">
              <BsChevronRight />
            </span>
          </div>
          <div className="flex relative overflow-x-auto  rounded-sm ">
            {buttonData.map(({ label, id }) => (
              <button
                ref={scrollContainerRef}
                key={id}
                onClick={() => setCategory(label)}
                className={` flex items-center gap-1   ${
                  id === 1 ? "bg-primary text-white fixed lef" : ""
                } border border-[#748892]  h-9 px-3 whitespace-nowrap text-[#495057] text-sm font-normal hover:shadow-custom hover:bg-white hover:text-[#62747d] 
                   
               transition duration-500 ${
                 category === label && id !== 1
                   ? "text-[#62747d] bg-white shadow-custom"
                   : ""
               }`}
              >
                {id === 1 ? <HiOutlineRefresh size={20} /> : ""} {label}
              </button>
            ))}
          </div>
          <div className="ml-auto">
            <div
              onClick={handleScroll}
              class=" flex items-center   h-12 w-4 rounded-r-md  opacity-50 bg-gradient-to-r from-gray-300 to-gray-500 text-black font-bold z-50 cursor-pointer hover:opacity-90"
            >
              <span className="">
                <BsChevronRight />
              </span>
            </div>
          </div>
        </div>
        <div className="h-[650px] overflow-y-scroll hover:scrollbar-hide border border-[#aaa] rounded-md p-2 ">
          <CategoryProduct category={category} />
        </div>
      </div>
    </div>
  );
};

export default Product;
