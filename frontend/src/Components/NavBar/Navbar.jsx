import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import SPUlogo from "../../assets/sponsors/spu.png";

import useSmoothScroll from "../../Hooks/useSmoothScroll";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Close menu when route changes
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Sponsors", path: "/sponsors" },
        { name: "Timeline", path: "/timeline" },
        { name: "Our Team", path: "/ourteam" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contacts", path: "/contacts" },
        { name: "Contacts", path: "/contacts" },
        
    ];

    return (
        <>
            <nav className="fixed top-5 left-0 right-0 z-50 flex justify-between items-center bg-white backdrop-blur-md px-6 py-2 md:px-10 md:py-1.5 rounded-full mx-auto w-[95%] md:w-[92%] max-w-[1210px] border border-white/10 shadow-lg transition-all">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col leading-none">
                        <img
                            src={SPUlogo}
                            alt="SPU Logo"
                            className="h-10 md:h-12 w-auto rounded-full object-contain"
                        />
                    </div>
                    {/* <img
                        src={logo}
                        alt="SPU Logo"
                        className="h-10 md:h-12 w-auto rounded-full object-contain"
                    /> */}
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 list-none m-0 p-0">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`text-[0.95rem] font-medium transition-all duration-500 text-black hover:text-purple-300 hover:underline underline-offset-4 ${isActive
                                        ? "text-purple-500 font-bold scale-110"
                                        : "text-[#a0a0a0]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4">
                    <a
                        href="https://unstop.com/p/cyberai-hackfest-20-sankalchand-patel-college-of-engineering-spce-visnagar-gujarat-1621737"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block bg-gradient-to-r from-purple-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-purple-500/30 text-sm md:text-base cursor-pointer text-center"
                    >
                        Register Now
                    </a>

                    {/* Mobile Menu Button - Hamburger */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-black focus:outline-none z-[60] relative p-1"
                    >
                        <div className="space-y-1.5 w-6">
                            <span
                                className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-purple-500" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-3/4 ml-auto h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-purple-500" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </nav>
            {/* 
      {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[55] transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMenu}
            />

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMenu}
            >
                <div
                    className={`w-[92%] mx-auto mt-6 flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen
                        ? "translate-y-0 opacity-100 scale-100"
                        : "-translate-y-12 opacity-0 scale-90 pointer-events-none"
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* 1. Branding Bar - Glassmorphic */}
                    <div className="flex justify-between items-center bg-white backdrop-blur-2xl border border-gray-200 rounded-full px-5 py-3 shadow-xl">
                        <div className="flex items-center gap-3">
                            <img
                                src={SPUlogo}
                                alt="Logo"
                                className="h-16 w-auto object-contain"
                            />
                            <div className="h-5 w-[1px] bg-black/20 mx-1"></div>
                            {/* <div className="flex flex-col">
                                <span className="text-[11px] font-black text-black leading-none tracking-wider">
                                    SPU <span className="text-purple-500">HACKFEST</span>
                                </span>
                                <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
                                    Innovation Hub
                                </span>
                            </div> */}
                        </div>

                        <button
                            onClick={toggleMenu}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-black transition-transform active:scale-90"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* 2. Navigation Card - Transparent/Glass */}
                    <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                        {/* Subtle purple radial glow to keep the theme feel */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 blur-[80px] rounded-full"></div>

                        <ul className="flex flex-col gap-7 list-none p-0 m-0 relative z-10">
                            {navLinks.map((item, index) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <li
                                        key={item.name}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                        className={`transition-all duration-500 ${isMenuOpen
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-4"
                                            }`}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`text-2xl font-bold flex items-center gap-4 transition-all ${isActive
                                                ? "text-purple-500 translate-x-2"
                                                : "text-gray-600 hover:text-black"
                                                }`}
                                            onClick={toggleMenu}
                                        >
                                            {item.name}
                                            {isActive && (
                                                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></span>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}

                            {/* 3. Action Button - Keeping the solid theme color */}
                            <li
                                className={`mt-4 transition-all duration-700 delay-300 ${isMenuOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                    }`}
                            >
                                <a
                                    href="https://unstop.com/p/cyberai-hackfest-20-sankalchand-patel-college-of-engineering-spce-visnagar-gujarat-1621737"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-[#9333ea] hover:bg-[#a855f7] text-white font-extrabold py-4.5 rounded-full text-lg shadow-[0_15px_30px_-5px_rgba(147,51,234,0.4)] active:scale-95 transition-all uppercase tracking-wider"
                                >
                                    Register Now
                                </a>
                            </li>
                        </ul>

                        <div className="flex justify-center gap-2 mt-10 opacity-20">
                            <div className="w-1 h-1 rounded-full bg-white"></div>
                            <div className="w-1 h-1 rounded-full bg-white"></div>
                            <div className="w-1 h-1 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
