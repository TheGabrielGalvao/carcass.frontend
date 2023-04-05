import { GenericStatus } from "../core/util/enum/EStatus";

export type User = {
  id: number;
  name: string;
  email: string;
  status: GenericStatus;
  permissions?: string;
};
