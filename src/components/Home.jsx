import { useState, useEffect } from "react";
import "./Home.css";

import weCode from "../assets/weCode.JPG";
import members from "../assets/members.png";
import weCode2 from "../assets/wecode2.png";

const photos = [
  { src: weCode, alt: "Members at WECode Conference" },
  { src: members, alt: "GWC Lehigh members at involvement fair" },
  { src: weCode2, alt: "WECode 2 event" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="title" className="home">
      <div className="home-text">
        <span className="home-eyebrow">GIRLS WHO CODE</span>
        <h1 className="home-heading">
          Empowering the next generation<br />of coders.
        </h1>
        <p className="home-sub">
          We build community, confidence, and skills for women in tech at Lehigh University.
        </p>
        <div className="home-ctas">
          <button className="btn-primary" onClick={() => scrollTo("contact")}>Join Us</button>
          <button className="btn-secondary" onClick={() => scrollTo("hooker")}>Learn More</button>
        </div>
      </div>

      <div className="home-visual">
        {photos.map((photo, i) => (
          <img
            key={i}
            src={photo.src}
            alt={photo.alt}
            className={`home-slide-img ${i === current ? "active" : ""}`}
          />
        ))}

        <div className="home-visual-overlay" />

        {photos.length > 1 && (
          <div className="home-dots">
            {photos.map((_, i) => (
              <button
                key={i}
                className={`home-dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}