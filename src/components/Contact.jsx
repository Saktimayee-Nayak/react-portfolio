import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: 'url("..assets/about.jpg")' }}>
      
      {/* Overlay */}
      <div className="absolute inset-0  opacity-50"></div>

      <div className="relative z-10 container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white md:w-1/2 space-y-8"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold"
          >
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-300 max-w-md"
          >
I'm eager to connect! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.
          </motion.p>
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-purple-500 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="text-white w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c4.563 0 8.25 3.688 8.25 8.25 0 5.295-7.688 11.25-8.25 11.25s-8.25-5.955-8.25-11.25c0-4.563 3.687-8.25 8.25-8.25z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25a3 3 0 01-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-purple-500 font-semibold">Address</h3>
                <p>CRP Square,Bhubaneswar, 751012</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-purple-500 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="text-white w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25l-8.25 5.5-8.25-5.5M12 15.75v4.5m0-20.25l-8.25 5.5m16.5 0L12 0" />
                </svg>
              </div>
              <div>
                <h3 className="text-purple-500 font-semibold">Phone</h3>
                <p>+91 9348957874</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 bg-purple-500 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="text-white w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5H3.75m12.75 0a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75m12.75 0v9.75a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V7.5m14.25 0h-4.5m4.5 0l-1.5 7.5h-7.5m3-2.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-purple-500 font-semibold">Email</h3>
                <p>saktimayeenayak579@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
          style={{ backgroundImage: 'url("..assets/about.jpg")' }}
>
          <h3 className="text-2xl  text-gray-700 font-semibold mb-6">Send Message</h3>
          <form className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <label className="block text-gray-700">Full Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500" 
                placeholder="Full Name"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500" 
                placeholder="Email"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <label className="block text-gray-700">Message</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-purple-500" 
                placeholder="Type your Message..."
                rows="4"
              ></textarea>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button 
                type="submit" 
                className="w-full p-3 bg-purple-500 text-white font-semibold rounded hover:bg-purple-600 transition">
                Send
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
