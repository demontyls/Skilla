import React, { useState } from 'react';
import CustomDropdown from '../../Shared/CustomDropdown/CustomDropdown';

import './Filters.scss'
import Search from '../../Shared/Search/Search';
import { IActiveSorts } from '../Interface';
import CustomSelect from "../../Shared/CustomSelect/CustomSelect";

interface IFilters {
  setActiveSorts: (value: IActiveSorts)=> void;
  activeSorts: IActiveSorts;
  activeFilter: boolean;
  filter: (field?: string, value?: string | number) => void;
}
const Filters:React.FC<IFilters> = ({setActiveSorts, activeSorts, filter, activeFilter}) => {

const removeActiveEvent = () => {
  filter();
  setActiveSorts({
    date: false,
    duration: false
  });
  hasActive()
}
const hasActive = () => {
  return Object.values(activeSorts).some( elem => elem);
}

  return (
    <div className="filters-wrapper">
      <Search/>
      <div className="filters">
        <a
          className={`reset-filter btn me-2 ${hasActive() || activeFilter ? 'd-flex': 'd-none'}`}
          onClick={() => removeActiveEvent()}
        >
          Сбросить фильтр
          <i className="fa-close"></i>
        </a>
        <CustomDropdown linkContent="Входящие"/>
        <CustomDropdown linkContent="Константин К."/>
        <CustomDropdown linkContent="Звонки от исполнителей"/>
        <CustomSelect filter={filter}  linkContent={'Все звонки'} />
        <CustomDropdown linkContent="Все оценки"/>
        <CustomDropdown linkContent="Все ошибки"/>
      </div>
    </div>
  );
};

export default Filters;