import { motion } from "framer-motion";
import profilePic from "../assets/Image.jpg"; // Ensure the correct path

const techStacks = [
  { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
  { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
  { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "Tailwind", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
  { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
];

const HeroSection = () => {
  return (
<motion.div
  id="home"
  className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 py-10 bg-gradient-to-r from-gray-900 to-black text-white relative space-y-10 lg:space-y-0 pt-28 sm:pt-24"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  {/* Left Side - Text Content */}
  <div className="text-center lg:text-left lg:w-1/2 space-y-6">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Hi, I'm Rohan Singh</h1>
    <p className="text-lg sm:text-xl lg:text-2xl mt-2 text-gray-300">
      Web Developer & ML Enthusiast
    </p>

    {/* Tech Stack Icons */}
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6 place-items-center">
      {techStacks.map((tech, index) => (
        <motion.img
          key={index}
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            delay: index * 0.5, // Stagger effect
          }}
        />
      ))}
    </div>

    {/* Buttons Section */}
    <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
      <a
        href="#projects"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 hover:scale-105 transition transform duration-300 shadow-md"
      >
        Let's See My Projects
      </a>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-500 hover:scale-105 transition transform duration-300 shadow-md"
      >
        Let's Connect
      </a>
    </div>
  </div>

  {/* Right Side - Profile Image (Hidden on Mobile) */}
  <motion.div
    className="hidden sm:flex lg:w-1/2 flex-col items-center relative"
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    {/* Circular Wave Animation */}
    <motion.div
      className="absolute w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full border-2 border-blue-400 animate-pulse"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>

    {/* Profile Image */}
    <img
      src={profilePic}
      alt="Rohan Singh"
      className="w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full border-4 border-gray-300 shadow-lg relative z-10"
    />

    {/* Open to Work Section */}
    <motion.div
      className="mt-6 text-center text-lg font-semibold text-gray-300 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <p className="bg-gray-800 px-4 py-2 rounded-lg shadow-md">
        🚀 Open to Work – Let’s Chat About Your Next Project!
      </p>
    </motion.div>
  </motion.div>
</motion.div>



  );
};

export default HeroSection;