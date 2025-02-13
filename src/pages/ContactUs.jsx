import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaUserMd } from "react-icons/fa";

function ContactUs() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-cyan-50 to-teal-100 text-gray-800 px-6"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-5xl font-extrabold text-teal-700 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Feel free to reach out to us for appointments, inquiries, or emergency cases.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Contact Details */}
          <motion.div
            className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl p-8 space-y-6 text-left border border-gray-200"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-teal-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Location</h3>
                <p className="text-lg text-gray-700">
                  3-2-15/R, S, T, Near Santhoshimatha Temple, Jammikunta, Karimnagar Dist.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-teal-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Contact</h3>
                <p className="text-lg text-gray-700">📞 8351010555</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaUserMd className="text-teal-600 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Doctor</h3>
                <p className="text-lg text-gray-700 font-bold">Dr. Koila Thirupathi</p>
                <p className="text-lg text-gray-700">
                  M.B.B.S., DNB. ENT, Head & Neck Surgeon (Reg.No. 78689)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl p-8 text-left border border-gray-200"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-teal-700 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all"
                whileFocus={{ scale: 1.05 }}
              />
              <motion.textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-400 transition-all"
                whileFocus={{ scale: 1.05 }}
              ></motion.textarea>
              <motion.button
                className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-teal-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Google Map Section */}
        <motion.div
          className="mt-16 shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold text-teal-700 text-center mb-6">
            Find Us on the Map
          </h3>
          <div className="w-full h-96">
            <iframe
              className="w-full h-full border-0 rounded-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.564628777795!2d79.52931237492444!3d18.25506748296788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3342ab10000001%3A0x1cde8f290c6d9b8a!2sJammikunta%2C%20Karimnagar%20District%2C%20Telangana!5e0!3m2!1sen!2sin!4v1646462657387!5m2!1sen!2sin"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
