import { ReactNode } from "react";

export interface User {
  branchCode: string;
  branchName: string;
}

export interface Branch {
  branch: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (branchCode: string, password: string, version: any, isAdminLogin: boolean) => void;
  logout: (router: any) => void | any;
  user: User | null;
  branch: Branch | null;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin: boolean;
  loadingData: boolean;
}

export interface PrivateRouteProps {
  children: ReactNode;
  handleModal: () => void;
  buttonRefModal: any;
}

export interface PrintPageProps {
  componentType?: string;
  data: any[][];
}
