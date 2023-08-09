import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.scss';

const Pagination = (props) => {
  return (
    <div className="col-12">
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={(
          <a href="#page">
...
          </a>
)}
        breakClassName="break-me"
        pageCount={props.pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={props.handlePageClick}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName={`active ${styles.unsetZindex}`}
        forcePage={props.forcePage}
      />
    </div>
  );
};
export default Pagination;
