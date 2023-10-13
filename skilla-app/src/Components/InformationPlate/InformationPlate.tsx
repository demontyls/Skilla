import React, {useState} from 'react';

import './InformationPlate.scss'

const InformationPlate = () => {
  const [balance, setBalance] = useState(238);
  const [day, setDay] = useState(3);
  return (
    <div className="information-plate container">
      <div className="balanc-badge">
        <div>
          <span className="text-secondary-geay">Баланс: </span>
          <span className="text-black">{balance}</span>
        </div>
        <button className="btn d-flex p-0" onClick={()=> setBalance(balance + 1)}>
          <i className="icon-3 fa-plus text-primary"/>
        </button>
      </div>

      <div className="day-counter">
        <i className="fa-chevron-left ms-2 text-icon icon-2" onClick={()=> setDay(day - 1)}/>
        <i className="fa-icon-calendar text-icon icon-2"></i>
          <span className="text-primary">
            {Boolean(day) ? `${day} дня`
              : 'не указано'
            }
          </span>

        <i className="fa-chevron-right ms-1 text-icon icon-2" onClick={()=> setDay(day + 1)}/>
      </div>
    </div>
  );
};

export default InformationPlate;