import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-cyan-500 text-white'
        }`}
        disabled={currentPage === 1}
      >
        {'<'}
      </button>

      <span className="mx-1 px-3 py-1 rounded-md bg-gray-300 text-gray-700">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === totalPages ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-cyan-500 text-white'
        }`}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
