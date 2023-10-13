import React, { ReactNode } from 'react';
import { Dropdown } from 'react-bootstrap';

import './CustomDropdown.scss'

interface IToggle {
  children: any,
  onClick: any,
  ref: any
}
interface ICustomDropDown {
  linkContent: ReactNode
}
const CustomDropdown: React.FC<ICustomDropDown> = ({linkContent}) => {
  const CustomToggle: React.FC<IToggle> = React.forwardRef(({ children, onClick, ref }) => (
    <a
      className="text-seconadry-gray text-decoration-none"
      href=""
      ref={ref}
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
            {linkContent}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
  );
};

export default CustomDropdown;