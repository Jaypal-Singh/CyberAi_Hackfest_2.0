import React from "react";
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-purple-900/35 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 relative group">
              {/* Gear Icon with 2026 */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-32 h-32 text-white group-hover:text-purple-400 transition-colors duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 md:mt-10 mr-4">
                <span className="text-2xl font-bold text-purple-500">2026</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 w-full flex flex-col items-center md:items-start">
              {[
                "Home",
                "Sponsors",
                "Timeline",
                "OurTeam",
                "Gallery",
                "Contacts",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:scale-150 transition-transform"></span>
                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="text-gray-400 group-hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors mt-1">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                  <p>Sankalchand Patel University,Visnagar,Gujarat</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <a
                  href="mailto:ingenium@ahduni.edu.in"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  spu.ac.in
                </a>
              </div>

              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="p-2 rounded-full bg-purple-900/20 hover:bg-purple-500 hover:text-white text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-purple-900/20 hover:bg-purple-500 hover:text-white text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-purple-900/20 hover:bg-purple-500 hover:text-white text-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-900/40 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 uppercase tracking-widest flex flex-col md:flex-row justify-center items-center gap-2">
          <span>Designed and Developed by</span>
          <span className="text-purple-500 font-semibold mx-1">
            Jaypal Singh
          </span>
          <span className="hidden md:inline text-purple-900">|</span>
          <span className="text-purple-500 font-semibold mx-1">
            Patel Jainish
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
