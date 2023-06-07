import { CaretRight, HouseSimple } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";
import { getPages, getRouteInfo } from "../../util/helpers/routing";
import clsx from "clsx";

interface BreadCrumbProps {
  route: string;
}

export const BreadCrumbs = ({ route }: BreadCrumbProps) => {
  const routeInfo = getRouteInfo({ route: route });
  const location = useLocation();
  const currentPage = routeInfo.pages?.find(
    (x) => x.route === location.pathname
  );
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <NavLink
          key={0}
          to="/"
          end={true}
          className={({ isActive, isPending }) =>
            clsx(
              "py-2 px-4",
              {
                "bg-secondary-400 text-white border-2 rounded-full": isActive,
                "text-grey-500 bg-transparent": isPending,
              },
              "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            )
          }
        >
          <HouseSimple className="w-4 h-4 mr-2" weight="fill" />
          Home
        </NavLink>
        <li>
          <div className="flex items-center">
            <CaretRight className="w-4 h-4 mr-2" weight="bold" />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              <NavLink
                key={1}
                to={routeInfo?.route ?? ""}
                end={routeInfo?.exact}
                className={({ isActive, isPending }) =>
                  clsx(
                    "py-2 px-4",
                    {
                      "text-white ": isActive,
                      "text-grey-500": isPending,
                    },
                    "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  )
                }
              >
                {routeInfo.label}
              </NavLink>
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <CaretRight className="w-4 h-4 mr-2" weight="bold" />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              {currentPage?.label}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
