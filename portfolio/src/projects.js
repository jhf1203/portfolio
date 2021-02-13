import bookmarkedImg from "./assets/demo-thumbnails/bookmarked-updated-ss.png";
import burgerImg from "./assets/demo-thumbnails/ss-burger.png";
import teamProfileImg from "./assets/demo-thumbnails/ss-team-profile-generator.png";
import dateNightImg from "./assets/demo-thumbnails/ss-date-night.png";
import directoryImg from "./assets/demo-thumbnails/ss-employee-directory.png";
import readmeImg from "./assets/demo-thumbnails/ss-readme-generator.png";
import streakShadeImg from "./assets/demo-thumbnails/ss-streak-shade.png"
import creightedImg from "./assets/demo-thumbnails/ss-cr8ed.png"

import bookmarkedGif from "./assets/demo-gifs/bookmarked-updated-gif.gif";
import BurgerGif from "./assets/demo-gifs/burger-demo.gif";
import dateNightGif from "./assets/demo-gifs/date-night-demo.gif";
import directoryGif from "./assets/demo-gifs/employee-directory.gif";
import streakShadeGif from "./assets/demo-gifs/streak-shade-demo.gif"
import creightedGif from "./assets/demo-gifs/cr8ed-demo.gif"

const projects = [
  {
    id: 7,
    name: "CR8ED",
    projectLinks: [
      { type: "Repository", url: "https://github.com/jhf1203/acmpmt" },
      { type: "Deployment", url: "https://acmpmt.herokuapp.com/#/" },
    ],
    skillsUsed:
      "React (Router, Custom Hooks), NoSQL (MongoDB | Mongoose), Node.js, Express server, Passport (Auth), Cloudinary (Image Upload), TagCloud Word Cloud Generator, 3rd party API (last.fm)",
    demoThumbnail: [creightedImg],
    demoContent: [creightedGif],
    demoType: "gif",
    summary:
      "This is a full-stack (MERN) application developed as a 'hobby project' in my spare time throughout January and February 2021.",
    details:
      "An application that allows users to discover new music based off of their existing tastes.  Whereas most services show similar artists to one specific artist, cr8ed allows the user to find similar music based off of three artist entries combined, allowing for more of a 'little bit of this, little bit of that' experience.  Users can add albums to their queue as a reminder to revisit later, and can recommend albums based on their enjoyment.  Each album has multiple tags, which we consolidate into a word cloud to show the user's overall musical taste.  Additionally, the user can connect with other users who have similar tastes, viewing and discovering additional music through the queues and recommendations of the users that they follow."  
    },
    {
      id: 6,
      name: "Bookmarked",
      projectLinks: [
        { type: "Repository", url: "https://github.com/jhf1203/Project-2" },
        { type: "Deployment", url: "https://project-2-team-2.herokuapp.com/" },
      ],
      skillsUsed:
        "Sequelize, Express, Handlebars, Passport (NPM), jQuery, CSS, 3rd Party APIs, Travis, Linting, Cloudinary Image Hosting.",
      demoThumbnail: [bookmarkedImg],
      demoContent: [bookmarkedGif],
      demoType: "gif",
      summary:
        "This is a full-stack social networking application centered around books.  It was a continuation of my second group project at the UNC boot camp, carried out by one of my teammates and I who were excited to continue to develop the app after it was presented.  We did this in our spare time as we continued to learn new topics and perform other group work.",
      details:
        "This application in its current form was not required for class, but once we completed the initial project and moved on there were several future development items that a teammate and I were excited about implementing.  The original application allowed the user to search and save books.  For this deployment we added the saving of profile images, a more polished UI, and a blog feature to create a more seamless social media environment.",
    },
  {
    id: 5,
    name: "Streak / Shade",
    projectLinks: [
      { type: "Repository", url: "https://github.com/jhf1203/lines" },
      { type: "Deployment", url: "https://jhf1203.github.io/lines/" },
    ],
    skillsUsed:
      "React, Functional Components/Hooks, Router",
    demoThumbnail: [streakShadeImg],
    demoContent: [streakShadeGif],
    demoType: "gif",
    summary:
      "This is a website hosted on GitHub pages that is front-end only.  The front-end was completed entirely using the React Framework.",
    details:
      "This is a personal project I completed to greater showcase usage of the React framework.  It's contents are a series of residential architectural/design projects that I've completed and am still working on for fun throughout the past year."  
    },
  {
    id: 4,
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
    id: 3,
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
      "This is the closest thing to a 'first' full-stack assignment that I completed for my program, in that the front end can be manipulated by the user via code on the back end and values that are housed in a database. There are multiple API calls on this app, as well as the usage of ORMs and handlebars for templating.",
  },
  {
    id: 2,
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
