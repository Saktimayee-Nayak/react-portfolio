import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index);
  };

  return (
    <div className="border-b border-neutral-900 pb-12 px-4 md:px-8 lg:px-16">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg"
      >
        My Projects
      </motion.h1>
      <div className="mt-16 grid gap-12 md:grid-cols-1 lg:grid-cols-1">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 rounded-3xl p-8 shadow-lg backdrop-blur-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <motion.h6
              className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer transition-colors duration-300 ${
                selectedProject === index ? "bg-gradient-to-r from-pink-500 to-purple-500" : ""
              }`}
              onClick={() => handleProjectClick(index)}
            >
              {project.title}
            </motion.h6>
            <AnimatePresence>
              {selectedProject === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="flex flex-col space-y-4">
                    <motion.div
                      className="overflow-hidden rounded-xl shadow-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform transform hover:scale-110"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
