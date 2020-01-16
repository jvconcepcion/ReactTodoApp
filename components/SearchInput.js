import React from 'react';
import '../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowClose} from '@fortawesome/free-regular-svg-icons';

const SearchInput = (props) => {
  const {searchInputOnChange, searchCloseBTN} = props;
  return (
    <form id="searchTaskWrapperID" className="searchTaskWrapper">
      <input
        type="text"
        placeholder="Search task here..."
        onChange={searchInputOnChange}
        className="searchInput"
      />
      <button
        onClick={searchCloseBTN}
        className="closeSearchBarBTN"
      ><FontAwesomeIcon icon={faWindowClose} size="3x" />
      </button>
    </form>
  )
}

export default SearchInput;