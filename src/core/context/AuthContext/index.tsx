import React, { createContext, useContext, useEffect, useState } from "react";
import { IAuthContextData, IAuthProviderProps } from "./types";
import { AuthModel } from "../../../models/Auth.model";
import AuthService from "../../../services/AuthService";
import { useGlobal } from "../GlobalContext";
import axios from "axios";

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { navigate } = useGlobal();
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    if (!isAuthenticated) {
      if (!token) {
        navigate("/login");
      }
    }
  }, [isAuthenticated]);

  const login = async (data: AuthModel) => {
    try {
      const result = await AuthService.login(data);

      setIsAuthenticated(true);
      setToken(result.token);
      localStorage.setItem("token", result.token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${result.token}`;

      navigate("/");
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    navigate("/login");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  const value: IAuthContextData = {
    isAuthenticated,
    login,
    logout,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};
