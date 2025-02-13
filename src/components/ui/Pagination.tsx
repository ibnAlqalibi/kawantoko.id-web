import Button from "@/components/ui/Button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-white rounded-lg border border-gray-200">
      {/* Info text - Hide on very small screens */}
      <div className="hidden sm:block text-sm text-gray-700">
        <span>
          Menampilkan {startIndex + 1} -{" "}
          {Math.min(startIndex + itemsPerPage, totalItems)} dari {totalItems} data
        </span>
      </div>

      {/* Pagination Buttons - Responsive */}
      <div className="flex items-center gap-2">
        {/* Desktop Previous */}
        <Button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          variant="outline"
          size="sm"
          className="hidden sm:flex"
        >
          Sebelumnya
        </Button>

        {/* Mobile Previous */}
        <Button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          variant="outline"
          size="sm"
          className="sm:hidden"
        >
          ←
        </Button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          // On mobile, only show current page and immediate neighbors
          const showOnMobile =
            page === currentPage ||
            page === currentPage - 1 ||
            page === currentPage + 1;

          // On desktop, show more pages
          const showOnDesktop =
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 2 && page <= currentPage + 2);

          if (!showOnDesktop) {
            if (page === currentPage - 3 || page === currentPage + 3) {
              return (
                <span
                  key={page}
                  className="hidden sm:block px-2 text-gray-500"
                >
                  ...
                </span>
              );
            }
            return null;
          }

          return (
            <Button
              key={page}
              onClick={() => onPageChange(page)}
              variant={currentPage === page ? "primary" : "outline"}
              size="sm"
              className={`${!showOnMobile ? "hidden sm:flex" : "flex"}`}
            >
              {page}
            </Button>
          );
        })}

        {/* Mobile Next */}
        <Button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          variant="outline"
          size="sm"
          className="sm:hidden"
        >
          →
        </Button>

        {/* Desktop Next */}
        <Button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          variant="outline"
          size="sm"
          className="hidden sm:flex"
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
