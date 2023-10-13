import React, {useState} from 'react';
import {Dropdown} from "react-bootstrap";

interface ICustomSelect {
  linkContent: string;
  filter?: (field?: string, value?: string | number) => void;
  isActive: boolean;
}

interface IToggle {
  children: any,
  onClick: any,
  ref: any
}
const CustomSelect: React.FC<ICustomSelect> = ({linkContent, filter, isActive}) => {
  const [activeItem, setActiveItem] = useState(linkContent);
  const CustomToggle: React.FC<IToggle> = (({ children, onClick }) => (
    <a
      className={`text-seconadry-gray text-decoration-none ${isActive ? 'text-accent' : ''}`}
      href=""
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <i className="fa-chevron-up"></i>
    </a>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}  variant="success" id="dropdown-basic">
        {activeItem}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className={activeItem === 'Все звонки' ? 'active' : ''}
          onClick={()=> {
          filter && filter();
          setActiveItem('Все звонки')
        }}>
          Все звонки
        </Dropdown.Item>
        <Dropdown.Item className={activeItem === 'Входящие' ? 'active' : ''}
          onClick={()=> {
          filter && filter('in_out', 1);
          setActiveItem('Входящие');
        }}>
         Входящие
        </Dropdown.Item>
        <Dropdown.Item  className={activeItem === 'Исходящие' ? 'active' : ''}
          onClick={()=> {
          filter && filter('in_out', 0);
          setActiveItem('Исходящие');
        }}>
          Исходящие
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomSelect;