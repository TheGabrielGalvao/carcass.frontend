import * as yup from "yup";
import { UserModel } from "../../../models/User.model";
import { isValidUUID } from "../../../core/util/helpers/string";

export const userValidation = yup.object<UserModel>().shape({
  name: yup.string().required(() => "Obrigatório"),
  profileUuid: yup
    .string()
    .required(() => "Obrigatório")
    .test("is-uuid", "UUID inválido", (value) => isValidUUID(value)),
  email: yup
    .string()
    .required(() => "Obrigatório")
    .email("Email inválido"),
});
