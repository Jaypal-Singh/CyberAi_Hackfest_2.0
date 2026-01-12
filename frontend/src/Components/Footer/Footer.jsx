import React from "react";
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../../assets/hakathon_logo/logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-purple-900/35 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 relative group">
              {/* Gear Icon with 2026 */}
              <img src={logo} className="h-50 w-50"></img>
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
                <a
                  href="https://www.google.com/maps/place/Sankalchand+Patel+University+(SPU)/@23.6849003,72.5445244,17z/data=!3m1!4b1!4m6!3m5!1s0x395c4fc1a82d9cc1:0xab14b55faa92b2c6!8m2!3d23.6849003!4d72.5470993!16s%2Fg%2F11fzd2qcxp?authuser=0&entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer decoration-none"
                >
                  {/* Icon Container */}
                  <div className="p-2 rounded-full bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors mt-1">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>

                  {/* Text Container */}
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                    <p className="leading-relaxed">
                      Sankalchand Patel University,<br />
                      Visnagar, Gujarat
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <a
                  href="mailto:jaypalsinghchouhan2008@gmail.com"
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
