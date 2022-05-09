import React from 'react'
import Typed from 'react-typed'
import About from './component/about';
import Education from './component/Education' 
import Projects from './component/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './component/contact'
import Footer from './component/footer'
const myProjects=[
{
  title:"Event Planner",
  image:'event.jpeg',
  description:"Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse what's happening in your local area  ",
  website:'https://obscure-chamber-98928.herokuapp.com/'
},{
  title:"JATE Text Editor App/React",
  image:'jate.png',
  description:"app will be a single-page application that meets the PWA criteria with IndexDB thats used by companies like google and mozilla",
  website:'https://dry-cove-77135.herokuapp.com/'

},
{
  title:" Movie Tracker",
  github:'git@git',
  image:'movie.jpeg',
  description:" lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters too",
  website:'https://namees-github.github.io/Project-1/'

},
{
  title:"Simple RealTime/Chat",
  website:'https://github.com/namees-github/chat',
  image:'chat.png',
  description:" Node.js and Socket.io module. Socket.io is a Node.js module that enables real-time, bidirectional and event-based communication. It works on every platform, browser or device ",

},
{
  title:"Teach-Blog",
  github:'git@git',
  image:'tech.png',
  description:"JS-express-session-DB-bcrypt-handlebars communication page which allow user to create posts and follow another user's posts and have ability to comment on their posts,even he can create a new post which added on his dashboard,user have ability to edit his posts and delete it too,",
  website:'https://nameesblog.herokuapp.com/'

},{
  title:"comments and review page",
  github:'git@git',
  image:'reviews.jpeg',
  description:"creat this assignment using html bootstrap api express javascript",
  website:'https://arcane-falls-44009.herokuapp.com/'

},
{
  title:"Congress library/API",
  github:'git@git',
  image:'congress.jpeg',
  description:"search Bar page can make a search on a page to get a brief information using congress API  ",
  website:'https://namees-github.github.io/Congress-library/'

},{
  title:"Weather App/API",
  github:'git@git',
  image:'weather.jpeg',
  description:" built using Html,css,bootstrap, Js, and API,the user be able to get all the information that he need about the weather to any specific site in global",
  website:'https://namees-github.github.io/WeatherApp/'

},
{
  title:"WorkDay-Scheduler App",
  github:'git@git',
  image:'scheduler.jpeg',
  description:" save day planns,using html css js,jquery,bootstrap and moment when the user update his website,the saved planns will show to him, i creat three classes to show past hours ,current hour and futur hours which appears in different colors there are two button beside the hour,save plann and clear your creat plann",
  website:' https://namees-github.github.io/work-day-schduler1/'

},
{
  title:"NoteTacker",
  github:'git@git',
  image:'note.jpeg',
  description:"An application that can be used to write, save, and delete notes built using Express. The application saves and retrieves note data from a JSON file. Title: Note Taker Developer: Namees Mohammed Deployment Date: 03/9/2022 For: UW JavaScript Coding Bootcamp  ",
  website:'https://safe-caverns-77435.herokuapp.com/notes'

},
{
  title:"Namees Profile/Backend",
  image:'mywebsite.png',
  description:"another website for me,created using backend process using Node/ExpressJs  ",
  website:'https://nameesmohammed.herokuapp.com/'
}


];
function githubPage(){
  window.location.assign("https://github.com/namees-github")
}

function App() {
  return (
<div> 
  <About/>
 
  <Education/>
  <h2 class='text-light text-center' onClick={githubPage} >
  <Typed className="font-weight-light"
          strings={['My Works 💻', 'My Projects ', 'Click here to view my Github	']}
          backSpeed={70} typeSpeed={60} backDelay={1000}/>
   {/* <a href='#' onClick={githubPage} > My Projects/My Work
        </a>  */}
        </h2>
  <Projects myProjects={myProjects}/>
<Contact/>
<Footer/>
</div>
  );
}

export default App;
