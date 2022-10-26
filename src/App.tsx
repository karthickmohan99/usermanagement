import React from 'react';
import './App.css';
import ErrorBoundaries from './Utils/ErrorBoundaries/ErrorBoundaries';
import Routing from './Routes/Routing';

function App() {
  return (
    <div className="App">
      <ErrorBoundaries>{Routing}</ErrorBoundaries>
    </div>
  );
}

export default App;
