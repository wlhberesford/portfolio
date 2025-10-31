import './App.css';
import Hero from "./Sections/Hero/Hero"
import Education from './Sections/Education/Education';
import Nav from './components/Nav/Nav';
// import AboutMe from './Sections/AboutMe/AboutMe';
// import Experience from './Sections/Experience/Experience';

function App() {


  return (
      <div className="App">
        <Nav/>
        <Hero/>
        <Education/>
        {/* <Experience/> */}

      </div>
  );
}

export default App;
