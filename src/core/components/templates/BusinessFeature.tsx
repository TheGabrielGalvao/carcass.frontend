import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BreadCrumbs, HeadingElement } from "../../../core/components/atoms";
import { FeatureMenu } from "../../../core/components/molecules/FeatureMenu";

interface BusinessFeatureProps {
  title?: string;
  rootPath: string;
  initialPath?: string;
}

export const BusinessFeature = ({
  title,
  rootPath,
  initialPath,
}: BusinessFeatureProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == rootPath && initialPath) {
      navigate(initialPath);
    }
  }, [location.pathname]);
  return (
    <div className="flex flex-col w-full pt-4 px-4 gap-5 overflow-y-hidden">
      <div className="flex w-full justify-between items-center overflow-y-hidden">
        {/* <HeadingElement size="lg">{title}</HeadingElement> */}
        <BreadCrumbs />
        <FeatureMenu route={rootPath} />
      </div>
      <div className="flex flex-col h-full overflow-y-hidden">
        <Outlet />
      </div>
    </div>
  );
};
