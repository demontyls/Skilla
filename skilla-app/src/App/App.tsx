import React from 'react';
import './App.scss';

import Sidebar from '../Components/Sidebar/Sidebar';
import CallsPage from '../Pages/CallsPage/CallsPage';

function App() {
  return (
    <>
      <div className="page">
        <Sidebar/>
        <div className="">
            <CallsPage/>
        </div>
      </div>
    </>
  );
}

export default App;
