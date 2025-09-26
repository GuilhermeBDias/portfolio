import { NavBar } from "./components/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
    <div className="flex flex-col items-center">

      <NavBar />

      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
    </>
  );
}

export default App;
