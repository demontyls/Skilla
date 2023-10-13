import React from 'react';

import './CustomBadge.scss'

interface IBadge {
  status: string;
  name: string;
  icon?: string;
}
const CustomBadge: React.FC<IBadge> = ({status, name, icon}) => {
  return (
    <div className={`custom-badge ${status}`}>
      <i className={icon}/>
      <div>{name}</div>
    </div>
  );
};

export default CustomBadge;