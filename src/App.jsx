import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Calendar from "./components/Calendar";
import ContactUs from "./components/ContactUs";
import NewsletterSignup from "./components/NewsletterSignup";
import Loop from "./components/Loop";
import Members from "./components/Members";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HOME ── */}
        <section id="home">
          <Home />
        </section>

        {/* ── ABOUT US ── */}
        <section id="hooker">
          <AboutUs />
        </section>

        {/* ── MEMBERS ── */}
        <section id="members">
          <Members />
        </section>

        {/* ── CALENDAR ── */}
        <section id="calendar" className="section">
          <div className="calendar-wrapper">
            <h2>Calendar</h2>
            <Calendar />
          </div>
        </section>

        {/* ── GET INVOLVED ── */}
        <section id="get-involved">
          <Loop />
        </section>

        {/* ── NEWSLETTER ── */}
        <section id="newsletter">
          <NewsletterSignup />
        </section>

        {/* ── CONTACT with wave background ── */}
        <section id="contact">
          <div className="contact-wave-wrapper">
            <div className="wave-divider">
              <svg
                viewBox="0 0 1440 500"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className="w1" d="M0,250 C240,150 480,350 720,250 C960,150 1200,350 1440,250 L1440,500 L0,500 Z" />
                <path className="w2" d="M0,290 C200,200 440,380 720,290 C1000,200 1240,370 1440,290 L1440,500 L0,500 Z" />
                <path className="w3" d="M0,330 C300,260 600,400 900,330 C1100,275 1280,370 1440,330 L1440,500 L0,500 Z" />
              </svg>
            </div>
            <div className="contact-wave-content">
              <ContactUs />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}