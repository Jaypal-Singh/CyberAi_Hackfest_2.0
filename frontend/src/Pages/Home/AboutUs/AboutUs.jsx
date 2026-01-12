import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";
import logo from "../../../assets/hakathon_logo/logo.jpeg";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (easeOutExpo)
      const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

      setCount(Math.floor(ease(percentage) * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
};

const AboutUs = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <div className="w-full text-center mb-10">
          <h2 className="highlights-title">About Us</h2>
        </div>

        {/* Left Side - Logo */}
        <div className="about-left">
          <div className="about-logo-placeholder">
            <img
              src={logo}
              alt="CyberAi Hackfest Logo"
              className="w-[300px] h-auto object-contain mx-auto"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <p className="about-description">
            Launched in 2026, CyberAi Hackfest stands as Sankalchand Patel
            University's premier annual tech festival, hosted by the College of
            Engineering . This expansive event offers a captivating blend of
            innovation and learning, featuring dynamic workshops exploring
            industry trends, a thrilling hackathon spotlighting coding prowess.
            CyberAi Hackfest is not merely an event; it's a celebration of
            ideas, teamwork, and the limitless potential of technology.
            Attendees can expect interactive sessions, cutting-edge tech
            exhibitions, and networking opportunities with industry experts. As
            the hub of innovation at Ahmedabad University, CyberAi Hackfest
            invites everyone to shape the future—a space where concepts come to
            life in the ever-evolving world of technology.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">
                <CountUp end={18} suffix="+" />
              </div>
              <div className="stat-label">Events</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <CountUp end={200} suffix="+" />
              </div>
              <div className="stat-label">Participants</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <CountUp end={650} suffix="K+" />
              </div>
              <div className="stat-label">Impressions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <CountUp end={2} suffix="" />
              </div>
              <div className="stat-label">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
