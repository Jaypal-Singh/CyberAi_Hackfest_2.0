import React from 'react';
import videoBg from '../../../assets/Campus_Tour/SPU_Campus_Tour_1080P.mp4';
import Campus_img_1 from '../../../assets/Campus_Tour/Campus_img1.png';
import Campus_img_2 from '../../../assets/Campus_Tour/Campus_img2.png';
import Campus_img_3 from '../../../assets/Campus_Tour/Campus_img3.png';
import Campus_img_4 from '../../../assets/Campus_Tour/Campus_img4.png';



const BirdEyeView = () => {
    return (
        <div className="relative w-full h-[80vh] md:h-screen bg-black overflow-hidden flex flex-col justify-end">

            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <video autoPlay loop muted className="w-[95%] md:w-[90%] h-[80%] md:h-[90%] object-cover rounded-2xl md:rounded-3xl shadow-2xl">
                    <source src={videoBg} type="video/mp4" />
                </video>

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black via-transparent to-black/30"></div>
            </div>

            {/* Top Right "Virtual Campus Tour" Button */}
            <div className="absolute top-20 right-4 md:top-10 md:right-18 z-20">
                <a href="https://spu.ac.in/VirtualTour/index.htm" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full flex items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all font-medium text-xs md:text-sm uppercase tracking-wide shadow-lg group">
                        Bird Eye View
                        <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform duration-300">↗</span>
                    </button>
                </a>
            </div>

            {/* Center Pin Overlay (Optional/Decorative) */}


            {/* Bottom Cards Section */}
            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 pb-2 md:pb-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
                    {[
                        { id: 1, src: Campus_img_1, title: 'Main Campus' },
                        { id: 2, src: Campus_img_2, title: 'Nootan Medical Collage' },
                        { id: 3, src: Campus_img_3, title: 'SPCE Campus' },
                        { id: 4, src: Campus_img_4, title: 'SPU Campus' }
                    ].map((item) => (
                        <div key={item.id} className="group relative aspect-video rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-purple-500/50 transition-all shadow-2xl bg-gray-900">
                            {/* Image Content */}
                            <div
                                className="w-full h-full bg-gray-800/50 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.src})` }}
                            >
                                {/* Overlay to darken image */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                            </div>

                            {/* Title Label */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                <p className="text-white text-xs md:text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BirdEyeView;
