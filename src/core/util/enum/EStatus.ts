export enum GenericStatus {
  Undefined = "Não Definido",
  Active = "Ativo",
  Inactive = "Inativo",
}

export interface GenericStatusIndexable {
  [key: string]: GenericStatus;
}

export const GenericStatusIndex: GenericStatusIndexable = {
  1: GenericStatus.Undefined,
  2: GenericStatus.Active,
  3: GenericStatus.Inactive,
};

export enum ERegisterStatus {
  UNCOMPLETED = 0,
  ACTIVE = 1,
  INACTIVE = 2,
}

export const ERegisterStatusLabels = {
  UNCOMPLETED: "Incompleto",
  ACTIVE: "Ativo",
  INACTIVE: "Inativo",
};
