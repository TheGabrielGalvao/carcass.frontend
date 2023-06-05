import { ERegisterStatus } from "../core/util/enum/EStatus";

export type UserModel = {
  uuid: string;
  name: string;
  email: string;
  password: string;
  status: ERegisterStatus;
  profileUuid?: string;
};
