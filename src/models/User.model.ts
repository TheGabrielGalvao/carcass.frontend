import { GenericStatus } from "../core/util/enum/EStatus";

export type User = {
  uuid: string;
  name: string;
  email: string;
  status: GenericStatus;
  password?: string;
  permissions?: string;
};
