import React, { useState } from "react";
import projects from "../../projects.json";
import ProjectMain from "../ProjectMain";
import DemoContent from "../DemoContent"



function Portfolio () {

    const [portfolioIndex, setPortfolioIndex] = useState(0);

    // const [displayedItem, setDisplayedItem] = useState(projects[portfolioIndex])

function manageToggleRight () {

    portfolioIndex === projects.length - 1 ? setPortfolioIndex(0) : setPortfolioIndex(portfolioIndex + 1);
}

function manageToggleLeft () {
    
    portfolioIndex === 0 ? setPortfolioIndex(projects.length - 1) : setPortfolioIndex(portfolioIndex - 1);
}


console.log('Porject!!', projects[portfolioIndex])

    return (
        <div>

            <header>
                <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
                <h1 className="navbar-brand">Jim Faulkner</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Close-Up
                        <i className="fa fa-user"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://jhf1203.github.io/portfolio"> Content
                        <i className="fa fa-book"></i></a>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>

            <main className="container">

            <section className="row section-row">
            <div className="col-md-2">
                <h2>Portfolio</h2>
            </div>
            <div className="col-md-5">
                <p>
                I am so excited to share my body of work with you. Please see below, in
                descending order, some selections of my work. I'd love to talk to you about any of these further, feel free to
                reach out using one of the multitude of ways of getting in touch!
                </p>
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

            <section className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 section-row toggle-row">
                    <div className="row toggle-subrow">
                        <button type="button" className="btn btn-link toggle-btn" onClick={() => manageToggleLeft()}>
                            <i className="fa fa-arrow-circle-left i-toggle"></i>
                        </button>
                        <h3 className="toggle-text">Toggle Projects</h3>
                        <button type="button" className="btn btn-link" onClick={() => manageToggleRight()} >
                            <i className="fa fa-arrow-circle-right i-toggle"></i> 
                        </button>
                    </div>
                <div className="col-md-4"></div>
                </div>
            </section>

            <ProjectMain 
                project={projects[portfolioIndex]}
                name={projects[portfolioIndex].name}
                links={projects[portfolioIndex].projectLinks}
                skills={projects[portfolioIndex].skillsUsed}
                thumbnail={projects[portfolioIndex].demoThumbnail}
                content={projects[portfolioIndex].demoContent}
                summary={projects[portfolioIndex].summary}
                details={projects[portfolioIndex].details}
            />
            
            <DemoContent
             project={projects[portfolioIndex]} 
             name={projects[portfolioIndex].name}
             />
            </main>
        </div>

    )
}

export default Portfolio;