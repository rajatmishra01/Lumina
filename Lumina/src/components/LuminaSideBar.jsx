import React from "react";
import { Grid, MapPin, MessageCircle, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

/**
 * LuminaSidebar
 * - Logo is hidden on small screens (hidden md:flex)
 * - Nav sits below logo on md+, but on small screens logo is removed so nav appears at top
 * - Accepts optional onNavigate() prop (used by Layout mobile drawer to auto-close)
 */
function LuminaSidebar({ onNavigate }) {
  const items = [
    { id: "dashboard", to: "/dashboard", label: "Dashboard", icon: <Grid size={18} /> },
    { id: "near", to: "/near", label: "Near me", icon: <MapPin size={18} /> },
    { id: "message", to: "/message", label: "Message", icon: <MessageCircle size={18} /> },
    { id: "track", to: "/track", label: "Track", icon: <MessageCircle size={18} /> },
    { id: "settings", to: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="h-full bg-[#F8F8F8] flex flex-col items-center md:items-start py-4 px-3">
      {/* Logo: hidden on small screens, visible on md+ */}
      <div className="hidden md:flex h-20 w-full items-center md:justify-start justify-center mb-15">
        <img src="/images/lumina-logo.png" alt="Lumina Logo" />
      </div>

      {/* Nav: will appear at top on small screens because logo is hidden */}
      <nav className="w-full flex flex-col gap-4 md:gap-10">
        {items.map((it) => (
          <NavLink
            key={it.id}
            to={it.to}
            onClick={() => onNavigate && onNavigate()}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
               ${isActive ? "bg-yellow-100 text-yellow-700" : "text-gray-600 hover:bg-gray-50"}`
            }
          >
            <span className="flex-none">{it.icon}</span>
            <span className="hidden md:inline">{it.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto w-full">
        <div className="text-xs text-gray-400 px-3">v1.0</div>
      </div>
    </div>
  );
}

export default LuminaSidebar;
