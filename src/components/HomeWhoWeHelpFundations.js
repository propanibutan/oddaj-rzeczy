import React, { useState } from 'react';
import JsonData from "../data/fundations.json";
import ReactPaginate from 'react-paginate';

export default function HomeWhoWeHelpFundations() {
  const [items, setItems] = useState(JsonData);
  const [pageNumber, setPageNumber] = useState(0);

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
        <hr className='all-single_line'/>
      </li>
    ));

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  //IF U LOOK FOR SCSS FILE CHECK WHO-WE-HELP-ALL.SCSS
  return (
    <div className='all-container'>
      <span className='all-description'>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</span>
      <ul className='all-table'>
       {displayItems}
       <ReactPaginate 
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-buttons"}
        previousClassName={"previous-button"}
        nextClassName={"next-button"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"pagination-active"}
        />
      </ul>
    </div>
  )
}
