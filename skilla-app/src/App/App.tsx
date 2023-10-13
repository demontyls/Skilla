import React from 'react';
import './App.scss';
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page-content/PageContent";
import InformationPlate from "../Components/InformationPlate/InformationPlate";

function App() {
  return (
    <>
      <div className="page">
        <Sidebar/>
        <div className="">
            <Header/>
            <InformationPlate/>
            <PageContent/>
        </div>
      </div>
    </>
  );
}

export default App;
