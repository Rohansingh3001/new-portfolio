import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 bg-gray-900 text-white text-center overflow-hidden"
    >
      {/* Top Tape */}
      <div className="absolute top-2 left-[-5%] w-[110%] h-8 bg-indigo-400 opacity-60 rotate-[-3deg] skew-x-12"></div>

      {/* About Section */}
      <h2 className="text-4xl font-bold text-indigo-400 mb-4">About Me</h2>
      <p className="text-lg leading-relaxed text-gray-300 max-w-3xl">
        I am <span className="text-indigo-300 font-semibold">Rohan Singh</span>, pursuing a  
        <span className="text-indigo-300 font-semibold"> B.Tech in Computer Science and Engineering (AIML)</span>.  
        As a passionate <span className="text-indigo-300 font-semibold">Web Developer & ML Enthusiast</span>,  
        I focus on crafting user-friendly web experiences using both front-end and back-end technologies.
      </p>
      <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mt-4">
        I specialize in <span className="text-indigo-300 font-semibold">HTML, CSS, JavaScript, React, and Node.js</span>,  
        while also exploring the world of <span className="text-indigo-300 font-semibold">Machine Learning with Python</span>.  
        My goal is to continuously learn, grow, and create impactful digital solutions.
      </p>

      {/* Bottom Tape */}
      <div className="absolute bottom-2 left-[-5%] w-[110%] h-8 bg-indigo-400 opacity-60 rotate-[3deg] skew-x-12"></div>
    </div>
  );
};

export default About;
