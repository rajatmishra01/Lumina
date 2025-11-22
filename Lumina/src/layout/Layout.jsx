import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LuminaSidebar from "../components/LuminaSidebar";
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
    <div className="min-h-screen bg-gray-50">
      <Header onToggleSidebar={toggleSidebar} />

      <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-56 md:flex md:flex-col z-40">
        <div className="h-screen bg-[#F8F8F8]">
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
              <div className="h-10 w-44 -top-10 flex items-center md:justify-start justify-center">
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

      <div className="flex flex-col md:pl-56">
        <main className="pt-20 bg-[#FFFFFF] min-h-[calc(100vh-160px)]">
          <div className="  px-4 py-6">
            <Outlet />
          </div>
        </main>

        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}
