"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav
      aria-label="Navigasi halaman"
      className="flex max-w-full items-center justify-center gap-2 overflow-x-auto py-1"
    >
      <button
        type="button"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Halaman sebelumnya"
        className="grid size-10 shrink-0 place-items-center rounded-lg border border-gray-200 bg-white text-hijau-tua transition-colors hover:border-hijau hover:text-hijau disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} aria-hidden="true" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => changePage(page)}
            aria-current={page === currentPage ? "page" : undefined}
            aria-label={`Halaman ${page}`}
            className={`size-10 shrink-0 rounded-lg border text-sm font-semibold transition-colors ${
              page === currentPage
                ? "border-hijau bg-hijau text-white"
                : "border-gray-200 bg-white text-hijau-tua hover:border-hijau hover:text-hijau"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Halaman berikutnya"
        className="grid size-10 shrink-0 place-items-center rounded-lg border border-gray-200 bg-white text-hijau-tua transition-colors hover:border-hijau hover:text-hijau disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </nav>
  );
}
