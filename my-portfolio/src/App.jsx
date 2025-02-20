import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
