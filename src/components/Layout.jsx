import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 p-4 text-white text-center">
        Smart Patient Health Care System
      </header>
      <main className="flex-grow bg-gray-100 p-6">{children}</main>
      <footer className="bg-blue-600 p-4 text-white text-center">
        © 2024 Health Monitoring System
      </footer>
    </div>
  );
};

export default Layout;
