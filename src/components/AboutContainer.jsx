import React from "react";
import { FaLock, FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const aboutPoints = [
  {
    icon: <FaLock size={80} className="text-softGray" />,
    title: "Security First",
    description:
      "At Bitphyte, safeguarding your assets is our top priority. We employ cutting-edge encryption and multi-layer security protocols to ensure your investments remain protected against threats.",
  },
  {
    icon: <FaChartLine size={80} className="text-softGray" />,
    title: "Real-Time Market Insights",
    description:
      "Stay ahead with live, data-driven analytics and market trends that empower you to make timely and informed crypto investment decisions.",
  },
  {
    icon: <FaUsers size={80} className="text-softGray" />,
    title: "Community & Support",
    description:
      "Join a vibrant community of crypto enthusiasts and investors. Our dedicated support team is available 24/7 to assist you at every step of your investment journey.",
  },
  {
    icon: <FaShieldAlt size={80} className="text-softGray" />,
    title: "Regulatory Compliance",
    description:
      "Bitphyte strictly adheres to global regulatory standards, ensuring that your investments comply with legal requirements and maintain transparency.",
  },
];

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const AboutUsContainer = () => {
  return (
    <section className="bg-gradient-to-r from-navy via-greenGray to-navy w-full text-mediumGray py-20 px-4 md:px-12 lg:px-24">
      <h2 className="text-4xl font-heading text-softGray font-extrabold mb-16 text-center">
        About Bitphyte
      </h2>

      <div className="flex flex-col space-y-20">
        {aboutPoints.map((point, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={point.title}
              className={`flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-y-10 md:gap-x-20 w-full`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={isEven ? slideLeft : slideRight}
            >
              <div className="flex-shrink-0">{point.icon}</div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-softGray mb-4">
                  {point.title}
                </h3>
                <p className="text-mediumGray text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutUsContainer;


