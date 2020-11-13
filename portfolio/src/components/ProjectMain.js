import React, { useState } from "react";
import DemoThumbnail from "./DemoThumbnail";
import ProjectLinks from "./ProjectLinks";

function ProjectMain(props) {
  return (
    <div>
      <section className="row section-row bottom-row">
        <div className="col-md-3 col-folio">
          <h3>
            <strong>{props.name}</strong>
          </h3>
          <p>
            <strong>Project Links |</strong>
            {props.links.map((link) => {
              return <ProjectLinks link={link} />;
            })}
          </p>
          <p>
            <strong>Skills Used |</strong> {props.skills}
          </p>
          <p>
            <strong>Demos (click to enlarge)</strong>
          </p>
          {props.thumbnail.map((thumbnail) => {
            return (
              <DemoThumbnail
                thumbnail={thumbnail}
                name={props.name}
                toggle={props.toggle}
              />
            );
          })}
        </div>
        <div className="col-md-4">
          <h3>Project Summary</h3>
          <p>{props.summary}</p>
        </div>
        <div className="col-md-5">
          <h3>Project Details</h3>
          <p>{props.details}</p>
        </div>
      </section>
    </div>
  );
}

export default ProjectMain;
