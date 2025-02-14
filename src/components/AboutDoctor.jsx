import React from 'react'
import { motion } from "framer-motion";
const AboutDoctor = () => {
  return (
    <>
      {/* About Doctor Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 flex flex-col md:flex-row items-center">
        {/* Left Side - Doctor Image and Name */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/doctor.jpg"
            alt="Dr. Koila Thirupathi"
            className="rounded-lg shadow-xl w-full max-w-xs"
          />
          <h2 className="text-3xl font-extrabold text-teal-700 mt-4">
            Dr. Koila Thirupathi
          </h2>
        </motion.div>

        {/* Right Side - Doctor Details */}
        <motion.div
          className="w-full md:w-2/3 text-left mt-10 md:mt-0 md:pl-10 bg-white shadow-lg rounded-lg p-8 border-l-4 border-teal-600"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-xl font-bold text-teal-700">MBBS (2006 Batch):</span> Mamata Medical College, Dr. NTR University of Health Sciences.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-xl font-bold text-teal-700">DNB (2018-2021):</span> Southern Railway Headquarters Hospitals, Perambur, Chennai.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-xl font-bold text-teal-700">Thesis:</span>
            <span className="block text-gray-800 font-semibold mt-2">Clinicopathological Profile and Treatment Outcomes of Patients Presenting with Epistaxis – A Hospital-Based Cross-Sectional Study.</span>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-xl font-bold text-teal-700">Publication:</span>
            <span className="block text-gray-800 font-semibold mt-2">Original Research Article: Clinicopathological Profile and Treatment Outcomes of Patients Presenting with Epistaxis – A Hospital-Based Cross-Sectional Study in Southern Railway Headquarters Hospital, Chennai.</span>
          </p>
          <p className="text-lg text-gray-700">
            <span className="text-xl font-bold text-teal-700">Published in:</span>
            <span className="block text-gray-800 font-semibold mt-2">International Journal of Otorhinolaryngology and Head and Neck Surgery.</span>
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default AboutDoctor
