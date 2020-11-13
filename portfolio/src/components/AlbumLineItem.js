import React from "react";

// This will live in the modal div at the bottom of ProjectPage
function AlbumLineItem(props) {
  return (
    <div>
      <p className="artist-text">{props.artist}</p>
      <p className="album-text-container">
        <a
          className="album-text"
          href={props.url}
          target="_blank"
          rel="noreferrer"
        >
          <strong>{props.album}</strong> | {props.count} plays
        </a>
      </p>
    </div>
  );
}

export default AlbumLineItem;
