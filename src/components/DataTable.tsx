// src/components/DataTable.tsx
import React from "react";

export type Column<T> = {
  header: string;
  accessor: keyof T;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  onAction?: (type: "view" | "approve" | "reject", item: T) => void;
};

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  onAction,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto border rounded-lg bg-white shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th
                key={col.header}
                className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
            {onAction && (
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.accessor.toString()}
                  className="px-4 py-2 text-sm text-gray-800"
                >
                  {row[col.accessor] as React.ReactNode}
                </td>
              ))}
              {onAction && (
                <td className="px-4 py-2 space-x-2 text-sm text-gray-600">
                  <button
                    onClick={() => onAction("view", row)}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => onAction("approve", row)}
                    className="text-green-600 hover:underline"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => onAction("reject", row)}
                    className="text-red-600 hover:underline"
                  >
                    Reject
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
