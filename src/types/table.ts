import React from 'react';

export interface ColumnDefinition<T> {
    header: string;
    cell: (row: T, index: number) => React.ReactNode;
}