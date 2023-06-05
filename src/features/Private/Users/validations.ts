import * as yup from "yup";
import { UserModel } from "../../../models/User.model";

export const userValidation = yup.object<UserModel>().shape({
  name: yup.string().required(() => "Obrigatório"),
  email: yup
    .string()
    .required(() => "Obrigatório")
    .email("Email inválido"),
});
