import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
     <div className="accordion">
     <div className="accordion-header"><h2>npx create-react-app</h2></div>
     <div className="accordion-body"><p>It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production</p></div>
     </div>
    </div>
  );
}

export default App;
