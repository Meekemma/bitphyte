import React from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <main className="container bg-dark mx-auto px-4 py-12 max-w-4xl text-mediumGray font-sans">
      <h1 className="text-4xl font-heading font-bold mb-6 text-gray-200">Terms of Service</h1>

      <section className="mb-6">
        <p>
          Welcome to BitPhyte. These Terms of Service (“Terms”) govern your use of our platform, products, and services.
          By accessing or using BitPhyte, you agree to comply with these Terms. Please read them carefully.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">1. Acceptance of Terms</h2>
        <p>
          By using BitPhyte services, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms.
          You agree to use the services only for lawful purposes and in compliance with all applicable laws.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">2. Description of Services</h2>
        <p>
          BitPhyte offers investment and financial planning tools designed to help users manage, invest, and plan their finances securely.
          Our services include market insights, personalized investment plans, and access to a range of financial products.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">3. User Responsibilities</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their account credentials.
          You agree to notify BitPhyte immediately of any unauthorized use or security breach.
          You must not misuse the platform or attempt to access any data or systems you are not authorized to use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">4. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and software provided on BitPhyte are the intellectual property of BitPhyte or its licensors.
          You may not reproduce, distribute, or create derivative works without our express written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">5. Limitation of Liability</h2>
        <p>
          BitPhyte provides its services “as is” without warranties of any kind.
          We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our platform,
          including financial losses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">6. Privacy</h2>
        <p>
          Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">7. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to BitPhyte for violations of these Terms or misuse of the services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">8. Changes to Terms</h2>
        <p>
          BitPhyte may update these Terms periodically. We will notify users of significant changes via email or platform notifications.
          Continued use after updates constitutes acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">9. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of the jurisdiction where BitPhyte operates,
          without regard to conflict of law principles.
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

export default TermsOfService;
