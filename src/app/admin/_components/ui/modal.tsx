import { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function Modal({
  children,
  handleSubmitButton,
  isLoading,
  buttonText,
  buttonLoadingText,
  title,
  buttonColorHover,
  isOpen,
  setIsOpen,
}: any) {
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen, buttonRef, modalRef]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        onClick={handleModal}
        className={`px-2 py-1.5 flex gap-2 items-center ${buttonColorHover} hover:-translate-x-1 text-white transition-all ease-in-out duration-300 rounded-md`}
      >
        {title}
      </button>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="grid items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900/50 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md md:max-w-lg w-full">
              <button
                type="button"
                onClick={handleModal}
                className="absolute top-5 right-5"
              >
                <FaXmark className="text-gray-500" />
              </button>
              <div
                className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-full"
                ref={modalRef}
              >
                <form onSubmit={handleSubmitButton}>
                  <div className="px-6 pt-6 pb-2 border-b border-gray-100">
                    {children}
                  </div>

                  <div className="px-6 py-3 flex justify-end gap-2 bg-gray-50">
                    <button
                      disabled={isLoading}
                      type="submit"
                      className={`p-2 bg-blue-500 hover:bg-blue-600 hover:-translate-x-1 text-white rounded-md transition-all ease-in-out duration-300 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <span className="flex gap-1 items-center">
                        {isLoading ? buttonLoadingText : buttonText}
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={handleModal}
                      className="p-2 bg-gray-500 hover:bg-gray-600 hover:-translate-x-1 text-white rounded-md transition-all ease-in-out duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
