import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../projects";
import ProjectMain from "../ProjectMain";
import DemoContent from "../DemoContent";
import resume from "../../assets/resume-1120.pdf";

function Portfolio() {
  // This state determines which index of the Object in "projects" is displayed on the portfolio
  const [portfolioIndex, setPortfolioIndex] = useState(0);

  // This state determines the display property of the pop-up modal that shows the demo gif/video
  const [modalDisplay, setModalDisplay] = useState("none");

  // Handling the state change of the modal to either display or be hidden
  function toggleModal() {
    modalDisplay === "none"
      ? setModalDisplay("block")
      : setModalDisplay("none");
  }

  // Toggles to the next project in the portfolio
  function manageToggleRight() {
    portfolioIndex === projects.length - 1
      ? setPortfolioIndex(0)
      : setPortfolioIndex(portfolioIndex + 1);
  }

  // Toggles to the previous project in the portfolio
  function manageToggleLeft() {
    portfolioIndex === 0
      ? setPortfolioIndex(projects.length - 1)
      : setPortfolioIndex(portfolioIndex - 1);
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
          <h1 className="navbar-brand">Jim Faulkner</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/portfolio" className="nav-link active">
                  Portfolio <i className="fa fa-book header-icon"></i>
                </Link>
                </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About <i className="fa fa-user header-icon"></i>
                </Link>
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
              I am so excited to share my body of work with you. Please see
              below, in descending order, some selections of my work. I'd love
              to talk to you about any of these further, feel free to reach out
              using one of the multitude of ways of getting in touch!
            </p>
            <a
              className="resume-link"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Click here to view my resume.
            </a>,
            <a className="resume-link"
              href="mailto: jhf1203@gmail.com">
                E-mail me.
            </a>
          </div>
          <div className="col-md-5">
            <p>
              I pride myself on my ideation and creativity. My background in
              Interior Design and my natural left-brain give me a penchant for
              both meeting parameters and building with functionality in mind,
              while still humanizing and injecting character into my work.
            </p>
          </div>
        </section>

        <section className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 section-row toggle-row">
            <div className="row toggle-subrow">
              <button
                type="button"
                className="btn btn-link toggle-btn"
                onClick={() => manageToggleLeft()}
              >
                <i className="fa fa-chevron-left i-toggle"></i>
              </button>
              <h3 className="toggle-text">Toggle Projects</h3>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => manageToggleRight()}
              >
                <i className="fa fa-chevron-right i-toggle"></i>
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </section>

        {/* Passing the props from the projects object into the main project component */}
        <ProjectMain
          project={projects[portfolioIndex]}
          name={projects[portfolioIndex].name}
          links={projects[portfolioIndex].projectLinks}
          skills={projects[portfolioIndex].skillsUsed}
          thumbnail={projects[portfolioIndex].demoThumbnail}
          summary={projects[portfolioIndex].summary}
          details={projects[portfolioIndex].details}
          toggle={toggleModal}
        />

        {/* Passing the props from the projects object into the modal window that shows the demo */}
        <DemoContent
          project={projects[portfolioIndex]}
          name={projects[portfolioIndex].name}
          toggle={toggleModal}
          display={modalDisplay}
          content={projects[portfolioIndex].demoContent}
        />
      </main>
    </div>
  );
}

export default Portfolio;
