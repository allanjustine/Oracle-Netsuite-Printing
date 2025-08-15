"use client";

import { useAuth } from "@/context/authcontext";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  const { isAuthenticated } = useAuth();
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
        <p className="mt-5 transition-all duration-300 ease-in-out hover:scale-105">
          {isAuthenticated ? (
            <Link
              href={"/dashboard"}
              className="text-white p-3 bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              Back to Dashboard
            </Link>
          ) : (
            <Link
              href={"/"}
              className="text-white p-3 bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              Back to Home
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}
