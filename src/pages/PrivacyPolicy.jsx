import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <main className="container bg-dark mx-auto px-4 py-12 max-w-4xl text-mediumGray font-sans">
      <h1 className="text-4xl font-heading font-bold mb-6 text-gray-200">Privacy Policy</h1>

      <section className="mb-6">
        <p>
          At BitPhyte, protecting your personal information is a top priority. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">1. Information We Collect</h2>
        <p>
          We collect information you provide directly when creating an account, using our services, or contacting support.
          This includes your name, email address, financial preferences, and other relevant data.
          We also collect technical data such as IP addresses, browser type, and device information for security and analytics purposes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">2. How We Use Your Information</h2>
        <p>
          Your information helps us provide, maintain, and improve our services.
          We use data to personalize your experience, communicate updates, process transactions, and ensure security.
          We do not sell your personal data to third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">3. Data Security</h2>
        <p>
          BitPhyte implements industry-standard security measures to protect your data from unauthorized access, alteration, or destruction.
          However, no internet transmission is 100% secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">4. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze usage, and serve relevant content.
          You can manage cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data.
          You may also opt-out of marketing communications at any time by following the unsubscribe instructions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">6. Third-Party Services</h2>
        <p>
          BitPhyte may share data with trusted service providers who assist in operating our platform.
          These providers are bound by confidentiality agreements and only process data as needed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">7. Children’s Privacy</h2>
        <p>
          Our services are not intended for children under 18. We do not knowingly collect data from minors.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">8. Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. We will notify users of significant changes by email or posting updates on the platform.
          Continued use of our services after changes constitutes acceptance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">9. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at support@bitphyte.com.
        </p>
      </section>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-indigo text-white font-semibold rounded hover:bg-indigo-700 transition-colors"
      >
        Back to Home
      </button>
    </main>
  );
};

export default PrivacyPolicy;
