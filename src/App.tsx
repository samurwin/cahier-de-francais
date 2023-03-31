import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './global.css';

import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Directory from './pages/Directory'
import Section from './pages/Section';
import Vocabulary from './pages/Vocabulary';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* Section Routes */}
            <Route path="r/" element={<Directory />}>
              <Route path=":section" element={<Section/>}/>
              <Route path=":section/:page" element={<Vocabulary/>} />
            </Route>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
