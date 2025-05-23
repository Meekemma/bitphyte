import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Header/Logo";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToPlans = () => {
    const element = document.getElementById("plans");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlansClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToPlans();
    } else {
      navigate("/", { state: { scrollToPlans: true } });
    }
  };

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-dark border-t border-lightGray text-mediumGray py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-20">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-mediumGray text-sm leading-relaxed">
            BitPhyte empowers investors with smart, secure, and transparent financial solutions designed to grow your wealth with confidence.
          </p>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-softGray mb-4">Company</h3>
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <Link to="/" className="hover:text-indigo transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-indigo transition-colors">
              About Us
            </Link>
            <a href="/#plans" onClick={handlePlansClick} className="hover:text-indigo transition-colors">
              Plans
            </a>
            <Link to="/faq" className="hover:text-indigo transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-indigo transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-softGray mb-4">Legal</h3>
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-indigo transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="font-heading font-semibold text-softGray mb-4">Contact</h3>
          <address className="not-italic text-sm space-y-2 text-mediumGray">
            <p>123 BitPhyte Lane</p>
            <p>Investment City, FinState 45678</p>
            <p>Email: <a href="mailto:support@bitphyte.com" className="hover:text-indigo transition-colors">support@bitphyte.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-indigo transition-colors">+1 (234) 567-890</a></p>
          </address>
        </div>
      </div>

      <div className="mt-10 border-t border-lightGray pt-6 text-center text-xs text-mediumGray">
        &copy; {new Date().getFullYear()} BitPhyte. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


