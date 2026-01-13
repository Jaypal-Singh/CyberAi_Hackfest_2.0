import React from "react";
import SpotlightCard from "../../../Components/SpotlightCard/SpotlightCard";
import "./Prizes.css";

const Prizes = () => {
  return (
    <section className="prizes-container">
      <div className="prizes-header">
        <h2 className="prizes-title">Prizes & Awards</h2>
      </div>

      <SpotlightCard
        className="w-full max-w-5xl mx-auto custom-spotlight-card"
        spotlightColor="rgba(255, 255, 255, 0.1)"
      >
        <div className="p-10 flex flex-col items-center">
          <div className="podium-container w-full">
            {/* 2nd Prize */}
            <div className="podium-item second-place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="trophy-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.348V5.25Zm11.666 0v.086c1.035.16 2.059.33 3.071.543a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .856-3.294Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="prize-rank">2nd Prize</span>
              <span className="prize-amount">₹5X,XXX</span>
            </div>

            {/* 1st Prize */}
            <div className="podium-item first-place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="trophy-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.348V5.25Zm11.666 0v.086c1.035.16 2.059.33 3.071.543a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .856-3.294Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="prize-rank">1st Prize</span>
              <span className="prize-amount">₹1,XX,XXX</span>
            </div>

            {/* 3rd Prize */}
            <div className="podium-item third-place">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="trophy-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.348V5.25Zm11.666 0v.086c1.035.16 2.059.33 3.071.543a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .856-3.294Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="prize-rank">3rd Prize</span>
              <span className="prize-amount">₹2X,XXX</span>
            </div>
          </div>

          <div className="consolation-section">
            <h4 className="consolation-title">Consolation Prizes</h4>
            <p className="consolation-amount">
              Special category awards(2XXXX) Or 5XXX/- to 5-Groups
            </p>
            <p className="consolation-amount">Goodies by Techdefence</p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default Prizes;
