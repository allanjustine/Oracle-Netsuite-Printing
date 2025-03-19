"use client";
import { useAuth } from "@/context/authcontext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import netsuite from "../../../public/netsuite-logo.png";
import smct from "../../../public/smct_group.png";
import { data } from "@/data/credentials";
import AlertBox from "@/components/ui/AlertBox";
import { login as loginApi, logout } from "@/lib/authSanctum";
import { FaCircleNotch } from "react-icons/fa";
import api from "@/lib/axiosCall";

export default function Home() {
  const { login, isAuthenticated, isLoading, setIsLoading } = useAuth();
  const router = useRouter();
  const [branchCode, setBranchCode] = useState<string>("");
  const [password, setPassword] = useState<string>("Smct123456");
  const [showAlert, setShowAlert] = useState<any>({
    message: "",
    error: false,
    warning: false,
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

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
          (user) => user.branchCode === branchCode && user.password === password
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

  return (
    <>
      <form onSubmit={handleLogin} method="POST">
        <div className="mt-20 flex gap-2 items-center justify-center mb-10">
          <Image src={netsuite} alt="NetSuite" width={200} />
          <Image src={smct} alt="SMCT Group of Companies" width={200} />
        </div>
        <h3 className="font-semibold text-2xl mb-5 text-center">LOGIN</h3>
        <div className="flex w-full justify-center items-center gap-3 text-[#333]">
          <div className="flex items-center gap-2">
            <label htmlFor="branchCode" className="font-medium">
              Branch Code:
            </label>
            <input
              type="text"
              name="branchCode"
              id="branchCode"
              className="border-2 rounded-md p-1 uppercase"
              value={branchCode}
              onChange={(e) => setBranchCode(e.target.value.toUpperCase())}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="password" className="font-medium">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 rounded-md p-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#607799] text-white border px-3 py-1 rounded-md"
          >
            {isLoading ? <span className="flex gap-1 items-center"><FaCircleNotch className="animate-spin" /> Logging In...</span> : "Login"}
          </button>
        </div>
      </form>
      <AlertBox
        message={showAlert.message}
        error={showAlert.error}
        warning={showAlert.warning}
        setShowAlert={setShowAlert}
      />
    </>
  );
}
