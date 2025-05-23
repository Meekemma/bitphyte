import { useState, useRef, useEffect } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar, isSidebarOpen, closeSidebar }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      toggleSidebar();
    }
  };

  return (
    <header className="bg-gradient-to-r from-dark via-navy to-dark text-softGray shadow-sm px-4 py-6 flex justify-between items-center relative z-20">
      {/* Left: Hamburger */}
      <div className="text-xl cursor-pointer" onClick={handleToggleSidebar}>
        <FaBars />
      </div>

      {/* Right: Profile Section */}
      <div className="relative" ref={profileRef}>
        <FaUserCircle
          className="text-2xl cursor-pointer"
          onClick={() => setProfileOpen((prev) => !prev)}
        />

        {/* Dropdown */}
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-navy border rounded shadow-md z-50">
            <button
              className="block w-full px-4 py-2 text-left hover:bg-lightGray hover:text-dark"
              onClick={() => {
                navigate("/profile/me");
                setProfileOpen(false);
              }}
            >
              Visit Profile
            </button>
            <button
              className="block w-full px-4 py-2 text-left hover:bg-lightGray hover:text-dark"
              onClick={() => {
                navigate("/logout");
                setProfileOpen(false);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;








