import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import PortfolioTape from "./components/tape"; // Imported PortfolioTape
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section with Overlaying PortfolioTape */}
      <div className="relative">
        <HeroSection />
        <div className="absolute bottom-[-40px] sm:bottom-[-60px] md:bottom-0 w-full z-10">
          <PortfolioTape /> {/* Overlayed */}
        </div>
      </div>

      <About />
      <TechStack />
      <Projects />
      <Contact className="relative z-20" /> {/* Ensure Contact is above the overlay */}
    </div>
  );
}

export default App;
