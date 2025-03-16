import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initialize scrollSpy to detect the active section
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full flex space-x-8 transition-all duration-300 z-50 
      ${scrolling ? "bg-white/20 backdrop-blur-md shadow-lg" : "bg-white/10 backdrop-blur-xl"} border border-white/30`}
    >
      {["home", "about", "projects", "contact"].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          spy={true}
          offset={-70} // Adjust offset to match section height
          activeClass="text-blue-500 font-semibold"
          className="cursor-pointer text-lg font-medium relative group text-white transition-all"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}

          {/* Underline effect for active and hover state */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
