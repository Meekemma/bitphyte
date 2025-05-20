import React from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const teamMembers = [
  {
    name: "Alfred Kings",
    title: "Chief Executive Officer",
    image:
      "alfred.jpg",
    bio: "Alfred leads Bitphyte with a vision for decentralized finance. With over a decade of experience in blockchain innovation, he's driving sustainable crypto adoption across emerging markets.",
  },
  {
    name: "Bin Wo",
    title: "Chief Technology Officer",
    image:
      "wo.jpg",
    bio: "Bin Wo architects the core technology powering Bitphyte. He specializes in secure smart contracts and scalable crypto infrastructure with a passion for performance and compliance.",
  },
  {
    name: "Zainab Bello",
    title: "Head of Strategy & Growth",
    image:
      "zainab.webp",
    bio: "Zainab crafts growth strategies that align with Bitphyte's mission. She brings a background in fintech and user-centered design to ensure platform excellence and investor satisfaction.",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-dark text-softGray py-20 px-4 md:px-12 lg:px-24">
      <h2 className="text-4xl font-heading text-indigo font-extrabold mb-16 text-center">
        Meet Our Core Team
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            variants={slideUp}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-indigo"
            />
            <h3 className="text-xl font-semibold text-indigo mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-mediumGray font-medium mb-4">
              {member.title}
            </p>
            <p className="text-base text-softGray leading-relaxed">
              {member.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
