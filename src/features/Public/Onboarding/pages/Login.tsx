import { Envelope, Lock, User } from "phosphor-react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userSignInValidation } from "../validations";
import { TextInput } from "../../../../core/components/molecules";
import { ButtonElement } from "../../../../core/components/atoms";

export interface SigninForm {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SigninForm>({
    resolver: yupResolver(userSignInValidation),
    defaultValues: {},
  });

  const handleSubmitUser = async (data: SigninForm) => {
    const dataSave = {
      email: data?.email ?? "",
      password: data.password,
    };
    if (dataSave.email.length > 2) {
      console.log(dataSave);
    }
  };

  return (
    <form
      action=""
      className="flex flex-col items-stretch w-80 gap-4"
      onSubmit={handleSubmit(handleSubmitUser)}
    >
      <TextInput
        type="text"
        id="email"
        name="email"
        label="Email"
        placeholder="Digite o seu Email"
        icon={<Envelope />}
        register={register("email")}
        helperText={errors.email?.message}
      />
      <TextInput
        type="password"
        id="password"
        name="password"
        label="Senha"
        placeholder="Digite sua Senha"
        icon={<Lock />}
        register={register("password")}
        helperText={errors.password?.message}
      />
      {/* <label htmlFor="remember" className='flex items-center gap-2'>
          <CheckboxElement id='remember' />
          <TextElement className='text-gray-200 cursor-pointer' size='sm'>Lembrar de mim por 30 dias</TextElement>
        </label> */}
      <ButtonElement variant="primary" type="submit">
        Entrar na Plataforma
      </ButtonElement>
    </form>
  );
};
