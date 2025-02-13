import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import { services } from "./Services"; // Import service data
import { Link } from "react-router-dom";
import { FaHospitalUser, FaHeartbeat, FaUserMd, FaShieldAlt } from "react-icons/fa";

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

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 md:px-20  bg-gray-100 flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/whychoose.jpg"
            alt="Why Choose Us"
            className="rounded-lg shadow-xl w-full max-w-lg"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 text-left mt-10 md:mt-0 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-teal-700 mb-6">
            Why Choose Us?
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaUserMd className="text-4xl text-teal-600" />
              <div>
                <h3 className="text-xl font-semibold">Expert Doctors</h3>
                <p className="text-gray-600">Our specialists provide top-quality medical care.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaHospitalUser className="text-4xl text-teal-600" />
              <div>
                <h3 className="text-xl font-semibold">Advanced Facilities</h3>
                <p className="text-gray-600">Equipped with state-of-the-art technology.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaHeartbeat className="text-4xl text-teal-600" />
              <div>
                <h3 className="text-xl font-semibold">Compassionate Care</h3>
                <p className="text-gray-600">We treat our patients with kindness and empathy.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaShieldAlt className="text-4xl text-teal-600" />
              <div>
                <h3 className="text-xl font-semibold">Trusted by Many</h3>
                <p className="text-gray-600">Thousands of happy patients trust our services.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}

export default Home;
