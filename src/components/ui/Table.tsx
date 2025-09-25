import React from 'react';
import {ColumnDefinition} from "@/types";

interface TableProps<T> {
    data: T[];
    columns: ColumnDefinition<T>[];
}

export function Table<T extends { id: string | number }>({data, columns}: TableProps<T>) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
                <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th
                            key={`th-${index}`}
                            className={`
                                        py-[17px] px-4 text-left whitespace-nowrap text-xs font-medium text-primary-300 bg-primary-500/60
                                        ${index === 0 ? 'rounded-l-lg' : ''}
                                        ${index === columns.length - 1 ? 'rounded-r-lg' : ''}
                                    `}
                        >
                            {column.header}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={row.id} className="bg-primary-500/60 rounded-lg">
                        {columns.map((column, index) => (
                            <td
                                key={`td-${index}`}
                                className={`
                                        px-4 py-2 whitespace-nowrap
                                        ${index === 0 ? 'rounded-l-lg' : ''}
                                        ${index === columns.length - 1 ? 'rounded-r-lg' : ''}
                                    `}
                            >
                                {column.cell(row, rowIndex)}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;