import React from "react"

// This will live in the modal div at the bottom of ProjectPage
function ProjectLinks (props) {
    
    return (

        <div>
          <a href={props.link.url} target="_blank" rel="noreferrer"> {props.link.type}</a>
        </div>
    )
}

export default ProjectLinks;