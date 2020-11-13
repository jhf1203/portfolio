import React from "react";

// Rendering each of the artists/albums from ProfileEmbed
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
