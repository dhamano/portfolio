import React from 'react';

import Linkedin from '../imgs/linkedin-logo.png';

const About = () => {
  return(
    <article className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div>
          <p>
            After graduating with a Bachelor's Degree in Fine Arts with an Emphasis in Graphic Design,
            I spent the next years working as a designer and coder as part of a team and a freelancer.
            I was always interested in building websites since high school when I was first introduced
            to it. Later on learning CSS and PHP as I worked on building my own themes for WordPress.
          </p>
          <p>
            I have worked on a multitude of web and print based projects providing branding, graphic
            &amp; web design (<em>Photoshop, Illustrator, InDesign, XD</em>) and development (<em>HTML,
            CSS, JS, jQuery, SCSS, WordPress, Bootstrap, Zurb Foundation, Responsive Layouts</em>).
            Recently, I have been working on personal projects using <em>React, Redux, Node.js, Python,
            and Django</em> working solo and with other developers.
          </p>
          <p>
            I am currently based in Los Angeles, CA. I enjoy spending my free time learning new things,
            playing PC video games, practicing photography, video editing, and drawing.
          </p>
          <p>
            Get in Touch: <a href="//www.linkedin.com/in/dustin-hamano" className="linkedin" title="Dustin's Linkedin Page" target="_blank"><img src={Linkedin} alt="Linkedin Logo" /></a>
          </p>
        </div>
      </div>
    </article>
  )
}

export default About;