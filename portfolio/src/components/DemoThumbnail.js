import React from "react";

// This will live in the modal div at the bottom of ProjectPage
function DemoThumbnail(props) {
  return (
    <div>
      <img
        class="demo-thumbnail"
        src={props.thumbnail}
        alt={props.name}
        onClick={props.toggle}
      />
    </div>
  );
}

export default DemoThumbnail;
