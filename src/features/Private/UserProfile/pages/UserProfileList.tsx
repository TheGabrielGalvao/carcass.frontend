import { takeRight } from "lodash";
import { Column } from "../../../../core/components/atoms/BasicTable";
import { useQuery, useQueryClient } from "react-query";
import { CardElement, HeadingElement } from "../../../../core/components/atoms";
import { CrudTable } from "../../../../core/components/molecules/CrudTable";
import { StatusBody } from "../../../../core/components/templates/data/StatusBodyTemplate";
import UserProfileService from "../../../../services/UserProfileService";
import { useNavigate } from "react-router-dom";
import { useRoute } from "../../../../core/context/RouteContext";
import { Check } from "phosphor-react";

export const UserProfileList = () => {
  const { handleSetToast } = useRoute();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading, data: contacts } = useQuery("list-userProfiles", () =>
    UserProfileService.getAll()
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

    await UserProfileService.remove(uuid);
    queryClient.invalidateQueries("list-userProfiles");

    handleSetToast({
      icon: <Check weight="bold" />,
      message: "Dados deletados com sucesso!",
      type: "success",
    });
  };

  return (
    <CardElement className="h-full">
      {isLoading ? (
        <HeadingElement size="md">Carregando...</HeadingElement>
      ) : (
        <CrudTable
          title="Listagem de Perfil de Acesso"
          legend="Veja informações de seus perfis"
          data={list}
          columns={columnList}
          routePrefix="profile"
          deleteFunction={handleDelete}
        />
      )}
    </CardElement>
  );
};
