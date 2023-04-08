import { Pencil, Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ButtonElement } from "./ButtonElement";

export interface Column {
  name: string;
  label: string;
  order: number;
  filter?: boolean;
  sortable?: boolean;
}

interface BasicTableProps<T> {
  columns: Column[];
  data?: T[];
}

export const BasicTable = ({ columns, data }: BasicTableProps<any>) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.name}
                      scope="col"
                      className="px-6 py-4 cursor-pointer"
                    >
                      {column.label}
                    </th>
                  ))}
                  <th className="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    {columns.map((column) => (
                      <td
                        key={column.name}
                        className="whitespace-nowrap px-6 py-1 font-medium"
                      >
                        {item[column.name]}
                      </td>
                    ))}
                    <td className="flex gap-2 justify-center whitespace-nowrap px-6 py-1 font-medium">
                      <ButtonElement
                        variant="primary"
                        type="submit"
                        onClick={() => navigate(`../edit/${item.uuid}`)}
                      >
                        <Pencil size={25} className="font-bold" />
                      </ButtonElement>
                      <ButtonElement
                        variant="danger"
                        type="submit"
                        onClick={() => navigate("../new")}
                        className=""
                      >
                        <Trash size={25} className="font-bold" />
                      </ButtonElement>
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
