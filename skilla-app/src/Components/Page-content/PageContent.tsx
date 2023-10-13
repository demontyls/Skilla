import React from 'react';

import Table from "../Table/Table";

import './PageContent.scss'

const PageContent = () => {
  return (
    <div className="page-content">
      <div className="container p-0">
        <Table/>
      </div>
    </div>
  );
};

export default PageContent;