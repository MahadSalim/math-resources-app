import React from 'react';
import HomePage from './HomePage';
import ResourcesPage from './ResourcesPage';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path='/resources' element={<ResourcesPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
