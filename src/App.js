import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //BEM NAMING CONVENTION
    <div className="app">
     <div className="app_body">
       <Sidebar/>
       {}
     </div>
    </div>
  );
}

export default App;
