import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './global.css';

import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
// import Footer from './components/Footer'
import Home from './pages/Home'
import Directory from './pages/Directory'
import Section from './pages/Section';
import ContentPage from './pages/ContentPage';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path="grammar/" element={<Directory />}>
              <Route path=":section" element={<Section/>}/>
              <Route path=":section/:page" element={<ContentPage/>} />
            </Route>
        </Routes>
        {/* <Footer/> */}
      </ScrollToTop>
    </Router>
  );
}

export default App;
