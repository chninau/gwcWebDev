import { useEffect, useRef } from "react";
import "./AboutUs.css";

const values = [
  {
    title: "Bravery",
    desc: "Resilience, persistence, and ambition to fearlessly pursue goals in tech.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Sisterhood",
    desc: "Celebrating diversity of culture, identity, and background across our chapter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Activism",
    desc: "Equipping members to lead, innovate, and transform the tech industry.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const stats = [
  { num: "120+", label: "Active Members", desc: "Women across majors united by tech." },
  { num: "3+", label: "Alumni Companies", desc: "Top finance and tech firms." },
];

const joinCards = [
  {
    title: "Ambitious women in tech",
    text: "Any woman passionate about technology, regardless of major or experience level.",
  },
  {
    title: "GWC alumni",
    text: "Continue your journey from a high school or online GWC chapter.",
  },
  {
    title: "CS minors welcome",
    text: "Gain a career edge in tech-intensive fields like finance and consulting.",
  },
];

function WaveMid() {
  return (
    <div className="wave-mid">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 C180,0 360,100 540,50 C720,0 900,100 1080,50 C1260,0 1380,80 1440,50 L1440,100 L0,100 Z" fill="#042C53" opacity="0.9" />
      </svg>
      <svg className="w2" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,65 C200,20 420,85 640,50 C860,15 1060,80 1280,50 C1370,35 1420,65 1440,60 L1440,100 L0,100 Z" fill="#042C53" opacity="0.7" />
      </svg>
    </div>
  );
}

function WaveOut() {
  return (
    <div className="wave-out">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="#f8f6f2" opacity="0.9" />
      </svg>
      <svg className="w2" viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C200,15 420,80 640,48 C860,16 1080,78 1300,48 C1380,30 1425,68 1440,58 L1440,90 L0,90 Z" fill="#f8f6f2" opacity="0.7" />
      </svg>
    </div>
  );
}

function WaveJoin() {
  return (
    <div className="wave-join">
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="#f0fbf7" opacity="0.9" />
      </svg>
      <svg className="w2" viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,55 C200,10 440,80 660,45 C880,10 1100,75 1320,45 C1390,28 1430,68 1440,55 L1440,90 L0,90 Z" fill="#f0fbf7" opacity="0.7" />
      </svg>
    </div>
  );
}

export default function AboutUs() {
  const valuesSquiggleRef = useRef(null);
  const joinSquiggleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (valuesSquiggleRef.current) observer.observe(valuesSquiggleRef.current);
    if (joinSquiggleRef.current) observer.observe(joinSquiggleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">

      {/* ── VALUES ── */}
      <section className="values-section">
        <p className="section-label">What drives us</p>
        <h2 className="section-heading">OUR VALUES</h2>
        <div className="squiggle-wrap">
          <svg width="240" height="12" viewBox="0 0 240 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={valuesSquiggleRef}
              className="squiggle-path"
              d="M0,6 C10,1 20,11 30,6 C40,1 50,11 60,6 C70,1 80,11 90,6 C100,1 110,11 120,6 C130,1 140,11 150,6 C160,1 170,11 180,6 C190,1 200,11 210,6 C220,1 230,11 240,6"
              stroke="#1D9E75"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="values-row">
          {values.map((v) => (
            <div className="vcard" key={v.title}>
              <div className="vicon">{v.icon}</div>
              <h3 className="vtitle">{v.title}</h3>
              <p className="vdesc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WaveMid />

      {/* ── STATS ── */}
      <div className="stats-bar">
        {stats.map((s) => (
          <div className="sitem" key={s.label}>
            <div className="snum">{s.num}</div>
            <div className="slabel">{s.label}</div>
            <p className="sdesc">{s.desc}</p>
          </div>
        ))}
      </div>

      <WaveOut />

      {/* ── WHO SHOULD JOIN ── */}
      <section className="join-section">
        <p className="section-label">Membership</p>
        <h2 className="section-heading">WHO SHOULD JOIN</h2>
        <div className="squiggle-wrap">
          <svg width="400" height="12" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              ref={joinSquiggleRef}
              className="squiggle-path"
              d="M0,6 C10,1 20,11 30,6 C40,1 50,11 60,6 C70,1 80,11 90,6 C100,1 110,11 120,6 C130,1 140,11 150,6 C160,1 170,11 180,6 C190,1 200,11 210,6 C220,1 230,11 240,6"
              stroke="#0d9c90"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="join-row">
          {joinCards.map((j) => (
            <div className="jcard" key={j.title}>
              <h4 className="jtitle">{j.title}</h4>
              <p className="jtext">{j.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}