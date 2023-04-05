import { createContext, useContext } from "react";
import { IGlobalContextData, IGlobalProviderProps } from "./types";

export const GlobalContext = createContext<IGlobalContextData>(
  {} as IGlobalContextData
);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};
