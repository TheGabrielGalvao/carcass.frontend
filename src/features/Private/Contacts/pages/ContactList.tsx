import { takeRight } from "lodash";
import { Column } from "../../../../core/components/atoms/BasicTable";
import { useQuery, useQueryClient } from "react-query";
import { CardElement, HeadingElement } from "../../../../core/components/atoms";
import ContactService from "../../../../services/ContactService";
import { CrudTable } from "../../../../core/components/molecules/CrudTable";
import { StatusBody } from "../../../../core/components/templates/data/StatusBodyTemplate";
import { useNavigate } from "react-router-dom";

export const ContactList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, data: contacts } = useQuery("list-contacts", () =>
    ContactService.getAll()
  );

  const list = takeRight(contacts, 10);

  const columnList: Column[] = [
    {
      name: "fullName",
      label: "Nome",
      sortable: true,
      order: 2,
    },
    {
      name: "email",
      label: "Email",
      sortable: true,
      order: 3,
    },
    {
      name: "status",
      label: "Status",
      sortable: true,
      order: 4,
      bodyShape: StatusBody,
    },
  ];

  const handleDelete = async (uuid: string) => {
    if (!uuid) {
      return;
    }

    await ContactService.remove(uuid);
    queryClient.invalidateQueries("list-contacts");

    navigate("../list");
  };

  return (
    <CardElement>
      {isLoading ? (
        <HeadingElement size="md">Carregando...</HeadingElement>
      ) : (
        <CrudTable
          title="Listagem de Contatos"
          legend="Veja informações de seus contatos"
          data={list}
          columns={columnList}
          deleteFunction={handleDelete}
        />
      )}
    </CardElement>
  );
};
