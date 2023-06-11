import { BaseComponentProps } from "../atoms/types";
import { Header, SideMenu } from "../molecules";
import { ToastElement } from "../atoms/ToastElement";
import { Check } from "phosphor-react";
import { useRoute } from "../../context/RouteContext";

export interface DefaultLayoutProps extends BaseComponentProps {}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { toast } = useRoute();
  return (
    <div className="overflow-y-hidden max-h-screen">
      <ToastElement {...toast} />
      <div className="flex bg-blue-100">
        <SideMenu />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex w-full h-full p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
