import { CurrencyDollarSimple } from "phosphor-react";
import { GenericPage } from "../../../core/components/templates/GenericPage";
import { EPositionItemMenu, Module } from "../../../core/types/Navigation";
import { Faturamento } from "./pages/Faturamento";
import { Dashboard } from "./pages/Dashboard";
import { FeatureProvider } from "../../../core/components/templates/FeatureProvider";

export const financialRoutes: Module = {
  id: 3,
  name: "finance",
  label: "Financeiro",
  icon: <CurrencyDollarSimple />,
  order: 3,
  position: EPositionItemMenu.MIDDLE,
  route: "/financial",
  element: (
    <FeatureProvider
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
      showInFeatureMenu: true,
      element: <Dashboard />,
      private: true,
    },
    {
      id: 51,
      name: "pagarreceber",
      route: "/financial/pagarreceber",
      showInFeatureMenu: true,
      label: "Contas a pagar/receber",
      element: <GenericPage text="Contas a pagar/receber" />,
      private: true,
    },
    {
      id: 52,
      name: "despesareceita",
      route: "/financial/despesareceita",
      showInFeatureMenu: true,
      label: "Despesa/Receita",
      element: <GenericPage text="Despesa/Receita" />,
      private: true,
    },
    {
      id: 53,
      name: "faturamento",
      route: "/financial/faturamento",
      showInFeatureMenu: true,
      label: "Faturamento",
      element: <Faturamento />,
      private: true,
    },
  ],
};
