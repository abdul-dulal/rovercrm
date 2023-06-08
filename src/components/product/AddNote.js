import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Formik, Field, Form } from "formik";

const AddNote = () => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
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
          className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5 m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <div className="flex justify-between">
                <h2 className="text-lg font-normal mb-4 text-[#000000]">
                  Add note to the order
                </h2>
                <span
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross2 size={20} />
                </span>
              </div>
              <hr />
              <div className="mt-3">
                <p className="text-sm text-[#000000] font-normal">order note</p>

                <Formik
                  initialValues={{ description: "" }}
                  onSubmit={(values, actions) => {
                    // Handle form submission
                  }}
                >
                  <Form>
                    <Field
                      as="textarea"
                      name="description"
                      rows="7"
                      cols="55"
                      className="border rounded border-gray-300 focus:outline-1 focus:ring focus:outline-gray-200  "
                    />
                    <p className="text-sm font-normal text-[#888888] mb-6">
                      This note will be attached to the current order.
                    </p>
                    <hr />
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setIsOpen(false)}
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
                    </div>{" "}
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;