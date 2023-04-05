import { BaseComponentProps } from "../atoms/types";
import { Header, SideMenu } from "../molecules";
import { CardElement } from "../atoms";

export interface DefaultLayoutProps extends BaseComponentProps {}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex bg-blue-100">
      <SideMenu />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex w-full h-full p-2">
          <CardElement>{children}</CardElement>
        </div>
      </div>
    </div>
  );
};
