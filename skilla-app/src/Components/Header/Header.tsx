import React from 'react';

import Progress from '../Shared/Progress/Progress';

import './Header.scss'
import Organization from "../Shared/Organization/Organization";
import Profile from "../Shared/Profile/Profile";

const Header = () => {
  return (
    <header className="d-flex bg-white text-seconadry-gray">
      <div className="d-flex align-items-center justify-content-between container px-0">
        <div className="">
          Среда 13окт
        </div>

        <div className="block-statistics text-dark">
          <div className="">
            Новые звонки <span className="text-green">20 из 30 шт</span>
            <Progress filled={47} filledColor="bg-green"/>
          </div>
          <div>
            Качество Раговоров <span className="text-yellow">45%</span>
            <Progress filled={30} filledColor="bg-yellow"/>
          </div>
          <div>
            Конверсия заказов <span className="text-red">45%</span>
            <Progress filled={45} filledColor="bg-red"/>
          </div>
        </div>
        <div className="search">
          <i className="fa-search"></i>
        </div>
        <Organization/>
        <Profile/>
      </div>
    </header>
  );
};

export default Header;