import React, { useEffect, useState } from "react";
import { LuAlertOctagon } from "react-icons/lu";
import Swal from "sweetalert2";
const CategoryProduct = ({ category }) => {
  const [products, setProduct] = useState([]);
  let result;

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (category !== "Refresh") {
    result = products.filter((element) => element.category === category);
  } else {
    result = products;
  }

  const handleClick = (quantity) => {
    console.log(typeof quantity, quantity);
    if (quantity < 1) {
      return Swal.fire({
        icon: "error",
        text: "Stock not available",
      });
    }
  };

  return (
    <div className="grid  lg:grid-cols-5  grid-cols-4 gap-[10px] ">
      {result.map(({ productImg, productName, price, quantity, id }) => (
        <div
          onClick={() => handleClick(quantity)}
          key={id}
          className="relative border border-[#aaa] rounded-lg cursor-pointer"
        >
          <img src={productImg} className="h-36 p-2" alt="" />
          <div className="absolute top-2 right-2">
            {quantity === 0 ? <LuAlertOctagon className="" /> : ""}
          </div>
          <div className="absolute  bottom-0 left-0 bg-[#f3f4f5] opacity-80  w-full p-[2px] ">
            <p className="text-[#000] whitespace-nowrap overflow-hidden text-center">
              {productName}
            </p>
            <p className=" text-center text-[#000]">{price}.000</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryProduct;
