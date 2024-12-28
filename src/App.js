// src/App.js
import React from 'react';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contactdetails'; // Example contact page component
import About from './components/About';
import LandingPage from './components/Landingpage';

function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      <Navigationbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
