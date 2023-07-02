import { takeRight } from "lodash";
import { Column } from "../../../../core/components/atoms/BasicTable";
import { useQuery, useQueryClient } from "react-query";
import { CardElement, HeadingElement } from "../../../../core/components/atoms";
import { CrudTable } from "../../../../core/components/molecules/CrudTable";
import { StatusBody } from "../../../../core/components/templates/data/StatusBodyTemplate";
import UserService from "../../../../services/UserService";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../../../core/context/RouteContext";
import { Check } from "phosphor-react";
import { UserModel } from "../../../../models/User.model";

export const UserList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { handleSetToast } = useRoute();
  const { isLoading, data: contacts } = useQuery("list-users", () =>
    UserService.getAll()
  );

  const list = takeRight(contacts, 10);

  const UserBody = (row: UserModel) => {
    return (
      <div className="flex flex-col">
        <span className="font-bold text-gray-800">{row.name}</span>
        <span className="text-xs">{row.email}</span>
      </div>
    );
  };

  const columnList: Column[] = [
    {
      name: "name",
      label: "Usuário",
      sortable: true,
      order: 2,
      bodyShape: UserBody,
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

    handleSetToast({
      icon: <Check weight="bold" />,
      message: "Dados deletados com sucesso!",
      type: "success",
    });

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
