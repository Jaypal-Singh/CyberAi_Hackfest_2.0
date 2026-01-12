import React from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import ietelogo from "../../assets/sponsors/iete.png";
import iiclogo from "../../assets/sponsors/iic.png";
import gujcostlogo from "../../assets/sponsors/gujcost.png";
import istelogo from "../../assets/sponsors/iste.png";
import recomailogo from "../../assets/sponsors/recomeone.png";
import techdefencelabslogo from "../../assets/sponsors/techdefence.png";
import edutechlogo from "../../assets/sponsors/lnt.png";
import isogone from "../../assets/sponsors/isogone.png";
import spodummy from "../../assets/sponsors/spodummy.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";

const SPONSORS_DATA = [
  { id: 1, name: "isg", logo: isogone, url: "https://isgindia.org/" },
  { id: 2, name: "IETE", logo: ietelogo, url: "https://www.iete.org" },
  { id: 3, name: "IIC", logo: iiclogo, url: "https://iic.mic.gov.in" },
  {
    id: 4,
    name: "GUJCOST",
    logo: gujcostlogo,
    url: "https://gujcost.gujarat.gov.in",
  },
  { id: 5, name: "ISTE", logo: istelogo, url: "https://www.isteonline.in/" },
  {
    id: 6,
    name: "RECOMAI",
    logo: recomailogo,
    url: "https://www.recomai.one/",
  },
  {
    id: 7,
    name: "Tech Defence Labs",
    logo: techdefencelabslogo,
    url: "https://techdefencelabs.com/",
  },
  { id: 8, name: "Edutech", logo: edutechlogo, url: "https://lntedutech.com/" },
];

// Added tier names to the special cards
const SPECIAL_CARDS_DATA = [
  {
    id: 101,
    name: "Special Sponsor 1",
    logo: spodummy,
    url: "#",
    tier: "PLATINUM",
  },
  {
    id: 102,
    name: "Special Sponsor 2",
    logo: spodummy,
    url: "#",
    tier: "GOLD",
  },
  {
    id: 103,
    name: "Special Sponsor 3",
    logo: spodummy,
    url: "#",
    tier: "SILVER",
  },
];

const SponsorCard = ({ sponsor }) => {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center [perspective:1000px] cursor-pointer w-full"
    >
      <div className="absolute -top-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:-translate-y-4 z-30">
        <div className="bg-black/90 border border-purple-500 text-purple-500 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.4)]">
          VISIT WEBSITE <span className="text-xs">↗</span>
        </div>
        <div className="absolute left-1/2 top-full w-[1px] h-20 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent -translate-x-1/2"></div>
      </div>

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
  return (
    <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-32 pb-40 px-6 overflow-hidden">
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

      {/* --- Section 1: Sponsors Header --- */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase font-[oswald]">
          SPONSORS
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* NEW: Platinum, Gold, Silver Cards Section */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-40">
        {SPECIAL_CARDS_DATA.map((sponsor) => (
          <div key={sponsor.id} className="flex flex-col items-center gap-8">
            <h3 className="text-2xl font-bold tracking-[0.5em] text-purple-400 font-[oswald] uppercase">
              {sponsor.tier}
            </h3>
            <SponsorCard sponsor={sponsor} />
          </div>
        ))}
      </div>

      {/* --- Section 2: Partners Header --- */}
      <div className="relative z-10 mb-32 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase font-[oswald]">
          OUR <span className="text-purple-600">PARTNERS</span>
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Grid displaying all partners */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
        {SPONSORS_DATA.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default CyberSponsorPage;
