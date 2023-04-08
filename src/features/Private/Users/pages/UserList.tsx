import { takeRight } from "lodash";
import {
  BasicTable,
  Column,
} from "../../../../core/components/atoms/BasicTable";
import { useGetAllUsers } from "../hooks/useUserService";

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
  const { data: users, isLoading } = useGetAllUsers();
  const list = takeRight(users, 10);
  return <BasicTable data={list} columns={columnList} />;
};
