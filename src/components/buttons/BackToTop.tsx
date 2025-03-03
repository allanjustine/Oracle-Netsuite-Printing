import { FaArrowUp } from "react-icons/fa";

export default function BackToTop({ backToTop, handleBackToTop }: any) {
  return (
    <button
      type="button"
      onClick={handleBackToTop}
      className={`fixed p-3 rounded-full bg-blue-400 hover:bg-blue-500 text-white transition-all duration-300 ease-in-out ${
        backToTop
          ? "bottom-7 right-9 opacity-1"
          : "-bottom-10 opacity-0 right-9"
      }`}
    >
      <FaArrowUp />
    </button>
  );
}
