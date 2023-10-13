import React from 'react';
import './App.scss';
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import PageContent from "../Components/Page-content/PageContent";

function App() {
  return (
    <>
      <div className="page">
        <Sidebar/>
        <div className="">
            <Header/>
            <PageContent/>
        </div>
      </div>
    </>
  );
}

export default App;
