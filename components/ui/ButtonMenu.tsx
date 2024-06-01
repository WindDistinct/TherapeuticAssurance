'use client';

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../utilities/Menu';
import TabContent from '../utilities/TabContent';

const ButtonMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabSelect = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <Menu onSelectTab={handleTabSelect} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default ButtonMenu;