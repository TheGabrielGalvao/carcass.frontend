import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { getPages } from "../../util/helpers/routing";

interface FeatureMenuProps {
  route: string;
}

export const FeatureMenu = ({ route }: FeatureMenuProps) => {
  const pages = getPages({ route: route });
  return (
    <div className="flex gap-4 ">
      {pages?.map((item) => (
        <NavLink
          key={item.id}
          to={item?.route || ""}
          end={item?.exact}
          className={({ isActive, isPending }) =>
            clsx("p-3", {
              "border-secondary-400 border-2 rounded-lg": isActive,
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
