import { useState } from "react";
import Head from "./Head";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="min-h-screen bg-softGray flex relative">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* ✨ Make header sticky at top of the page */}
        <div className="sticky top-0 z-50 bg-white shadow-md"> {/* ✨ Added */}
          <Head
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            closeSidebar={closeSidebar}
          />
        </div>

        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;



