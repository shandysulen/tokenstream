"use client";

import { flexRender, useReactTable } from "@tanstack/react-table";
import { ColumnDef, getCoreRowModel } from "@tanstack/table-core";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@tokenstream/components";
import { useMemo } from "react";

export type DataTableProps<Data extends object> = {
  columns: ColumnDef<Data>[];
  data: Data[];
};

export const DataTable = <Data extends object>({
  columns,
  data,
  ...otherProps
}: DataTableProps<Data>) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const headers = useMemo(() => {
    return table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => {
          const value = flexRender(
            header.column.columnDef.header,
            header.getContext(),
          );

          return (
            <TableHead
              key={header.id}
              className='relative transform-none text-sm font-normal leading-normal'
            >
              {value}
            </TableHead>
          );
        })}
      </TableRow>
    ));
  }, [table]);

  const rows = useMemo(() => {
    return table.getSortedRowModel().rows.map((row) => (
      <TableRow key={row.id} role='group'>
        {row.getVisibleCells().map((cell) => {
          return (
            <TableCell key={cell.id} className='border-b-0 transition-all'>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </TableRow>
    ));
  }, [data]);

  return (
    <Table {...otherProps}>
      <TableHeader>{headers}</TableHeader>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};
