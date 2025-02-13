import { useState } from "react";
import { Input, Select, Button, TablePagination, Badge } from "@/components/ui";

interface Indication {
  id: string;
  merchantId: string;
  merchantName: string;
  type: "Telat Update" | "Tidak Merespon" | "Lainnya";
  description: string;
  status: "open" | "progress" | "resolved";
  createdAt: string;
}

const Indications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Demo data
  const indications = Array.from({ length: 50 }, (_, index) => ({
    id: `IND${String(index + 1).padStart(3, "0")}`,
    merchantId: `M${String(index + 1).padStart(3, "0")}`,
    merchantName: `Toko ${index + 1}`,
    type: ["Telat Update", "Tidak Merespon", "Lainnya"][
      Math.floor(Math.random() * 3)
    ] as Indication["type"],
    description: `Deskripsi masalah ${index + 1}`,
    status: ["open", "progress", "resolved"][
      Math.floor(Math.random() * 3)
    ] as Indication["status"],
    createdAt: "2025-01-20",
  }));

  const totalPages = Math.ceil(indications.length / itemsPerPage);

  const getStatusColor = (status: Indication["status"]) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800";
      case "progress":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: Indication["status"]) => {
    switch (status) {
      case "open":
        return "Terbuka";
      case "progress":
        return "Dalam Proses";
      case "resolved":
        return "Selesai";
      default:
        return status;
    }
  };

  const typeOptions = [
    { value: "", label: "Semua Tipe" },
    { value: "late", label: "Telat Update" },
    { value: "noresponse", label: "Tidak Merespon" },
    { value: "other", label: "Lainnya" },
  ];

  const statusOptions = [
    { value: "", label: "Semua Status" },
    { value: "open", label: "Terbuka" },
    { value: "progress", label: "Dalam Proses" },
    { value: "resolved", label: "Selesai" },
  ];

  const columns: Array<{
    header: string;
    accessor: keyof Indication | ((item: Indication) => React.ReactNode);
  }> = [
    {
      header: "ID",
      accessor: "id" as keyof Indication,
    },
    {
      header: "ID Toko",
      accessor: "merchantId" as keyof Indication,
    },
    {
      header: "Nama Toko",
      accessor: "merchantName" as keyof Indication,
    },
    {
      header: "Tipe",
      accessor: "type" as keyof Indication,
    },
    {
      header: "Deskripsi",
      accessor: "description" as keyof Indication,
    },
    {
      header: "Status",
      accessor: (item: Indication) => (
        <Badge className={getStatusColor(item.status)}>
          {getStatusLabel(item.status)}
        </Badge>
      ),
    },
    {
      header: "Tanggal",
      accessor: "createdAt" as keyof Indication,
    },
    {
      header: "Aksi",
      accessor: (item: Indication) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Detail
          </Button>
          {item.status !== "resolved" && (
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
        <h1 className="text-2xl font-semibold text-gray-900">
          Indikasi Masalah
        </h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input type="text" placeholder="Cari toko..." />
        </div>
        <div className="w-48">
          <Select options={typeOptions} />
        </div>
        <div className="w-48">
          <Select options={statusOptions} />
        </div>
      </div>

      {/* Table */}
      <TablePagination
        columns={columns}
        data={indications}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Indications;
