"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { PrivateRouteProps } from "@/types/types";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (isAuthenticated) {
      setTimeout(() => setIsLoading(false), 3000);
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="h-screen justify-center items-center flex">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default PrivateRoute;
