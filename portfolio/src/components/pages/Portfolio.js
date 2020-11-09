import React from "react";


function Portfolio () {
    return (
        <div>
            <main className="container">

            <section className="row section-row">
            <div className="col-md-2">
                <h2>Portfolio</h2>
            </div>
            <div className="col-md-5">
                <p>
                I am so excited to share my body of work with you. Please see below, in
                descending order, some selections of my work. I'd love to talk to you about any of these further, feel free to
                reach out using one of the multitude of ways of <span><a className="resume-link"
                    href="https://jhf1203.github.io/contact" target="_blank">getting in touch!</a></span></p>
                <a className="resume-link" href="assets/resume-1020.pdf" target="_blank">Click here to view my resume.</a>

            </div>
            <div className="col-md-5">
                <p>
                I pride myself on my ideation and creativity. My background in Interior Design
                and my natural left-brain give me a penchant for both meeting parameters
                and building with functionality in mind, while still humanizing and injecting
                character into my work.
                </p>
            </div>
            </section>


            <section className="row section-row">
            <div className="col-md-3 col-folio">
                <h3><strong>Bookmarked</strong></h3>
                <p><strong>Project Links |</strong>
                <a href="https://github.com/jhf1203/Project-2" target="_blank"> Repository</a>
                <a href="https://project-2-team-2.herokuapp.com/" target="_blank">Deployment</a>
                </p>

                <p><strong>Skills Used |</strong> Sequelize, Express, Handlebars, Passport (NPM), jQuery, CSS, 3rd Party APIs,
                Travis, Linting.</p>

                <p id="bookmarked-nav" className="btn-link demo-link" href="#"><strong>Demo #1 (gif) | Functionality</strong>
                </p>
            </div>
            <div className="col-md-4">
                <h3>Project Summary</h3>
                <p>This was our second group project for the className, and tasked us with creating a full-stack application of our
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

            <div className="demo-window">
            <button className="btn-link close">
                <i className="fa fa-window-close"></i>
            </button>
            <div className="demo-content"></div>
            </div>
            </main>
        </div>

    )
}

export default Portfolio;