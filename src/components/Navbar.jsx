import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("title");

  const navItems = [
    { label: "HOME", id: "title" },
    { label: "ABOUT US", id: "hooker" },
    { label: "MEMBERS", id: "members" },
    { label: "CALENDAR", id: "calendar" },
    { label: "PROGRAMS", id: "design" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      {/* LOGO (KEEP THIS) */}
      <div
        className="navbar-left"
        onClick={() => scrollToSection("title")}
      >
        <img
          src="/gwc-logo.svg"
          alt="Girls Who Code logo"
          style={{ width: "220px", height: "auto" }}
        />
      </div>

      {/* NAV ITEMS */}
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