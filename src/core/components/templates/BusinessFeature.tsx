import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { HeadingElement } from "../../../core/components/atoms";
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
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-between items-center">
        <HeadingElement size="lg">{title}</HeadingElement>
        <FeatureMenu route={rootPath} />
      </div>
      <div className="flex flex-col p-10">
        <Outlet />
      </div>
    </div>
  );
};
