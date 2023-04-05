import { ReactNode } from "react";
import { Module } from "../../types/Navigation";

export interface IAppContextData {
  navigation?: Module[];
  // handleRedirect: (route: string) => void
}

export interface IAppProviderProps {
  children?: ReactNode;
}
