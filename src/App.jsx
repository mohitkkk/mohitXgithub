import React, { useState } from 'react';
import FloatingHeader from './components/FloatingHeader';
import Hero from './components/Hero';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {/* Pass isLoading state to FloatingHeader */}
      <FloatingHeader isLoading={isLoading} />
      <Hero setIsLoading={setIsLoading} />
    </div>
  );
};

export default App;
