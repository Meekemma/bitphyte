import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartPie,
  FaMoneyBillWave,
  FaWallet,
  FaHistory,
  FaUserFriends,
  FaCog,
} from "react-icons/fa";

const navItems = [
  { label: "Go Back Home", path: "/", icon: <FaHome /> },
  { label: "Dashboard", path: "/dashboard/home", icon: <FaChartPie /> },
  { label: "Deposit", path: "/dashboard/invest", icon: <FaMoneyBillWave /> },
  { label: "Withdraw", path: "/dashboard/withdraw", icon: <FaWallet /> },
  { label: "Transaction Logs", path: "/dashboard/transactions", icon: <FaHistory /> },
  { label: "Referral", path: "/dashboard/referrals", icon: <FaUserFriends /> },
  { label: "Settings", path: "/profile/edit", icon: <FaCog /> },
];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarRef = useRef(null);

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-navy text-softGray shadow-md z-40 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 font-bold text-lg border-b border-softGray">Access Tabs</div>
      <nav className="mt-4 flex flex-col gap-1 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-lightGray ${
                isActive ? "bg-lightGray text-dark" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;


