import Geograpics from '../imgs/geograpics-app.png';
import ExPatBackend from '../imgs/ExPat-Backend.png';
import WeatherApp from '../imgs/weather-app.png';
import PuppySpot from '../imgs/PuppySpot.png';
import ChristianMingle from '../imgs/CM-Splash.png';
import Faith from '../imgs/faith.com.png';
import UCLA from '../imgs/UCLA-Vol.png';


export const portfolio = [
  {
    image: Geograpics,
    alt_text: "Geograpics Screenshots",
    title: "Geograpics",
    copy: "5x developers, 2x UI designers, 1x team lead, 1.5 months. We created an app that pulls live data from an instagram account and displays it on a map with login. The challenge for this project was using social auth and grabbing that data to display on the frontend. We have further developments such as blog entries and photo uploading as future functionality.",
    tech_stack: "React, Redux, node.js, express, passport.js",
    dependencies: "react-router-dom, node-sass, react-loader-spinner, react-map-gl, redux-logger, redux-thunk, prop-types, axios, cors, dotenv, helmet, jsonwebtoken, knex, pg, sqlite3, jest, nodemon, supertest, cross-env",
    github: "//github.com/Lambda-School-Labs/geograpics-fe",
    app_link: "//www.geograpics.com/",
    app_name: "Geograpics"
  },
  {
    image: ExPatBackend,
    alt_text: "Screenshot of Server Code",
    title: "ExPat Journal",
    copy: "Backend for an ExPat Journaling app. The challenge of this project was creating endpoints and working with the frontend developers to create the app. Providing endpoints that they expected and documneting what they needed to give me and expect in return.",
    tech_stack: "node.js, express, knex, pg, sqlite3",
    dependencies: "bcrypt, cors, dotenv, helmet, jsonwebtoken, knex-cleaner, nodemon, jest, supertest, cross-env",
    github: "//github.com/ExpatJournal/Back-End",
    app_link: "//expatjournal.herokuapp.com/",
    app_name: "Expat Backend"
  },
  {
    image: WeatherApp,
    alt_text: "Weather App Screenshots",
    title: "Weather App",
    copy: "A small weather app that uses a public API. The challenge of this project was using their endpoints to retrieve the data I wanted to display.",
    tech_stack: "React, Redux",
    dependencies: "react-router-dom, redux-thunk, node-sass, axios, react-loader-spinner",
    github: "//github.com/dhamano/React-Redux-App",
    app_link: "//weather.dhamano.dev/",
    app_name: "Weather App"
  },
  {
    image: PuppySpot,
    alt_text: "PuppySpot.com Screenshots",
    title: "PuppySpot.com Website",
    copy: "I was a contractor working with the PuppySpot development team. The main challenge of this project was making sure that the code created in such a way that the dev. team could easily templatize it on hand-off.",
    tech_stack: "HTML, CSS/SCSS, jQuery, Zurb Foundation",
    dependencies: null,
    github: null,
    app_link: "//www.puppyspot.com",
    app_name: "PuppySpot.com"
  },
  {
    image: ChristianMingle,
    alt_text: "ChristianMingle Splash Page Screenshots",
    title: "ChristianMingle.com Splash Page",
    copy: "As part of the design team at Spark Networks, I designed and coded this round of splash pages for the ChristianMingle website. It was the first time we turned away from our old version after having succeeded in A/B testing.",
    tech_stack: "HTML, CSS, jQuery, Zurb Foundation",
    dependencies: null,
    github: null,
    app_link: "//www.christianmingle.com",
    app_name: "ChristianMingle.com"
  },
  {
    image: Faith,
    alt_text: "Faith.com Screenshots",
    title: "Faith.com Website",
    copy: "With no developer available for this project, they asked since it was known that I could code. The challenege for this project was taking what we already had and turning it into a responsive site so that the developer team could templatize and implement it.",
    tech_stack: "HTML, CSS, jQuery, Zurb Foundation",
    dependencies: null,
    github: null,
    app_link: "//www.faith.com",
    app_name: "Faith.com"
  },
  {
    image: UCLA,
    alt_text: "UCLA Volunteer Website Screenshots",
    title: "UCLA Volunteer Website",
    copy: "The biggest challenge for this project was getting that header collage to work grab live data from facebook and Flickr, display user photos of the tagged posts then, on click, display the user’s quote about the Activity they participated in.",
    tech_stack: "HTML, CSS, PHP, JavaScript",
    dependencies: null,
    github: null,
    app_link: "//volunteer.ucla.edu/",
    app_name: "UCLA Volunteer Center"
  }
]