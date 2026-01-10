import logo from "../../assets/hakathon_logo/logo.jpeg";
import { GridBackground } from "../../Components/GridBackground/GridBackground";
import { Timeline as AceternityTimeline } from "../../Components/ui/timeline";

const Timeline = () => {
  const data = [
    {
      title: "1st Dec 2025",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-2">
            Registration Opens
          </h4>
          <p className="text-purple-400 font-semibold mb-4">12:00 PM IST</p>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            The portals open! Students from across the nation can start
            registering their teams. Early bird slots are available.
          </p>
          <div className="bg-neutral-900 rounded-lg p-4 border border-neutral-800">
            <ul className="list-disc list-inside text-neutral-400 text-sm space-y-2">
              <li>Team Size: 3-5 Members</li>
              <li>Free Registration</li>
              <li>Idea Submission Required</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "10th Jan 2026",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-2">
            Registration Closes
          </h4>
          <p className="text-purple-400 font-semibold mb-4">11:59 PM IST</p>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Last chance to join! Registration portals close. Shortlisting
            process begins immediately after.
          </p>
        </div>
      ),
    },
    {
      title: "17th Jan - 8:00 AM",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-2">
            Check-in & Verification
          </h4>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Selected teams arrive at SPU Campus. ID check, swag distribution,
            and getting settled.
          </p>
        </div>
      ),
    },
    {
      title: "17th Jan - 9:30 AM",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-2">
            Kickoff & Problem Reveal
          </h4>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            The event officially begins. Problem statements are released.
            Hacking starts at 11:00 AM!
          </p>
        </div>
      ),
    },
    {
      title: "18th Jan - 4:00 PM",
      content: (
        <div>
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-2">
            Grand Finale
          </h4>
          <p className="text-neutral-300 text-sm md:text-base font-normal mb-8">
            Final presentations and results.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full relative bg-black">
      <GridBackground className="absolute inset-0 z-0 h-full w-full" />
      <div className="relative z-10 pt-20">
        <div className="flex flex-col items-center justify-center mb-10">
          <img
            src={logo}
            alt="Ingenium 2026"
            className="h-[190px] object-contain mb-2  rounded-xl p-2"
          />
          <div className="relative">
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-[0.2em] font-[oswald] uppercase">
              TIME<span className="text-purple-600">LINE</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              <div className="w-2 h-2 rotate-45 bg-purple-500 shadow-[0_0_15px_#d946ef]"></div>
              <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
            </div>
          </div>
        </div>
        <AceternityTimeline data={data} />
      </div>
    </div>
  );
};

export default Timeline;
