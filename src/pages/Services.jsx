import { motion } from "framer-motion";

export const services = [
  {
    name: "Modular Operation Theatre",
    icon: "🏥",
    image: "/images/services/theatre.jpeg",
    description: "Our modular operation theatre is equipped with the latest medical technology, ensuring the highest standards of safety and hygiene."
  },
  { 
    name: "ICU Facilities", 
    icon: "🚑", 
    image: "/images/services/icu.jpeg",
    description: "Our ICU is equipped with cutting-edge monitoring and life-support systems to provide critical care when needed."
  },
  {
    name: "Advanced Endo Scopy Unit",
    icon: "🔬",
    image: "/images/services/endoscopy.jpg",
    description: "Our state-of-the-art endoscopy unit ensures precise diagnosis and treatment of ENT conditions with minimal discomfort."
  },
  {
    name: "Laserization",
    icon: "💡",
    image: "/images/services/ktplaser.jpeg",
    description: "We offer advanced laser treatments for various ENT disorders, ensuring precise and less invasive procedures."
  },
  { 
    name: "Coblation", 
    icon: "⚙️", 
    image: "/images/services/coblation2.jpeg",
    description: "Our coblation technology allows for effective and gentle tissue removal, reducing recovery time for patients."
  },
  
  {
    name: "General Ward & Pharmacy",
    icon: "💊",
    image: "/images/services/generalward.jpg",
    description: "Our general ward provides comfortable accommodations, and our in-house pharmacy ensures quick access to essential medicines."
  },
  {
    name: "Removal of Foreign Bodies In Ear, Nose, Throat",
    icon: "🦻",
    image: "/images/services/removalofforeignbodies.jpg",
    description: "We specialize in the safe and precise removal of foreign bodies from the ear, nose, and throat using advanced techniques."
  },
  {
    name: "Hearing Aid",
    icon: "🔊",
    image: "/images/services/hearingaid.jpg",
    description: "Offering a range of advanced hearing aids tailored to meet individual hearing needs."
  },
  {
    name: "Treatment for All ENT Patients",
    icon: "🩺",
    image: "/images/services/allenttreatment.webp",
    description: "Comprehensive ENT care covering both general and specialized treatments to ensure patient well-being."
  },
  {
    name: "Otology (Mastoidectomies)",
    icon: "🦻",
    image: "/images/services/otology.jpg",
    description: "Our otology specialists provide expert care in ear surgeries, including mastoidectomies, to restore hearing and health."
  },
  {
    name: "Rhinology",
    icon: "👃",
    image: "/images/services/rhinology.webp",
    description: "We offer specialized treatment for nasal disorders, including sinus surgeries and allergy management."
  },
  {
    name: "Laryngology",
    icon: "🗣️",
    image: "/images/services/laryngology.jpg",
    description: "Expert care for voice and throat disorders, including vocal cord surgeries and laryngeal treatments."
  },
  {
    name: "Facial Plastic Surgery",
    icon: "💆",
    image: "/images/services/facialplasticsurgery.webp",
    description: "Advanced cosmetic and reconstructive facial surgery to enhance appearance and restore function."
  },
  {
    name: "Cochlear Implants",
    icon: "🎧",
    image: "/images/services/cochlearimplant.jpg",
    description: "Providing life-changing cochlear implant procedures for patients with severe hearing loss."
  },
  
  {
    name: "Skull Base Surgery",
    icon: "🧠",
    image: "/images/services/skullbase.jpg",
    description: "Specialized surgical procedures to treat complex conditions affecting the skull base and surrounding areas."
  }
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
        <motion.div
          className="relative w-full mb-10 overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src="/images/services/header.jpg"
            alt="Our Services"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-start px-10">
            <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
              Our Services
            </h2>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-teal-600 flex items-center gap-2">
                  {service.icon} {service.name}
                </h3>
                <p className="text-lg text-gray-700 mt-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Services;