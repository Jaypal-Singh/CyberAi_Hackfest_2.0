import React from 'react';
import SpotlightCard from '../../../Components/SpotlightCard/SpotlightCard';
import './HackathonTracks.css';

const HackathonTracks = () => {
    const tracks = [
        {
            title: "Smart Vadodara: VMC Innovate",
            color: "#f97316", // Orange
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V21" /><path d="M9 10a1 1 0 0 0 1-1" /><path d="M14 10a1 1 0 0 0 1-1" /></svg>
            )
        },
        {
            title: "Cyber Security",
            color: "#a855f7", // Purple
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            )
        },
        {
            title: "Big Data",
            color: "#3b82f6", // Blue
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
            )
        },
        {
            title: "Cloud Computing",
            color: "#0ea5e9", // Sky
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-1.8-1.7-3.2-3.5-3.2-1.6 0-3 1.1-3.4 2.6H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h11.5c1.9 0 3.5-1.6 3.5-3.5z" /></svg>
            )
        },
        {
            title: "IoT ( Internet of Things )",
            color: "#22c55e", // Green
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>
            )
        },
        {
            title: "AI in Healthcare",
            color: "#ec4899", // Pink
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M12 12v3" /><path d="m10 15 5-2 5-2" /><path d="m4 11 5 2 5 2" /><path d="M12 15h0" /><path d="m14 20-2-3-2 3" /><path d="M12 17v5" /></svg>
            )
        },
        {
            title: "Blockchain",
            color: "#f59e0b", // Amber
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21c-2 0-3-1-3-4a16 16 0 0 1 6-6 16 16 0 0 1 6 6c0 3-1 4-3 4" /><path d="M10.5 7A14 14 0 0 0 8 13.5" /><path d="M13.5 7A14 14 0 0 1 16 13.5" /><path d="M7 16a3 3 0 1 1-6 0c0-1.5.5-2 1.5-2.5" /><path d="M23 16a3 3 0 1 0-6 0c0-1.5-.5-2-1.5-2.5" /><path d="M16 4a4 4 0 1 1-8 0" /></svg>
            )
        },
        {
            title: "Web 2.0",
            color: "#8b5cf6", // Violet
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            )
        }
    ];

    return (
        <section className="bg-black text-white py-16 px-8 relative z-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-purple-500 mb-2 uppercase tracking-wider">Hackathon Tracks</h2>
                <p className="text-gray-400 text-lg">Choose your track and build innovative solutions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {tracks.map((track, index) => (
                    <SpotlightCard
                        key={index}
                        className="custom-spotlight-card h-full"
                        spotlightColor={track.color}
                    >
                        <div className="p-8 flex flex-col items-start h-full w-full">
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                                style={{ backgroundColor: `${track.color}20`, color: track.color }}
                            >
                                {track.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{track.title}</h3>

                            <a href="#" className="mt-auto flex items-center text-sm font-medium" style={{ color: track.color }}>
                                View Problems
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </section>
    );
};

export default HackathonTracks;
