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
    <div id="projects" className="min-h-screen bg-gray-100 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() =>
              setActiveProject(activeProject === project.id ? null : project.id)
            }
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center">{project.title}</h3>
            </div>

            {/* Links Section - Appears when clicked */}
            {activeProject === project.id && (
              <motion.div
                className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
      </motion.div>
    </div>
  );
};

export default Projects;
