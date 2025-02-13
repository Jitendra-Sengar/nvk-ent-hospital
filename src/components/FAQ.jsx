import { useState } from "react";
import { motion } from "framer-motion";
 const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "🌟 We provide **cutting-edge ENT treatments** such as **endoscopy, laserization, and coblation** to ensure precision and comfort. Our **ICU facilities** and specialized wards are equipped with the latest technology to provide **exceptional care** for all patients.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "📅 Booking an appointment is easy! You can **schedule a consultation online** through our website or call our contact number for immediate assistance. For **emergency cases**, we offer **priority slots** to ensure you receive timely treatment.",
    },
    {
      question: "What are the hospital's working hours?",
      answer:
        "🕘 Our hospital operates **from 9:00 AM to 8:00 PM, seven days a week**. We understand the need for flexibility and provide **extended consultation hours** for busy individuals. **Emergency care** is available 24/7.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "✅ Yes! We accept **most major insurance providers**. Our administrative team will **guide you through the process**, ensuring hassle-free claims and transparent billing. Contact us to verify your coverage today!",
    },
    {
      question: "Where is the hospital located?",
      answer:
        "📍 **Visit us at** 3-2-15/R, S, T, **Near Santhoshimatha Temple, Jammikunta, Karimnagar Dist.** Our facility is **easily accessible**, with ample parking and public transportation connectivity.",
    },
  ];

function FAQ() {
    
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section
        id="faq"
        className="py-16 bg-gradient-to-r from-cyan-50 to-teal-100 text-gray-800 px-6"
      >
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-5xl font-extrabold text-teal-700 mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Find answers to common queries about our hospital, services,
            appointment process, and more. If you have further questions, feel
            free to reach out to us.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 cursor-pointer transition transform hover:scale-105 hover:shadow-2xl"
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-teal-700">
                    {faq.question}
                  </h3>
                  <span className="text-teal-600 text-2xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <motion.p
                    className="text-gray-700 mt-4 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  export default FAQ;