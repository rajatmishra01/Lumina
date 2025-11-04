import React from "react";
import "./Navbar.css"
import logo from "../assets/lumina-logo.png";

import { Grid, MapPin, MessageCircle, Heart, Settings } from "lucide-react";

function LuminaSidebar() {
  return (
    <div className="sidebar">
      
      {/* Lumina Logo */}
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Lumina Logo"
          className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Sidebar Menu (everything one below another) */}
      <nav className="flex flex-col items-start space-y-6">
        <button className="sidebar-item flex items-center gap-3">
          <Grid size={20} />
          <span>Dashboard</span>
        </button>
        <button className="sidebar-item flex items-center gap-3">
          <MapPin size={20} />
          <span>Near me</span>
        </button>
        <button className="sidebar-item flex items-center gap-3">
          <MessageCircle size={20} />
          <span>Message</span>
        </button>
        <button className="sidebar-item flex items-center gap-3">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
}
export default LuminaSidebar;