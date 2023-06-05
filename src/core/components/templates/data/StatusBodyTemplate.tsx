import clsx from "clsx";
import { OptionItem } from "../../../types/Option";
import { enumToSelectOptions } from "../../../util/helpers/objectHelper";
import { TextElement } from "../../atoms";
import {
  ERegisterStatus,
  ERegisterStatusLabels,
} from "../../../util/enum/EStatus";

export const StatusBody = (row: any) => {
  const statusOptions: OptionItem[] = enumToSelectOptions(
    ERegisterStatus,
    ERegisterStatusLabels
  );
  const status = statusOptions.find(
    (item) => item.value?.toString() === row.status.toString()
  ) as OptionItem;

  return (
    <TextElement
      size="sm"
      className={clsx({
        "font-bold bg-yellow-200 text-yellow-700 py-1 px-2 rounded-md uppercase shadow-md":
          status.value === ERegisterStatus.UNCOMPLETED,
        "font-bold bg-green-200 text-green-700 py-1 px-2 rounded-md uppercase shadow-[96px]":
          status.value === ERegisterStatus.ACTIVE,
        "font-bold bg-red-200 text-red-700 py-1 px-2 rounded-md uppercase shadow-md":
          status.value === ERegisterStatus.INACTIVE,
      })}
    >
      {status?.label}
    </TextElement>
  );
};
