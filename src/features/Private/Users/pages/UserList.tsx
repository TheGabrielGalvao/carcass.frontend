import { takeRight } from "lodash";
import { Column } from "../../../../core/components/atoms/BasicTable";
import { useQuery, useQueryClient } from "react-query";
import { CardElement, HeadingElement } from "../../../../core/components/atoms";
import ContactService from "../../../../services/ContactService";
import { CrudTable } from "../../../../core/components/molecules/CrudTable";
import { StatusBody } from "../../../../core/components/templates/data/StatusBodyTemplate";
import UserService from "../../../../services/UserService";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../../../core/context/RouteContext";

export const UserList = () => {
  const queryClient = useQueryClient();
  const { toast } = useRoute();
  const navigate = useNavigate();
  const { isLoading, data: contacts } = useQuery("list-users", () =>
    UserService.getAll()
  );

  const list = takeRight(contacts, 10);

  const columnList: Column[] = [
    {
      name: "name",
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

    await UserService.remove(uuid);
    queryClient.invalidateQueries("list-users");

    navigate("../list");
  };

  return (
    <CardElement className="h-full">
      {isLoading ? (
        <HeadingElement size="md">Carregando...</HeadingElement>
      ) : (
        <CrudTable
          title="Listagem de Usuários"
          legend="Veja informações de seus usuários"
          data={list}
          columns={columnList}
          deleteFunction={handleDelete}
        />
      )}
    </CardElement>
  );
};
