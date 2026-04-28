import React from "react";
import "./waveBG.css";

export default function waveBG() {
  return (
    <div className="wave-background">
      <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
        <path className="w1" d="M0,250 C240,150 480,350 720,250 C960,150 1200,350 1440,250 L1440,500 L0,500 Z" />
        <path className="w2" d="M0,290 C200,200 440,380 720,290 C1000,200 1240,370 1440,290 L1440,500 L0,500 Z" />
        <path className="w3" d="M0,330 C300,260 600,400 900,330 C1100,275 1280,370 1440,330 L1440,500 L0,500 Z" />
      </svg>
    </div>
  );
}