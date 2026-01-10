import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assests/logo.jpeg'
import useSmoothScroll from '../../Hooks/useSmoothScroll'

const Navbar = () => {
    const scrollY = useSmoothScroll();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const scale = Math.max(0.9, 1 - scrollY * 0.0005);
    const blur = Math.min(4, scrollY * 0.01);
    const opacity = Math.max(0.8, 1 - scrollY * 0.001);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav
                style={{
                    transform: `scale(${scale})`,
                    backdropFilter: `blur(${10 + blur}px)`,
                    opacity: opacity
                }}
                className="flex justify-between items-center bg-[#0f0f11]/80 px-6 py-2 md:px-10 md:py-1.5 rounded-full mx-auto w-[95%] md:w-[90%] max-w-[1200px] border border-white/10 shadow-2xl relative z-50 mt-5 will-change-transform"
            >
                <div className="flex items-center gap-3">
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-bold text-white tracking-wide">SPU</span>
                    </div>
                    <img src={logo} alt="SPU Logo" className="h-10 md:h-12 w-auto rounded-full object-contain" />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 list-none m-0 p-0">
                    {['Home', 'Sponsors', 'Timeline', 'OurTeam', 'Gallery', 'Contacts'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                className="text-[#a0a0a0] hover:text-purple-300 hover:underline underline-offset-4 text-[0.95rem] font-medium transition-all duration-500"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-purple-500/30 text-sm md:text-base cursor-pointer">
                        Register Now
                    </button>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none z-50 relative">
                        <div className="space-y-2">
                            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>

                {/* Close Button */}
                <button onClick={toggleMenu} className="absolute top-8 right-8 text-white p-2">
                    <div className="relative w-8 h-8">
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white rotate-45 transform -translate-y-1/2"></span>
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white -rotate-45 transform -translate-y-1/2"></span>
                    </div>
                </button>

                <ul className="flex flex-col gap-8 text-center list-none p-0 m-0">
                    {['Home', 'Highlights', 'Tracks', 'Results', 'FAQ', 'Organized By'].map((item) => (
                        <li key={item}>
                            <Link
                                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
                                onClick={toggleMenu}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                    <li className="mt-4">
                        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-10 rounded-full shadow-lg shadow-purple-500/30 text-xl transform hover:scale-105 transition-transform">
                            Register Now
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
