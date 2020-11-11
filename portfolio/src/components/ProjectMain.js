import React from "react"
import DemoThumbnail from "./DemoThumbnail"
import ProjectLinks from "./ProjectLinks"

function ProjectMain () {
    
    return (

        <div>
            <section className="row section-row">
                <div className="col-md-3 col-folio">
                    <h3><strong>Bookmarked</strong></h3>
                    <p><strong>Project Links |</strong>
                    <ProjectLinks />
                    </p>

                    <p><strong>Skills Used |</strong> Sequelize, Express, Handlebars, Passport (NPM), jQuery, CSS, 3rd Party APIs,
                    Travis, Linting.</p>

                    <DemoThumbnail />
                    
                </div>
                <div className="col-md-4">
                    <h3>Project Summary</h3>
                    <p>This was our second group project for the class, and tasked us with creating a full-stack application of our
                    choosing given certain conditions. We were required to serve a MySql database through Heroku, using the
                    Sequelize ORM, and our HTML content was required to be rendered with Handlebars for Express.
                    </p>
                </div>
                <div className="col-md-5">
                    <h3>Project Details</h3>
                    <p>This application was done with me being part of a team of four, and was my first experience working on a
                    multi-faceted full-stack project with a team. In addition to practicing recent languages and libraries, I was
                    able to see clearly how closely together they work given that each member of the team had different
                    assignments and responsibilities. This was a highly ambitious project with a long list of items for future
                    development with a target completion time of 60 days, so stay posted. This will be a fully functional social
                    media platform by December.
                    </p>
                </div>
            </section>

            <div class="demo-window">
            <button class="btn-link close">
            <i class="fa fa-window-close"></i>
            </button>
            <div class="demo-content"></div>
            </div>
        </div>
    )
}

export default ProjectMain;