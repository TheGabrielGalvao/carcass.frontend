import { ReactNode } from "react";
import { Module } from "../../types/Navigation";

export interface IGlobalContextData {
  navigation?: Module[];
  // handleRedirect: (route: string) => void
}

export interface IGlobalProviderProps {
  children?: ReactNode;
}
