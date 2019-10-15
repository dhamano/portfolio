import React from 'react';

const Project = (props) => {
  // console.log("PROPS", props);
  return(
    <article>
      <div className="container">
            {
              props.image && (
                <img src={props.image} alt={props.alt_text} />
              )
            }
        <div className="text">
            {
              props.title && (
                <h2>{props.title}</h2>
              )
            }
            {
              props.copy && (
                <p>
                  {props.copy}
                </p>
              )
            }
          <dl>
            {
              props.tech_stack && (
                <>
                <dt>Tech Stack</dt>
                <dd>{props.tech_stack}</dd>
                </>
              )
            }
            {
              props.dependencies && (
                <>
                <dt>Dependencies</dt>
                <dd>{props.dependencies}</dd>
                </>
              )
            }
          </dl>
            {
              props.github && (
                <a href={props.github} title="Github" target="_blank">Github</a>
              )
            }
            {
              props.app_link && (
                <a href={props.app_link} title="app link" target="_blank">{props.app_name}</a>
              )
            }
        </div>
      </div>
    </article>
  )
}

export default Project;