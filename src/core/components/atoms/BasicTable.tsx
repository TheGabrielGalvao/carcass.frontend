export interface Column {
  name: string;
  label: string;
  order: number;
  filter?: boolean;
  sortable?: boolean;
}

interface BasicTableProps<T> {
  columns: Column[];
  data: T[];
}

export const BasicTable = ({ columns, data }: BasicTableProps<any>) => {
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
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    {columns.map((column) => (
                      <td
                        key={column.name}
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        {item[column.name]}
                      </td>
                    ))}
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
