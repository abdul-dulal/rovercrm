import { useContext, useRef, useState } from "react";
import Close from "../shere/Close";
import { amaountContext, discountContext } from "../../App";
import { ErrorModal } from "../shere/ErroorModal";

const Tax = ({ setModal, total }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [inputAmaount, setInputAmaount] = useContext(amaountContext);
  const [selectValue, setSelectValue] = useContext(discountContext);
  const [input, setInput] = useState();

  const closeModal = () => {
    setIsOpen(false);
    setModal("");
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseFloat(input) >= total) {
      return ErrorModal("Discount amount cannot be more than the total amount");
    }

    setInputAmaount(e.target.amaount.value);
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[99] bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5 m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title=" Add note to the order" closeModal={closeModal} />
              <hr />
              <div className="mt-3">
                <form onSubmit={handleSubmit}>
                  <div className="sm:flex block  items-center">
                    <div className="sm:w-1/4 block">
                      <label className=" text-sm text-[#888888] font-normal  ">
                        Tax On
                      </label>
                    </div>

                    <div className="sm:w-5/12 block">
                      <select
                        onChange={({ target }) => setSelectValue(target.value)}
                        className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]      rounded-sm"
                      >
                        <option className="py-5 " value="before">
                          Before Dsicount
                        </option>
                        <option value="after">After Discount</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:flex block  items-center mt-3">
                    <div className="sm:w-1/4 block">
                      <label className=" text-sm text-[#888888] font-normal  ">
                        Tax Type
                      </label>
                    </div>

                    <div className="sm:w-5/12 block">
                      <select
                        onChange={({ target }) => setSelectValue(target.value)}
                        className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]      rounded-sm"
                      >
                        <option className="py-5 " value="inclusive">
                          Inclusive
                        </option>
                        <option value="exclusive">Exclusive</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => closeModal()}
                      className=" my-10 rounded h-9 w-[76px]  bg-red-700 text-white"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className=" mt-10 rounded h-9 w-[88px]  bg-[#038FCF] text-white"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tax;
