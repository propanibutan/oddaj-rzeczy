import { useState } from 'react';
import ReactPaginate from 'react-paginate';

export default function HomeWhoWeHelpAll({ data, text }) {
  const [pageNumber, setPageNumber] = useState(0);
  const items = data;
  
  const itemsPerPage = 3;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayItems = items
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map(({ id, name, description, give}) => (
      <li key={id} className='all-single'>
        <div className='all-single_text'>
          <div className='all-single_text__main'>
            <span className='all-single_text__name'>{name}</span>
            <p className='all-single_text__description'>{description}</p>
          </div>
          <p className='all-single_text__give'>{give}</p>
        </div>
      </li>
    ));

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className='all-container'>
      <span className='all-description'>{text}</span>
      <ul className='all-table'>
       {displayItems}
      </ul>
      {pageCount > 1 && <ReactPaginate 
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-buttons"}
        previousClassName={"previous-button"}
        nextClassName={"next-button"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"pagination-active"}
        />}
    </div>
  )
}
