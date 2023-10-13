import React, { useState } from 'react';

import { ISortButton } from './Interface';


const SortButton: React.FC<ISortButton> = ({ fieldSort, setData, setActiveSorts, activeSorts, name }) => {
  const [ sortOrder, setSortOrder ] = useState('DESC');
  const [ isDisabled, setIsDisabled ] = useState(false);
  const isActive = activeSorts[fieldSort as keyof typeof activeSorts];

  const sortFromApi = () => {
    setIsDisabled(true);
    setActiveSorts({...activeSorts, [fieldSort]: true});
    setData([]);
    fetch(`https://api.skilla.ru/mango/getList?sort_by=${fieldSort}&order=${sortOrder}&limit=172`, {
      method: "POST",
      headers: {
        Authorization: 'Bearer testtoken'
      },
    })
      .then(response => response.json())
      .then(data => {
        setData(data.results);
        setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
        setIsDisabled(false);
      });
  }

  return (
    <button
      disabled={isDisabled}
      className={`btn d-flex p-0 ${isActive ? 'text-accent' : 'text-text-secondary'}`}
      aria-disabled={true}
      onClick={()=> sortFromApi() }
    >
      {name}
      {isActive && <i className={`fa-chevron-up ms-1 ${sortOrder === 'ASC' ? 'rotate-180' : 'rotate-0'}`}/>}
    </button>
  );
};

export default SortButton;