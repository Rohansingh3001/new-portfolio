import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="pt-4 relative z-0 overflow-x-clip lg:pt-8 bg-gray-900 text-white px-6 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="border-t border-white/15 py-6 md:pb-8 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row gap-8 items-center">
            {[
              { href: "https://www.instagram.com/rohan_30.01/", icon: <FaInstagram size={30} /> },
              { href: "https://www.linkedin.com/in/rohan-singh-033748243/", icon: <FaLinkedin size={30} /> },
              { href: "mailto:rsingh300103@gmail.com", icon: <FaEnvelope size={30} /> },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;