"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { PrivateRouteProps } from "@/types/types";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import GlobalLoader from "./loaders/GlobalLoaders";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  handleModal,
  buttonRefModal,
}) => {
  const {
    isAuthenticated,
    setIsLoading: setIsLoadingContext,
    isAdmin,
  } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (isAuthenticated) {
      setIsLoadingContext(false);
      setTimeout(() => setIsLoading(false), 3000);
      if (isAdmin) {
        router.push("/admin/dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isAuthenticated, router, setIsLoadingContext, isAdmin]);

  if (isLoading) return <GlobalLoader />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar handleModal={handleModal} buttonRefModal={buttonRefModal} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default PrivateRoute;
