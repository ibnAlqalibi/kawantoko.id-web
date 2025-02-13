import { useState } from "react";
import { Input, Select, Button, TablePagination, Badge } from "@/components/ui";

interface Transaction {
  id: string;
  date: string;
  customer: string;
  total: number;
  status: "pending" | "completed" | "cancelled";
  paymentMethod: string;
}

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Demo data
  const transactions: Transaction[] = Array.from({ length: 50 }, (_, index) => ({
    id: `TRX${String(index + 1).padStart(3, "0")}`,
    date: "2025-01-20",
    customer: `Customer ${index + 1}`,
    total: Math.floor(Math.random() * 1000000) + 50000,
    status: ["pending", "completed", "cancelled"][
      Math.floor(Math.random() * 3)
    ] as Transaction["status"],
    paymentMethod: ["Cash", "Transfer", "QRIS"][Math.floor(Math.random() * 3)],
  }));

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: Transaction["status"]) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "pending":
        return "Menunggu";
      case "cancelled":
        return "Dibatalkan";
      default:
        return status;
    }
  };

  const columns: Array<{
    header: string;
    accessor: keyof Transaction | ((item: Transaction) => React.ReactNode);
  }> = [
    {
      header: "ID",
      accessor: "id" as keyof Transaction,
    },
    {
      header: "Tanggal",
      accessor: "date" as keyof Transaction,
    },
    {
      header: "Pelanggan",
      accessor: "customer" as keyof Transaction,
    },
    {
      header: "Total",
      accessor: (transaction: Transaction) => formatCurrency(transaction.total),
    },
    {
      header: "Status",
      accessor: (transaction: Transaction) => (
        <Badge className={getStatusColor(transaction.status)}>
          {getStatusLabel(transaction.status)}
        </Badge>
      ),
    },
    {
      header: "Metode Pembayaran",
      accessor: "paymentMethod" as keyof Transaction,
    },
    {
      header: "Aksi",
      accessor: (transaction: Transaction) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Detail
          </Button>
          {transaction.status === "pending" && (
            <>
              <Button variant="success" size="sm">
                Terima
              </Button>
              <Button variant="danger" size="sm">
                Tolak
              </Button>
            </>
          )}
        </div>
      ),
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Transaksi</h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input type="text" placeholder="Cari transaksi..." />
        </div>
        <div className="w-48">
          <Select
            options={[
              { value: "", label: "Semua Status" },
              { value: "pending", label: "Menunggu" },
              { value: "completed", label: "Selesai" },
              { value: "cancelled", label: "Dibatalkan" },
            ]}
          />
        </div>
        <div className="w-48">
          <Select
            options={[
              { value: "", label: "Semua Metode" },
              { value: "cash", label: "Tunai" },
              { value: "transfer", label: "Transfer" },
              { value: "qris", label: "QRIS" },
            ]}
          />
        </div>
      </div>

      {/* Table */}
      <TablePagination
        columns={columns}
        data={currentTransactions}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Transactions;
