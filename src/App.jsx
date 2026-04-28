import Navbar from "./components/Navbar";
import Calendar from "./components/Calendar";
import ContactUs from "./components/ContactUs";
import NewsletterSignup from "./components/NewsletterSignup";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HOME ── */}
        <section id="title" className="section section--hero">
          <h1>Girls Who Code</h1>
          <p>Lehigh University Chapter</p>
        </section>

        {/* ── ABOUT US ── */}
        <section id="hooker" className="section">
          <h2>About Us</h2>
        </section>

        {/* ── MEMBERS ── */}
        <section id="members" className="section">
          <h2>Members</h2>
        </section>

        {/* ── CALENDAR ── */}
        <section id="calendar" className="section">
          <h2>Calendar</h2>
          <Calendar />
        </section>

        {/* ── PROGRAMS ── */}
        <section id="design" className="section">
          <h2>Programs</h2>
        </section>

        {/* ── NEWSLETTER ── */}
        <NewsletterSignup />

        {/* ── CONTACT ── */}
        <section id="contact" className="section section--contact">
          <ContactUs />
        </section>
      </main>
    </>
  );
}