import {
  BasicTable,
  Column,
} from "../../../../core/components/atoms/BasicTable";

interface Contact {
  Id: number;
  Nome: string;
  Email: string;
  Status: string;
}

const contactList: Contact[] = [
  {
    Id: 1,
    Nome: "Gaioba",
    Email: "gaioba@email.com",
    Status: "Ativo",
  },
  {
    Id: 2,
    Nome: "Goiaba",
    Email: "goiaba@email.com",
    Status: "Ativo",
  },
  {
    Id: 3,
    Nome: "Cleitinho",
    Email: "cleitinho@email.com",
    Status: "Ativo",
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

export const ContactList = () => {
  return <BasicTable data={contactList} columns={columnList} />;
};
