import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
  };

  return (
    <div onClick={handleClick} className="flex items-center space-x-2 cursor-pointer">
      <img
        src="/bitphyte_logo.png"
        alt="BitPhyte Logo"
        className="w-12 h-12 object-contain"
      />

      <div className="relative font-heading text-2xl font-bold tracking-widest text-white hidden md:block">
        Bit
        <span className="text-indigo relative">
          Phyte
          <span />
        </span>
      </div>
    </div>
  );
};

export default Logo;


