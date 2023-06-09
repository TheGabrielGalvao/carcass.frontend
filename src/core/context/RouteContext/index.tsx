import { createContext, useContext, useState } from "react";
import { IAppContextData, IAppProviderProps } from "./types";
import { OnBoardingLayout } from "../../components/templates";
import { DefaultLayout } from "../../components/templates/DefaultLayout";
import { useLocation, useParams } from "react-router-dom";
import { getRoutes } from "../../util/helpers/routing";
import { find } from "lodash";
import { PrivateRoutes, PublicRoutes } from "../../../config/routing";
import { Module, Page } from "../../types/Navigation";
import {
  ToastElement,
  ToastElementProps,
} from "../../components/atoms/ToastElement";

export const AppContext = createContext<IAppContextData>({} as IAppContextData);

export const AppProvider = ({ children }: IAppProviderProps) => {
  const location = useLocation();
  const privateRoutes = getRoutes({ private: true });
  const publicRoutes = getRoutes({ private: false });
  const isPrivateRoutes = find(
    privateRoutes,
    (route) =>
      location.pathname === route.route || route?.route?.includes("/edit/")
  );
  const isPublicRoutes = find(publicRoutes, { route: location.pathname });
  const [toast, setToast] = useState<ToastElementProps>();
  const [signed, setSigned] = useState(true);

  const handleSetToast = (config?: ToastElementProps): void => {
    setToast({
      ...config,
      type: config?.type,
      show: !toast?.show ?? false,
    });
  };

  return (
    <AppContext.Provider value={{ handleSetToast, toast }}>
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
