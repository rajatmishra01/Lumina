import React from "react";
import { FaBell } from "react-icons/fa";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 md:left-56 h-20 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggleSidebar && onToggleSidebar()}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-200"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="p-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        >
          <FaBell className="text-black cursor-pointer text-xl" />
        </button>

        {/* Profile Picture */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-7 h-7 rounded-full object-cover"
        />

        <button className="px-2 py-1 text-sm cursor-pointer bg-gray-300 font-medium text-black rounded-md hidden sm:inline">
          Log Out
        </button>
      </div>
    </header>
  );
}
