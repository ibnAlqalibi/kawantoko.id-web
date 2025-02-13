import { useState } from "react";
import { Input, Select, Button, TablePagination, Badge } from "@/components/ui";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: string;
}

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Demo data
  const products = Array.from({ length: 50 }, (_, index) => ({
    id: `PRD${String(index + 1).padStart(3, "0")}`,
    name: `Produk ${index + 1}`,
    category: ["Elektronik", "Fashion", "Makanan", "Minuman", "Kesehatan"][
      Math.floor(Math.random() * 5)
    ],
    price: Math.floor(Math.random() * 1000000) + 10000,
    stock: Math.floor(Math.random() * 100),
    status: Math.random() > 0.3 ? "Aktif" : "Non-aktif",
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
    { value: "active", label: "Aktif" },
    { value: "inactive", label: "Non-aktif" },
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
      header: "Kategori",
      accessor: "category" as keyof Product,
    },
    {
      header: "Harga",
      accessor: (product: Product) => formatPrice(product.price),
    },
    {
      header: "Stok",
      accessor: "stock" as keyof Product,
    },
    {
      header: "Status",
      accessor: (product: Product) => (
        <Badge variant={product.status === "Aktif" ? "success" : "default"}>
          {product.status}
        </Badge>
      ),
    },
    {
      header: "Aksi",
      accessor: () => (
        <div className="space-x-3">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="danger" size="sm">
            Hapus
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Daftar Produk</h1>
        <Button variant="primary">Tambah Produk</Button>
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
        data={products}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Products;
