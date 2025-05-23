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
    title: "Dedicated Team",
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
    <section className="bg-gradient-to-r from-navy via-greenGray to-navy max-w-none px-4 md:px-0 p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-4xl font-bold mb-10 text-softGray text-center">
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
            className="bg-lightGray p-6 rounded-2xl drop-shadow-lg shadow-dark shadow-lg border border-indigo hover:shadow-lightGray transition duration-300 text-left"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FontAwesomeIcon
              icon={icon}
              className="text-navy text-5xl mb-4"
              aria-hidden="true"
            />
            <h3 className="text-xl text-navy font-semibold mb-2">{title}</h3>
            <p className="text-navy text-sm md:block hidden">{description}</p> {/* ✅ ADDED */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;


