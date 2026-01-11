import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/hakathon_logo/logo.jpeg";
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
    ];

    return (
        <>
            <nav className="fixed top-5 left-0 right-0 z-50 flex justify-between items-center bg-white/5 backdrop-blur-md px-6 py-2 md:px-10 md:py-1.5 rounded-full mx-auto w-[95%] md:w-[90%] max-w-[1200px] border border-white/10 shadow-lg transition-all">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold text-white tracking-wide">
                            SPU
                        </span>
                    </div>
                    <img
                        src={logo}
                        alt="SPU Logo"
                        className="h-10 md:h-12 w-auto rounded-full object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 list-none m-0 p-0">
                    {navLinks.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`text-[0.95rem] font-medium transition-all duration-500 hover:text-purple-300 hover:underline underline-offset-4 ${isActive ? "text-purple-500 font-bold scale-110" : "text-[#a0a0a0]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-gradient-to-r from-purple-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-purple-500/30 text-sm md:text-base cursor-pointer">
            Register Now
          </button>

                    {/* Mobile Menu Button - Hamburger */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white focus:outline-none z-[60] relative p-1"
                    >
                        <div className="space-y-1.5 w-6">
                            <span
                                className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-purple-500" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-3/4 ml-auto h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""
                                    }`}
                            ></span>
                            <span
                                className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-purple-500" : ""
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={toggleMenu}
            />

            {/* Mobile Menu Glass Card - Parul Style */}
            <div
                className={`fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-[400px] md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d12]/90 backdrop-blur-2xl shadow-2xl shadow-purple-900/20">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-3">
                            <span className="text-white font-bold text-lg tracking-wider">
                                SPU <span className="text-purple-500">HACKFEST</span>
                            </span>
                        </div>
                        {/* Close button is handled by the hamburger above, but we can add an X here if needed. 
                            The reference doesn't strictly have a second X if the hamburger turns into one. 
                            But for clarity: */}
                        <div className="w-6" />
                    </div>

                    {/* Links List */}
                    <div className="p-6">
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={`block text-lg font-medium transition-colors ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
                                                }`}
                                        >
                                            {item.name}
                                            {/* Active Underline Indicator */}
                                            {isActive && (
                                                <div className="h-[2px] w-full bg-purple-500 mt-1 shadow-[0_0_8px_#a855f7]" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Register Button */}
                        <div className="mt-8">
                            <button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-purple-500/30 active:scale-95 transition-transform tracking-wide">
                                Register Now
                            </button>
                            <p className="text-center text-gray-500 text-[10px] mt-4 uppercase tracking-[0.2em]">
                                Join talented developers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
