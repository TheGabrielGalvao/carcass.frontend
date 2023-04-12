import * as yup from "yup";
import { User } from "../../../models/User.model";

export const userValidation = yup.object<User>().shape({
  name: yup.string().required(() => "Obrigatório"),
  email: yup
    .string()
    .required(() => "Obrigatório")
    .email("Email inválido"),
});
