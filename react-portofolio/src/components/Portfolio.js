import React from 'react';

import Project from './Project';

import { portfolio } from '../data/portfolio';

const Portfolio = () => {
  return(
    <>
      {
        portfolio.map( (project, i) => {
          // console.log(project);
          return <Project {...project} key={i.toString().padStart(2, '0')} />
        })
      }
    </>
  )
}

export default Portfolio;