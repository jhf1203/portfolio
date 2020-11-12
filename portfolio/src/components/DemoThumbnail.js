import React from "react"
import ProjectMain from "./ProjectMain"

// This will live in the modal div at the bottom of ProjectPage
function DemoThumbnail (props) {
    
    return (

        <div>
           <img class="demo-thumbnail" src={props.thumbnail} alt={props.name} onClick={props.onClick} />
        </div>
    )
}


export default DemoThumbnail;