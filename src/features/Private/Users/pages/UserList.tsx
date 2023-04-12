import { takeRight } from "lodash";
import { useQuery, useQueryClient } from "react-query";
import { HeadingElement } from "../../../../core/components/atoms";
import {
  BasicTable,
  Column,
} from "../../../../core/components/atoms/BasicTable";
import { getAllUsers } from "../actions/userActions";

const columnList: Column[] = [
  {
    name: "name",
    label: "Nome",
    order: 2,
  },
  {
    name: "email",
    label: "Email",
    order: 3,
  },
  {
    name: "status",
    label: "Status",
    order: 4,
  },
];

export const UserList = () => {
  const { isLoading, data: users } = useQuery("users", getAllUsers);

  const list = takeRight(users, 10);

  return isLoading ? (
    <HeadingElement size="md">Carregando...</HeadingElement>
  ) : (
    <BasicTable data={list} columns={columnList} />
  );
};
