import React, { useEffect, useRef, useState } from "react";

function Connect() {
  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const animate = (i) => ({
    opacity: visible.includes(refs.current[i]) ? 1 : 0,
    transform: visible.includes(refs.current[i])
      ? "translateY(0)"
      : "translateY(60px)",
    transition: `all 0.8s ease ${i * 0.2}s`,
  });

  return (
    <div style={styles.page}>

      {/* FLOATING BACKGROUND */}
      <div style={styles.bg1}></div>
      <div style={styles.bg2}></div>

      {/* HERO */}
      <section ref={(el) => (refs.current[0] = el)} style={{ ...styles.hero, ...animate(0) }}>
        <h1 style={styles.heroTitle}>Connect With Us</h1>
        <p style={styles.heroText}>
          Let’s collaborate to build transparent and impactful financial systems.
        </p>
        <button style={styles.button}>Get In Touch</button>
      </section>

      {/* CONTENT */}
      <section ref={(el) => (refs.current[1] = el)} style={{ ...styles.grid, ...animate(1) }}>
        {cards.map((card, i) => (
          <div key={i} style={styles.card}>
            <h3 style={styles.title}>{card.title}</h3>

            {card.list ? (
              <ul style={styles.list}>
                {card.list.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>{item}</li>
                ))}
              </ul>
            ) : (
              <p style={styles.text}>{card.text}</p>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section ref={(el) => (refs.current[2] = el)} style={{ ...styles.cta, ...animate(2) }}>
        <h2 style={styles.ctaTitle}>Let’s Build Together</h2>
        <p style={styles.ctaText}>
          Connect with us to collaborate, innovate, and create meaningful impact.
        </p>
      </section>

    </div>
  );
}

export default Connect;

/* DATA */
const cards = [
  {
    title: "Why Connect With DLSMS?",
    text: "Connecting with us opens opportunities to collaborate on transparent and innovative financial solutions.",
  },
  {
    title: "Ways to Connect",
    list: [
      "Partnership opportunities",
      "Technical collaboration",
      "Training & knowledge sharing",
      "Community engagement",
    ],
  },
  {
    title: "Our Shared Impact",
    text: "Together, we promote transparency, strengthen trust, and empower communities.",
  },
  {
    title: "Start the Conversation",
    text: "Reach out and connect with us to explore ideas and build solutions together.",
  },
];

/* STYLES (unchanged) */
const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    background: "#eef2ff",
    overflowX: "hidden",
    position: "relative",
  },

  bg1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#3b82f6",
    borderRadius: "50%",
    top: "-80px",
    left: "-80px",
    filter: "blur(120px)",
    opacity: 0.3,
  },

  bg2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#1e3a8a",
    borderRadius: "50%",
    bottom: "-80px",
    right: "-80px",
    filter: "blur(120px)",
    opacity: 0.3,
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px",
  },

  heroTitle: {
    fontSize: "clamp(30px,5vw,48px)",
    color: "#1e3a8a",
    fontWeight: "700",
  },

  heroText: {
    marginTop: "10px",
    color: "#374151",
  },

  button: {
    marginTop: "20px",
    padding: "14px 32px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "25px",
    padding: "50px 20px",
    maxWidth: "1100px",
    margin: "auto",
  },

  card: {
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.7)",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  title: {
    textAlign: "center",
    color: "#1e3a8a",
    marginBottom: "10px",
  },

  text: {
    textAlign: "center",
    color: "#374151",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    padding: "10px",
    marginBottom: "8px",
    background: "#f3f4f6",
    borderRadius: "8px",
    textAlign: "center",
  },

  cta: {
    marginTop: "50px",
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    color: "#fff",
    borderRadius: "20px 20px 0 0",
  },

  ctaTitle: {
    fontSize: "clamp(24px,4vw,34px)",
  },

  ctaText: {
    opacity: 0.9,
  },
};