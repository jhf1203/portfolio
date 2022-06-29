/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/Profile.jpg";
import resume from "../../assets/resume0821.pdf";

function About() {
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
                <Link to="/portfolio" className="nav-link">
                  Portfolio <i className="fa fa-book header-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About <i className="fa fa-user header-icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container">
        <section className="row section-row">
          <div className="col-md-3">
            <h2>About Me</h2>
            <img
              className="bio-image"
              src={profilePic}
              alt="A picture of me."
              id="bio-image"
            />
          </div>
          <div className="col-md-9">
            <p>
              I'm a Cloud Engineer for the Garage team at IBM.  Professionally I specialize in helping large companies modernize the way they do business through the application of DevOps principles and Cloud-Native Development.  While I like to consider myself a jack of all trades, I'm currently spending most of my work week utilizing RedHat Openshift on top of Kubernetes with a multitude of tools to help streamline how web applications function and are maintained and monitored.  
            </p>
            <p>
              On my portfolio page you'll find work that I have completed out of a workplace setting. Some are projects for the professional certification in Coding I completed in 2020, as well as passion projects revolved around my continuous improvement as a developer as well as highlighting some things about which I am passionate outside of development.    
            </p>
            <p>
              Personally, I'm born and raised in Southeastern NC and have lived in Raleigh for most of the last decade.  When I'm not at work I love going on adventures with my toddler boy, with any time left spent on skiing, photography, architecture, fishing, and generally being outdoors as much as possible.  I'm also very passionate about music and always have it in the background, check out below what I've been listening to lately, and feel free to reach out to learn more about me!   
            </p>
          </div>
        </section>
        <section className="row bottom-row">
          <div className="col-md-7 section-row">
            <div className="row-contact-header">
              <h2>Contact Me</h2>
            </div>
            <div className="row">
              <p className="contact-text">
                I would love to hear from you! I thrive on connection, and am
                always on the lookout for opportunities to network and
                collaborate. Feel free to reach out using any of the resources
                below, as well as find out a bit more about me professionally.
              </p>
            </div>
            <div className="row contact-list ">
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-home contact-icon left-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                  href="https://www.visitraleigh.com/events/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Raleigh, NC, USA
                </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-envelope contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a  href="mailto:jhf1203@gmail.com">
                  E-mail
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-phone-square contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a  href="#" target="_blank">
                  252.917.1571
                  </a>
                </div>
              </div>
            </div>
            <div className="row contact-list">
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-linkedin-square left-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                  href="https://www.linkedin.com/in/jim-faulkner-13476534"
                  target="_blank"
                  rel="noreferrer"
                  >
                  LinkedIn
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-github contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                  
                  href="https://github.com/jhf1203"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row d-flex justify-content-center contact-icon-row">
                  <i className="fa fa-black-tie contact-icon"></i>
                </div>
                <div className="row d-flex justify-content-center contact-text-row">
                  <a
                  
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  >
                  Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          
        </section>
      </main>
    </div>
  );
}

export default About;
