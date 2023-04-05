import { createContext, useContext, useState } from "react";
import { IAppContextData, IAppProviderProps } from "./types";
import { OnBoardingLayout } from "../../components/templates";
import { DefaultLayout } from "../../components/templates/DefaultLayout";
import { useLocation } from "react-router-dom";
import { getRoutes } from "../../util/helpers/routing";
import { find } from "lodash";
import { PrivateRoutes, PublicRoutes } from "../../../config/routing";

export const AppContext = createContext<IAppContextData>({} as IAppContextData);

export const AppProvider = ({ children }: IAppProviderProps) => {
  const location = useLocation();
  const privateRoutes = getRoutes({ private: true });
  const publicRoutes = getRoutes({ private: false });
  const isPrivateRoutes = find(privateRoutes, { route: location.pathname });
  const isPublicRoutes = find(publicRoutes, { route: location.pathname });
  const [signed, setSigned] = useState(true);

  return (
    <AppContext.Provider value={{}}>
      {isPublicRoutes && (
        <OnBoardingLayout
          headerText="Gestão"
          secondaryText="Faça login e comece a usar!"
        >
          <PublicRoutes />
        </OnBoardingLayout>
      )}
      {isPrivateRoutes && (
        <DefaultLayout>
          <PrivateRoutes />
        </DefaultLayout>
      )}
    </AppContext.Provider>
  );
};

export const useRoute = () => {
  const context = useContext(AppContext);
  return context;
};
