import React, { useState } from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import isglogo from "../../assets/sponsors/isg.png";
import ietelogo from "../../assets/sponsors/iete.png";
import iiclogo from "../../assets/sponsors/iic.png";
import gujcostlogo from "../../assets/sponsors/gujcost.png";
import istelogo from "../../assets/sponsors/iste.png";
import recomailogo from "../../assets/sponsors/recomai.png";
import techdefencelabslogo from "../../assets/sponsors/techdefence.png";
import edutechlogo from "../../assets/sponsors/lnt.png";
import { GridBackground } from "../../Components/GridBackground/GridBackground";

// 1. ADDED 'url' TO EACH SPONSOR
const SPONSORS_DATA = [
  {
    id: 1,
    name: "isg",
    category: "PLATINUM",
    logo: isglogo,
    url: "https://isgindia.org/",
  },
  {
    id: 2,
    name: "IETE",
    category: "GOLD",
    logo: ietelogo,
    url: "https://www.iete.org",
  },
  {
    id: 3,
    name: "IIC",
    category: "GOLD",
    logo: iiclogo,
    url: "https://iic.mic.gov.in",
  },
  {
    id: 4,
    name: "GUJCOST",
    category: "SUPPORTING",
    logo: gujcostlogo,
    url: "https://gujcost.gujarat.gov.in",
  },
  {
    id: 5,
    name: "ISTE",
    category: "HACKATHON",
    logo: istelogo,
    url: "https://www.isteonline.in/",
  },
  {
    id: 6,
    name: "RECOMAI",
    category: "HACKATHON",
    logo: recomailogo,
    url: "https://www.recomai.one/",
  },
  {
    id: 7,
    name: "Tech Defence Labs",
    category: "HACKATHON",
    logo: techdefencelabslogo,
    url: "https://techdefencelabs.com/",
  },
  {
    id: 8,
    name: "Edutech",
    category: "HACKATHON",
    logo: edutechlogo,
    url: "https://lntedutech.com/",
  },
];

const SponsorCard = ({ sponsor }) => {
  return (
    // 2. WRAPPED IN <a> TAG FOR NAVIGATION
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center [perspective:1000px] cursor-pointer"
    >
      {/* HOVER ELEMENT: VISIT WEBSITE */}
      <div className="absolute -top-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:-translate-y-4 z-30">
        <div className="bg-black/90 border border-purple-500 text-purple-500 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.4)]">
          VISIT WEBSITE <span className="text-xs">↗</span>
        </div>
        <div className="absolute left-1/2 top-full w-[1px] h-20 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent -translate-x-1/2"></div>
      </div>

      {/* MAIN CARD BODY */}
      <div
        className="relative w-full aspect-[16/10] bg-[#0d0d15] border border-purple-500/10 rounded-xl flex items-center justify-center p-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                      group-hover:border-fuchsia-500/40 group-hover:shadow-[0_25px_60px_rgba(217,70,239,0.2)]
                      transform-gpu group-hover:[transform:rotateX(50deg)_translateY(10px)]"
      >
        <div
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
          style={{
            backgroundImage: "radial-gradient(#d946ef 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        ></div>

        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="relative z-10 max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-purple-500/20 blur-[30px] rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </a>
  );
};

const CyberSponsorPage = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const categories = ["ALL", "PLATINUM", "GOLD", "SUPPORTING", "HACKATHON"];

  const filtered =
    activeTab === "ALL"
      ? SPONSORS_DATA
      : SPONSORS_DATA.filter((s) => s.category === activeTab);

  return (
    <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-20 pb-40 px-6 overflow-hidden">
      <GridBackground className="absolute inset-0 z-0 h-full w-full" />

      <header className="relative z-10 flex flex-col items-center mb-16 space-y-4">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="Ingenium 2026"
            className="h-[190px] object-contain mb-2  rounded-xl p-2"
          />
        </div>
      </header>

      {/* Hero Title */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-8xl font-bold tracking-[0.4em] text-white whitespace-nowrap font-[oswald]">
          SPONSORS
        </h2>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-2 mb-32 bg-purple-950/20 backdrop-blur-xl border border-white/5 p-2 rounded-full shadow-2xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.25em] transition-all duration-500 uppercase ${activeTab === cat
                ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-[0_0_30px_rgba(192,38,211,0.4)] scale-105"
                : "text-white/40 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-24">
        <h3 className="text-3xl md:text-7xl font-black italic tracking-tighter uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600 font-[oswald]">
            {activeTab}
          </span>
          <span className="ml-4 text-white font-[oswald]">SPONSORS</span>
        </h3>
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-purple-500"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
      </div>

      {/* Grid */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-48">
        {filtered.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default CyberSponsorPage;
