import { createContext, useContext } from "react";
import { IGlobalContextData, IGlobalProviderProps } from "./types";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const GlobalContext = createContext<IGlobalContextData>(
  {} as IGlobalContextData
);

export const GlobalProvider = ({ children }: IGlobalProviderProps) => {
  return (
    <GlobalContext.Provider value={{}}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};
