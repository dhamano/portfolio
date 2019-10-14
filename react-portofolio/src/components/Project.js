import React from 'react';

const Project = (props) => {
  // console.log("PROPS", props);
  return(
    <article>
      <div className="container">
        <img src={props.image} alt={props.alt_text} />
        <div className="text">
          <h2>{props.title}</h2>
          <p>
            {props.copy}
          </p>
          <dl>
            <dt>Tech Stack</dt>
            <dd>{props.tech_stack}</dd>
            {
              props.dependencies && (
                <>
                <dt>Dependencies</dt>
                <dd>{props.dependencies}</dd>
                </>
              )
            }
          </dl>
        </div>
      </div>
    </article>
  )
}

export default Project;