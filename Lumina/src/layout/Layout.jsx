import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LuminaSidebar from "../components/LuminaSideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((s) => !s);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">

      {/* Sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-56 md:flex md:flex-col z-40">
        <div className="h-screen bg-[#F8F8F8] overflow-y-auto">
          <LuminaSidebar />
        </div>
      </aside>

      {/* Mobile drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={closeSidebar}
            aria-hidden="true"
          />
          <div
            className="fixed inset-y-0 left-0 w-64 bg-[#F8F8F8] z-50 shadow-lg md:hidden transform transition-transform duration-200"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="h-10 w-44 flex items-center justify-center md:justify-start">
                <img src="/images/lumina-logo.png" alt="Lumina" />
              </div>
              <button
                onClick={closeSidebar}
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-200"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="p-2 overflow-y-auto h-full">
              <LuminaSidebar onNavigate={closeSidebar} />
            </div>
          </div>
        </>
      )}

      {/* Header */}
      <div className="w-full md:pl-56">
        <Header onToggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content + Footer */}
      <div className="flex flex-col w-full md:pl-56">
        <main className="flex-1 pt-20 pb-24 bg-white w-full">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
