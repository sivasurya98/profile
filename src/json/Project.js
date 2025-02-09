import nextfliclogo from "../assets/netflix logo.png";
import node from "../assets/nodejs.png";
import react from "../assets/react.png";
import Angular from "../assets/angular.png";
import mangodb from "../assets/mysql.png";
import firebase from "../assets/firebas.png";
import netflixscreenshot from "../assets/netflix clone.png";
import dashboard from "../assets/dashboardpng.png";
import analytics from "../assets/analytics.png";
import githublogo from '../assets/githubexplorerlogo.png'
import githubExplorerScreenshot from '../assets/gituhubproject.jpeg'

export const Projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description:
      "A Netflix clone built with React.js, using the TMDB API for movie data.",
    image: nextfliclogo,
    screenshot: netflixscreenshot,
    techone: "ReactJs",
    techtwo: "Rest API",
    Link: 'https://netflix-eta-silk.vercel.app/',
    longdescription:
      "The Netflix clone project showcases my expertise in ReactJS. By mimicking the Netflix UI across screens, I aim to provide users with a polished experience. Leveraging TMDB APIs, I'll ensure seamless movie retrieval and interactivity.",
  },
  {
    id: 2,
    title: "Product dashboard",
    image: dashboard,
    screenshot: analytics,
    techone: "ReactJs",
    Link :'https://analytics-dashboard-67e13.web.app/',
    description:
      "highlighting Product earnings, product sales performance, and customer engagement metrics.",
      longdescription: "This project seems to be a useful tool for monitoring financial performance and sales trends, providing insights into earnings and customer behavior with Mobile Responsive. Great work on developing this!"
  },
  {
    id: 3,
    title: "GitHub Explorer",
    description: "A React Native app to search GitHub repositories and manage your favorites.",
    image: githublogo,
    screenshot: githubExplorerScreenshot,
    techone: "React Native",
    Link: 'https://github.com/sivasurya98/GitHub-Explorer',
    longdescription:
      "GitHub Explorer is a mobile app built with React Native that allows users to search for GitHub repositories and save their favorites for easy access. The app uses the GitHub API to fetch real-time repository data and provides a clean, responsive UI for a smooth user experience.",
  },
];

export const familyer = [
  { id: 1, title: "Node Js", image: node },
  { id: 2, title: "ReactJs, React-Native", image: react },
  { id: 5, title: "Angular", image: Angular },
  { id: 3, title: "Mysql", image: mangodb },
  { id: 4, title: "Firebase", image: firebase },
];
