import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      // 1. Removed w-screen, left-1/2, right-1/2, and -translate-x-1/2
      // 2. Used w-full to ensure it spans the parent container's width (which should be the full viewport).
      // 3. Made z-[1000] conditional, if necessary, but kept it.
      className="
        relative w-full 
        bg-[#707070] text-white text-center 
        py-6 md:py-7 z-[1000]
        font-inter
      "
    >
      <div className="flex flex-col items-center gap-3">
        
        {/* Footer Text */}
        <p className="text-sm text-[#f2f2f2] m-0">
          © 2025 Lumina. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex gap-4 max-[600px]:flex-col max-[600px]:gap-2">
          <a href="#privacy" className="text-sm hover:text-[#cfcfcf] transition ">
            Privacy Policy
          </a>
          <a href="#terms" className="text-sm hover:text-[#cfcfcf] transition ">
            Terms of Services
          </a>
          <a href="#contact" className="text-sm hover:text-[#cfcfcf] transition ">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 mt-1 max-[600px]:gap-3">
          {[ 
            { href:"https://facebook.com", label:"Facebook", icon:<FaFacebookF/> },
            { href:"https://instagram.com", label:"Instagram", icon:<FaInstagram/> },
            { href:"https://twitter.com", label:"X", icon:<FaXTwitter/> },
            { href:"https://linkedin.com", label:"LinkedIn", icon:<FaLinkedinIn/> },
            { href:"https://youtube.com", label:"YouTube", icon:<FaYoutube/> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="
                flex items-center justify-center 
                w-7 h-7 rounded-md bg-white text-[#707070] 
                text-lg transition 
                hover:scale-110 hover:text-white hover:bg-[#333]
              "
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}