import { useState } from "react";
import { Input, Button, TablePagination, Badge } from "@/components/ui";

interface Category {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
  productCount: number;
  createdAt: string;
}

const ProductCategories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Demo data
  const categories: Category[] = Array.from({ length: 50 }, (_, index) => ({
    id: `CAT${String(index + 1).padStart(3, "0")}`,
    name: `Kategori ${index + 1}`,
    description: `Deskripsi untuk kategori ${index + 1}`,
    status: Math.random() > 0.3 ? "active" : "inactive" as const,
    productCount: Math.floor(Math.random() * 100),
    createdAt: "2025-01-20",
  }));

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const columns: Array<{
    header: string;
    accessor: keyof Category | ((item: Category) => React.ReactNode);
  }> = [
    {
      header: "ID",
      accessor: "id" as keyof Category,
    },
    {
      header: "Nama",
      accessor: "name" as keyof Category,
    },
    {
      header: "Deskripsi",
      accessor: "description" as keyof Category,
    },
    {
      header: "Status",
      accessor: (category: Category) => (
        <Badge
          className={
            category.status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }
        >
          {category.status === "active" ? "Aktif" : "Nonaktif"}
        </Badge>
      ),
    },
    {
      header: "Jumlah Produk",
      accessor: "productCount" as keyof Category,
    },
    {
      header: "Tanggal Dibuat",
      accessor: "createdAt" as keyof Category,
    },
    {
      header: "Aksi",
      accessor: (category: Category) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button
            variant={category.status === "active" ? "danger" : "success"}
            size="sm"
          >
            {category.status === "active" ? "Nonaktifkan" : "Aktifkan"}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">
          Kategori Produk
        </h1>
        <Button variant="primary">Tambah Kategori</Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input type="text" placeholder="Cari kategori..." />
        </div>
      </div>

      {/* Table */}
      <TablePagination
        columns={columns}
        data={categories}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductCategories;
