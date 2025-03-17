import { motion } from "framer-motion";

// Online images of tech stack
const techStack = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "data:image/png;base64,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" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Machine Learning", icon: "data:image/png;base64,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" },
];

// Scrolling animation settings
const scrollVariantsForward = {
  animate: {
    x: ["-100%", "0%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15, // Adjust speed
        ease: "linear",
      },
    },
  },
};

// Backward Scrolling (right to left)
const scrollVariantsBackward = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15, // Adjust speed
        ease: "linear",
      },
    },
  },
};

const TechStack = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-12 relative overflow-hidden">
      {/* Section Title */}
      <h2 className="text-4xl text-center text-white font-bold mb-10 tracking-wider">
        Technologies & Tools
      </h2>

      {/* First Scrolling Row - Forward */}
      <div className="relative flex items-center w-full overflow-hidden">
        <motion.div
          className="flex space-x-10 w-max"
          variants={scrollVariantsForward}
          animate="animate"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`forward-${index}`}
              className="w-32 h-40 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 transform hover:scale-110 transition duration-300 border border-gray-700 hover:border-blue-500"
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 15px rgba(0, 170, 255, 0.8)",
              }}
              animate={{ y: [0, -5, 0], transition: { duration: 3, repeat: Infinity } }}
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 drop-shadow-lg" />
              <p className="text-white mt-3 text-sm font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Scrolling Row - Backward */}
      <div className="relative flex items-center w-full overflow-hidden mt-5">
        <motion.div
          className="flex space-x-10 w-max"
          variants={scrollVariantsBackward}
          animate="animate"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`backward-${index}`}
              className="w-32 h-40 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 transform hover:scale-110 transition duration-300 border border-gray-700 hover:border-blue-500"
              whileHover={{
                scale: 1.15,
                boxShadow: "0px 0px 15px rgba(0, 170, 255, 0.8)",
              }}
              animate={{ y: [0, -5, 0], transition: { duration: 3, repeat: Infinity } }}
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 drop-shadow-lg" />
              <p className="text-white mt-3 text-sm font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[50vw] h-[30vh] bg-blue-500 opacity-20 blur-3xl"></div>
    </div>
  );
};

export default TechStack;