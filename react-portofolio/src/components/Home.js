import React from 'react';

import Portfolio from './Portfolio';
import About from './About';

const Home = () => {

  return(
    <main className="portfolio" id="home">
      <section>
        <div className="intro">
          <h1>Hello, My name is Dustin.</h1>
          <div className="pipe">&nbsp;</div>
          <div className="copy">
            <h2>Full-Stack Web Developer <br />&amp; Graphic Designer</h2>
            <p>
              Experienced in designing and coding cross-browser compatable websites. Looking
              to make a difference that impact customers in a positive way.
            </p>
          </div>
        </div>
      </section>
      <section className="project" id="project">
        <Portfolio />
        <About />
      </section>
    </main>
  )
}

export default Home;