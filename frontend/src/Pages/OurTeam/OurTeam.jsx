import React from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import "./OurTeam.css";
import psp from "../../assets/Team/psp.jpeg";
import pmudani from "../../assets/Team/pmudani.jpeg";
import pjpatel from "../../assets/Team/pjpatel.jpeg";

// Add your team member data here
const TEAM_DATA = {
  "Chief Patron": [
    {
      id: 1,
      name: "Shri Prakashbhai S. Patel",
      role: "PRESIDENT",
      image: psp,
    },
  ],
  Patron: [
    {
      id: 2,
      name: "Prof. (Dr.) Prafulkumar Udani",
      role: "Provost",
      image: pmudani,
    },
  ],
  Chairperson: [
    {
      id: 3,
      name: "Dr. P.J. Patel",
      role: "Principal, SPCE",
      image: pjpatel,
    },
  ],
  "CORE COMMITTEE": [
    {
      id: 101,
      name: "Dr. Ankur J. Goswami",
      role: "CORE MEMBER",
      image: "ankur_goswami",
    },
    {
      id: 102,
      name: "Dr. Jigar A. Soni",
      role: "CORE MEMBER",
      image: "jigar_soni",
    },
  ],
  "TECHNICAL COMMITTEE": [
    {
      id: 201,
      name: "Prof. Mehul S. Patel (IT)",
      role: "COORDINATOR",
      image: "mehul_patel",
    },
    {
      id: 202,
      name: "Prof. Jayesh M. Mewada (CE)",
      role: "COORDINATOR",
      image: "jayesh_mewada",
    },
    {
      id: 203,
      name: "Bhavik Prajapati (ICT)",
      role: "TECHNICAL MEMBER",
      image: "bhavik_prajapati",
    },
    {
      id: 204,
      name: "Heena Patel (IT)",
      role: "TECHNICAL MEMBER",
      image: "heena_patel",
    },
    {
      id: 205,
      name: "Jitendra Darji (MCA)",
      role: "TECHNICAL MEMBER",
      image: "jitendra_darji",
    },
    {
      id: 206,
      name: "Prey Patel (AIDS)",
      role: "TECHNICAL MEMBER",
      image: "prey_patel",
    },
    {
      id: 207,
      name: "Rajan Patel (CSE)",
      role: "TECHNICAL MEMBER",
      image: "rajan_patel",
    },
    {
      id: 208,
      name: "Ravi Patel (CE)",
      role: "TECHNICAL MEMBER",
      image: "ravi_patel",
    },
    {
      id: 209,
      name: "Jignesh Patel (CE)",
      role: "TECHNICAL MEMBER",
      image: "jignesh_patel",
    },
    {
      id: 210,
      name: "Shailesh Patel (IT)",
      role: "TECHNICAL MEMBER",
      image: "shailesh_patel",
    },
  ],
  "SPONSORSHIP & PUBLICITY": [
    {
      id: 301,
      name: "Prof. Dixit Chaudhary",
      role: "COORDINATOR",
      image: "dixit_chaudhary",
    },
    {
      id: 302,
      name: "Prof. Prince C. Patel",
      role: "COORDINATOR",
      image: "prince_patel",
    },
  ],
  "REGISTRATION & HOSPITALITY": [
    {
      id: 401,
      name: "Prof. Shilpa D. Sherasiya",
      role: "COORDINATOR",
      image: "shilpa_sherasiya",
    },
    {
      id: 402,
      name: "Prof. Rupal Chaudhary",
      role: "COORDINATOR",
      image: "rupal_chaudhary",
    },
  ],
  "DOCUMENTATION & RESOURCE": [
    {
      id: 501,
      name: "Prof. Ekta K. Patel",
      role: "COORDINATOR",
      image: "ekta_patel",
    },
  ],
  "JUDGING & EVALUATION": [
    {
      id: 601,
      name: "Mr. Jigar Gajjar",
      role: "COORDINATOR",
      image: "jigar_gajjar",
    },
  ],
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
    <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-20 pb-40 px-6 overflow-hidden">
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
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 w-full">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] max-w-[300px]"
                >
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
