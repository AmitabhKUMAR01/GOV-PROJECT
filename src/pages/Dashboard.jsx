// FormComponent.jsx

import React, { useState } from 'react';
import './Dashboard.scss';
import SynchronizeOperatorDetails from './SynchronizeOperatorDetails';
import OperatorHeader from './OperatorHeader';

const Dashboard = () => {


  return (
  <>
  <OperatorHeader/>
  <SynchronizeOperatorDetails/>
  </>
  );
};

export default Dashboard;
