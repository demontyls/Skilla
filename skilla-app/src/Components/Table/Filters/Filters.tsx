import React from 'react';

import CustomDropdown from '../../../Shared/CustomDropdown/CustomDropdown';
import Search from '../../../Shared/Search/Search';
import CustomSelect from '../../../Shared/CustomSelect/CustomSelect';

import { IFilters } from './Interface';
import './Filters.scss'

const Filters:React.FC<IFilters> = ({ setActiveSorts, activeSorts, filter, activeFilter }) => {
  const removeActiveEvent = () => {
    filter();
    setActiveSorts({
      date: false,
      duration: false
    });
    hasActive()
  }
  const hasActive = () => Object.values(activeSorts).some( elem => elem);

  return (
    <div className="filters-wrapper">
      <Search/>
      <div className="filters">
        <a
          className={`reset-filter btn me-2 ${hasActive() || activeFilter ? "d-flex": "d-none"}`}
          onClick={() => removeActiveEvent()}
        >
          Сбросить фильтр
          <i className="fa-close"/>
        </a>
        <CustomDropdown linkContent="Входящие"/>
        <CustomDropdown linkContent="Константин К."/>
        <CustomDropdown linkContent="Звонки от исполнителей"/>
        <CustomSelect filter={filter} isActive={activeFilter} linkContent={'Все звонки'} />
        <CustomDropdown linkContent="Все оценки"/>
        <CustomDropdown linkContent="Все ошибки"/>
      </div>
    </div>
  );
};

export default Filters;