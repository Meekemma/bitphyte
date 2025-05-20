import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Plans",
      href: "/#plans",
      onClick: handlePlansClick,
    },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-dark to-greenGray text-softGray shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden md:flex">
          <NavLinks links={navLinks} />
        </div>

        {/* Auth + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <AuthButtons />

          {/* Mobile hamburger button */}
          <button
            className="md:hidden text-softGray focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {mobileMenuOpen && (
        <div className="bg-lightGray text-dark md:hidden">
          <MobileMenu links={navLinks} onClose={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;





