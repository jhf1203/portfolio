(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{33:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a(1),i=a.n(o),n=a(25),r=a.n(n),c=(a(33),a(8)),l=a(2),d=a.p+"static/media/profile.844601b4.jpg",m=a(11);var h=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"artist-text",children:e.artist}),Object(s.jsx)("p",{className:"album-text-container",children:Object(s.jsxs)("a",{className:"album-text",href:e.url,target:"_blank",rel:"noreferrer",children:[Object(s.jsx)("strong",{children:e.album})," | ",e.count," plays"]})})]})},b=a(26),j=a.n(b);var u=function(){var e=Object(o.useState)([]),t=Object(m.a)(e,2),a=t[0],i=t[1];return Object(o.useEffect)((function(){j.a.get("https://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart&user=thenewblueblood&api_key=c94621ecb26f194d333023d806785d53&format=json").then((function(e){console.log(e);var t=[];t.push(e.data.weeklyalbumchart.album[0],e.data.weeklyalbumchart.album[1],e.data.weeklyalbumchart.album[2],e.data.weeklyalbumchart.album[3],e.data.weeklyalbumchart.album[4]),i(t)}))}),[]),Object(s.jsxs)("div",{className:"col-md-4 section-row list-container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("h3",{className:"list-header",children:Object(s.jsx)("strong",{children:"What I'm listening to this week"})})}),Object(s.jsx)("ul",{className:"list-content",children:a.map((function(e){return Object(s.jsx)(h,{artist:e.artist["#text"],album:e.name,url:e.url,count:e.playcount})}))}),Object(s.jsxs)("p",{className:"credit-line",children:["Powered by"," ",Object(s.jsx)("a",{href:"https://www.last.fm/user/thenewblueblood",target:"_blank",rel:"noreferrer",children:"Last.fm"})]})]})},p=a.p+"static/media/resume0821.200e0309.pdf";var f=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark navbar-custom",children:[Object(s.jsx)("h1",{className:"navbar-brand",children:"Jim Faulkner"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(c.b,{to:"/portfolio",className:"nav-link",children:["Portfolio ",Object(s.jsx)("i",{className:"fa fa-book header-icon"})]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(c.b,{to:"/about",className:"nav-link active",children:["About ",Object(s.jsx)("i",{className:"fa fa-user header-icon"})]})})]})})]})}),Object(s.jsxs)("main",{className:"container",children:[Object(s.jsxs)("section",{className:"row section-row",children:[Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsx)("h2",{children:"About Me"}),Object(s.jsx)("img",{className:"bio-image",src:d,alt:"A picture of me.",id:"bio-image"})]}),Object(s.jsxs)("div",{className:"col-md-9",children:[Object(s.jsx)("p",{children:"I'm a Cloud Engineer for the Garage team at IBM.  Professionally I specialize in helping large companies modernize the way they do business through the application of DevOps principles and Cloud-Native Development.  While I like to consider myself a jack of all trades, I'm currently spending most of my work week utilizing RedHat Openshift on top of Kubernetes with a multitude of tools to help streamline how web applications function and are maintained and monitored."}),Object(s.jsx)("p",{children:"On my portfolio page you'll find work that I have completed out of a workplace setting. Some are projects for the professional certification in Coding I completed in 2020, as well as passion projects revolved around my continuous improvement as a developer as well as highlighting some things about which I am passionate outside of development."}),Object(s.jsx)("p",{children:"Personally, I'm born and raised in Southeastern NC and have lived in Raleigh for most of the last decade.  When I'm not at work I love going on adventures with my toddler boy, with any time left spent on skiing, photography, architecture, fishing, and generally being outdoors as much as possible.  I'm also very passionate about music and always have it in the background, check out below what I've been listening to lately, and feel free to reach out to learn more about me!"})]})]}),Object(s.jsxs)("section",{className:"row bottom-row",children:[Object(s.jsxs)("div",{className:"col-md-7 section-row",children:[Object(s.jsx)("div",{className:"row-contact-header",children:Object(s.jsx)("h2",{children:"Contact Me"})}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("p",{className:"contact-text",children:"I would love to hear from you! I thrive on connection, and am always on the lookout for opportunities to network and collaborate. Feel free to reach out using any of the resources below, as well as find out a bit more about me professionally."})}),Object(s.jsxs)("div",{className:"row contact-list ",children:[Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-icon-row",children:Object(s.jsx)("i",{className:"fa fa-home contact-icon left-icon"})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-text-row",children:Object(s.jsx)("a",{href:"https://www.visitraleigh.com/events/",target:"_blank",rel:"noreferrer",children:"Raleigh, NC, USA"})})]}),Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-icon-row",children:Object(s.jsx)("i",{className:"fa fa-envelope contact-icon"})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-text-row",children:Object(s.jsx)("a",{href:"mailto:jhf1203@gmail.com",children:"E-mail"})})]}),Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-icon-row",children:Object(s.jsx)("i",{className:"fa fa-phone-square contact-icon"})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-text-row",children:Object(s.jsx)("a",{href:"#",target:"_blank",children:"252.917.1571"})})]})]}),Object(s.jsxs)("div",{className:"row contact-list",children:[Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-icon-row",children:Object(s.jsx)("i",{className:"fa fa-linkedin-square left-icon"})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-text-row",children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/jim-faulkner-13476534",target:"_blank",rel:"noreferrer",children:"LinkedIn"})})]}),Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-icon-row",children:Object(s.jsx)("i",{className:"fa fa-github contact-icon"})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-text-row",children:Object(s.jsx)("a",{href:"https://github.com/jhf1203",target:"_blank",rel:"noreferrer",children:"Github"})})]}),Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-icon-row",children:Object(s.jsx)("i",{className:"fa fa-black-tie contact-icon"})}),Object(s.jsx)("div",{className:"row d-flex justify-content-center contact-text-row",children:Object(s.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:"Resume"})})]})]})]}),Object(s.jsx)("div",{className:"col-md-1"}),Object(s.jsx)(u,{})]})]})]})},g=a.p+"static/media/bookmarked-updated-ss.c02a6904.png",x=a.p+"static/media/ss-burger.e1828728.png",v=a.p+"static/media/ss-team-profile-generator.5f1bc962.png",w=a.p+"static/media/ss-date-night.e93a54b7.png",y=a.p+"static/media/ss-employee-directory.a868ca9a.png",O=(a.p,a.p+"static/media/ss-streak-shade.8de7c362.png"),k=a.p+"static/media/ss-cr8ed.6bf2a18f.png",N=a.p+"static/media/bookmarked-updated-gif.3192d030.gif",I=a.p+"static/media/burger-demo.615c0c5c.gif",T=a.p+"static/media/date-night-demo.ac36787b.gif",C=a.p+"static/media/employee-directory.ee13e09d.gif",P=a.p+"static/media/streak-shade-demo.8bfc09c3.gif",A=[{id:7,name:"CR8ED",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/acmpmt"},{type:"Deployment",url:"https://acmpmt.herokuapp.com/#/"}],skillsUsed:"React (Router, Custom Hooks), NoSQL (MongoDB | Mongoose), Node.js, Express server, Passport (Auth), Cloudinary (Image Upload), TagCloud Word Cloud Generator, 3rd party API (last.fm)",demoThumbnail:[k],demoContent:[a.p+"static/media/cr8ed-demo.3e1f2ade.gif"],demoType:"gif",summary:"This is a full-stack (MERN) application developed as a 'hobby project' in my spare time throughout January and February 2021.",details:"An application that allows users to discover new music based off of their existing tastes.  Whereas most services show similar artists to one specific artist, cr8ed allows the user to find similar music based off of three artist entries combined, allowing for more of a 'little bit of this, little bit of that' experience.  Users can add albums to their queue as a reminder to revisit later, and can recommend albums based on their enjoyment.  Each album has multiple tags, which we consolidate into a word cloud to show the user's overall musical taste.  Additionally, the user can connect with other users who have similar tastes, viewing and discovering additional music through the queues and recommendations of the users that they follow."},{id:6,name:"Bookmarked",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/Project-2"},{type:"Deployment",url:"https://project-2-team-2.herokuapp.com/"}],skillsUsed:"Sequelize, Express, Handlebars, Passport (NPM), jQuery, CSS, 3rd Party APIs, Travis, Linting, Cloudinary Image Hosting.",demoThumbnail:[g],demoContent:[N],demoType:"gif",summary:"This is a full-stack social networking application centered around books.  It was a continuation of my second group project at the UNC boot camp, carried out by one of my teammates and I who were excited to continue to develop the app after it was presented.  We did this in our spare time as we continued to learn new topics and perform other group work.",details:"This application in its current form was not required for class, but once we completed the initial project and moved on there were several future development items that a teammate and I were excited about implementing.  The original application allowed the user to search and save books.  For this deployment we added the saving of profile images, a more polished UI, and a blog feature to create a more seamless social media environment."},{id:5,name:"Streak / Shade",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/lines"},{type:"Deployment",url:"https://jhf1203.github.io/lines/"}],skillsUsed:"React, Functional Components/Hooks, Router",demoThumbnail:[O],demoContent:[P],demoType:"gif",summary:"This is a website hosted on GitHub pages that is front-end only.  The front-end was completed entirely using the React Framework.",details:"This is a personal project I completed to greater showcase usage of the React framework.  It's contents are a series of residential architectural/design projects that I've completed and am still working on for fun throughout the past year."},{id:4,name:"Employee Directory",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/employee-directory"},{type:"Deployment",url:"https://jhf1203.github.io/employee-directory/"}],skillsUsed:"React, Express, Node.JS",demoThumbnail:[y],demoContent:[C],demoType:"gif",summary:"This was our first project utilizing react components, in which we were charged to create a user-friendly directory of employees that contained multiple attributes (e-mail address, hire date, etc) of our choosing.  The parameters were also that at least one field should be able to be filtered, and one should be able to be sorted",details:"Although the only component requirement for this assignment were class components, I chose to move forward with stateful functional components instead, since there will most likely be more application for this method in the workplace.  Additionally, since the same type of method is needed to sort or filter a field regardless of how many fields there are, I was able to provide sort and filtering functionality to all fields rather than just one."},{id:3,name:"Eat A Burger",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/burger"},{type:"Deployment",url:"https://stormy-taiga-92457.herokuapp.com/"}],skillsUsed:"Express, MySql, Node.js, Express Handlebars",demoThumbnail:[x],demoContent:[I],demoType:"gif",summary:"This assignment required me to create an app that allows the user to name a burger, and then 'devour' it at the click of a button. The burger information is stored in a database powered by mySql, and is hosted through heroku.",details:"This is the closest thing to a 'first' full-stack assignment that I completed for my program, in that the front end can be manipulated by the user via code on the back end and values that are housed in a database. There are multiple API calls on this app, as well as the usage of ORMs and handlebars for templating."},{id:2,name:"Team Profile Generator",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/team-profile-generator"}],skillsUsed:"MySQL, Node.js, Express, Templating (no engines), Object classes & subclasses.",demoThumbnail:[v],demoContent:["https://www.youtube.com/embed/U77DcU5zm8g"],demoType:"iframe",summary:"A scalable command-line application that displays basic info for various employees within an organization, by employee type.",details:"This was my first experience bringing back-end code to the front in a styled form using templating. No template libraries or packages were used for this project, everything was rendered through Javascript and Express. Additionally this project featured extensive usage of express modules, and classes and subclasses in Javascript to define the types of unique employees that belong to this particular organization. Additionally we were given free reign with the styling, and you will notice my finished product is quite different than the example file shown in the assets folder."},{id:1,name:"Date Night At Home",projectLinks:[{type:"Repository",url:"https://github.com/jhf1203/project-1-operation-date-night"},{type:"Deployment",url:"https://jhf1203.github.io/project-1-operation-date-night/"}],skillsUsed:"JavaScript (jQuery), Server-Side APIs (Google Places, The Movie Database, Open Movie Database), More involved GitHub usage (branching & forking), Working on a team with multiple collaborators, Public speaking/presentation.",demoThumbnail:[w],demoContent:[T],demoType:"gif",summary:"This was my first group project in the class, and was open-ended given a few parameters: Must use at least two server-side APIs, must be interactive (i.e: accept and respond to user input, must use at least one new third-party API, must have a polished UI, must meet good quality coding standards, and does not use alerts/confirms/prompts.",details:"Along with two classmates this site was built from scratch, which autopopulates both restaurants and movie selections based off of user criteria entered. In addition to the information in the summary that was required of the application itself we presented our project to the class and included several pieces: Elevator pitch, concept of and motivation behind the application's development, multiple user stories and our own acceptance criteria, an overview of the processes used, successes and opportunities in the project itself (with respect to the code as well as working in a group setting), how the tasks were broken down amongst the group, a live demonstration, and directions for future development. We worked excellent together both formulating and conceptualizing at the start as well as de-bugging at the end as a team, and my specific area of focus was the development of the movie generator, lines 213-327 of the code."}];var S=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"demo-thumbnail",src:e.thumbnail,alt:e.name,onClick:e.toggle})})};var R=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("a",{href:e.link.url,target:"_blank",rel:"noreferrer",children:[" ",e.link.type]})})};var D=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("section",{className:"row section-row bottom-row",children:[Object(s.jsxs)("div",{className:"col-md-3 col-folio",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:e.name})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Project Links"}),e.links.map((function(e){return Object(s.jsx)(R,{link:e})}))]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Skills Used |"})," ",e.skills]}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Demos (click to enlarge)"})}),e.thumbnail.map((function(t){return Object(s.jsx)(S,{thumbnail:t,name:e.name,toggle:e.toggle})}))]}),Object(s.jsxs)("div",{className:"col-md-4",children:[Object(s.jsx)("h3",{children:"Project Summary"}),Object(s.jsx)("p",{children:e.summary})]}),Object(s.jsxs)("div",{className:"col-md-5",children:[Object(s.jsx)("h3",{children:"Project Details"}),Object(s.jsx)("p",{children:e.details})]})]})})};var E=function(e){var t,a=Object(s.jsx)("iframe",{width:"768",height:"432",title:e.name,src:e.content,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}),o=Object(s.jsx)("img",{src:e.content,height:"100%",width:"100%",alt:e.name});return t="iframe"===e.project.demoType?a:o,Object(s.jsxs)("div",{className:"demo-window",style:{display:e.display},children:[Object(s.jsx)("button",{className:"btn-link close",children:Object(s.jsx)("i",{className:"fa fa-window-close",onClick:e.toggle})}),Object(s.jsx)("div",{className:"demo-content",children:t})]})};var U=function(){var e=Object(o.useState)(0),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(o.useState)("none"),r=Object(m.a)(n,2),l=r[0],d=r[1];function h(){d("none"===l?"block":"none")}return Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark navbar-custom",children:[Object(s.jsx)("h1",{className:"navbar-brand",children:"Jim Faulkner"}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(c.b,{to:"/portfolio",className:"nav-link active",children:["Portfolio ",Object(s.jsx)("i",{className:"fa fa-book header-icon"})]})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsxs)(c.b,{to:"/about",className:"nav-link",children:["About ",Object(s.jsx)("i",{className:"fa fa-user header-icon"})]})})]})})]})}),Object(s.jsxs)("main",{className:"container",children:[Object(s.jsxs)("section",{className:"row section-row",children:[Object(s.jsx)("div",{className:"col-md-2",children:Object(s.jsx)("h2",{children:"Portfolio"})}),Object(s.jsxs)("div",{className:"col-md-5",children:[Object(s.jsx)("p",{children:"I am so excited to share my body of work with you. Please see below, in descending order, some selections of my work. I'd love to talk to you about any of these further, feel free to reach out using one of the multitude of ways of getting in touch!"}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{className:"resume-link",href:p,target:"_blank",rel:"noreferrer",children:"Click here to view my resume."})}),Object(s.jsx)("p",{children:Object(s.jsx)("a",{className:"resume-link",href:"mailto: jhf1203@gmail.com",children:"E-mail me at jhf1203@gmail.com."})})]}),Object(s.jsx)("div",{className:"col-md-5",children:Object(s.jsx)("p",{children:"I pride myself on my ideation and creativity. My background in Interior Design and my natural left-brain give me a penchant for both meeting parameters and building with functionality in mind, while still humanizing and injecting character into my work."})})]}),Object(s.jsxs)("section",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-4"}),Object(s.jsxs)("div",{className:"col-md-4 section-row toggle-row",children:[Object(s.jsxs)("div",{className:"row toggle-subrow",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-link toggle-btn",onClick:function(){i(0===a?A.length-1:a-1)},children:Object(s.jsx)("i",{className:"fa fa-chevron-left i-toggle"})}),Object(s.jsx)("h3",{className:"toggle-text",children:"Toggle Projects"}),Object(s.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){i(a===A.length-1?0:a+1)},children:Object(s.jsx)("i",{className:"fa fa-chevron-right i-toggle"})})]}),Object(s.jsx)("div",{className:"col-md-4"})]})]}),Object(s.jsx)(D,{project:A[a],name:A[a].name,links:A[a].projectLinks,skills:A[a].skillsUsed,thumbnail:A[a].demoThumbnail,summary:A[a].summary,details:A[a].details,toggle:h}),Object(s.jsx)(E,{project:A[a],name:A[a].name,toggle:h,display:l,content:A[a].demoContent})]})]})};var M=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"nc-photo"}),Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",component:f}),Object(s.jsx)(l.a,{exact:!0,path:"/about",component:f}),Object(s.jsx)(l.a,{exact:!0,path:"/portfolio",component:U})]})}),Object(s.jsx)("footer",{children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark sticky-bottom navbar-custom navbar-index",children:[Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#footerBar","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon footer-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"footerBar",children:Object(s.jsxs)("ul",{className:"navbar-nav d-flex align-items-end footer-nav",children:[Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)("h4",{children:"Jim Faulkner | 2020 |"})}),Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)("a",{href:"#",target:"_blank",className:"btn btn-sm",role:"button","aria-pressed":"true",children:Object(s.jsx)("i",{className:"fa fa-user"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"https://jhf1203.github.io/portfolio",target:"_blank",className:"btn btn-sm active",role:"button","aria-pressed":"true",children:Object(s.jsx)("i",{className:"fa fa-book"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"https://jhf1203.github.io/contact",target:"_blank",className:"btn btn-sm",role:"button","aria-pressed":"true",children:Object(s.jsx)("i",{className:"fa fa-envelope-o e-mail-button"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/jim-faulkner-13476534",target:"_blank",className:"btn btn-sm",role:"button","aria-pressed":"true",children:Object(s.jsx)("i",{className:"fa fa-linkedin-square"})})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"https://github.com/jhf1203",target:"_blank",className:"btn btn-sm",role:"button","aria-pressed":"true",children:Object(s.jsx)("i",{className:"fa fa-github"})})})]})})]})})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.f71d5bf4.chunk.js.map