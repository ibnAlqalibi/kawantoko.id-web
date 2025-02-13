import { useState } from "react";
import { Input, Select, Button, TablePagination, Badge } from "@/components/ui";

interface Report {
  id: string;
  date: string;
  type: string;
  description: string;
  status: "pending" | "completed";
}

const Reports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Demo data
  const reports: Report[] = Array.from({ length: 50 }, (_, index) => ({
    id: `REP${String(index + 1).padStart(3, "0")}`,
    date: "2025-01-20",
    type: ["Sales", "Inventory", "Customer"][Math.floor(Math.random() * 3)],
    description: `Report description ${index + 1}`,
    status: Math.random() > 0.5 ? "completed" : "pending",
  }));

  const totalPages = Math.ceil(reports.length / itemsPerPage);

  const columns: Array<{
    header: string;
    accessor: keyof Report | ((item: Report) => React.ReactNode);
  }> = [
    {
      header: "ID",
      accessor: "id" as keyof Report,
    },
    {
      header: "Tanggal",
      accessor: "date" as keyof Report,
    },
    {
      header: "Tipe",
      accessor: "type" as keyof Report,
    },
    {
      header: "Deskripsi",
      accessor: "description" as keyof Report,
    },
    {
      header: "Status",
      accessor: (report: Report) => (
        <Badge
          className={
            report.status === "completed"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }
        >
          {report.status === "completed" ? "Selesai" : "Menunggu"}
        </Badge>
      ),
    },
    {
      header: "Aksi",
      accessor: (report: Report) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Lihat
          </Button>
          {report.status === "pending" && (
            <Button variant="success" size="sm">
              Selesai
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Laporan</h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input type="text" placeholder="Cari laporan..." />
        </div>
        <div className="w-48">
          <Select
            options={[
              { value: "", label: "Semua Tipe" },
              { value: "sales", label: "Penjualan" },
              { value: "inventory", label: "Inventaris" },
              { value: "customer", label: "Pelanggan" },
            ]}
          />
        </div>
        <div className="w-48">
          <Select
            options={[
              { value: "", label: "Semua Status" },
              { value: "pending", label: "Menunggu" },
              { value: "completed", label: "Selesai" },
            ]}
          />
        </div>
      </div>

      {/* Table */}
      <TablePagination
        columns={columns}
        data={reports}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Reports;
