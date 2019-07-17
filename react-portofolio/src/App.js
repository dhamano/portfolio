import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
