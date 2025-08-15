"use client";

import ContactAdmin from "@/components/modal/ContactAdmin";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RxReload } from "react-icons/rx";

export default function Error() {
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

  function handleReloadPage() {
    window.location.reload();
  }

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

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
          We're sorry, but something unexpected happened.{" "}
          <button
            ref={buttonRef}
            type="button"
            onClick={handleModal}
            className="font-medium text-blue-600 hover:underline"
          >
            Please contact development team
          </button>
        </p>
        <p className="mt-4 text-gray-500">
          Please try again later or contact support if the problem persists.
        </p>
        <div className="mt-5 w-full flex justify-center">
          <button
            onClick={handleReloadPage}
            type="button"
            className="text-white p-3 bg-blue-500 hover:bg-blue-600 rounded-md flex gap-1 items-center transition-all duration-300 ease-in-out hover:scale-105"
          >
            <RxReload /> <span>Reload Page</span>
          </button>
        </div>
      </div>

      <ContactAdmin isOpen={isOpen} onClose={handleModal} modalRef={modalRef} />
    </div>
  );
}
