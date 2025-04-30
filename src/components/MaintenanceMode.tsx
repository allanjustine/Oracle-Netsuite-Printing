"use client";

import CountdownTimer from "@/app/admin/_components/CountdownTimer";
import { useFetchMaintenanceTime } from "@/hooks/useFetchMaintenanceTime";
import { FaClock } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function MaintenanceMode({ handleModal, buttonRef }: any) {
  const { maintenanceTime, maintenanceType, isLoading }: any =
    useFetchMaintenanceTime(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center md:p-4">
      <div className="max-w-xl w-full bg-white md:rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaClock
                className="h-8 w-8 text-white animate-spin"
                style={{ animationDuration: "2s" }}
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">System Maintenance</h1>
          <p className="text-blue-100 mt-2">
            We're working hard to improve your experience
          </p>
        </div>
        <div className="p-8 text-center">
          <FaTriangleExclamation className="h-16 w-16 text-yellow-300 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Scheduled Maintenance in Progress
          </h2>
          <h1 className="text-4xl font-bold underline text-blue-800 mb-2">
            {isLoading ? "Loading..." : maintenanceType}
          </h1>
          <p className="text-gray-600 mb-6">
            Our platform is currently undergoing scheduled maintenance to bring
            you new features and improvements. We apologize for any
            inconvenience and appreciate your patience.
          </p>

          {isLoading ? (
            "Loading..."
          ) : (
            <CountdownTimer initialTimeInSeconds={maintenanceTime} />
          )}

          <div className="space-y-3 text-sm text-gray-500">
            <p>In the meantime, you can:</p>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                ref={buttonRef}
                onClick={handleModal}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Contact development team
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SMCT Web Dev. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
