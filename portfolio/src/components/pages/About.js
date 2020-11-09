import React from "react";

function About () {
    return (
        <div>
        <div className="nc-photo"></div>

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
                <li className="nav-item">
                    <a className="nav-link" href="https://jhf1203.github.io/contact">Contact
                    <i className="fa fa-envelope-o"></i></a>
                </li>
                </ul>
            </div>
            </nav>
        </header>

        <main className="container">

            
            <section className="row section-row">

            <div className="col-md-3">
                <h2>About Me</h2>
                <img className="bio-image img-fluid" src="../../assets/Profile.jpg" alt="A picture of me." id="bio-image" />
            </div>

            <div className="col-md-9">
                <p>
                I'm a North Carolina Native, born and raised in the Southeastern part of the state
                and a graduate of East Carolina University with a degree in Finance. In my spare
                time I enjoy homebrewing, collecting and playing records, photography, snow-skiing,
                and architecture. I currenly live in North Raleigh with my wife and our young son.
                I have spent all but three years of my life within one hour of the Triangle, and
                I truly believe there is no better place to live.
                </p>
                <p>
                One of the many things I love about where I live is continuing to see it grow
                as an innovative business hub of the Southeast. I'm excited about software
                development being an integral part of that continuing growth, and fascinated
                with how limitless the possibilities are within lines of code. As I move
                through and beyond the Coding Boot Camp at UNC I look forward to using my
                skills to help create, support, and communicate with area businesses.
                </p>
                <p>
                I'm pleased to show you the work I do in the Portfolio located on this page, and
                am excited to connect with you through the multitude of channels by which I
                can be contacted.
                </p>
            </div>
            </section>
        </main>



        <footer>
            <nav className="navbar navbar-expand-sm navbar-dark sticky-bottom navbar-custom navbar-index">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerBar"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon footer-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="footerBar">
                <ul className="navbar-nav d-flex align-items-end footer-nav">
                <li className="nav-item active">
                    <h4>Jim Faulkner | 2020 |</h4>
                </li>
                <li className="nav-item active">
                    <a href="#" target="_blank" className="btn btn-sm" role="button" aria-pressed="true">
                    <i className="fa fa-user"></i></a>
                </li>
                <li className="nav-item">
                    <a href="https://jhf1203.github.io/portfolio" target="_blank" className="btn btn-sm active" role="button"
                    aria-pressed="true">
                    <i className="fa fa-book"></i></a>
                </li>
                <li className="nav-item">
                    <a href="https://jhf1203.github.io/contact" target="_blank" className="btn btn-sm" role="button"
                    aria-pressed="true">
                    <i className="fa fa-envelope-o e-mail-button"></i></a>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/in/jim-faulkner-13476534" target="_blank" className="btn btn-sm" role="button"
                    aria-pressed="true">
                    <i className="fa fa-linkedin-square"></i></a>
                </li>
                <li className="nav-item">
                    <a href="https://github.com/jhf1203" target="_blank" className="btn btn-sm" role="button" aria-pressed="true">
                    <i className="fa fa-github"></i></a>
                </li>
                </ul>
            </div>
            </nav>
        </footer>
        </div>
    )
}

export default About;