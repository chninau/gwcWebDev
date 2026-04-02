import { useState } from "react";

// Your Mailchimp public signup page
const MAILCHIMP_SIGNUP_URL = "http://eepurl.com/i1T40A";

export default function NewsletterSignup() {
  const [userType, setUserType] = useState("adult");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    // Opens Mailchimp's signup page in a new tab
    // Pre-fills the email if Mailchimp supports it via the URL
    const url = `${MAILCHIMP_SIGNUP_URL}&EMAIL=${encodeURIComponent(email)}`;
    window.open(url, "_blank");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSignUp();
  };

  return (
    <section style={styles.section}>
      {/* Left: Heading + description */}
      <div style={styles.left}>
        <h2 style={styles.heading}>
          Subscribe to<br />Our Newsletter
        </h2>
        <p style={styles.description}>
          Our Weekly Newsletter is a collection of the latest and greatest from
          Girls Who Code – top tech stories, real talk from our CEO, and news
          about young women changing the world.
        </p>
      </div>

      {/* Right: Form */}
      <div style={styles.right}>
        {/* User type radio */}
        <div style={styles.radioRow}>
          <span style={styles.radioLabel}>I am a/n</span>
          {["adult", "student"].map((type) => (
            <label key={type} style={styles.radioOption}>
              <input
                type="radio"
                name="userType"
                value={type}
                checked={userType === type}
                onChange={() => setUserType(type)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
            </label>
          ))}
        </div>

        {/* Email input */}
        <input
          type="email"
          placeholder="email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <p style={styles.disclaimer}>
          By entering your email address, you are confirming that you are 13+.
        </p>

        {/* Submit button */}
        <button
          onClick={handleSignUp}
          style={{
            ...styles.button,
            opacity: !email ? 0.6 : 1,
            cursor: !email ? "not-allowed" : "pointer",
          }}
          disabled={!email}
        >
          Sign Up
        </button>

        <p style={styles.redirectNote}>
          You'll be taken to our signup page to confirm your subscription.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#cff0e8",
    padding: "3rem 4rem",
    display: "flex",
    alignItems: "center",
    gap: "4rem",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    minWidth: 280,
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    fontWeight: 900,
    color: "#0a2540",
    textTransform: "uppercase",
    lineHeight: 1.05,
    margin: "0 0 1.5rem",
    letterSpacing: "-0.01em",
  },
  description: {
    color: "#0a2540",
    fontSize: "1rem",
    lineHeight: 1.65,
    margin: 0,
    maxWidth: 400,
  },
  right: {
    minWidth: 320,
    flex: "0 0 360px",
  },
  radioRow: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
  },
  radioLabel: {
    color: "#0a2540",
    fontSize: "1rem",
  },
  radioOption: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
  },
  radioInput: {
    accentColor: "#1db88a",
    width: 18,
    height: 18,
    cursor: "pointer",
  },
  radioText: {
    color: "#0a2540",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1.5px solid #0a2540",
    padding: "0.5rem 0",
    fontSize: "1rem",
    color: "#0a2540",
    outline: "none",
    boxSizing: "border-box",
  },
  disclaimer: {
    fontSize: "0.75rem",
    color: "#0a2540",
    opacity: 0.7,
    fontStyle: "italic",
    margin: "0.4rem 0 1.5rem",
  },
  button: {
    width: "100%",
    padding: "0.9rem 1rem",
    background: "transparent",
    border: "2px solid #0a2540",
    color: "#0a2540",
    fontWeight: 700,
    fontSize: "0.85rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    transition: "background 0.2s, color 0.2s",
  },
  redirectNote: {
    fontSize: "0.75rem",
    color: "#0a2540",
    opacity: 0.6,
    margin: "0.5rem 0 0",
    textAlign: "center",
  },
};