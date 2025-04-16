"use client";
import { useAuth } from "@/context/authcontext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import netsuite from "../../../public/netsuite-logo.png";
import smct from "../../../public/smct_group.png";
import { data } from "@/data/credentials";
import AlertBox from "@/components/ui/AlertBox";
import { login as loginApi, logout } from "@/lib/authSanctum";
import { FaCircleNotch } from "react-icons/fa";
import api from "@/lib/axiosCall";
import ContactAdmin from "@/components/modal/ContactAdmin";
import { useVersion } from "@/context/versionContext";
import MaintenanceMode from "@/components/ui/MaintenanceMode";
import GlobalLoader from "@/components/loaders/GlobalLoaders";

export default function Home() {
  const { login, isAuthenticated, isLoading, setIsLoading } = useAuth();
  const router = useRouter();
  const [branchCode, setBranchCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<any>({
    message: "",
    error: false,
    warning: false,
  });
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { isMaintenance, isFetchingVersion }: any = useVersion();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const version = await api.get("/app-version");
      if (!branchCode || !password) {
        setShowAlert({
          message: "All fields are required!",
          warning: true,
          error: false,
        });
        setIsLoading(false);
      } else {
        const foundBranch: any = data.find((branch) =>
          branch.users.some(
            (user) =>
              user.branchCode === branchCode && user.password === password
          )
        );

        if (foundBranch) {
          const foundUser: any = foundBranch.users.find(
            (user: any) =>
              user.branchCode === branchCode && user.password === password
          );
          if (foundUser) {
            login(foundUser, foundBranch, version.data.version);
          }
        } else {
          setShowAlert({
            message: "Invalid credentials",
            error: true,
            warning: false,
          });
          setIsLoading(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginApi = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const credentials = {
      branchCode,
      password,
    };

    try {
      const response = await loginApi(credentials);
      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      const response = await logout();

      console.log(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowPassword = () => {
    setIsPasswordShow(!isPasswordShow);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  if (isFetchingVersion) return <GlobalLoader />;

  if (isMaintenance && !isFetchingVersion)
    return (
      <>
        <MaintenanceMode handleModal={handleModal} buttonRef={buttonRef} />
        <ContactAdmin
          isOpen={isOpen}
          onClose={handleModal}
          modalRef={modalRef}
        />
      </>
    );

  return (
    <div className="grid items-center h-screen">
      <div>
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="mb-5">
            <div className="flex flex-col items-center">
              <div className="flex gap-4 items-center mb-6">
                <Image
                  src={netsuite}
                  alt="NetSuite"
                  width={120}
                  className="transition-transform hover:scale-105"
                />
                <Image
                  src={smct}
                  alt="SMCT Group of Companies"
                  width={120}
                  className="transition-transform hover:scale-105"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-500">Sign in to your account</p>
            </div>

            <AlertBox
              message={showAlert.message}
              error={showAlert.error}
              warning={showAlert.warning}
              setShowAlert={setShowAlert}
            />
          </div>

          {/* Input Fields */}
          <div className="space-y-3">
            <div className="space-y-1">
              <label
                htmlFor="branchCode"
                className="block text-sm font-medium text-gray-400"
              >
                Branch Code
              </label>
              <input
                type="text"
                name="branchCode"
                id="branchCode"
                className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:outline-none ${
                  showAlert.warning && "border-red-500"
                }`}
                placeholder="Enter branch code"
                value={branchCode}
                onChange={(e) => setBranchCode(e.target.value.toUpperCase())}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-400"
                >
                  Password
                </label>
              </div>
              <input
                type={isPasswordShow ? "text" : "password"}
                name="password"
                id="password"
                className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:outline-none ${
                  showAlert.warning && "border-red-500"
                }`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <div className="mt-2 flex items-center">
                  <input
                    type="checkbox"
                    onChange={handleShowPassword}
                    checked={isPasswordShow}
                    className="cursor-pointer h-4 w-4 rounded-md"
                  />
                  <span
                    className="ml-2 text-gray-500 text-sm cursor-pointer hover:underline"
                    onClick={handleShowPassword}
                  >
                    {isPasswordShow ? "Hide" : "Show"} password
                  </span>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                isLoading
                  ? "bg-blue-400"
                  : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <FaCircleNotch className="animate-spin" />
                  Authenticating...
                </span>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              ref={buttonRef}
              type="button"
              onClick={handleModal}
              className="font-medium text-blue-600 hover:underline"
            >
              Contact development team
            </button>
          </div>
        </form>
      </div>
      <ContactAdmin isOpen={isOpen} onClose={handleModal} modalRef={modalRef} />
    </div>
  );
}
