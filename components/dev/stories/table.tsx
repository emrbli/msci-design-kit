"use client";

import {
  createColumnHelper,
  createSortedRowModel,
  rowSortingFeature,
  tableFeatures,
  useTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Portfolio {
  name: string;
  manager: string;
  aum: string;
  status: "active" | "paused";
}

const data: Portfolio[] = [
  { name: "ACWI Growth", manager: "A. Yılmaz", aum: "₺12.4M", status: "active" },
  { name: "EM Value", manager: "B. Kaya", aum: "₺8.1M", status: "active" },
  { name: "World Factor", manager: "C. Demir", aum: "₺4.2M", status: "paused" },
];

const features = tableFeatures({
  rowSortingFeature,
  sortedRowModel: createSortedRowModel(),
});

const columnHelper = createColumnHelper<typeof features, Portfolio>();

const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: ({ column }) => (
      <Button variant="ghost" size="sm" className="-ml-3 h-8" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Portföy
        <ArrowUpDown data-icon="inline-end" className="size-3.5" />
      </Button>
    ),
  }),
  columnHelper.accessor("manager", { header: "Yönetici" }),
  columnHelper.accessor("aum", { header: "Varlık" }),
  columnHelper.accessor("status", {
    header: "Durum",
    cell: ({ row }) => (
      <Badge variant={row.original.status === "active" ? "success" : "outline"}>
        {row.original.status === "active" ? "Aktif" : "Durduruldu"}
      </Badge>
    ),
  }),
]);

export default function TableDemo() {
  const table = useTable({ features, columns, data });

  return (
    <div className="w-full overflow-hidden rounded-2xl border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder ? null : <table.FlexRender header={header} />}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getAllCells().map((cell) => (
                <TableCell key={cell.id}>
                  <table.FlexRender cell={cell} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export const code = `const features = tableFeatures({ rowSortingFeature, sortedRowModel: createSortedRowModel() });
const columns = columnHelper.columns([...]);
const table = useTable({ features, columns, data });`;
