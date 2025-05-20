import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faCommentDots } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section className="bg-dark text-softGray py-20 px-4 sm:px-6 lg:px-12">
      <h2 className="text-4xl font-heading text-indigo font-bold mb-10 text-center">
        Contact Us
      </h2>
      <p className="text-lg text-gray-300 mb-10 text-center">
        Send us a message below and we'll be in touch
      </p>

      {success && (
        <div className="bg-green-600 text-white px-6 py-4 rounded-md mb-8 text-center max-w-xl mx-auto">
          Your message has been sent successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-xl shadow-md w-full max-w-xl mx-auto"
      >
        {/* Name */}
        <div className="mb-6">
          <FontAwesomeIcon icon={faUser} className="text-indigo mb-2 text-xl" />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <FontAwesomeIcon icon={faEnvelope} className="text-indigo mb-2 text-xl" />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo placeholder-gray-400"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <FontAwesomeIcon icon={faCommentDots} className="text-indigo mb-2 text-xl" />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            required
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo placeholder-gray-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo text-white font-semibold py-3 rounded-md hover:bg-indigo/90 transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10 space-y-4">
        <p className="text-softGray">
          Send us an email at{" "}
          <a href="mailto:support@bitphyte.com" className="text-indigo underline">
            support@bitphyte.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;




