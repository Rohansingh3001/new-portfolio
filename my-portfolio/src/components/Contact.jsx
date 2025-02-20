import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="h-screen flex flex-col lg:flex-row items-center justify-between bg-gray-800 text-white px-8 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Left Side - Email & Social Media */}
      <div className="flex flex-col items-start space-y-6 lg:w-1/2 max-w-xs">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-xl">Email: rohansingh@example.com</p>
        <div className="space-y-4">
          <p className="text-xl">Follow me:</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/rohan_singh" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/rohan-singh" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="mailto:rohansingh@example.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="Email" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-1/2 max-w-lg mt-8 lg:mt-0">
        <h3 className="text-2xl font-semibold mb-4">Send me a message</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
