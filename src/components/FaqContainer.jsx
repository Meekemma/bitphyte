import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "What is BitPhyte?",
    answer:
      "BitPhyte is a secure and innovative crypto investment platform that allows users to grow their digital assets through professional-grade strategies and tools.",
  },
  {
    question: "How do I start investing with BitPhyte?",
    answer:
      "Sign up for a BitPhyte account, complete your KYC verification, deposit your preferred cryptocurrency, and choose an investment plan that suits your goals.",
  },
  {
    question: "Is BitPhyte regulated and secure?",
    answer:
      "Yes, BitPhyte adheres to strict global compliance standards, uses bank-level encryption, multi-signature wallets, and undergoes regular security audits.",
  },
  {
    question: "What cryptocurrencies does BitPhyte support?",
    answer:
      "BitPhyte currently supports Bitcoin (BTC), Ethereum (ETH), USDT, BNB, and other top-tier cryptocurrencies. We are continuously adding more.",
  },
  {
    question: "Can I withdraw my funds at any time?",
    answer:
      "Yes, depending on your selected investment plan. Some plans may have lock-in periods for higher returns, while others support flexible withdrawals.",
  },
  {
    question: "Are there any fees?",
    answer:
      "BitPhyte maintains a transparent fee structure. There may be small fees for transactions, withdrawals, or early exits from fixed-term plans. Check our pricing page for details.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "BitPhyte has its mobile app under development and will be launched soon. In the meantime, you can access the platform via any mobile browser.",
  },
  {
    question: "What support channels are available?",
    answer:
      "You can reach us via live chat, email support, and our 24/7 helpdesk. Premium users get priority response times.",
  },
  {
    question: "Does BitPhyte offer referral or affiliate rewards?",
    answer:
      "Yes, BitPhyte offers a competitive affiliate program. Refer users and earn passive income from their activities on the platform.",
  },
  {
    question: "How do I ensure my account is safe?",
    answer:
      "Enable 2FA, use strong passwords, and never share your credentials. BitPhyte also offers account activity tracking and security alerts.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null); // ✅ fixed this line
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactSupport = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-dark text-softGray py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading text-softGray font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-mediumGray mb-12">
          Got questions? We've got answers. Learn more about BitPhyte and how it works.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-lightGray rounded-xl shadow-sm bg-gradient-to-r from-navy via-greenGray to-navy">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-200" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-200" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-mediumGray">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-softGray mb-8">Still have questions?</h2>
          <p className="text-mediumGray mb-8">
            Contact our support team or check our Help Center for more details.
          </p>
          <button
            onClick={handleContactSupport}
            className="
              bg-indigo
              text-softGray
              hover:bg-indigo-700 
              transition-colors 
              px-6 py-3 sm:px-8 sm:py-4 
              rounded-lg 
              text-lg sm:text-xl 
              font-semibold 
              shadow-lg
              focus:outline-none 
              focus:ring-4 
              focus:ring-indigo-400
              focus:ring-opacity-50
            "
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}




