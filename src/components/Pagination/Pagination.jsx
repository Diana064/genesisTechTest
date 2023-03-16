import { useState } from 'react';
function Pagination({ courses, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / pageSize);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };
  const goToNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, totalPages));
  };
  return (
    <div>
      <div>
        <button disabled={currentPage === 1} onClick={goToPreviousPage}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button disabled={currentPage === totalPages} onClick={goToNextPage}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Pagination;
