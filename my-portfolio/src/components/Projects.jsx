import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


// Import images from src/assets
import ecojunkImage from "../assets/ecojunk.png";
import farmerGoodsImage from "../assets/farmergoods.png";
import mentalHealthImage from "../assets/mental-health.png";

const projects = [
  {
    id: 1,
    title: "EcoJunk",
    image: ecojunkImage,
    github: "https://github.com/Rohansingh3001/E-WASTE",
    live: "https://e-waste-kq77.vercel.app/",
  },
  {
    id: 2,
    title: "FarmerGoods",
    image: farmerGoodsImage,
    github: "https://github.com/Rohansingh3001/farmers-goods",
    live: "https://farmers-goods.vercel.app/",
  },
  {
    id: 3,
    title: "Mental-Health",
    image: mentalHealthImage,
    github: "https://github.com/Rohansingh3001/mental-helth",
    live: "https://mental-helth.vercel.app/",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-10">My Projects</h2>

      <div className="relative container mx-auto">
        <div className="grid gap-24"> {/* Increased spacing for better visibility */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="sticky top-10 w-full max-w-lg mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden relative cursor-pointer transition-all duration-300"
              style={{ top: `${index * 120}px` }} // Adjusted progressive sticky effect
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              onClick={() =>
                setActiveProject(activeProject === project.id ? null : project.id)
              }
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-t-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>

              {/* Animated Overlay - Appears when clicked */}
              {activeProject === project.id && (
                <motion.div
                  className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center space-y-4 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-gray-300"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-600"
                  >
                    <FaExternalLinkAlt size={24} /> Live Demo
                  </a>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* See More Projects Button */}
{/* See More Projects Button */}
<div className="flex justify-center mt-12">
  <motion.button
    onClick={() => window.open("https://github.com/Rohansingh3001", "_blank")}
    className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg backdrop-blur-lg transition-all duration-300"
    whileHover={{
      scale: 1.1,
      boxShadow: "0px 0px 12px rgba(59,130,246,0.7)",
    }}
    whileTap={{ scale: 0.9 }}
  >
    See More Projects →
  </motion.button>
</div>


      </div>      
    </div>
  );
};

export default Projects;
