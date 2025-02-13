import { motion } from "framer-motion";

export const services = [
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

function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-r mt-8 from-cyan-100 to-teal-200 text-gray-800 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Header Image with Text on Left */}
        <motion.div
          className="relative w-full mb-10 overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Background Image */}
          <img
            src="/images/services/header.jpg"
            alt="Our Services"
            className="w-full h-72 object-cover"
          />
          
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Positioned on Left */}
          <div className="absolute inset-0 flex items-center justify-start px-10">
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
              Our Services
            </h2>
          </div>
        </motion.div>

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

export default Services;
