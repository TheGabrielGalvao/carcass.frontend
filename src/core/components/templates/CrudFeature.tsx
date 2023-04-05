import { Plus } from "phosphor-react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ButtonElement, HeadingElement } from "../../../core/components/atoms";

interface CrudFeatureProps {
  title: string;
  defaultRoute?: string;
}

export const CrudFeature = ({ title }: CrudFeatureProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const padrao = /\/list$/;
  const pathList = location.pathname.split("/");

  useEffect(() => {
    if (pathList.length < 3) {
      navigate("list");
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex max-w-fit gap-4 justify-between items-center">
        <HeadingElement className="" size="lg">
          {title}
        </HeadingElement>
        {padrao.test(location.pathname) && (
          <ButtonElement
            variant="primary"
            type="submit"
            onClick={() => navigate("new")}
          >
            <Plus size={25} className="font-bold" />
          </ButtonElement>
        )}
      </div>
      <div className="flex flex-col p-10">
        <Outlet />
      </div>
    </div>
  );
};
