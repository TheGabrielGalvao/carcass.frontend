import { CurrencyDollarSimple } from "phosphor-react";
import { BusinessFeature } from "../../../core/components/templates/BusinessFeature";
import { GenericPage } from "../../../core/components/templates/GenericPage";
import { EPositionItemMenu } from "../../../core/types/Navigation";
import { Faturamento } from "./pages/Faturamento";

export const financialRoutes = {
  id: 3,
  name: "finance",
  label: "Financeiro",
  icon: <CurrencyDollarSimple />,
  order: 3,
  position: EPositionItemMenu.MIDDLE,
  route: "/financial",
  element: (
    <BusinessFeature
      title="Financeiro"
      rootPath="/financial"
      initialPath="dashboard"
    />
  ),
  private: true,
  pages: [
    {
      id: 50,
      name: "dashboard",
      route: "/financial/dashboard",
      label: "Dashboard",
      element: <GenericPage text="Dashboard" />,
      private: true,
    },
    {
      id: 51,
      name: "pagarreceber",
      route: "/financial/pagarreceber",
      label: "Contas a pagar/receber",
      element: <GenericPage text="Contas a pagar/receber" />,
      private: true,
    },
    {
      id: 52,
      name: "despesareceita",
      route: "/financial/despesareceita",
      label: "Despesa/Receita",
      element: <GenericPage text="Despesa/Receita" />,
      private: true,
    },
    {
      id: 53,
      name: "faturamento",
      route: "/financial/faturamento",
      label: "Faturamento",
      element: <Faturamento />,
      private: true,
    },
  ],
};
