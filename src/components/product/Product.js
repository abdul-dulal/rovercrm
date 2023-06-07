import { useRef, useState } from "react";

const Modal = () => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.4)]"
          onClick={handleOutsideClick}
        >
          <div className="lg:w-10/12 md:w-4/5 m-auto mt-10">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Modal Content</h2>
              <p>This is the content of the modal.</p>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
