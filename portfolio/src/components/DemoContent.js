import React from "react"

// This will live in the modal div at the bottom of ProjectPage
function DemoContent (props) {
    
    var myStyles = {
        container: {
            display: props.show ? 'block' : 'none'
        }
    }


    const iframe = (<iframe width='768' height='432' title={props.name} src={props.links} frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>)
    const img = (<img src={props.links} height='100%' width='100%' alt={props.name}></img>)

    let thingToDisplay

    if (props.project.demoType === 'iframe') {
        thingToDisplay = iframe
    } else {
        thingToDisplay = img
    }

    return (

        <div className="demo-window" style={myStyles.container} >
            <button className="btn-link close">
                <i className="fa fa-window-close"></i>
            </button>
            <div className="demo-content">
                {thingToDisplay}
           </div>
        </div>
    )
}

export default DemoContent;