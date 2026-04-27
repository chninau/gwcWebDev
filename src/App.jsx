import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="title" className="section">
        <h1>Home</h1>
      </section>

      <section id="hooker" className="section">
        <h2>About Us</h2>
      </section>

      <section id="members" className="section">
        <h2>Members</h2>
      </section>

      <section id="calendar" className="section">
        <h2>Calendar</h2>
      </section>

      <section id="design" className="section">
        <h2>Programs</h2>
      </section>
    </>
  );
}