import React from 'react'
import SquareParticles from './Background'
import Timer from './Timer'
import useScroll from '../../Hooks/useScroll'

const Home = () => {
    const scrollY = useScroll();
    const scale = Math.max(0.7, 1 - scrollY * 0.001);
    const blur = Math.min(10, scrollY * 0.02);
    const opacity = Math.max(0, 1 - scrollY * 0.002);

    return (
        <div style={{ position: 'relative', minHeight: '200vh' }}> 
            <div className='fixed inset-0 z-0'>
                <SquareParticles />
            </div>

            <div
                style={{
                    padding: '20px', // Reduced padding for mobile
                    textAlign: 'center',
                    marginTop: '10vh', // Use VH for better vertical spacing
                    position: 'relative',
                    zIndex: 10,
                    transform: `scale(${scale}) translateY(${scrollY * 0.5}px)`,
                    filter: `blur(${blur}px)`,
                    opacity: opacity,
                    willChange: 'transform, filter, opacity',
                    transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.2s linear, opacity 0.2s linear'
                }}
            >
                <h1 className="text-5xl md:text-[7rem] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-200 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] tracking-tighter leading-tight font-[sans-serif]">
                    Cyber<span className="text-purple-500">AI</span> <br className="md:hidden" /> Hackfest 2.0
                </h1>
                <p className="text-lg md:text-3xl text-gray-300 tracking-[0.2em] font-light uppercase mt-2 mb-8">Innovation meets execution</p>
                <Timer />
            </div>

            {/* Spacer to allow scrolling */}
            <div className="h-screen"></div>
        </div>
    )
}

export default Home
