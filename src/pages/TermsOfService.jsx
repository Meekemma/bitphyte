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

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">10. Withdrawals</h2>
        <p>
          BitPhyte processes withdrawal requests promptly and with great care. A fixed transaction fee of 1% is deducted from all withdrawal
          amounts to support processing costs and blockchain fees. At this time, withdrawals are only supported in USDT (Tether) on the BEP20 network.
        </p>
        <p className="mt-2">
          Although payments are typically fulfilled instantly, network congestion or verification processes may cause rare delays.
          If your payment is not received within a reasonable timeframe, we encourage you to contact our support team at 
          <a href="/contact" className="text-indigo underline mx-1">contact</a> or via email at <a href="mailto:support@bitphyte.com" className="text-indigo underline">support@bitphyte.com </a> 
          for manual processing.
        </p>
        <p className="mt-2">
          Please note that referral bonuses are not eligible for withdrawal until they are reviewed and verified by an administrator.
          This verification process ensures fair use and compliance with our referral program terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo">11. Deposits</h2>
        <p>
          Depositing into your BitPhyte account is simple and flexible. We offer three main investment plans:
        </p>
        <ul className="list-disc list-inside mt-2 ml-4">
          <li><strong>Basic Plan</strong>: $100 - $9,999 | Daily Return: 2.5%</li>
          <li><strong>Standard Plan</strong>: $10,000 - $99,999 | Daily Return: 3.2%</li>
          <li><strong>Premium Plan</strong>: $100,000 - $500,000 | Daily Return: 5%</li>
        </ul>
        <p className="mt-2">
          Deposits are made via supported cryptocurrencies, and once confirmed, your investment begins earning returns as per your selected plan.
          You can track your earnings in real-time from your dashboard. All transactions are encrypted and secured with industry-standard technology.
        </p>
        <p className="mt-2">
          BitPhyte encourages responsible investment. Ensure you only invest funds you can afford, and always review the details of your chosen plan before confirming your deposit.
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

