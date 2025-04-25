import ContactAdmin from "@/components/modal/ContactAdmin";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function NotLogin() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [buttonRef, modalRef]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-white mt-4">
            Access Restricted
          </h1>
        </div>

        <div className="p-8 text-center">
          <div className="text-gray-600 mb-6">
            <p className="mb-4">
              You need to be logged in to access this page.
            </p>
            <p>Please sign in to continue or register for an account.</p>
          </div>

          <div className="space-y-4">
            <Link
              href="/login"
              className="w-full block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              Having trouble?{" "}
              <button
                ref={buttonRef}
                type="button"
                onClick={handleModal}
                className="text-blue-600 hover:underline"
              >
                Contact development team
              </button>
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SMCT Dev Team. All rights reserved.
          </p>
        </div>
      </div>
      <ContactAdmin isOpen={isOpen} onClose={handleModal} modalRef={modalRef} />
    </div>
  );
}
