import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaHospitalUser,
  FaHeartbeat,
  FaStethoscope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaUserMd } from "react-icons/fa";
import { useState, useEffect } from "react";

const sections = ["home", "about", "services", "contact"];

function Navbar() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const sectionColors = {
    home: "bg-white text-teal-700",
    about: "bg-white text-teal-700",
    services: "bg-white text-teal-700",
    contact: "bg-white text-teal-700",
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-500 to-cyan-600 shadow-lg py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 relative">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">NVK ENT</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <div
          className={`${
            menuOpen
              ? "block absolute top-full left-0 w-full bg-teal-500 shadow-lg rounded-b-lg"
              : "hidden"
          } md:flex md:flex-row md:items-center md:space-x-6 md:static md:bg-transparent md:shadow-none p-4 md:p-0`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => {
                document.getElementById(section)?.scrollIntoView({
                  behavior: "smooth",
                });
                setMenuOpen(false);
              }}
              className={`block md:inline-block px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md text-white md:text-gray-800 md:hover:bg-white md:hover:text-teal-700 ${
                visibleSection === section
                  ? "bg-white text-teal-700"
                  : "md:bg-transparent md:text-white hover:bg-teal-600"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
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
            M.B.B.S., DNB. ENT, Head & Neck Surgeon (Reg.No. 78689)
          </p>
        </motion.div>

        <motion.button
          className="mt-10 px-8 py-4 bg-white text-teal-700 font-semibold rounded-full shadow-xl hover:bg-teal-500 hover:text-white transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        >
          Book Appointment
        </motion.button>
      </motion.div>
    </section>
  );
}


function AboutUs() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-cyan-50 to-teal-100  text-gray-800"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-5xl font-extrabold text-teal-700 mb-6">About Us</h2>

        {/* Mission Statement */}
        <motion.div
          className="relative z-0 bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-lg rounded-2xl p-8 mt-6"
          initial={{ opacity: 0, x: -100 }}
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
            <span className="font-bold">
              {" "}
              cutting-edge medical technologies
            </span>{" "}
            with a<span className="font-bold"> compassionate approach</span>."
          </p>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-white text-teal-600 flex items-center justify-center rounded-full transform translate-y-1/2 translate-x-1/2">
            <FaQuoteRight size={20} />
          </div>
        </motion.div>

        {/* About Hospital */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-10 mt-12"
          initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-xl leading-relaxed">
            NVK ENT Hospital is a specialized healthcare facility dedicated to
            providing
            <span className="font-bold text-teal-600">
              {" "}
              exceptional care in Ear, Nose, and Throat (ENT) medicine
            </span>
            . Led by{" "}
            <span className="font-bold text-teal-600">
              Dr. Koila Thirupathi
            </span>
            , our team is committed to delivering
            <span className="font-bold">
              {" "}
              high-quality, patient-centered treatment
            </span>{" "}
            using advanced medical technologies and techniques.
          </p>
          <p className="text-xl leading-relaxed mt-6">
            With state-of-the-art facilities and a{" "}
            <span className="font-bold">compassionate approach</span>, we strive
            to improve the quality of life for our patients through accurate
            diagnosis,
            <span className="font-bold"> effective treatments</span>, and
            ongoing support.
          </p>

          {/* Highlights Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                icon: <FaHospitalUser size={30} />,
                text: "Experienced Medical Team",
              },
              {
                icon: <FaHeartbeat size={30} />,
                text: "State-of-the-Art Facilities",
              },
              {
                icon: <FaStethoscope size={30} />,
                text: "Comprehensive ENT Care",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 bg-teal-100 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-teal-700">{item.icon}</div>
                <p className="text-lg font-semibold text-gray-800">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Services() {
  const services = [
    {
      name: "Advanced Endo Scopy Unit",
      icon: "🔬",
      image: "/images/services/endoscopy.jpg",
    },
    {
      name: "Laserization",
      icon: "💡",
      image: "/images/services/laserization.jpg",
    },
    { name: "Coblation", icon: "⚙️", image: "/images/services/coblation.jpg" },
    {
      name: "Modular Operation Theatre",
      icon: "🏥",
      image: "/images/services/operationtheatre.jpg",
    },
    { name: "ICU Facilities", icon: "🚑", image: "/images/services/icu.jpg" },
    {
      name: "General Ward & Pharmacy",
      icon: "💊",
      image: "/images/services/generalward.jpg",
    },
    {
      name: "Removal of Foreign Bodies In Ear, Nose, Throat",
      icon: "🦻",
      image: "/images/services/removalofforeignbodies.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-r from-cyan-100 to-teal-200 text-gray-800 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-5xl font-extrabold text-teal-700 mb-8">
          Our Services
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-48 object-cover"
              />

              {/* Service Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-600 flex items-center gap-2">
                  {service.icon} {service.name}
                </h3>
                <p className="text-lg text-gray-700 mt-4">
                  We provide high-quality {service.name.toLowerCase()} services
                  to ensure the best care for our patients.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}






