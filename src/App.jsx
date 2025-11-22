import React from 'react';
import Home from './pages/Home';
import LeafCursor from './components/LeafCursor/LeafCursor';

function App() {
  return (
    <div className="cursor-hidden">
      <LeafCursor />
      <Home />
    </div>
  );
}

export default App;
