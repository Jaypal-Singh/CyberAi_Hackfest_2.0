import React from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import "./OurTeam.css";
import skdada from "../../assets/sponsors/spu.png";

// Add your team member data here
const TEAM_DATA = {
  "CORE TEAM": [
    {
      id: 1,
      name: "SK DADA",
      role: "PRESIDENT",
      image: skdada,
    },
    {
      id: 2,
      name: "YASHVARDHAN SINGH",
      role: "VICE PRESIDENT",
      image: "/path-to-image/yash.jpg",
    },
    {
      id: 3,
      name: "SUMIT KUMAR",
      role: "SECRETARY",
      image: "/path-to-image/sumit.jpg",
    },
    {
      id: 4,
      name: "ADITYA SINGH",
      role: "TREASURER",
      image: "/path-to-image/aditya.jpg",
    },
  ],
  "TECHNICAL TEAM": [
    {
      id: 5,
      name: "ANIKET PRASAD",
      role: "TECHNICAL LEAD",
      image: "/path-to-image/aniket.jpg",
    },
    {
      id: 6,
      name: "HARSHITA SINGH",
      role: "WEB DEVELOPER",
      image: "/path-to-image/harshita.jpg",
    },
  ],
  "MANAGEMENT TEAM": [
    {
      id: 7,
      name: "RISHITA",
      role: "EVENT MANAGER",
      image: "/path-to-image/rishita.jpg",
    },
    {
      id: 8,
      name: "PRASHANT KUMAR",
      role: "COORDINATOR",
      image: "/path-to-image/prashant.jpg",
    },
  ],
  // Add other sections like MEDIA, PUBLIC RELATIONS, etc.
};

const TeamCard = ({ member }) => {
  return (
    <div className="group relative flex flex-col items-center [perspective:1000px]">
      {/* 1. UPPER BOX: PHOTO */}
      <div className="relative w-full aspect-square bg-[#0d0d15] border border-purple-500/30 rounded-t-2xl overflow-hidden transition-all duration-500 group-hover:border-purple-500 shadow-[0_0_20px_rgba(217,70,239,0.1)]">
        {/* Internal Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#d946ef 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />

        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 w-full h-[1px] bg-purple-500/40 top-0 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>
      </div>

      {/* 2. THE CONNECTOR (Small notch between boxes) */}
      <div className="w-full h-[2px] bg-purple-500 shadow-[0_0_10px_#d946ef]"></div>

      {/* 3. LOWER BOX: NAME & ROLE */}
      <div className="relative w-full py-4 px-6 bg-[#0a0a10] border-x border-b border-purple-500/30 rounded-b-2xl transition-all duration-500 group-hover:bg-fuchsia-900/10 group-hover:border-purple-500">
        {/* Accent Corner (Top Left Small Triangle) */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[10px] border-t-purple-500 border-r-[10px] border-r-transparent"></div>

        <div className="text-center">
          <p className="text-purple-500 text-[10px] font-black tracking-[0.3em] uppercase mb-1">
            {member.role}
          </p>
          <h3 className="text-xl font-bold tracking-wider text-white uppercase italic">
            {member.name}
          </h3>
        </div>

        {/* Small Bottom Cyan "Power" Lights */}
      </div>

      {/* 4. FLOOR GLOW */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-fuchsia-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-10 pb-40 px-6 overflow-hidden">
      <GridBackground className="absolute inset-0 z-0 h-full w-full" />

      {/* Header Logo */}
      <header className="relative z-10 flex flex-col items-center mb-16 space-y-4">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Ingenium 2026"
            className="h-[190px] object-contain mb-2  rounded-xl p-2"
          />
        </div>
      </header>

      {/* Main Title */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase font-[oswald]">
          MEET OUR <span className="text-purple-600">TEAM</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Sectioned Grid */}
      <div className="relative z-10 w-full max-w-7xl space-y-32">
        {Object.entries(TEAM_DATA).map(([sectionTitle, members]) => (
          <div key={sectionTitle} className="flex flex-col items-center">
            {/* Section Sub-heading */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-4xl font-black tracking-widest text-purple-500 uppercase italic">
                // {sectionTitle}
              </h3>
              <div className="w-full h-1 bg-purple-500/20 mt-2"></div>
            </div>

            {/* Grid for this specific section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 w-full">
              {members.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
