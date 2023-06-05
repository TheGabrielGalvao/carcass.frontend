import { ReactNode } from "react";
import { AuthModel } from "../../../models/Auth.model";

export interface IAuthContextData {
  isAuthenticated: boolean;
  login: (data: AuthModel) => void;
  logout: () => void;
  token: string | null;
}

export interface IAuthProviderProps {
  children?: ReactNode;
}
