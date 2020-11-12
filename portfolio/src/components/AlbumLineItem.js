import React from "react"

// This will live in the modal div at the bottom of ProjectPage
function AlbumLineItem (props) {
    
    return (

        <div>
          <p className="artist-text">{props.artist}<a href= {props.url} target="_blank" rel="noreferrer">{props.album}</a></p>
        </div>
    )
}

export default AlbumLineItem;