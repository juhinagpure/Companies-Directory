import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setPage }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {/* Prev Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
        className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-sm shadow-sm 
                   hover:bg-gray-100 transition cursor-pointer 
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ← Prev
      </button>

      {/* Page Indicator */}
      <span className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl border border-gray-200">
        {currentPage} / {totalPages}
      </span>

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
        className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-sm shadow-sm 
                   hover:bg-gray-100 transition cursor-pointer 
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
