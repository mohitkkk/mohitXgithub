import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingHeader from './components/FloatingHeader';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Common from './components/Common';
import Box from './components/Box'



const App = () => {
  return (
    <Router>
      <div>
        <FloatingHeader isLoading={false} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/common" element={<Common />} />
          <Route path="/box" element={<Box />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;