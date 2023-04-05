import { UsersThree } from "phosphor-react";
import { CrudFeature } from "../../../core/components/templates/CrudFeature";
import { EPositionItemMenu } from "../../../core/types/Navigation";
import { UserForm } from "./pages/UserForm";
import { UserList } from "./pages/UserList";

export const userRoutes = {
  id: 8,
  name: "users",
  label: "Usuários",
  icon: <UsersThree />,
  order: 2,
  position: EPositionItemMenu.MIDDLE,
  route: "/users",
  element: <CrudFeature title="Usuários" />,
  private: true,
  pages: [
    {
      id: 60,
      name: "new",
      route: "/users/new",
      element: <UserForm />,
      private: true,
    },
    {
      id: 61,
      name: "list",
      route: "/users/list",
      element: <UserList />,
      private: true,
    },
  ],
};
