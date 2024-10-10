import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingHeader from './components/FloatingHeader';
import Hero from './components/Hero';
import About from './components/About';  // Example additional component
import Contact from './components/Contact'; // Example additional component
import Common from './components/Common';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div>
        {/* Pass isLoading state to FloatingHeader */}
        <FloatingHeader isLoading={isLoading} />

        {/* Define Routes for different components */}
        <Routes>
          <Route path="/" element={<Hero setIsLoading={setIsLoading} />} />
          <Route path="/about" element={<About />} />  {/* Example About page */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/Common" element={<Common />} /> {/* Example Contact page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
