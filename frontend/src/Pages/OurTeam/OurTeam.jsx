import React from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import "./OurTeam.css";
import psp from "../../assets/Team/psp.jpeg";
import pmudani from "../../assets/Team/Udani Sir.jpg";
import pjpatel from "../../assets/Team/pjpatelsirone.jpg";
import dummy from "../../assets/Team/dummyes.png";
import pspone from "../../assets/Team/pspthree.png";

const TEAM_DATA = {
  "Chief Patron": [
    {
      id: 1,
      name: "Shri Prakashbhai S. Patel",
      role: "PRESIDENT",
      image: pspone,
    },
  ],
  Patron: [
    {
      id: 2,
      name: "Prof. (Dr.) P. M. Udani",
      role: "Provost",
      image: pmudani,
    },
  ],
  Convener: [
    { id: 3, name: "Dr. P. J. Patel", role: "Principal, SPCE", image: pjpatel },
  ],
  "Co-Convener": [
    {
      id: 4,
      name: "Mr. Sunny Vaghela",
      role: "Founder CEO Techdefence Labs",
      image: dummy,
    },
  ],
  "Event Coordinators": [
    { id: 101, name: "Dr. Ankur J. Goswami", role: "Coordinator" },
    { id: 102, name: "Dr. Jigar A. Soni", role: "Co-Coordinator" },
  ],
  "organising committee": [
    { id: 201, name: "Prof. Mehul S. Patel", role: "Technical COORDINATOR" },
    { id: 202, name: "Prof. Jayesh M. Mevada", role: "Technical COORDINATOR" },
    {
      id: 203,
      name: "Prof. Rupal Chaudhary",
      role: "Registration COORDINATOR",
    },
    {
      id: 204,
      name: "Prof. Shilpa D. Sherasiya",
      role: "Registration  COORDINATOR",
    },
    {
      id: 203,
      name: "Prof. Rashik Patel",
      role: "Hospitality COORDINATOR",
    },
    {
      id: 204,
      name: "Dr. Manish Patel",
      role: "Hospitality COORDINATOR",
    },
    {
      id: 205,
      name: "Prof. Dixit Chaudhary",
      role: "Sponsorship & Publicity COORDINATOR",
    },
    {
      id: 206,
      name: "Prof. Prince C. Patel",
      role: "Sponsorship & Publicity COORDINATOR",
    },
    {
      id: 207,
      name: "Prof. Ekta V. Patel",
      role: "Documentation & Resource Management COORDINATOR",
    },
  ],
  "advisory committee": [
    {
      id: 301,
      name: "Dr. Parimal Trivedi",
      role: "Registrar",
      image: dummy,
    },
    {
      id: 301,
      name: "Dr. Sanjeev Kumar Punia",
      role: "HoD CE/IT",
      image: dummy,
    },
    {
      id: 301,
      name: "Dr. Manish M. Patel",
      role: "HoD AI&DS",
      image: dummy,
    },
    {
      id: 301,
      name: "Dr. K. J. Modi",
      role: "Prof CE/IT",
      image: dummy,
    },
    {
      id: 301,
      name: "Dr. Tulsidas Nakrani",
      role: "HoD MCA",
      image: dummy,
    },
    {
      id: 301,
      name: "Dr. P. S. Patel",
      role: "HoD CE/IT(Polytechnic)",
      image: dummy,
    },
  ],
  "JUDGING & EVALUATION": [
    {
      id: 301,
      name: "Mr. Jigar Gajjar",
      role: "JUDGING & EVALUATION COORDINATOR",
      image: dummy,
    },
  ],
};
//kjmodi,
// 1. STANDARD PHOTO CARD
const TeamCard = ({ member }) => (
  <div className="group relative flex flex-col items-center [perspective:1000px]">
    <div className="relative w-full aspect-square bg-[#0d0d15] border border-purple-500/30 rounded-t-2xl overflow-hidden transition-all duration-500 group-hover:border-purple-500 shadow-[0_0_20px_rgba(217,70,239,0.1)]">
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
      <div className="absolute inset-0 w-full h-[1px] bg-purple-500/40 top-0 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>
    </div>
    <div className="w-full h-[2px] bg-purple-500 shadow-[0_0_10px_#d946ef]"></div>
    <div className="relative w-full py-4  bg-[#0a0a10] border-x border-b border-purple-500/30 rounded-b-2xl transition-all duration-500 group-hover:bg-fuchsia-900/10 group-hover:border-purple-500">
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[10px] border-t-purple-500 border-r-[10px] border-r-transparent"></div>
      <div className="text-center">
        <p className="text-purple-500 text-[10px] font-black tracking-[0.3em] uppercase mb-1">
          {member.role}
        </p>
        <h3 className="text-xl font-bold tracking-wider text-white uppercase italic">
          {member.name}
        </h3>
      </div>
    </div>
  </div>
);

// 2. TEXT-ONLY CARD (As per your image)
const TextTeamCard = ({ member }) => (
  <div className="group relative w-full p-[1px] bg-gradient-to-b from-purple-500/40 to-transparent rounded-xl transition-all duration-300">
    <div className="bg-[#0a0a10] p-6 rounded-xl flex flex-col items-center justify-center text-center h-full border border-white/5 group-hover:border-purple-500/50 transition-all">
      {/* Top Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-purple-500 shadow-[0_0_15px_#d946ef] opacity-70 group-hover:opacity-100"></div>

      <p className="text-purple-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-2">
        {member.role}
      </p>
      <h3 className="text-lg font-bold tracking-tight text-white uppercase italic group-hover:text-purple-200 transition-colors">
        {member.name}
      </h3>

      {/* Small corner decorative dot */}
      <div className="absolute bottom-2 right-2 w-1 h-1 bg-purple-500/20 group-hover:bg-purple-500/60 rounded-full transition-colors"></div>
    </div>
  </div>
);

const OurTeam = () => {
  const LAYOUT_STRUCTURE = [
    { titles: ["Chief Patron", "Patron"] },
    { titles: ["Convener", "Co-Convener"] },
    { titles: ["Event Coordinators"] },
    { titles: ["organising committee"] },
    { titles: ["advisory committee"] },
    { titles: ["JUDGING & EVALUATION"] },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-20 pb-40 px-6 overflow-hidden">
      <GridBackground className="absolute inset-0 z-0 h-full w-full" />

      <header className="relative z-10 flex flex-col items-center mb-16">
        <img
          src={logo}
          alt="Ingenium 2026"
          className="h-[180px] object-contain rounded-xl"
        />
      </header>

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

      <div className="relative z-10 w-full max-w-7xl space-y-32">
        {LAYOUT_STRUCTURE.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-x-12 gap-y-16"
          >
            {row.titles.map((sectionTitle) => {
              const isTextOnly =
                sectionTitle === "organising committee" ||
                sectionTitle === "Event Coordinators" ||
                sectionTitle === "advisory committee";

              return (
                <div
                  key={sectionTitle}
                  className={`flex flex-col items-center flex-1 min-w-[300px]`}
                >
                  <div className="mb-12 text-center w-full">
                    <h3 className="text-2xl md:text-3xl font-black tracking-widest text-purple-500 uppercase italic">
                      {sectionTitle}
                    </h3>
                    <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mx-auto mt-2"></div>
                  </div>

                  {/* Dynamic Grid Layout */}
                  <div className={`flex flex-wrap justify-center gap-8 w-full`}>
                    {TEAM_DATA[sectionTitle]?.map((member) => (
                      <div
                        key={member.id}
                        className={
                          isTextOnly
                            ? /* Changes: Basis set to 33.33% for 3 cards per row, and max-width increased to 400px */
                              "w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]"
                            : "w-full max-w-[280px]"
                        }
                      >
                        {isTextOnly ? (
                          <TextTeamCard member={member} />
                        ) : (
                          <TeamCard member={member} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
