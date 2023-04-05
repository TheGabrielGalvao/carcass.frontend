import { SignIn } from "phosphor-react";
import { EPositionItemMenu } from "../../../core/types/Navigation";
import { Login } from "./pages/Login";

export const onboardingRoutes = {
  id: 4,
  name: "login",
  label: "Login",
  route: "/login",
  position: EPositionItemMenu.MIDDLE,
  icon: <SignIn />,
  element: <Login />,
  private: false,
};
