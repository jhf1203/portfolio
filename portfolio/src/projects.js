import bookmarkedImg from "./assets/demo-thumbnails/ss-bookmarked.png";
import burgerImg from "./assets/demo-thumbnails/ss-burger.png";
import teamProfileImg from "./assets/demo-thumbnails/ss-team-profile-generator.png";
import dateNightImg from "./assets/demo-thumbnails/ss-date-night.png";
import directoryImg from "./assets/demo-thumbnails/ss-employee-directory.png";
import readmeImg from "./assets/demo-thumbnails/ss-readme-generator.png";

import bookmarkedGif from "./assets/demo-gifs/bookmarked-demo.gif";
import BurgerGif from "./assets/demo-gifs/burger-demo.gif";
import dateNightGif from "./assets/demo-gifs/date-night-demo.gif";
import directoryGif from "./assets/demo-gifs/employee-directory.gif";

const projects = [
  {
    id: 6,
    name: "Employee Directory",
    projectLinks: [
      {
        type: "Repository",
        url: "https://github.com/jhf1203/employee-directory",
      },
      {
        type: "Deployment",
        url: "https://jhf1203.github.io/employee-directory/",
      },
    ],
    skillsUsed: "React, Express, Node.JS",
    demoThumbnail: [directoryImg],
    demoContent: [directoryGif],
    demoType: "gif",
    summary:
      "This was our first project utilizing react components, in which we were charged to create a user-friendly directory of employees that contained multiple attributes (e-mail address, hire date, etc) of our choosing.  The parameters were also that at least one field should be able to be filtered, and one should be able to be sorted",
    details:
      "Although the only component requirement for this assignment were class components, I chose to move forward with stateful functional components instead, since there will most likely be more application for this method in the workplace.  Additionally, since the same type of method is needed to sort or filter a field regardless of how many fields there are, I was able to provide sort and filtering functionality to all fields rather than just one.",
  },
  {
    id: 5,
    name: "Bookmarked",
    projectLinks: [
      { type: "Repository", url: "https://github.com/jhf1203/Project-2" },
      { type: "Deployment", url: "https://project-2-team-2.herokuapp.com/" },
    ],
    skillsUsed:
      "Sequelize, Express, Handlebars, Passport (NPM), jQuery, CSS, 3rd Party APIs, Travis, Linting.",
    demoThumbnail: [bookmarkedImg],
    demoContent: [bookmarkedGif],
    demoType: "gif",
    summary:
      "This was our second group project for the class, and tasked us with creating a full-stack application of our choosing given certain conditions. We were required to serve a MySql database through Heroku, using the Sequelize ORM, and our HTML content was required to be rendered with Handlebars for Express.",
    details:
      "This application was done with me being part of a team of four, and was my first experience working on a multi-faceted full-stack project with a team. In addition to practicing recent languages and libraries, I was able to see clearly how closely together they work given that each member of the team had different assignments and responsibilities. This was a highly ambitious project with a long list of items for future development with a target completion time of 60 days, so stay posted. This will be a fully functional social media platform by December.",
  },
  {
    id: 4,
    name: "Eat A Burger",
    projectLinks: [
      {
        type: "Repository",
        url: "https://github.com/jhf1203/burger",
      },
      { type: "Deployment", url: "https://stormy-taiga-92457.herokuapp.com/" },
    ],
    skillsUsed: "Express, MySql, Node.js, Express Handlebars",
    demoThumbnail: [burgerImg],
    demoContent: [BurgerGif],
    demoType: "gif",
    summary:
      "This assignment required me to create an app that allows the user to name a burger, and then 'devour' it at the click of a button. The burger information is stored in a database powered by mySql, and is hosted through heroku.",
    details:
      "This is the closest thing to a full-stack assignment that I've completed so far, in that the front end can be manipulated by the user via code on the back end and values that are housed in a database. There are multiple API calls on this app, as well as the usage of ORMs and handlebars for templating.",
  },
  {
    id: 3,
    name: "Team Profile Generator",
    projectLinks: [
      {
        type: "Repository",
        url: "https://github.com/jhf1203/team-profile-generator",
      },
    ],
    skillsUsed:
      "MySQL, Node.js, Express, Templating (no engines), Object classes & subclasses.",
    demoThumbnail: [teamProfileImg],
    demoContent: ["https://www.youtube.com/embed/U77DcU5zm8g"],
    demoType: "iframe",
    summary:
      "A scalable command-line application that displays basic info for various employees within an organization, by employee type.",
    details:
      "This was my first experience bringing back-end code to the front in a styled form using templating. No template libraries or packages were used for this project, everything was rendered through Javascript and Express. Additionally this project featured extensive usage of express modules, and classes and subclasses in Javascript to define the types of unique employees that belong to this particular organization. Additionally we were given free reign with the styling, and you will notice my finished product is quite different than the example file shown in the assets folder.",
  },
  {
    id: 2,
    name: "ReadMe Generator",
    projectLinks: [
      {
        type: "Repository",
        url: "https://github.com/jhf1203/readme-generator",
      },
    ],
    skillsUsed: "Node.Js, FileSystem and Inquirer packages",
    demoThumbnail: [readmeImg],
    demoContent: ["https://www.youtube.com/embed/J83TmIJUB-g"],
    demoType: "iframe",
    summary:
      "This application generates a readMe that meets quality guidelines, is simple enough to be used by a beginner, and detailed enough to be used by a seasoned professional.",
    details:
      "This was my first back-end development assignment, which gave me my first glimpse into how the front-end can be manipulated by the server (despite there not being a server on this particular assignment). It was also my first experience with templating client-side code from the back-end and has served as a great learning experience as we have since taken a deeper dive into templating engines, ORMs and full-stack development. Based off of feedback from the grader on this project, it is what I use to generate readMe files for all of my homework assignments since.",
  },
  {
    id: 1,
    name: "Date Night At Home",
    projectLinks: [
      {
        type: "Repository",
        url: "https://github.com/jhf1203/project-1-operation-date-night",
      },
      {
        type: "Deployment",
        url: "https://jhf1203.github.io/project-1-operation-date-night/",
      },
    ],
    skillsUsed:
      "JavaScript (jQuery), Server-Side APIs (Google Places, The Movie Database, Open Movie Database), More involved GitHub usage (branching & forking), Working on a team with multiple collaborators, Public speaking/presentation.",
    demoThumbnail: [dateNightImg],
    demoContent: [dateNightGif],
    demoType: "gif",
    summary:
      "This was my first group project in the class, and was open-ended given a few parameters: Must use at least two server-side APIs, must be interactive (i.e: accept and respond to user input, must use at least one new third-party API, must have a polished UI, must meet good quality coding standards, and does not use alerts/confirms/prompts.",
    details:
      "Along with two classmates this site was built from scratch, which autopopulates both restaurants and movie selections based off of user criteria entered. In addition to the information in the summary that was required of the application itself we presented our project to the class and included several pieces: Elevator pitch, concept of and motivation behind the application's development, multiple user stories and our own acceptance criteria, an overview of the processes used, successes and opportunities in the project itself (with respect to the code as well as working in a group setting), how the tasks were broken down amongst the group, a live demonstration, and directions for future development. We worked excellent together both formulating and conceptualizing at the start as well as de-bugging at the end as a team, and my specific area of focus was the development of the movie generator, lines 213-327 of the code.",
  },
];

export default projects;
