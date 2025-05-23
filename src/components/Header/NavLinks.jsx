import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ links }) => {
  return (
    <nav className="hidden md:flex space-x-6">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          onClick={link.onClick}
          className="text-mediumGray hover:text-indigo transition-colors duration-200 font-heading tracking-wide text-base"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;


