import { Button } from "./button";

const Pagination = ({ table }: { table: any }) => {
  const totalPages = table.getPageCount(); // Total number of pages
  const currentPage = table.getState().pagination.pageIndex + 1; // Current page (1-based index)
  const pageSizeOptions = [5, 10, 15]; // Page size options

  // Generate page numbers with ellipsis logic
  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (page !== "...") {
      table.setPageIndex(Number(page) - 1);
    }
  };

  return (
    <div className="pagination flex flex-col items-center gap-4 border py-4">
      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <Button
          className="page-item"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"< previous"}
        </Button>

        {generatePageNumbers().map((page, index) => (
          <Button
            key={index}
            className={`page-item page-link ${
              page === currentPage ? "selected" : ""
            }`}
            onClick={() => handlePageClick(page)}
            disabled={page === "..."}
          >
            {page}
          </Button>
        ))}

        <Button
          className="page-item"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {"next >"}
        </Button>

        {/* Page Size Selector */}
        <div className="flex items-center gap-2">
          <span>Show rows:</span>
          <select
            className="border p-1 rounded"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Page Info */}
        <div>
          <strong>
            Page {currentPage} of {totalPages}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
