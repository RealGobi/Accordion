import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className="App">
    <Accordion 
      title='npx create-react-app'
      body='It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.'
       />
    <Accordion 
      title='Ut rutrum sagittis libero' 
      body='Aenean id risus quis dolor convallis viverra. Suspendisse ornare ex et rutrum fringilla. Maecenas interdum vel turpis vel egestas. Phasellus viverra justo non risus faucibus maximus.'
       />
    <Accordion 
      title='Lorem ipsum'
      body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel augue mauris. Donec lacinia hendrerit lacus a congue. Proin commodo nec diam quis dapibus.'
      />
    </div>
  );
}

export default App;
