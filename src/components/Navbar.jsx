import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      
      {/* Minimalist Text-Based Logo */}
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-3xl font-semibold text-white">
          Sm
        </h1>
      </div>

      {/* Social Icons and Resume Link */}
      <div className="flex items-center">
        <motion.div 
          className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
          <motion.a 
            href="https://www.linkedin.com/in/saktimayee-nayak-3893172a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="https://github.com/Saktimayee-Nayak" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/your-instagram-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
        </motion.div>
        
        <motion.a 
          href="assets/projects/SaktimayeeNayak___CV-Copy.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="ml-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
        >
          Resume
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
