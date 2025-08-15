"use client";

import Image from "next/image";
import { RxReload } from "react-icons/rx";

export default function Error() {
  function handleReloadPage() {
    window.location.reload();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something Went Wrong
        </h1>
        <Image
          src="https://www.svgrepo.com/show/379925/alert-error.svg"
          alt="Error Illustration"
          width={0}
          height={0}
          className="mx-auto mb-6 w-64 h-64"
        />
        <p className="text-lg text-gray-600">
          We're sorry, but something unexpected happened. Our team has been
          notified.
        </p>
        <p className="mt-4 text-gray-500">
          Please try again later or contact support if the problem persists.
        </p>
        <div className="mt-5 transition-all duration-300 ease-in-out hover:scale-105 w-full flex justify-center">
          <button
            onClick={handleReloadPage}
            type="button"
            className="text-white p-3 bg-blue-500 hover:bg-blue-600 rounded-md flex gap-1 items-center"
          >
            <RxReload /> <span>Reload Page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
