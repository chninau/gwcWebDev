import { useState, useEffect } from "react";
import gwcLogo from "../assets/GWC_Logo_Blue_Font_.svg";
import "./Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("title");

  const navItems = [
    { label: "HOME", id: "title" },
    { label: "ABOUT US", id: "hooker" },
    { label: "MEMBERS", id: "members" },
    { label: "CALENDAR", id: "calendar" },
    { label: "CONTACT US", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 120;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = 120;
      const sections = ["title", "hooker", "members", "calendar", "contact"];
      let current = "title";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= navHeight + 10) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left" onClick={() => scrollToSection("title")} style={{ cursor: "pointer" }}>
        <img
          src={gwcLogo}
          alt="Girls Who Code logo"
          style={{ width: "300px", height: "auto" }}
        />
      </div>

      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              onClick={() => scrollToSection(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}