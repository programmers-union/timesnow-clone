import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  category: string;
}

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <nav aria-label="Article pagination">
      <ul className="pagination">
        {/* Previous button */}
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          {currentPage > 1 ? (
            <Link 
              href={`/${category}?page=${currentPage - 1}`} 
              className="page-link "
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          ) : (
            <span className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </span>
          )}
        </li>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <li key={index} className={`page-item  ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}>
            {page === '...' ? (
              <span className="page-link">...</span>
            ) : (
              <Link 
                href={`/${category}?page=${page}`} 
                className="page-link"
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </Link>
            )}
          </li>
        ))}

        {/* Next button */}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          {currentPage < totalPages ? (
            <Link 
              href={`/${category}?page=${currentPage + 1}`} 
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          ) : (
            <span className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}