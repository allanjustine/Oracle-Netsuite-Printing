import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

export default function Pagination({
  pagination,
  handleNextPage,
  handlePrevPage,
  handleFirstPage,
  handleLastPage,
}: any) {
  return (
    <div className="flex gap-5 mt-2 justify-center">
      <button
        type="button"
        onClick={handleFirstPage}
        className={`p-2 border rounded-md ${
          pagination?.current_page === 1 && "bg-gray-200 cursor-not-allowed"
        }`}
        disabled={pagination?.current_page === 1}
      >
        <FaAnglesLeft />
      </button>
      <button
        type="button"
        onClick={handlePrevPage}
        className={`p-2 border rounded-md ${
          pagination?.current_page === 1 && "bg-gray-200 cursor-not-allowed"
        }`}
        disabled={pagination?.current_page === 1}
      >
        <FaAngleLeft />
      </button>
      <span className="p-2 text-sm text-gray-500">
        Page {pagination?.current_page} of {pagination?.last_page} - (
        {pagination?.total} record(s))
      </span>
      <button
        type="button"
        onClick={handleNextPage}
        className={`p-2 border rounded-md ${
          pagination?.current_page === pagination?.last_page &&
          "bg-gray-200 cursor-not-allowed"
        }`}
        disabled={pagination?.current_page === pagination?.last_page}
      >
        <FaAngleRight />
      </button>
      <button
        type="button"
        onClick={handleLastPage}
        className={`p-2 border rounded-md ${
          pagination?.current_page === pagination?.last_page &&
          "bg-gray-200 cursor-not-allowed"
        }`}
        disabled={pagination?.current_page === pagination?.last_page}
      >
        <FaAnglesRight />
      </button>
    </div>
  );
}
