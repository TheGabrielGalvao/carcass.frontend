import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { getPages } from "../../util/helpers/routing";

interface FeatureMenuProps {
  route: string;
}

export const FeatureMenu = ({ route }: FeatureMenuProps) => {
  const pages = getPages({ route: route });
  return (
    <div className="flex gap-2 justify-center items-center py-2">
      {pages
        ?.filter(
          (x) => x.label?.length && x.label?.length > 0 && x.showInFeatureMenu
        )
        .map((item) => (
          <NavLink
            key={item.id}
            to={item?.route || ""}
            end={item?.exact}
            className={({ isActive, isPending }) =>
              clsx("py-2 px-4 hover:opacity-75", {
                "bg-blue-200 shadow-md text-blue-800 border border-blue-800 font-bold rounded-full":
                  isActive,
                "text-grey-500 bg-transparent": isPending,
              })
            }
          >
            {item.label}
          </NavLink>
        ))}
    </div>
  );
};
