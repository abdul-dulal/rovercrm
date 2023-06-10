import React, { useContext, useState } from "react";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { productContext } from "../../App";
import EditModal from "./EditModal";
import AddNote from "./AddNote";
const ProductTable = () => {
  const [cartProduct, setCartProduct] = useContext(productContext);
  const [inputValue, setInputValue] = useState(1);
  const [modal, setModal] = useState(false);

  const handleEdit = (product) => {
    setModal(true);
  };
  const handleDeleteClick = (id) => {
    setCartProduct(cartProduct.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className=" mt-3">
        <div className="relative overflow-x-auto scrollbar-hide">
          <table className=" w-full">
            <thead className="bg-secondary text-sm text-white font-normal">
              <tr>
                <th scope="col" className="py-3 w-5"></th>
                <th scope="col" className=" py-3 w-64 text-left px-2">
                  Items
                </th>
                <th scope="col" className=" py-3 text-left px-6">
                  Unit Price
                </th>
                <th scope="col" className=" py-3 text-left px-8">
                  Quantity
                </th>
                <th scope="col" className=" py-3 text-left px-4">
                  TotalPrice
                </th>
                <th scope="col" className=" py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cartProduct.map((product) => (
                <tr>
                  <td className="px-1 py-2">
                    <div
                      onClick={() => handleEdit(product)}
                      className="p-2 bg-[#e9ecef] rounded cursor-pointer"
                    >
                      <LuEdit />
                    </div>
                  </td>
                  <td className="  rounded-md py-2">
                    <div className="p-1 px-4 bg-[#e9ecef] rounded whitespace-nowrap">
                      {product.productName}
                    </div>
                  </td>
                  <td className="px-3  rounded-md py-2">
                    <div class="p-1 px-4 bg-[#e9ecef] rounded whitespace-nowrap">
                      {product.price}.000
                    </div>
                  </td>
                  <td className="px-2  rounded-md py-2">
                    <div className="flex items-center p-1 px-4  rounded whitespace-nowrap">
                      <button
                        onClick={() => setInputValue(inputValue - 1)}
                        disabled={inputValue <= 1}
                        className="w-6 bg-[#e9ecef] flex justify-center items-center text-xl"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        name=""
                        value={inputValue}
                        onChange={({ target }) => {
                          setInputValue(target.value);
                        }}
                        className="w-16 border-0 border-white focus:outline-1 focus:outline-gray-100 focus:ring text-center"
                      />
                      <button
                        onClick={() => setInputValue(inputValue + 1)}
                        className="w-6 bg-[#e9ecef] flex justify-center items-center text-xl"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-2  rounded-md py-2">
                    <div className="p-1 px-4 bg-[#e9ecef] rounded whitespace-nowrap">
                      {product.price * inputValue}.000
                    </div>
                  </td>
                  <td className="px-2  rounded-md py-3">
                    <div
                      onClick={() => handleDeleteClick(product.id)}
                      className="p-2 bg-[#e9ecef] rounded cursor-pointer"
                    >
                      <RiDeleteBin6Line />
                    </div>
                  </td>
                  {modal && <EditModal setModal={setModal} product={product} />}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
