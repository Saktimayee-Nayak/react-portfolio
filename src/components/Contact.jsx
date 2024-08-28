import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "85f2bef3-6c08-41df-bd7f-792701bfaad3");

    const object = Object.fromEntries(formData.entries()); 
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (res.ok && result.success) {
        alert(result.message);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
      alert("Failed to submit the form. Please check your network connection and try again.");
    }
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">connect</span>
          </h2>
          <p className="text-gray-400 mb-8">
            I'm eager to connect! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out.
          </p>

          <div className="grid grid-cols-3 gap-4 text-center mb-12">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">11<span className="text-pink-600">+</span></h3>
              <p className="text-gray-400">Projects</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">1<span className="text-pink-600">+</span></h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-2xl font-bold">15<span className="text-pink-600">+</span></h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com/Saktimayee-Nayak" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/saktimayee-nayak-3893172a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/its_sakti_22?igsh=OXkxa2R5Y25hOHNz" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-pink-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your message ..."
              className="w-full p-3 rounded-md bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-pink-600"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-purple-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
