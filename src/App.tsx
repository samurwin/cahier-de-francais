import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './global.css';

import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
