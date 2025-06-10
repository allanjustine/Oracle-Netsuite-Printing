"use client";
import data from "@/data/credentials.json";
import { fetchProfile } from "@/lib/authSanctum";
import { AuthContextType, Branch, User } from "@/types/types";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [branch, setBranch] = useState<Branch | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    // const storedBranch = localStorage.getItem('branch');  && storedBranch
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const foundBranch = data.find((branch) =>
        branch.users.some((user) => user.branchCode === parsedUser.branchCode)
      );
      if (foundBranch) {
        const foundUser = foundBranch.users.find(
          (user) => user.branchCode === parsedUser.branchCode
        );
        const adminFound: any = foundBranch.users.find(
          (user) => user.branchCode === parsedUser.branchCode
        );

        const isAdminUser =
          adminFound.branchCode === "ADMIN" &&
          parsedUser.branchCode === "ADMIN" &&
          parsedUser.id === 998877766 &&
          adminFound.password === "dapho04051983";
        adminFound.id === 998877766;

        setIsAdmin(isAdminUser);
        if (foundUser) {
          setUser(foundUser);
          setBranch(foundBranch);
          setIsAuthenticated(true);
        }
      }
    }

    setTimeout(() => {
      setIsLoadingData(false);
    }, 2000);
    // const fetchProfileData = async () => {
    //   try {
    //     const response = await fetchProfile();
    //     if (response.status === 200) {
    //       console.log(response);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchProfileData();
  }, []);

  const login = (
    foundUser: any,
    foundBranch: any,
    version: any,
    isAdminLogin: boolean
  ) => {
    const { password, ...Datas } = foundUser;
    setUser(foundUser);
    setBranch(foundBranch);
    setIsAuthenticated(true);
    setIsAdmin(isAdminLogin);
    localStorage.setItem("user", JSON.stringify(Datas));
    // localStorage.setItem('branch', JSON.stringify(foundBranch));
    localStorage.setItem("ls-app-version", version);
  };

  const logout = (router: any) => (e: any) => {
    e.preventDefault();
    router.push("/login");
    setUser(null);
    setIsAuthenticated(false);
    setBranch(null);
    setIsAdmin(false);
    localStorage.removeItem("user");
    // localStorage.removeItem('branch');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        user,
        branch,
        isLoading,
        setIsLoading,
        isAdmin,
        loadingData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
