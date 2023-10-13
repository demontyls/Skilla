import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { getIcon } from './Functions';
import { IMenu } from './Interface';
import './Sidebar.scss'

const Sidebar = () => {
  const [ menu, setMenu ] = useState<IMenu[]>([]);

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

  return (
    <aside className="sidebar bg-dark-blue">
      <div className="sidebar__logo">
        <a href="#"/>
      </div>
      <ul className="sidebar__list text-gray-white">
        {menu.map((elem, item)=> {
          return (
            <li key={item}>
              <a href="#" className={`d-flex ${elem.name === 'Звонки' ? 'active': ''}`}>
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