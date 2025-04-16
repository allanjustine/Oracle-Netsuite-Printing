"use client";
import Image from "next/image";
import smct from "../../public/smct_branch.png";
import dsm from "../../public/dsm.png";
import hd from "../../public/hd.png";
import ho from "../../public/smct_group.png";
import dap from "../../public/dap.jpg";
import { useAuth } from "@/context/authcontext";
import { FaAngleDown, FaHeadset, FaHome, FaRedo } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ buttonRefModal, handleModal }: any) {
  const { branch, user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const refreshPage = () => {
      window.location.reload();
  }

  return (
    <>
      <div className="py-2 pl-2 pr-4 flex items-center justify-between">
        <div>
          {branch?.branch === "SMCT" ? (
            <Image src={smct} alt="SMCT, Inc." width={200} />
          ) : branch?.branch === "DSM" ? (
            <Image src={dsm} alt="DES Strong Motors" width={200} />
          ) : branch?.branch === "HD" ? (
            <Image src={hd} alt="Honda DES" width={200} />
          ) : branch?.branch === "HO" ? (
            <Image src={ho} alt="SMCT Group of Companies" width={200}/>
          ) : branch?.branch === "DAP" ? (
            <Image src={dap} alt="DES Appliance Plaza" width={200}/>
          ) : (
            <div>Branch not found...</div>
          )}
        </div>
        <div>
          <button
            ref={buttonRef}
            onClick={toggleDropdown}
            className="font-semibold uppercase flex items-center gap-2 text-[#333]"
          >
            {user?.branchName}
            <FaAngleDown />
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute right-5 mt-2 py-1 px-5 bg-white border rounded shadow-lg">
              <button
                onClick={logout}
                className="w-full text-left text-sm font-medium text-[#333]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex py-2 pl-5 gap-5 bg-[#607799]">
        <button className="text-white">
          <FaHome size={25} color="white" />
        </button>
        <button onClick={refreshPage} className="text-white">
          <FaRedo size={20} color="white" />
        </button>
        <button onClick={handleModal} ref={buttonRefModal} className="text-white">
          <FaHeadset size={20} color="white" />
        </button>
      </div>
    </>
  );
}
