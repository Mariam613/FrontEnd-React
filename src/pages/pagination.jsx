import React from "react";
import _ from "lodash";
const Pagination = props => {
  const { count, pageSize, currentPage, onChange, noofpages } = props;
  // const pageNum = count / pageSize;
  const arr = _.range(1, noofpages + 1); //[1,2,3]

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {arr.map(page => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a onClick={() => onChange(page)} className="page-link">
              {page}
            </a>
          </li>
        ))}

        {/* <li className="page-item">
          <a className="page-link">2</a>
        </li>
        <li className="page-item">
          <a className="page-link">3</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
