import React from "react";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import skdada from "../../assets/sponsors/spu.png";


import AdalajNiVav from "../../assets/Local_excursions/Adalaj_ni_vav.png";
import AithorGaneshTemple from "../../assets/Local_excursions/Aithor_ganesh_temple.png";
import DandiKutir from "../../assets/Local_excursions/Dandi_kutir_museum.png";
import ModheraSunTemple from "../../assets/Local_excursions/Modhera_Sun_Temple.png";
import PatanKaPatola from "../../assets/Local_excursions/Patan_ka_patola.png";
import SabarmatiAshram from "../../assets/Local_excursions/Sabarmati Ashram.png";
import SiddiSayedMosque from "../../assets/Local_excursions/Siddi_Sayed_Mosque.png";
import KirtiToren from "../../assets/Local_excursions/Kirti_toren.png";

import Convocations from "../../assets/Gallery_IMG/7th_Convocations.png";
import play from "../../assets/Gallery_IMG/play.png";
import Dummy from "../../assets/Gallery_IMG/dummy.png";



// Empty array for your 9 images
const GALLERY_IMAGES = [
  { id: 1, src: Convocations, title: "7th Convocations" },
  { id: 2, src: play, title: "Play" },
  { id: 3, src: Dummy, title: "Dummy" },
  { id: 4, src: Dummy, title: "Dummy" },
  { id: 5, src: Dummy, title: "Dummy" },
  { id: 6, src: Dummy, title: "Dummy" },
  { id: 7, src: Dummy, title: "Dummy" },
  { id: 8, src: Dummy, title: "Dummy" },
  { id: 9, src: Dummy, title: "Dummy" },
];


const Localexcur = [
  { id: 1, src: AdalajNiVav, title: "Adalaj Ni Vav" },
  { id: 2, src: AithorGaneshTemple, title: "Aithor Ganesh Temple" },
  { id: 3, src: DandiKutir, title: "Dandi Kutir Museum" },
  { id: 4, src: ModheraSunTemple, title: "Modhera Sun Temple" },
  { id: 5, src: PatanKaPatola, title: "Patan Ka Patola" },
  { id: 6, src: SabarmatiAshram, title: "Sabarmati Ashram" },
  { id: 7, src: SiddiSayedMosque, title: "Siddi Sayed Mosque" },
  { id: 8, src: KirtiToren, title: "Kirti Toren" },

];

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
            alt="Ingenium 2026"
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
          <GalleryCard key={img.id} image={img} />
        ))}
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default Gallery;
