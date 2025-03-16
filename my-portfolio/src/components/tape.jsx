import { Fragment } from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Firebase",
  "AI Integration",
  "MongoDB",
  "Express.js",
  "TypeScript",
  "Open Source",
  "UI/UX Design",
];

const scrollVariants = {
  animate: {
    x: ["0%", "-100%"], // Start at 0%, move left
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Increased duration for slower scrolling
        ease: "linear",
      },
    },
  },
};

export const PortfolioTape = () => {
  return (
    <div className="py-8 lg:py-12 overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-400 to-purple-500 py-3 -rotate-3">
        <motion.div
          variants={scrollVariants}
          animate="animate"
          className="flex flex-nowrap gap-4 w-max"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          {/* Looping multiple times to ensure infinite scrolling */}
          {[...new Array(4)].map((_, index) => (
            <Fragment key={index}>
              {skills.map((skill) => (
                <div key={skill + index} className="inline-flex items-center gap-4 px-4">
                  <span className="text-white font-extrabold uppercase text-sm">{skill}</span>
                  <span className="text-white text-lg">★</span> {/* Unicode Star */}
                </div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioTape;
