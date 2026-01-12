import React from "react";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import { CheckCircle, Gift, Award, ArrowRight } from "lucide-react";

const Register = () => {
    return (
        <div className="relative min-h-screen w-full bg-[#030308] text-white flex flex-col items-center pt-32 pb-20 px-6 overflow-hidden">
            <GridBackground className="absolute inset-0 z-0 h-full w-full opacity-60" />

            {/* Hero Section */}
            <div className="relative z-10 text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
                <h1 className="text-4xl md:text-7xl font-bold tracking-wider text-white uppercase font-[oswald] mb-6">
                    REGISTRATION <span className="text-purple-500">PROCESS</span>
                </h1>
                <p className="text-lg md:text-xl md:m-auto text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                    Join the ultimate hackathon experience! Follow the guidelines below to secure your spot and unlock exclusive perks.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                    <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
                    <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
                </div>
            </div>

            {/* Guidelines Section */}
            <div className="relative z-10 w-full max-w-6xl mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
                    <span className="text-purple-500">#</span> Guidelines
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Steps Card */}
                    <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 text-center">
                        <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                            <span className="bg-purple-600/20 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center text-sm border border-purple-500/30">01</span>
                            Team Formation
                        </h3>
                        <ul className="space-y-4 text-neutral-300 inline-block text-left">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                <span>Team size must be between 3 to 5 members.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                <span>Ideally, members should have diverse skills (dev, design, pitch).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                <span>Inter-college teams are allowed.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Process Card */}
                    <div className="bg-neutral-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 text-center">
                        <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
                            <span className="bg-purple-600/20 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center text-sm border border-purple-500/30">02</span>
                            Submission Process
                        </h3>
                        <ul className="space-y-4 text-neutral-300 inline-block text-left">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                <span>Register via the Unstop platform link below.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                <span>Submit your idea/PPT during the initial round.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                                <span>Shortlisted teams will proceed to the offline finale.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Perks & Rewards Section */}
            <div className="relative z-10 w-full max-w-6xl mb-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
                    Perks & <span className="text-purple-500">Rewards</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Goodies Card */}
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-80">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
                            {/* Place holder for Goodies Image */}
                            <Gift className="w-32 h-32 text-purple-600 blur-sm" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="bg-purple-600 p-3 rounded-xl w-fit mb-4 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                                <Gift className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Exciting Goodies</h3>
                            {/* <p className="text-neutral-400">Exclusive T-shirts, stickers, and swag kits for all finalists attending the offline event.</p> */}
                        </div>
                    </div>

                    {/* Certificate Card */}
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-80">
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 transition-opacity">
                            {/* Place holder for Certificate Image */}
                            <Award className="w-32 h-32 text-purple-600 blur-sm" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="bg-purple-600 p-3 rounded-xl w-fit mb-4 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Certificates of Participation</h3>
                            {/* <p className="text-neutral-400">Official digital and physical certificates for all participants, validated by our industry partners.</p> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 w-full max-w-4xl bg-gradient-to-r from-purple-900/20 to-neutral-900/40 border border-purple-500/30 p-10 rounded-3xl text-center backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Innovate?</h2>
                <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Don't miss the chance to be part of Gujarat's biggest hackathon. Register your team now on Unstop.</p>

                <a
                    href="https://unstop.com/p/cyberai-hackfest-20-sankalchand-patel-college-of-engineering-spce-visnagar-gujarat-1621737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-black hover:bg-purple-50 hover:text-purple-700 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                    Click to Register
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        </div>
    );
};

export default Register;
