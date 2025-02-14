import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import { services } from "./Services"; // Import service data
import { Link } from "react-router-dom";
import { FaHospitalUser, FaHeartbeat, FaUserMd, FaShieldAlt } from "react-icons/fa";
import AboutDoctor from "../components/AboutDoctor";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="h-screen mt-8 flex items-center text-left px-6 md:px-20 text-white relative bg-[url('/images/herobackground.png')] bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Left-Aligned Text Content */}
        <motion.div
          className="relative z-10 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Welcome to NVK ENT Hospital
          </h1>

          <motion.p
            className="text-xl md:text-2xl mt-4 drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Specialized care for Ear, Nose, and Throat
          </motion.p>

          <motion.div
            className="mt-6 bg-white/10 p-4 rounded-lg backdrop-blur-md shadow-lg w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
          >
            <p className="text-lg md:text-xl font-semibold">Dr. Koila Thirupathi</p>
            <p className="text-md md:text-lg">
              M.B.B.S., DNB. ENT, Head & Neck Surgeon 
            </p>
          </motion.div>

          <motion.button
            className="mt-10 px-8 py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/contact">Contact Us</Link>
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutUs />
       {/* Services Section - Display Only 3 Services */}
       <section id="services" className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-teal-700 mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-teal-700 mt-4">{service.name}</h3>
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold text-teal-700 mb-6">Our Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-8 bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-xl rounded-lg transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold">Vision</h3>
            <p className="text-lg mt-4">
              To be a leading center for advanced ENT care with innovation, compassion, and excellence.
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-xl rounded-lg transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold">Mission</h3>
            <p className="text-lg mt-4">
              To deliver advanced ENT care, innovation, and patient well-being.
            </p>
          </motion.div>
        </div>
      </section>
      
      <AboutDoctor/>
      {/* FAQ Section */}
      <FAQ />
    </>
  );
}

export default Home;
