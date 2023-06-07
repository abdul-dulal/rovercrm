import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
const AddCustomerModal = () => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState("customer information");
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.4)]"
          onClick={handleOutsideClick}
        >
          <div className="lg:w-7/12 md:w-4/5 m-auto mt-10">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <div className="flex justify-between">
                <h2 className="text-lg font-normal mb-4 text-[#000000]">
                  Add Customer
                </h2>
                <span
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross2 size={20} />
                </span>
              </div>
              <hr />

              <div className="bg-white rounded-md shadow-lg my-3">
                <div className="flex gap-8">
                  {["customer information", "shiping address"].map(
                    (element) => (
                      <div
                        className={`cursor-pointer uppercase text-[#000000] text-sm font-semibold h-11 w-full `}
                      >
                        <p
                          onClick={() => setAddress(element)}
                          className={`${
                            element == address
                              ? "bg-[#04A9F5] h-full w-full"
                              : ""
                          }`}
                        >
                          {element}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCustomerModal;
