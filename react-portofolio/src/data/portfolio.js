import WeatherApp from '../imgs/weather-app.png';
import PuppySpot from '../imgs/PuppySpot.png';
import ChristianMingle from '../imgs/CM-Splash.png';
import Faith from '../imgs/faith.com.png';
import UCLA from '../imgs/UCLA-Vol.png';


export const portfolio = [
  {
    image: WeatherApp,
    alt_text: "Weather App Screenshots",
    title: "Weather App",
    copy: "A small weather app that uses a public API. The challengeof this project was using their endpoints to retrieve the data I wanted to display.",
    tech_stack: "React, Redux",
    dependencies: "react-router-dom, redux-thunk, node-sass, axios, react-loader-spinner"
  },
  {
    image: PuppySpot,
    title: "PuppySpot.com Website",
    copy: "I was a contractor working with the PuppySpot development team. The main challenge of this project was making sure that the code created in such a way that the dev. team could easily templatize it on hand-off.",
    tech_stack: "HTML, CSS/SCSS, jQuery, Zurb Foundation",
    dependencies: null
  },
  {
    image: ChristianMingle,
    title: "ChristianMingle.com Splash Page",
    copy: "As part of the design team at Spark Networks, I designed and coded this round of splash pages for the ChristianMingle website. It was the first time we turned away from our old version after having succeeded in A/B testing.",
    tech_stack: "HTML, CSS, jQuery, Zurb Foundation",
    dependencies: null
  },
  {
    image: Faith,
    title: "Faith.com Website",
    copy: "With no developer available for this project, they asked since it was known that I could code. The challenege for this project was taking what we already had and turning it into a responsive site so that the dev. team could templatize and implement it.",
    tech_stack: "HTML, CSS, jQuery, Zurb Foundation",
    dependencies: null
  },
  {
    image: UCLA,
    title: "UCLA Volunteer Website",
    copy: "The biggest challenge for this project was getting that header collage to work grab live data from facebook and Flickr, display user photos of the tagged posts then, on click, display the user’s quote about the Volunteer Day Activity they participated in.",
    tech_stack: "HTML, CSS, PHP, JavaScript",
    dependencies: null
  }
]