import { CaretDown, CaretUp, PencilSimple, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { TextElement } from "./TextElement";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { useQueryClient } from "react-query";
import ContactService from "../../../services/ContactService";
import { orderBy } from "lodash";

export interface Column {
  name: string;
  label: string;
  order: number;
  filter?: boolean;
  sortable?: boolean;
  bodyShape?: (row: any) => ReactNode;
}

export interface BasicTableProps<T> {
  columns: Column[];
  data?: T[];
  actions?: (row: any) => ReactNode;
}

interface OrderProps {
  field?: string;
  order?: "asc" | "desc";
}

export const BasicTable = ({
  columns,
  data,
  actions,
}: BasicTableProps<any>) => {
  const [dataList, setDataList] = useState<any[]>([]);
  const [order, setOrder] = useState<OrderProps>({});
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const orderedData = orderBy(data, [order.field], order.order);
    setDataList(orderedData as []);
  }, [order, data]);

  const handleSetOrder = (field: string) => {
    if (!order?.field || order.field !== field) {
      setOrder({ field: field, order: "asc" });
    } else if (order.order === "asc" && field === order.field) {
      setOrder({ field: field, order: "desc" });
    } else if (order.order === "desc" && field === order.field) {
      setOrder({});
    }
  };

  const handleDelete = async (uuid: string) => {
    if (!uuid) {
      return;
    }

    await ContactService.remove(uuid);
    queryClient.invalidateQueries("list-contacts");

    navigate("../list");
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead>
                <tr className="border-y border-gray-300 bg-gray-50">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      className="cursor-pointer p-4 transition-colors hover:bg-gray-100"
                      onClick={() =>
                        handleSetOrder(column.sortable ? column.name : "")
                      }
                    >
                      <TextElement
                        size="md"
                        className={clsx(
                          {
                            "text-orange-500": column.name === order?.field,
                            "text-gray-900": column.name !== order?.field,
                          },
                          "flex items-center justify-start gap-2 font-semibold leading-none"
                        )}
                      >
                        {column.label}
                        {order &&
                        order?.order &&
                        order.field === column.name ? (
                          order.order === "asc" ? (
                            <CaretDown
                              weight="bold"
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          ) : (
                            <CaretUp
                              weight="bold"
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )
                        ) : (
                          ""
                        )}
                      </TextElement>
                    </th>
                  ))}
                  <th className="cursor-pointer p-4 transition-colors hover:bg-gray-100">
                    <TextElement
                      size="md"
                      className="flex items-end justify-center gap-2 font-semibold leading-none text-gray-600"
                    >
                      Ações
                    </TextElement>
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataList?.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    {columns.map((column) => (
                      <td
                        key={column.name}
                        className="whitespace-nowrap px-6 py-1 font-medium text-gray-500 px-6 py-4"
                      >
                        {column.bodyShape
                          ? column.bodyShape(item)
                          : item[column.name]}
                      </td>
                    ))}
                    <td className="flex gap-2 justify-center items-center whitespace-nowrap px-6 py-4 font-medium">
                      {actions && actions(item)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
