import React from 'react';
import Header from './Header';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path='/resources' Component={ResourcesPage} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;