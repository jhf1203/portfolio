import React from "react";

// This will live in the modal div at the bottom of ProjectPage
function DemoContent(props) {
  const iframe = (
    <iframe
      width="768"
      height="432"
      title={props.name}
      src={props.content}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
  const img = (
    <img src={props.content} height="100%" width="100%" alt={props.name}></img>
  );

  let thingToDisplay;

  if (props.project.demoType === "iframe") {
    thingToDisplay = iframe;
  } else {
    thingToDisplay = img;
  }

  return (
    <div className="demo-window" style={{ display: props.display }}>
      <button className="btn-link close">
        <i className="fa fa-window-close" onClick={props.toggle}></i>
      </button>
      <div className="demo-content">{thingToDisplay}</div>
    </div>
  );
}

export default DemoContent;
