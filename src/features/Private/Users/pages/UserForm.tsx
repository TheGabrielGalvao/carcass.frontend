import { useMatch, useParams } from "react-router-dom";
import { HeadingElement } from "../../../../core/components/atoms";

interface UserFormProps {
  uuid?: string;
}

export const UserForm = ({ uuid }: UserFormProps) => {
  const { uuid: uuidParam } = useParams();
  return <HeadingElement>Formulário de Cadastro {uuidParam}</HeadingElement>;
};
