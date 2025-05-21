import React from "react";
import { motion } from "framer-motion";

const slideRightToLeft = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.25, duration: 1 }
  }
};

const slideLeftToRight = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.25, duration: 1 }
  }
};

const CompanyOverview = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-20 text-gray-800">
      {/* Who We Are */}
      <motion.div
        className="bg-gradient-to-r from-navy via-greenGray to-navy
 rounded-lg p-8 shadow-lg"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideRightToLeft}
      >
        <h2 className="text-softGray text-4xl font-bold mb-4">Who We Are</h2>
        <p className="text-mediumGray text-lg leading-relaxed">
          Bitphyte is a blockchain innovation company focused on simplifying access to crypto
          solutions. We’re passionate about building secure, user-friendly tools that make
          decentralized finance accessible to everyone.
        </p>
      </motion.div>

      {/* What We Do */}
      <motion.div
        className="bg-gradient-to-r from-navy via-greenGray to-navy rounded-lg p-8 shadow-lg"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideLeftToRight}
      >
        <h2 className="text-softGray text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-mediumGray text-lg leading-relaxed">
          We provide real-time crypto market data, trading tools, and blockchain-powered solutions
          for individuals and businesses. Our goal is to drive adoption through reliable and
          scalable tech.
        </p>
      </motion.div>
    </section>
  );
};

export default CompanyOverview;

