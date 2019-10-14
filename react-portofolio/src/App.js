import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <a href="/" className="logo ir">Dustin Hamano's Logo</a>
        <Navigation />
      </header>

      <Route exact path="/" component={Home} />
      <Footer />
    </div>
  );
}

export default App;
