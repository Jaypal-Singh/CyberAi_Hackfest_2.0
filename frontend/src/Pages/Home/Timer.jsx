import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set the date we're counting down to (e.g., 2 weeks from now for demo)
        const countDownDate = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl w-24 h-24 md:w-32 md:h-32 shadow-[0_0_20px_rgba(168,85,247,0.15)] relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-500/30 transition-all duration-500"></div>

            <span className="text-3xl md:text-5xl font-bold text-white mb-1 z-10 font-mono">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs text-purple-200 uppercase tracking-widest z-10">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex items-center justify-center gap-3 md:gap-8 mt-4 md:mt-12 scale-75 md:scale-80 origin-top">
            <TimeUnit value={timeLeft.days} label="Days" />
            <span className="text-purple-400 text-4xl hidden md:block font-bold mb-4">:</span>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <span className="text-purple-400 text-4xl hidden md:block font-bold mb-4">:</span>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <span className="text-purple-400 text-4xl hidden md:block font-bold mb-4">:</span>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

export default Timer;
