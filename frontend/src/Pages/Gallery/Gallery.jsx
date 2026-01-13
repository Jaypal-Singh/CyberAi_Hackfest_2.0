import React from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import skdada from "../../assets/sponsors/spu.png";

import AdalajNiVav from "../../assets/Local_excursions/Adalaj_ni_vav.png";
import AithorGaneshTemple from "../../assets/Local_excursions/ganpati.jpg";
import DandiKutir from "../../assets/Local_excursions/Dandi_kutir_museum.png";
import ModheraSunTemple from "../../assets/Local_excursions/Modhera_Sun_Temple.png";
import PatanKaPatola from "../../assets/Local_excursions/patan.jpeg";
import SabarmatiAshram from "../../assets/Local_excursions/Sabarmati Ashram.png";
import SiddiSayedMosque from "../../assets/Local_excursions/Siddi_Sayed_Mosque.png";
import KirtiToren from "../../assets/Local_excursions/vadanagar.jpeg";

import dance from "../../assets/Gallery_IMG/dance.JPG";
import ebike from "../../assets/Gallery_IMG/ebike.JPG";
import event from "../../assets/Gallery_IMG/event.JPG";
import lab from "../../assets/Gallery_IMG/lab.JPG";
import navratri from "../../assets/Gallery_IMG/navratri.JPG";
import ramayan from "../../assets/Gallery_IMG/ramayan.JPG";
import medical from "../../assets/Gallery_IMG/Medical Photo-1.jpg";
import yellow from "../../assets/Gallery_IMG/yellow.JPG";
import sport from "../../assets/Gallery_IMG/sport.JPG";

// Empty array for your 9 images
const GALLERY_IMAGES = [
  { id: 1, src: dance, title: "7th Convocations" },
  { id: 2, src: ebike, title: "Play" },
  { id: 3, src: event, title: "Dummy" },
  { id: 4, src: lab, title: "Dummy" },
  { id: 5, src: navratri, title: "Dummy" },
  { id: 6, src: ramayan, title: "Dummy" },
  { id: 7, src: medical, title: "Dummy" },
  { id: 8, src: yellow, title: "Dummy" },
  { id: 9, src: sport, title: "Dummy" },
];

const Localexcur = [
  {
    id: 1,
    src: AdalajNiVav,
    title: "Adalaj Ni Vav",
    url: "https://en.wikipedia.org/wiki/Adalaj_Stepwell",
  },
  {
    id: 2,
    src: AithorGaneshTemple,
    title: "Aithor Ganesh Temple",
    url: "https://en.wikipedia.org/wiki/Aithor",
  },
  {
    id: 3,
    src: DandiKutir,
    title: "Dandi Kutir Museum",
    url: "https://en.wikipedia.org/wiki/Dandi_Kutir",
  },
  {
    id: 4,
    src: ModheraSunTemple,
    title: "Modhera Sun Temple",
    url: "https://en.wikipedia.org/wiki/Sun_Temple,_Modhera",
  },
  {
    id: 5,
    src: PatanKaPatola,
    title: "Patan Ka Patola",
    url: "https://en.wikipedia.org/wiki/Patola_sari",
  },
  {
    id: 6,
    src: SabarmatiAshram,
    title: "Sabarmati Ashram",
    url: "https://en.wikipedia.org/wiki/Sabarmati_Ashram",
  },
  {
    id: 7,
    src: SiddiSayedMosque,
    title: "Siddi Sayed Mosque",
    url: "https://en.wikipedia.org/wiki/Sidi_Saiyyed_Mosque",
  },
  {
    id: 8,
    src: KirtiToren,
    title: "Kirti Toran",
    url: "https://en.wikipedia.org/wiki/Kirti_Toran",
  },
];

// SponsorCard-style component for Local Excursions
const ExcursionCard = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center [perspective:1000px] cursor-pointer w-full"
    >
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform group-hover:-translate-y-2 z-30 pointer-events-none">
        <div className="bg-black/90 border border-purple-500 text-purple-500 px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.4)]">
          VIEW WIKIPEDIA <span className="text-xs">↗</span>
        </div>
        <div className="absolute left-1/2 top-full w-[1px] h-10 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent -translate-x-1/2"></div>
      </div>

      <div
        className="relative w-full aspect-[4/3] bg-[#0d0d15] border border-purple-500/10 rounded-xl flex items-center justify-center p-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                      group-hover:border-fuchsia-500/40 group-hover:shadow-[0_25px_60px_rgba(217,70,239,0.2)]
                      transform-gpu group-hover:[transform:rotateX(30deg)_translateY(-5px)] overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d946ef 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        ></div>

        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Title Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
            <h3 className="text-lg md:text-xl font-bold text-white text-center font-[oswald] tracking-wider drop-shadow-lg leading-tight uppercase relative z-10">
              {item.title}
            </h3>
          </div>
        </div>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-purple-500/20 blur-[30px] rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </a>
  );
};

const GalleryCard = ({ image }) => {
  return (
    <div className="group relative flex flex-col items-center">
      {/* PHOTO CONTAINER */}
      <div className="relative w-full aspect-[4/3] bg-[#0d0d15] border border-purple-500/30 rounded-xl overflow-hidden transition-all duration-500 group-hover:border-purple-500 shadow-[0_0_20px_rgba(217,70,239,0.1)]">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#d946ef 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />

        <img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Cyberpunk Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-transparent to-transparent opacity-60"></div>

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 w-full h-[2px] bg-purple-500/50 top-0 group-hover:animate-[scan_2s_linear_infinite] pointer-events-none"></div>

        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-all"></div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-20 pb-40 px-6 overflow-hidden">
      <GridBackground className="absolute inset-0 z-0 h-full w-full" />

      {/* Header Logo */}
      <header className="relative z-10 flex flex-col items-center mb-16 space-y-4">
        <div className="flex items-center gap-6">
          <img
            src={logo}
            alt="CyberAi hackfest 2.0"
            className="h-[190px] object-contain mb-2  rounded-xl p-2"
          />
        </div>
      </header>

      {/* Title Section */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-4xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase font-[oswald]">
          GALLERY
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {GALLERY_IMAGES.map((img) => (
          <GalleryCard key={img.id} image={img} />
        ))}
      </div>

      <div className="relative z-10 mb-20 text-center mt-30">
        <h2 className="text-4xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase font-[oswald]">
          Local Excursions
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Localexcur.map((img) => (
          <ExcursionCard key={img.id} item={img} />
        ))}
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default Gallery;
