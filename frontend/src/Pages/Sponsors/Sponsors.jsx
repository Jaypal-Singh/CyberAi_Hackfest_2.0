// import React, { useState } from "react";
// import logo from "../../Assests/logo.jpeg";
// import isglogo from "../../Assests/isglogo.png";
// import ietelogo from "../../Assests/IETE-Logo1.jpg";
// import iiclogo from "../../Assests/iiclogo.jpeg";
// import gujcostlogo from "../../Assests/GUJCOST_LOGO.jpg";
// import istelogo from "../../Assests/istelogo.png";
// import recomailogo from "../../Assests/recomailogo.jpg";
// import techdefencelabslogo from "../../Assests/techdefencelabslogo.png";
// import edutechlogo from "../../Assests/edutechlogo.png";
// import SponsorsGrid from "./SponsorsGrid";

// // Sponsor data with high-quality placeholder logos
// const SPONSORS_DATA = [
//   {
//     id: 1,
//     name: "isg",
//     category: "PLATINUM",
//     logo: isglogo,
//   },
//   {
//     id: 2,
//     name: "ietelogo",
//     category: "GOLD",
//     logo: ietelogo,
//   },
//   {
//     id: 3,
//     name: "iiclogo",
//     category: "GOLD",
//     logo: iiclogo,
//   },
//   {
//     id: 4,
//     name: "gujcostlogo",
//     category: "SUPPORTING",
//     logo: gujcostlogo,
//   },
//   {
//     id: 5,
//     name: "istelogo",
//     category: "HACKATHON",
//     logo: istelogo,
//   },
//   {
//     id: 6,
//     name: "recomailogo",
//     category: "HACKATHON",
//     logo: recomailogo,
//   },
//   {
//     id: 7,
//     name: "techdefencelabslogo",
//     category: "HACKATHON",
//     logo: techdefencelabslogo,
//   },
//   {
//     id: 8,
//     name: "edutechlogo",
//     category: "HACKATHON",
//     logo: edutechlogo,
//   },
// ];

// const SponsorCard = ({ sponsor }) => {
//   return (
//     <div className="group relative flex flex-col items-center [perspective:1000px]">
//       {/* 1. HOVER ELEMENT: VISIT WEBSITE */}
//       <div className="absolute -top-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:-translate-y-4 z-30">
//         <button className="bg-black/90 border border-fuchsia-500 text-fuchsia-500 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.4)]">
//           VISIT WEBSITE <span className="text-xs">↗</span>
//         </button>
//         <div className="absolute left-1/2 top-full w-[1px] h-20 bg-gradient-to-b from-fuchsia-500 via-purple-500/50 to-transparent -translate-x-1/2"></div>
//       </div>

//       {/* 2. MAIN CARD BODY - 50deg Tilt Effect */}
//       <div
//         className="relative w-full aspect-[16/10] bg-[#0d0d15] border border-purple-500/10 rounded-xl flex items-center justify-center p-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
//                       group-hover:border-fuchsia-500/40 group-hover:shadow-[0_25px_60px_rgba(217,70,239,0.2)]
//                       transform-gpu group-hover:[transform:rotateX(50deg)_translateY(10px)]"
//       >
//         <div
//           className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
//           style={{
//             backgroundImage: "radial-gradient(#d946ef 1px, transparent 1px)",
//             backgroundSize: "10px 10px",
//           }}
//         ></div>

//         <img
//           src={sponsor.logo}
//           alt={sponsor.name}
//           className="relative z-10 max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
//         />

//         <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-fuchsia-500/20 blur-[30px] rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//       </div>
//     </div>
//   );
// };

// const CyberSponsorPage = () => {
//   const [activeTab, setActiveTab] = useState("ALL");
//   const categories = ["ALL", "PLATINUM", "GOLD", "SUPPORTING", "HACKATHON"];

//   const filtered =
//     activeTab === "ALL"
//       ? SPONSORS_DATA
//       : SPONSORS_DATA.filter((s) => s.category === activeTab);

//   return (
//     <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-20 pb-40 px-6 overflow-hidden">
//       {/* Background Layer */}
//       <SponsorsGrid />

//       {/* Header with Your Logo */}
//       <header className="relative z-10 flex flex-col items-center mb-16 space-y-4">
//         <div className="flex items-center gap-6">
//           {/* Logo Container */}
//           <div className="relative group">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-50 h-50 object-contain relative z-10"
//             />
//             {/* Soft Glow behind your logo */}
//             <div className="absolute inset-0 bg-fuchsia-500/20 blur-xl rounded-full scale-110 group-hover:bg-fuchsia-500/40 transition-all"></div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Title */}
//       <div className="relative z-10 mb-20">
//         <h2 className="text-7xl md:text-[10rem] font-black tracking-[0.15em] text-fuchsia-900/10 uppercase select-none text-center">
//           SPONSORS
//         </h2>
//         <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl font-bold tracking-[0.4em] text-white whitespace-nowrap">
//           SPONSORS
//         </h2>
//       </div>

//       {/* Category Navigation */}
//       <nav className="relative z-10 flex flex-wrap justify-center gap-2 mb-32 bg-purple-950/20 backdrop-blur-xl border border-white/5 p-2 rounded-full shadow-2xl">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveTab(cat)}
//             className={`px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.25em] transition-all duration-500 uppercase ${
//               activeTab === cat
//                 ? "bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white shadow-[0_0_30px_rgba(192,38,211,0.4)] scale-105"
//                 : "text-white/40 hover:text-white"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </nav>

//       {/* Section Title */}
//       <div className="relative z-10 text-center mb-24">
//         <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase">
//           <span className="text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-400 to-purple-600">
//             {activeTab}
//           </span>
//           <span className="ml-4 text-white">SPONSORS</span>
//         </h3>
//         <div className="mt-8 flex justify-center items-center gap-4">
//           <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-fuchsia-500"></div>
//           <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#d946ef]"></div>
//           <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
//         </div>
//       </div>

//       {/* Sponsor Grid */}
//       <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-48">
//         {filtered.map((sponsor) => (
//           <SponsorCard key={sponsor.id} sponsor={sponsor} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CyberSponsorPage;

import React, { useState } from "react";
import logo from "../../Assests/logo.jpeg";
import isglogo from "../../Assests/isglogo.png";
import ietelogo from "../../Assests/IETE-Logo1.jpg";
import iiclogo from "../../Assests/iiclogo.jpeg";
import gujcostlogo from "../../Assests/GUJCOST_LOGO.jpg";
import istelogo from "../../Assests/istelogo.png";
import recomailogo from "../../Assests/recomailogo.jpg";
import techdefencelabslogo from "../../Assests/techdefencelabslogo.png";
import edutechlogo from "../../Assests/edutechlogo.png";
import SponsorsGrid from "./SponsorsGrid";

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
        <div className="bg-black/90 border border-fuchsia-500 text-fuchsia-500 px-5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.4)]">
          VISIT WEBSITE <span className="text-xs">↗</span>
        </div>
        <div className="absolute left-1/2 top-full w-[1px] h-20 bg-gradient-to-b from-fuchsia-500 via-purple-500/50 to-transparent -translate-x-1/2"></div>
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

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-fuchsia-500/20 blur-[30px] rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
      <SponsorsGrid />

      <header className="relative z-10 flex flex-col items-center mb-16 space-y-4">
        <div className="flex items-center gap-6">
          <div className="relative group">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-40 object-contain relative z-10"
            />
            <div className="absolute inset-0 bg-fuchsia-500/20 blur-xl rounded-full scale-110 group-hover:bg-fuchsia-500/40 transition-all"></div>
          </div>
        </div>
      </header>

      {/* Hero Title */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-7xl md:text-[10rem] font-black tracking-[0.15em] text-fuchsia-900/10 uppercase select-none">
          SPONSORS
        </h2>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl font-bold tracking-[0.4em] text-white whitespace-nowrap">
          SPONSORS
        </h2>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-2 mb-32 bg-purple-950/20 backdrop-blur-xl border border-white/5 p-2 rounded-full shadow-2xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-2.5 rounded-full text-[10px] font-black tracking-[0.25em] transition-all duration-500 uppercase ${
              activeTab === cat
                ? "bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white shadow-[0_0_30px_rgba(192,38,211,0.4)] scale-105"
                : "text-white/40 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Section Title */}
      <div className="relative z-10 text-center mb-24">
        <h3 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-fuchsia-400 to-purple-600">
            {activeTab}
          </span>
          <span className="ml-4 text-white">SPONSORS</span>
        </h3>
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-fuchsia-500"></div>
          <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-fuchsia-500"></div>
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
