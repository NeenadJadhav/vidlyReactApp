import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

//Input:
//Output: onClick event

const Pagination = (props) => {
  const { totalMovieCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = totalMovieCount / pageSize;

  const totalPages = _.range(1, pageCount + 1);

  let isActive = (page) => {
    let className = "page-item ";
    if (page === currentPage) className += "active";
    return className;
  };

  return (
    <React.Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination m-2">
          {totalPages.map((page) => (
            <li
              className={
                // page === currentPage ? "page-item active" : "page-item"
                isActive(page)
              }
              key={page}
            >
              <a
                className="page-link"
                onClick={() => onPageChange(page)}
                href="#"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </React.Fragment>
  );
};

Pagination.propTypes = {
  totalMovieCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
