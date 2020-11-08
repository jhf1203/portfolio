import React from "react";

function About () {
    return (
        <div>
        <div class="nc-photo"></div>

        <header>
            <nav class="navbar navbar-expand-md navbar-dark navbar-custom">

  
            <h1 class="navbar-brand">Jim Faulkner</h1>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Close-Up
                    <i class="fa fa-user"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://jhf1203.github.io/portfolio"> Content
                    <i class="fa fa-book"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://jhf1203.github.io/contact">Contact
                    <i class="fa fa-envelope-o"></i></a>
                </li>
                </ul>
            </div>
            </nav>
        </header>

        <main class="container">

            
            <section class="row section-row">

            <div class="col-md-3">
                <h2>About Me</h2>
                <img class="bio-image img-fluid" src="../../assets/Profile.jpg" alt="A picture of me." id="bio-image" />
            </div>

            <div class="col-md-9">
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
            <nav class="navbar navbar-expand-sm navbar-dark sticky-bottom navbar-custom navbar-index">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerBar"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon footer-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="footerBar">
                <ul class="navbar-nav d-flex align-items-end footer-nav">
                <li class="nav-item active">
                    <h4>Jim Faulkner | 2020 |</h4>
                </li>
                <li class="nav-item active">
                    <a href="#" target="_blank" class="btn btn-sm" role="button" aria-pressed="true">
                    <i class="fa fa-user"></i></a>
                </li>
                <li class="nav-item">
                    <a href="https://jhf1203.github.io/portfolio" target="_blank" class="btn btn-sm active" role="button"
                    aria-pressed="true">
                    <i class="fa fa-book"></i></a>
                </li>
                <li class="nav-item">
                    <a href="https://jhf1203.github.io/contact" target="_blank" class="btn btn-sm" role="button"
                    aria-pressed="true">
                    <i class="fa fa-envelope-o e-mail-button"></i></a>
                </li>
                <li class="nav-item">
                    <a href="https://www.linkedin.com/in/jim-faulkner-13476534" target="_blank" class="btn btn-sm" role="button"
                    aria-pressed="true">
                    <i class="fa fa-linkedin-square"></i></a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/jhf1203" target="_blank" class="btn btn-sm" role="button" aria-pressed="true">
                    <i class="fa fa-github"></i></a>
                </li>
                </ul>
            </div>
            </nav>
        </footer>
        </div>
    )
}

export default About;