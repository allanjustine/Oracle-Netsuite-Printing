import { ReactNode } from 'react';

export interface User {
    branchCode: string;
    branchName: string;
  }

export interface Branch{
    branch: string;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    login: (branchCode: string, password: string) => void;
    logout: () => void;
    user: User | null;
    branch: Branch | null;
  }

export interface PrivateRouteProps {
    children: ReactNode;
  }

export interface PrintPageProps {
  componentType?: string;
  data: any[][];
}