import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faShieldAlt,
  faChartLine,
  faRocket,
  faHandshake,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const cards = [
  {
    icon: faUsers,
    title: "Our Team",
    description:
      "A dedicated team of blockchain enthusiasts and tech experts driving innovation and excellence.",
  },
  {
    icon: faShieldAlt,
    title: "Security First",
    description:
      "We prioritize your security with cutting-edge encryption and rigorous compliance standards.",
  },
  {
    icon: faChartLine,
    title: "Market Insights",
    description:
      "Real-time data and analytics to help you make informed investment decisions.",
  },
  {
    icon: faRocket,
    title: "Fast & Reliable",
    description:
      "Lightning-fast transactions and dependable platform uptime, no compromises.",
  },
  {
    icon: faHandshake,
    title: "Partnerships",
    description:
      "Collaborating with industry leaders worldwide to expand blockchain adoption.",
  },
  {
    icon: faLightbulb,
    title: "Innovation",
    description:
      "Constantly pushing the boundaries of technology to deliver next-gen solutions.",
  },
];

// Animation variants for framer-motion
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 1,
      duration: 2,
    },
  },
};

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg text-gray-100 mt-10">
      <h2 className="text-4xl font-bold mb-10 text-indigo text-center">
        Why Chose Us ?
      </h2>
      <div
        className="grid gap-8
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3"
      >
        {cards.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center
                       shadow-md hover:shadow-indigo transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-indigo text-5xl mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

