import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';

import './Sidebar.scss'
import CustomBadge from "../Shared/CustomBadge/CustomBadge";
import {IMenu} from "./Interface";

const Sidebar = () => {
  const [menu, setMenu] = useState<IMenu[]>([])

  useEffect(() => {

      fetch('https://api.skilla.ru/partnership/getMenu', {
        method: "POST",
        headers: {
          Authorization: 'Bearer testtoken'
        },
      })
        .then(response => response.json())
        .then(data => setMenu(data));
  }, [])

  const getIcon = (name: string) => {
    switch(true) {
      case name === 'Итоги':
        return  'fa-chart-timeline-variant'
      case name === 'Заказы':
        return 'fa-orders'
      case name === 'Сообщения':
        return 'fa-mail-outline'
      case name === 'Звонки':
        return 'fa-Phone'
      case name === 'Контрагенты':
        return 'fa-people'
      case name === 'Документы':
        return 'fa-documents'
      case name === 'Исполнители':
        return 'fa-user'
      case name === 'Отчеты':
        return 'fa-briefcase-outline'
      case name === 'База знаний':
        return 'fa-local-library'
      case name === 'Настройки':
        return 'fa-settings'
      default:
        return  'fa-search'
    }
  }

  return (
    <aside className="sidebar bg-dark-blue">
        <div className="sidebar__logo">
          <a href="#"/>
        </div>
        <ul className="sidebar__list text-gray-white">
          {menu.map((elem, item)=> {
            return (
                <li>
                  <a href={elem.url} className={`d-flex ${elem.is_new ? 'new' : ''}`}>
                    <i className={`icon-3 fa ${elem.icon ? elem.icon : getIcon(elem.name)}`} />
                    <span>{elem.name}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
        <div className="sidebar__footer">
          <Button variant="primary" data-role="add">
            Добавить заказ
            <i className="icon-3 fa fa-plus"></i>
          </Button>
          <Button variant="primary" data-role="payment">
            Оплата
            <i className="icon-3 fa fa-alert"></i>
          </Button>
        </div>
    </aside>
  );
};

export default Sidebar;