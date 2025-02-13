import { ReactNode } from "react";
import Table from "@/components/ui/Table";
import Pagination from "@/components/ui/Pagination";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
}

interface TablePaginationProps<T> {
  columns: Column<T>[];
  data: T[];
  itemsPerPage?: number;
  onRowClick?: (item: T) => void;
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

const TablePagination = <T extends {}>({
  columns,
  data,
  itemsPerPage = 10,
  onRowClick,
  currentPage = 1,
  totalPages = Math.ceil(data.length / itemsPerPage),
  onPageChange,
  isLoading = false,
  emptyMessage = "Tidak ada data",
}: TablePaginationProps<T>) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col space-y-4">
      {/* Table with horizontal scroll */}
      <div className="w-full overflow-hidden rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            data={paginatedData}
            onRowClick={onRowClick}
            isLoading={isLoading}
            emptyMessage={emptyMessage}
          />
        </div>
      </div>

      {/* Pagination */}
      {data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
};

export default TablePagination;
