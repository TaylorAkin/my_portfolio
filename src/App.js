import React from 'react';
import './App.css';
import DashboardComponent from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Header'

function App() {
  return (
  <React.Fragment>

      <HeaderComponent/>
      
      <DashboardComponent/>

  </React.Fragment>

  );
}

export default App;
