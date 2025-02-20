import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Change background when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 p-4 flex justify-center space-x-6 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {["home", "about", "projects"].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          className="cursor-pointer font-medium text-lg relative group text-gray-800"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}

          {/* Hover & Active Underline Effect */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
