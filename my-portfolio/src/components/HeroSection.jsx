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
      className="h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Side - Text Content */}
      <div className="text-center lg:text-left lg:w-1/2 space-y-4">
        <h1 className="text-5xl lg:text-6xl font-bold">Hi, I'm Rohan Singh</h1>
        <p className="text-lg lg:text-2xl mt-2">Web Developer & ML Enthusiast</p>

        {/* Flashing Tech Stack Icons */}
        <div className="flex space-x-4 mt-4">
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

        <div className="mt-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-200 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side - Image with Motion */}
      <motion.div
        className="lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={profilePic} // Local image import
          alt="Rohan Singh"
          className="w-64 lg:w-80 h-64 lg:h-80 rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
