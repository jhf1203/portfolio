import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/profile.jpg";
import ProfileEmbed from "../ProfileEmbed";
import resume from "../../assets/resume-1020.pdf";

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
                <Link to="/about" className="nav-link active">
                  About
                  <i className="fa fa-user"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                  <i className="fa fa-book"></i>
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
              className="bio-image img-fluid"
              src={profilePic}
              alt="A picture of me."
              id="bio-image"
            />
          </div>
          <div className="col-md-9">
            <p>
              I'm a North Carolina Native, born and raised in Duplin County and
              a graduate of East Carolina University with a degree in Finance.
              In my spare time I enjoy homebrewing, collecting and playing
              records, photography, snow-skiing, and architecture. I currenly
              live in North Raleigh with my wife and our young son. I have spent
              all but three years of my life within one hour of the Triangle,
              and I truly believe there is no better place to live.
            </p>
            <p>
              One of the many things I love about where I live is continuing to
              see it grow as an innovative business hub of the Southeast. I'm
              excited about software development being an integral part of that
              continuing growth, and fascinated with how limitless the
              possibilities are within lines of code. As I move through and
              beyond the Coding Boot Camp at UNC I look forward to using my
              skills to help create, support, and communicate with area
              businesses.
            </p>
            <p>
              I'm pleased to show you the work I do in the Portfolio located on
              this page, and am excited to connect with you through the
              multitude of channels by which I can be contacted.
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
            <div className="row contact-list">
              <i className="fa fa-home contact-icon left-icon"></i>
              <i className="fa fa-envelope contact-icon"></i>
              <i className="fa fa-phone-square contact-icon"></i>
            </div>
            <div className="row contact-list">
              <a
                className="link-city"
                href="https://www.visitraleigh.com/events/"
                target="_blank"
              >
                Raleigh, NC, USA
              </a>
              <a className="link-email" href="mailto:jhf1203@gmail.com">
                E-mail
              </a>
              <a className="link-phone" href="#" target="_blank">
                252.917.1571
              </a>
            </div>
            <div className="row contact-list">
              <i className="fa fa-linkedin-square left-icon"></i>
              <i className="fa fa-github contact-icon"></i>
              <i className="fa fa-black-tie contact-icon"></i>
            </div>
            <div className="row contact-list">
              <a
                className="link-linkedin"
                href="https://www.linkedin.com/in/jim-faulkner-13476534"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="link-github"
                href="https://github.com/jhf1203"
                target="_blank"
              >
                Github
              </a>
              <a className="link-resume" href={resume} target="_blank">
                Resume
              </a>
            </div>
          </div>
          <div className="col-md-1"></div>
          <ProfileEmbed />
        </section>
      </main>
    </div>
  );
}

export default About;
