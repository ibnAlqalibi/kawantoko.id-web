import { useState } from "react";
import TablePagination from "@/components/ui/TablePagination";
import Button from "@/components/ui/Button";

interface Merchant {
  id: string;
  name: string;
  whatsapp: string;
  address: string;
  status: "active" | "inactive";
  createdAt: string;
}

const Merchants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [merchants] = useState<Merchant[]>([
    {
      id: "M001",
      name: "Toko ABC",
      whatsapp: "+628123456789",
      address: "Jl. Contoh No. 123",
      status: "active",
      createdAt: "2025-01-20",
    },
    // Add more sample data as needed
  ]);

  const totalPages = Math.ceil(merchants.length / itemsPerPage);

  const columns: Array<{
    header: string;
    accessor: keyof Merchant | ((item: Merchant) => React.ReactNode);
  }> = [
    {
      header: "ID",
      accessor: "id" as keyof Merchant,
    },
    {
      header: "Nama Toko",
      accessor: "name" as keyof Merchant,
    },
    {
      header: "WhatsApp",
      accessor: "whatsapp" as keyof Merchant,
    },
    {
      header: "Alamat",
      accessor: "address" as keyof Merchant,
    },
    {
      header: "Status",
      accessor: (merchant: Merchant) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            merchant.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {merchant.status === "active" ? "Aktif" : "Nonaktif"}
        </span>
      ),
    },
    {
      header: "Tanggal Daftar",
      accessor: "createdAt" as keyof Merchant,
    },
    {
      header: "Aksi",
      accessor: (merchant: Merchant) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button
            variant={merchant.status === "active" ? "danger" : "success"}
            size="sm"
          >
            {merchant.status === "active" ? "Nonaktifkan" : "Aktifkan"}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Toko</h1>
        <Button>Tambah Toko</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Cari toko..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Button variant="outline">Reset</Button>
          </div>
        </div>

        <TablePagination
          columns={columns}
          data={merchants}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Merchants;
