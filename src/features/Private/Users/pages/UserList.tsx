import {
  BasicTable,
  Column,
} from "../../../../core/components/atoms/BasicTable";
import { GenericStatus } from "../../../../core/util/enum/EStatus";
import { User } from "../../../../models/User.model";

const userList: User[] = [
  {
    id: 1,
    name: "Gaioba",
    email: "gaioba@email.com",
    status: GenericStatus.Active,
  },
  {
    id: 2,
    name: "Goiaba",
    email: "goiaba@email.com",
    status: GenericStatus.Active,
  },
  {
    id: 3,
    name: "Cleitinho",
    email: "cleitinho@email.com",
    status: GenericStatus.Active,
  },
];

const columnList: Column[] = [
  {
    name: "id",
    label: "Id",
    order: 1,
  },
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
  return <BasicTable data={userList} columns={columnList} />;
};
