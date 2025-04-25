export default function Pagination({
  pagination,
  handleNextPage,
  handlePrevPage,
}: any) {
  return (
    <div className="flex gap-5 mt-2 justify-center">
      <button
        type="button"
        onClick={handlePrevPage}
        className={`p-2 border rounded-md ${
          pagination?.current_page === 1 && "bg-gray-200 cursor-not-allowed"
        }`}
        disabled={pagination?.current_page === 1}
      >
        Prev
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
        Next
      </button>
    </div>
  );
}
