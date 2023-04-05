import { AddressBook } from "phosphor-react";
import { CrudFeature } from "../../../core/components/templates/CrudFeature";
import { EPositionItemMenu } from "../../../core/types/Navigation";
import { ContactForm } from "./pages/ContactForm";
import { ContactList } from "./pages/ContactList";

export const contactRoutes = {
  id: 2,
  name: "contacts",
  label: "Contatos",
  icon: <AddressBook />,
  order: 2,
  position: EPositionItemMenu.MIDDLE,
  route: "/contacts",
  element: <CrudFeature title="Contatos" />,
  private: true,
  pages: [
    {
      id: 60,
      name: "new",
      route: "/contacts/new",
      element: <ContactForm />,
      private: true,
    },
    {
      id: 61,
      name: "list",
      route: "/contacts/list",
      element: <ContactList />,
      private: true,
    },
  ],
};
