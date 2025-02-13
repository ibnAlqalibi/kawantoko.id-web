import { useState } from "react";
import { Input, Select, Button, TablePagination, Badge } from "@/components/ui";

interface Product {
  id: string;
  name: string;
  seller: string;
  category: string;
  price: number;
  submissionDate: string;
  status: string;
}

const ProductValidation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Demo data
  const products = Array.from({ length: 50 }, (_, index) => ({
    id: `PRD${String(index + 1).padStart(3, "0")}`,
    name: `Produk ${index + 1}`,
    seller: `Toko ${index + 1}`,
    category: ["Elektronik", "Fashion", "Makanan", "Minuman", "Kesehatan"][
      Math.floor(Math.random() * 5)
    ],
    price: Math.floor(Math.random() * 1000000) + 10000,
    submissionDate: "2025-01-20",
    status: ["Menunggu", "Disetujui", "Ditolak"][Math.floor(Math.random() * 3)],
  }));

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Menunggu":
        return "bg-yellow-100 text-yellow-800";
      case "Disetujui":
        return "bg-green-100 text-green-800";
      case "Ditolak":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const categoryOptions = [
    { value: "", label: "Semua Kategori" },
    { value: "elektronik", label: "Elektronik" },
    { value: "fashion", label: "Fashion" },
    { value: "makanan", label: "Makanan" },
    { value: "minuman", label: "Minuman" },
    { value: "kesehatan", label: "Kesehatan" },
  ];

  const statusOptions = [
    { value: "", label: "Semua Status" },
    { value: "waiting", label: "Menunggu" },
    { value: "approved", label: "Disetujui" },
    { value: "rejected", label: "Ditolak" },
  ];

  const columns: Array<{
    header: string;
    accessor: keyof Product | ((item: Product) => React.ReactNode);
  }> = [
    {
      header: "ID",
      accessor: "id" as keyof Product,
    },
    {
      header: "Nama Produk",
      accessor: "name" as keyof Product,
    },
    {
      header: "Toko",
      accessor: "seller" as keyof Product,
    },
    {
      header: "Kategori",
      accessor: "category" as keyof Product,
    },
    {
      header: "Harga",
      accessor: (product: Product) => formatPrice(product.price),
    },
    {
      header: "Tanggal Pengajuan",
      accessor: "submissionDate" as keyof Product,
    },
    {
      header: "Status",
      accessor: (product: Product) => (
        <Badge className={getStatusColor(product.status)}>
          {product.status}
        </Badge>
      ),
    },
    {
      header: "Aksi",
      accessor: (product: Product) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Detail
          </Button>
          {product.status === "Menunggu" && (
            <>
              <Button variant="success" size="sm">
                Setujui
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
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Validasi Produk
        </h1>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input type="text" placeholder="Cari produk..." />
        </div>
        <div className="w-48">
          <Select options={categoryOptions} />
        </div>
        <div className="w-48">
          <Select options={statusOptions} />
        </div>
      </div>

      {/* Table */}
      <TablePagination
        columns={columns}
        data={currentProducts}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductValidation;
