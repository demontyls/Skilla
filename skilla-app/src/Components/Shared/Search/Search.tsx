import React, {useState} from 'react';
import './Serach.scss'

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="search-wrapper">
      <input
        value={searchValue}
        placeholder='поиск по звонкам'
        className={`form-control ${searchValue ? 'isActive' : '' }`}
        onChange={e => setSearchValue(e.target.value)}
      />
      <i className="fa-search"/>
      <i className={`fa-close`}
         style={{visibility: searchValue ?'visible' : 'hidden'}}
         onClick={() => setSearchValue('')}
      />
    </div>
  );
};

export default Search;