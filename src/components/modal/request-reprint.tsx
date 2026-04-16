import api from "@/lib/axiosCall";
import { Dispatch, SetStateAction, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function RequestReprint({
  isRequestedReprint,
  setIsRequestedReprint,
  externalId,
  setExternalId,
}: {
  isRequestedReprint: boolean;
  setIsRequestedReprint: Dispatch<SetStateAction<boolean>>;
  externalId: string;
  setExternalId: Dispatch<SetStateAction<string>>;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reason, setReason] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleRequestReprint = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/request-reprints", {
        external_id: externalId,
        reason,
      });

      if (response.status === 204) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Reprint request sent successfully",
        });
        setErrors({});
        setError("");
        setIsRequestedReprint(false);
        setExternalId("");
        setReason("");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
        setError("");
      } else {
        setErrors({});
        setError(
          error.response.data.message ||
            "Something went wrong, please try again later.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isRequestedReprint) return null;

  return (
    <div className="fixed z-[99] inset-0 overflow-y-auto">
      <div className="grid items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-900/50 opacity-75"></div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md md:max-w-lg w-full">
          <button
            type="button"
            onClick={() => {
              setIsRequestedReprint(false);
              setExternalId("");
            }}
            className="absolute top-5 right-5"
          >
            <FaXmark className="text-gray-500" />
          </button>
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden w-full">
            <div className="px-6 pt-6 pb-2 border-b border-gray-100 space-y-5">
              <div className="divide-y divide-gray-100 pt-5 space-y-3">
                <p>
                  You're about to request a reprint to a reference # of{" "}
                  <span className="text-red-500 font-bold">{externalId}</span>.
                </p>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="reason" className="text-sm text-gray-600">
                    Enter a reason for re-print
                  </label>
                  <textarea
                    rows={5}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className={`resize-none border ${errors.reason ? "border-red-600" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:outline-none p-2`}
                    placeholder="Enter a reason for re-print..."
                  ></textarea>
                  {errors.reason && (
                    <small className="text-red-500">{errors.reason[0]}</small>
                  )}
                </div>
              </div>
              {(error || errors.external_id) && (
                <div className="bg-red-200 rounded-md text-red-500 text-center py-3">
                  <small>{error || errors.external_id[0]}</small>
                </div>
              )}
              <div>
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handleRequestReprint}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
                >
                  {isLoading ? "Please Wait..." : "Request Reprint"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
