import { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export default function AlertBox({
  message,
  error,
  warning,
  setShowAlert,
}: any) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message || error || warning) {
      setIsVisible(true);
    }
  }, [message, error, warning]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowAlert({
        message: "",
        error: false,
        warning: false,
      });
    }, 300);
  };

  return (
    <div
      className={`flex justify-center transition-all transform duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`max-w-lg mx-auto my-4 p-4 border-l-4 shadow-lg rounded-lg ${
          isVisible ? "block" : "hidden"
        } ${
          error
            ? "border-red-500 bg-red-50 text-red-800"
            : warning
            ? "border-yellow-500 bg-yellow-50 text-yellow-800"
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaExclamationTriangle className="w-6 h-6" />
            <p className="text-sm font-semibold">{message}</p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className={`focus:outline-none ${
              error
                ? "text-red-600 hover:text-red-800"
                : warning
                ? "text-yellow-600 hover:text-yellow-800"
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
