import React from "react";
import { Link } from "react-router-dom";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import "./HackathonTracks.css";

const HackathonTracks = () => {
  const tracks = [
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      color: "#ec4899", // Pink
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <path d="M12 12v3" />
          <path d="m10 15 5-2 5-2" />
          <path d="m4 11 5 2 5 2" />
          <path d="M12 15h0" />
          <path d="m14 20-2-3-2 3" />
          <path d="M12 17v5" />
        </svg>
      ),
    },
    {
      id: "cyber-security",
      title: "Cyber Security & Digital Forensics",
      color: "#a855f7", // Purple
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: "smart-technologies",
      title: "Smart & Sustainable Technologies",
      color: "#f97316", // Orange
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4 8 4v14" />
          <path d="M17 21v-8.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V21" />
          <path d="M9 10a1 1 0 0 0 1-1" />
          <path d="M14 10a1 1 0 0 0 1-1" />
        </svg>
      ),
    },
    {
      id: "industry-4-0",
      title: "Industry 4.0 & Emerging Technologies",
      color: "#8b5cf6", // Violet
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8 relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-500 mb-2 uppercase tracking-wider">
          Hackathon Tracks
        </h2>
        <p className="text-gray-400 text-lg">
          Choose your track and build innovative solutions
        </p>
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
                style={{
                  backgroundColor: `${track.color}20`,
                  color: track.color,
                }}
              >
                {track.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {track.title}
              </h3>

              <Link
                to={`/tracks/${track.id}`}
                className="mt-auto flex items-center text-sm font-medium"
                style={{ color: track.color }}
              >
                View Problems
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default HackathonTracks;
