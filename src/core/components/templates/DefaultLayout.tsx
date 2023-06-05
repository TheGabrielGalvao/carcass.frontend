import { BaseComponentProps } from "../atoms/types";
import { Header, SideMenu } from "../molecules";
import { ToastElement } from "../atoms/ToastElement";
import { Check } from "phosphor-react";

export interface DefaultLayoutProps extends BaseComponentProps {}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      {/* <ToastElement
        message="Registro salvo com Sucesso"
        icon={<Check size={20} weight="bold" />}
      /> */}
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
