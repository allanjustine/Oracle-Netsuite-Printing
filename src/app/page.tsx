"use client";

import { useAuth } from "@/context/authcontext";
import Link from "next/link";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const { isAuthenticated, isAdmin } = useAuth();
  useEffect(() => {
    Swal.fire({
      icon: "info",
      title: "Welcome to SMCT Printing System",
      text: "Good morning! Since this is the new link of the SMCT Printing System, you may need to log in again and use your Branch Code and (Smct123456) as your password. Thank you!",
      showConfirmButton: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-full border-2 border-[#607799] flex flex-col items-center justify-center py-20 mx-40">
        <h2 className="text-3xl text-[#333] font-semibold">
          SMCT PRINTING SYSTEM
        </h2>
        <h5 className="mt-3 text-xl text-[#333] font-medium">
          By: SMCT GROUP OF COMPANIES
        </h5>
        <p className="text-center w-full mt-3 px-20">
          This SMCT Printing System is designed to print data from the official
          SMCT platform and import it into the company's system, ensuring a
          consistent format that aligns with the standards of SMCT Group of
          Companies.
        </p>
        <div className="mt-5 w-1/6">
          {isAuthenticated ? (
            <Link
              href={isAdmin ? "/admin/dashboard" : "/dashboard"}
              legacyBehavior
            >
              <button className="bg-[#006aff] text-white py-2 rounded-md font-semibold w-full">
                DASHBOARD
              </button>
            </Link>
          ) : (
            <Link href="/login" legacyBehavior>
              <button className="bg-[#006aff] text-white py-2 rounded-md font-semibold w-full">
                LOG IN
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
