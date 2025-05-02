import api from "@/lib/axiosCall";
import { useEffect, useRef, useState } from "react";
import { FaCircleNotch, FaTools } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  maintenanceErrors,
  maintenanceFormInput,
} from "../_constants/maintenanceModeData";
import { useFetchMaintenanceTime } from "@/hooks/useFetchMaintenanceTime";
import CountdownTimer from "./CountdownTimer";
import { Bounce, toast } from "react-toastify";
import { Toast } from "./ui/toast";

export default function MaintenanceModeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formInput, setFormInput] = useState(maintenanceFormInput);
  const [errors, setErrors] = useState(maintenanceErrors);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const {
    maintenanceTime,
    maintenanceType,
    isLoading: isLoadingMaintenance,
  }: any = useFetchMaintenanceTime(isLoading || isOpen);

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
  }, []);

  const handleModal = () => {
    setIsOpen(!isOpen);
    setFormInput(maintenanceFormInput);
    setErrors(maintenanceErrors);
  };

  const handleMaintenanceModeOn = async () => {
    setIsLoading(true);
    try {
      const response = await api.post("/maintenance-mode-on", { ...formInput });
      if (response.status === 204) {
        handleModal();
        Toast("Maintenance mode on successfully", "success");
      }
    } catch (error: any) {
      console.error(error);
      setErrors(error.response.data.errors);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (title: any) => (e: any) => {
    const { value } = e.target;
    setFormInput((prev: any) => ({
      ...prev,
      [title]: value,
    }));
  };

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        className="text-white"
        onClick={handleModal}
      >
        <FaTools />
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
                <div className="px-6 pt-6 pb-2 border-b border-gray-100">
                  <p
                    className="text-lg  mt-1"
                    hidden={maintenanceTime || maintenanceType}
                  >
                    {isLoading
                      ? "Activating maintenance mode please wait..."
                      : "Are you sure you want to make the system on maintenance mode?"}
                  </p>
                  <div className="mt-5">
                    {isLoading || isLoadingMaintenance ? (
                      <div className="flex items-center justify-center gap-1">
                        <div className="w-4 h-4 rounded-full animate-ping bg-red-500"></div>
                        <div className="w-4 h-4 rounded-full animate-ping bg-yellow-500"></div>
                        <div className="w-4 h-4 rounded-full animate-ping bg-green-500"></div>
                      </div>
                    ) : maintenanceTime || maintenanceType ? (
                      <CountdownTimer initialTimeInSeconds={maintenanceTime} />
                    ) : (
                      <>
                        <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">
                          Schedule Maintenance
                        </h2>
                        <div className="mb-6">
                          <label
                            htmlFor="maintenance_type"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Maintenance Type
                          </label>
                          <p className="text-xs text-gray-500 mb-2">
                            Maintenance type is optional
                          </p>
                          <div className="relative">
                            <select
                              id="maintenance_type"
                              onChange={handleChange("maintenance_type")}
                              className="block w-full px-4 py-3 pr-8 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            >
                              <option value="" hidden>
                                Select Maintenance Type
                              </option>
                              <option value="" disabled>
                                Select Maintenance Type
                              </option>
                              <option value="System improvements">
                                System improvements
                              </option>
                              <option value="Database migration">
                                Database migration
                              </option>
                              <option value="Security update">
                                Security update
                              </option>
                              <option value="Feature deployment">
                                Feature deployment
                              </option>
                              <option value="Emergency fix">
                                Emergency fix
                              </option>
                              <option value="Bug fixing">Bug fixing</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="block text-sm font-medium text-gray-700">
                            Maintenance End Time
                            <span className="text-red-500 ml-1">*</span>
                          </label>
                          <p className="text-xs text-gray-500 mb-2">
                            Select when maintenance mode finished
                          </p>
                          <div className="relative">
                            <input
                              type="datetime-local"
                              onChange={handleChange("finished_at")}
                              value={formInput.finished_at}
                              className={`block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none bg-white ${
                                errors?.finished_at && "border-red-500"
                              }`}
                            />
                          </div>
                          {errors?.finished_at && (
                            <p className="text-xs text-red-500 mb-2">
                              {errors.finished_at[0]}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="px-6 py-3 flex justify-end gap-2 bg-gray-50">
                  {!maintenanceTime && !maintenanceType && (
                    <button
                      onClick={handleMaintenanceModeOn}
                      disabled={isLoading}
                      type="button"
                      className={`p-2 bg-blue-500 hover:bg-blue-600 hover:-translate-x-1 text-white rounded-md transition-all ease-in-out duration-300 ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex gap-1 items-center">
                          <FaCircleNotch className="animate-spin" /> Activating
                        </span>
                      ) : (
                        "Yes, I'm sure"
                      )}
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleModal}
                    className="p-2 bg-gray-500 hover:bg-gray-600 hover:-translate-x-1 text-white rounded-md transition-all ease-in-out duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
