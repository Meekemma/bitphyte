import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ links }) => {
  return (
    <nav className="md:hidden bg-dark px-4 pb-4">
      <ul className="flex flex-col space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            {link.onClick ? (
              <button
                onClick={link.onClick}
                className="w-full text-left text-softGray hover:text-indigo font-medium transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                to={link.href}
                className="block text-softGray hover:text-indigo font-medium transition-colors"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;

