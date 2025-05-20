import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Jane Donnie",
    title: "Crypto Investor",
    review:
      "Bitphyte has been a game-changer for me. I’ve seen consistent returns and the platform is so easy to use.",
    image: "/donnie.jpg",
  },
  {
    name: "Michael Smith",
    title: "Financial Analyst",
    review:
      "I’m impressed with the transparency and daily profit updates. This is the future of investing!",
    image: "/smith.jpg",
  },
  {
    name: "Lilian Akpan",
    title: "Blockchain Developer",
    review:
      "As someone in tech, I trust Bitphyte’s system. The rates are realistic and the process is smooth.",
    image: "/lilian.jpg",
  },
  {
    name: "Emeka Obi",
    title: "Entrepreneur",
    review:
      "I was skeptical at first, but the returns have been consistent. Highly recommend to my network.",
    image: "/emeka.jpg",
  },
  {
    name: "Sarah Lin",
    title: "Digital Marketer",
    review:
      "Bitphyte gave me a reliable passive income stream. I’m really satisfied with their service.",
    image: "/lin.jpg",
  },
  {
    name: "John Peter",
    title: "Crypto Enthusiast",
    review:
      "It’s not every day you find a platform this secure and user-friendly. Bitphyte nailed it!",
    image: "/peter.webp",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-950 text-softGray py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo mb-4">What Our Clients Say</h2>
        <p className="text-gray-400 mb-12">Real stories from real investors who trust Bitphyte</p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-2xl shadow-lg border border-gray-700/30 hover:shadow-indigo transition duration-300 text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo mr-3"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
              <FontAwesomeIcon icon={faQuoteLeft} className="text-indigo mb-2 text-xl" />
              <p className="italic text-gray-300">"{t.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
