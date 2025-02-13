import { motion } from "framer-motion";
import { FaHeartbeat, FaHospitalUser, FaQuoteLeft, FaQuoteRight, FaStethoscope } from "react-icons/fa";

function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-cyan-50 to-teal-100 text-gray-800"
    >
      <h2 className="text-5xl font-extrabold text-teal-700 mb-6 text-center">About Us</h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* First Row - About Hospital Content on Left, Exterior Image on Right */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left Side - About Hospital Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white shadow-xl rounded-2xl p-10">
              
              <p className="text-xl leading-relaxed">
                NVK ENT Hospital is a specialized healthcare facility dedicated to
                providing{" "}
                <span className="font-bold text-teal-600">
                  exceptional care in Ear, Nose, and Throat (ENT) medicine
                </span>
                . Led by{" "}
                <span className="font-bold text-teal-600">Dr. Koila Thirupathi</span>,
                our team is committed to delivering
                <span className="font-bold"> high-quality, patient-centered treatment</span>{" "}
                using advanced medical technologies and techniques.
              </p>
              <p className="text-xl leading-relaxed mt-6">
                With state-of-the-art facilities and a{" "}
                <span className="font-bold">compassionate approach</span>, we strive to
                improve the quality of life for our patients through accurate diagnosis,
                <span className="font-bold"> effective treatments</span>, and ongoing
                support.
              </p>
            </div>
          </motion.div>

          {/* Right Side - NVK ENT Hospital Exterior Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/images/about.jpg"
              alt="NVK ENT Hospital Exterior"
              className="rounded-lg shadow-xl w-full max-w-lg"
            />
          </motion.div>
        </motion.div>

        {/* Second Row - Inside NVK ENT Hospital Image on Left, Mission & Highlights on Right */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          

          {/* Right Side - Mission Statement & Highlights */}
          <div className="w-full md:w-1/2">
            {/* Mission Statement */}
            <motion.div
              className="relative z-0 bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg rounded-2xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="absolute top-0 left-0 w-12 h-12 bg-white text-teal-600 flex items-center justify-center rounded-full transform -translate-y-1/2 -translate-x-1/2">
                <FaQuoteLeft size={20} />
              </div>
              <p className="text-xl font-semibold text-center leading-relaxed">
                "Our mission is to provide{" "}
                <span className="font-bold">top-quality ENT care</span> using
                <span className="font-bold"> cutting-edge medical technologies</span>{" "}
                with a<span className="font-bold"> compassionate approach</span>."
              </p>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-white text-teal-600 flex items-center justify-center rounded-full transform translate-y-1/2 translate-x-1/2">
                <FaQuoteRight size={20} />
              </div>
            </motion.div>
            

            {/* Highlights Section */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {[
                { icon: <FaHospitalUser size={40} />, text: "Experienced Medical Team" },
                { icon: <FaHeartbeat size={40} />, text: "State-of-the-Art Facilities" },
                { icon: <FaStethoscope size={40} />, text: "Comprehensive ENT Care" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-4 bg-teal-100 p-6 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-teal-700">{item.icon}</div>
                  <p className="text-lg font-semibold text-gray-800">{item.text}</p>
                </motion.div>
                
              ))}
            </motion.div>
            
          </div>
          {/* Left Side - Inside NVK ENT Hospital Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="/images/aboutus.jpeg"
              alt="Inside NVK ENT Hospital"
              className="rounded-lg shadow-xl w-full max-w-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
