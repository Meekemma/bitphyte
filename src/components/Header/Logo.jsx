import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
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

