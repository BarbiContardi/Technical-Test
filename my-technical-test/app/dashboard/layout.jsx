import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/Navbar";
import Footer from "../ui/dashboard/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 bg-[var(--bgSoft)] p-5 min-h-screen">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
