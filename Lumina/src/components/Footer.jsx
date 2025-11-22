import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#707070] text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm md:text-base text-center md:text-left">© 2025 Lumina. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#terms" className="text-sm hover:underline">Terms of Services</a>
            <a href="#contact" className="text-sm hover:underline">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {[{href:"https://facebook.com",label:"Facebook",icon:<FaFacebookF/>},
              {href:"https://instagram.com",label:"Instagram",icon:<FaInstagram/>},
              {href:"https://twitter.com",label:"X",icon:<FaXTwitter/>},
              {href:"https://linkedin.com",label:"LinkedIn",icon:<FaLinkedinIn/>},
              {href:"https://youtube.com",label:"YouTube",icon:<FaYoutube/>}
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                 className="w-9 h-9 rounded-md bg-white text-[#707070] flex items-center justify-center hover:scale-105">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
