import { FaXmark } from "react-icons/fa6";

export default function Modal({
  children,
  isOpen,
  onClose,
  handleGoPrint,
}: any) {

  return (
    <>
      <div className={`fixed inset-0 overflow-y-auto ${isOpen ? "opacity-100 z-50" : "opacity-0 -z-50"}`}>
        <div className="grid items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900/50 opacity-75"></div>
          </div>
          <div
            className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle md:w-10/12 w-full transform transition-transform duration-300 ease-in-out ${
              isOpen ? "scale-100" : "scale-50"
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5"
            >
              <FaXmark className="text-gray-500" />
            </button>
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-full">
              <div className="px-5 pt-2">
                <p className="font-bold text-gray-600">
                  Preview the data to ensure all details are correct and avoid
                  reprinting.
                </p>
                <p className="font-bold text-gray-600">
                  Please click the{" "}
                  <span className="font-bolder text-green-500">"Go Print"</span>{" "}
                  if ready to print.
                </p>
                <p>
                  <span className="font-bold text-red-500">Take Note: </span>{" "}
                  <span className="font-bold text-gray-600">
                    This is only a preview of the data not a real print.
                  </span>
                </p>
              </div>
              <div className="px-6 pt-6 pb-2 border-b border-gray-100 w-full h-[70vh] overflow-y-auto">
                {children}
              </div>

              <div className="px-6 py-3 flex justify-end gap-2 bg-gray-50">
                <button
                  type="button"
                  onClick={handleGoPrint}
                  className="p-2 bg-green-500 hover:bg-green-600 hover:-translate-x-1 text-white rounded-md transition-all ease-in-out duration-300"
                >
                  Go Print
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 bg-gray-500 hover:bg-gray-600 hover:-translate-x-1 text-white rounded-md transition-all ease-in-out duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
