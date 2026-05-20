import React, { useState } from "react";
import "./Members.css";

const membersData = [
  {
    name: "Diya Pandley",
    role: "President",
    major: "Computer Science with Applied Mathematics Minor",
    year: "2027",
    image: "/img/diya.jpeg",
    funFact: "Loves literature, gardening and traveling! ",
  },
  {
    name: "Sophia Chen",
    role: "Vice President",
    major: "Computer Science & Business",
    year: "2027",
    image: "/img/sophia.png",
    funFact: "I love travelling to other countries, especially trying the local foods.",
  },
  {
    name: "Nina Chau",
    role: "Web Development Lead",
    major: "Computer Science + UX Design in IDEAS Program",
    year: "2027",
    image: "/img/nina.jpg",
    funFact: "I enjoy game development!",
  },
  {
    name: "Laura Sommer",
    role: "Treasurer",
    major: "Computer Science",
    year: "2028",
    image: "/img/laura.jpg",
    funFact: "Has planned events for 500+ people 🎉",
  },
  {
    name: "Sadie Thomas",
    role: "Internal Events",
    major: "Computer Science & Business",
    year: "2027",
    image: "/img/sadie.png",
    funFact: "I love going to cat cafes!",
  },
  {
    name: "Maisy Earl",
    role: "Marketing",
    major: "Computer Science",
    year: "2027",
    image: "/img/maisy.png",
    funFact: "I'm from Scranton PA, where The Office takes place!",
  },
  {
    name: "Vini Jaiswal",
    role: "External Relations",
    major: "Computer Science",
    year: "2027",
    image: "/img/vini.jpg",
    funFact: "If I were a fish, I'd love to be a jellyfish",
  },
  {
    name: "Alice Peng",
    role: "External Events",
    major: "Computer Science",
    year: "2028",
    image: "/img/alice.jpg",
    funFact: "xxx",
  },
  {
    name: "Nia Matthew",
    role: "Freshman Representative Duckling",
    major: "Business Information Systems and Finance",
    year: "2029",
    image: "/img/nia.png",
    funFact: "I'm the only person in my family who is left handed",
  },
  {
    name: "Sydney Sedlock",
    role: "Marketing Duckling",
    major: "Finance",
    year: "2029",
    image: "/img/sydney.JPG",
    funFact: "I can juggle!",
  },
  {
    name: "Kripa Krishnamurthy",
    role: "Events Duckling",
    major: "Computer Science and Engineering",
    year: "2028",
    image: "/img/kripa.png",
    funFact: "I have moved to a different place across the" 
    + "country every year from kindergarten to middle school!",
  },
  {
    name: "Nithya Sree Nagarajan",
    role: "Events Duckling",
    major: "Computer Science",
    year: "2029",
    image: "/img/nithya.png",
    funFact: "I work as Lehigh CSB Website Developer ",
  },
  {
    name: "Nadxieli Jimenez Bielma",
    role: "Web Dev Team",
    major: "Computer Science & Graphic Design in IDEAS Program",
    year: "2027",
    image: "/img/nadxieli.JPG",
    funFact: "I've backpacked through the Absaroka Range! ",
  },
  {
    name: "Alicia Tyagi",
    role: "Web Dev Team",
    major: "Computer Science",
    year: "2028",
    image: "/img/alicia.png",
    funFact: "I have a dog named Rio ",
  },
  {
    name: "Guranaad Kaur",
    role: "Web Dev Team",
    major: "Computer Engineering",
    year: "2028",
    image: "/img/guranaad.png",
    funFact: "I have a twin!",
  },
];

export default function Members() {
  const [selected, setSelected] = useState(membersData[0]);

  return (
    <div className="members-container">
      <h1 className="members-title">MEET THE TEAM!</h1>

      <div className="members-layout">
        {/* LEFT GRID */}
        <div className="members-grid">
          {membersData.map((member, index) => (
            <div
              key={index}
              className={`member-card ${
                selected.name === member.name ? "active" : ""
              }`}
              onClick={() => setSelected(member)}
            >
              <img src={member.image} alt={member.name} />
              <p className="member-name">{member.name}</p>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SPOTLIGHT */}
        <div className="member-spotlight">
          <div className="spotlight-main">
            {/* IMAGE */}
            <img
              src={selected.image}
              alt={selected.name}
              className="spotlight-img"
            />

            {/* INFO */}
            <div className="spotlight-details">
              <h2 className="spotlight-name">{selected.name}</h2>
              <h4 className="spotlight-role">{selected.role}</h4>

              <div className="spotlight-meta">
                <p>
                  <span>MAJOR:</span> {selected.major}
                </p>
                <p>
                  <span>YEAR:</span> {selected.year}
                </p>
                <p>
                  <span>FUN FACT:</span> {selected.funFact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}