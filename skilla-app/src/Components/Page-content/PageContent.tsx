import React from 'react';

import './PageContent.scss'
import Table from "../Table/Table";

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