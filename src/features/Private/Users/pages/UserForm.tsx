import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";
import { ButtonElement } from "../../../../core/components/atoms";
import { TextInput } from "../../../../core/components/molecules";
import { GenericStatus } from "../../../../core/util/enum/EStatus";
import { User } from "../../../../models/User.model";
import { createUser, updateUser } from "../actions/userActions";
import { userValidation } from "../validations";

interface UserFormProps {}

export const UserForm = ({}: UserFormProps) => {
  const { uuid: uuidUser } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createUserMutation = useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<User>({
    resolver: yupResolver(userValidation),
    defaultValues: {},
  });

  const handleSubmitUser = async (data: User) => {
    console.log(data);
    if (uuidUser) {
      const objectSave: User = {
        ...data,
        uuid: uuidUser,
        status: GenericStatus.Active,
      };
      await updateUserMutation.mutateAsync(objectSave);
    } else {
      console.log(data);
      const objectSave: User = {
        ...data,
        uuid: uuid(),
        status: GenericStatus.Active,
      };
      await createUserMutation.mutateAsync(objectSave);
    }
    navigate("../list");
  };

  return (
    <form
      className="flex flex-col items-center justify-center w-full  gap-4 "
      onSubmit={handleSubmit(handleSubmitUser)}
    >
      <TextInput
        type="text"
        id="name"
        name="name"
        label="Nome"
        placeholder="Nome"
        className="w-96"
        register={register("name")}
        helperText={errors.name?.message}
      />
      <TextInput
        type="text"
        id="email"
        name="email"
        label="Senha"
        placeholder="Email"
        className="w-96"
        register={register("email")}
        helperText={errors.email?.message}
      />
      <ButtonElement variant="primary" type="submit" className="w-full">
        Salvar
      </ButtonElement>
    </form>
  );
};
