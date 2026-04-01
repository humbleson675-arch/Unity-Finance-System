import React, { useEffect, useRef, useState } from "react";

function About() {
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
      <div style={styles.bgCircle1}></div>
      <div style={styles.bgCircle2}></div>

      {/* HERO */}
      <section ref={(el) => (refs.current[0] = el)} style={{ ...styles.hero, ...animate(0) }}>
        <h1 style={styles.heroTitle}>Digital Loan & Savings System</h1>
        <p style={styles.heroText}>
          Secure. Transparent. Built for modern communities.
        </p>
        <button style={styles.ctaBtn}>Get Started</button>
      </section>

      {/* STATS */}
      <section ref={(el) => (refs.current[1] = el)} style={{ ...styles.stats, ...animate(1) }}>
        {["100+ Members", "Secure Data", "Fast Loans", "Trusted System"].map((s, i) => (
          <div key={i} style={styles.statCard}>
            {s}
          </div>
        ))}
      </section>

      {/* CARDS */}
      <section ref={(el) => (refs.current[2] = el)} style={{ ...styles.grid, ...animate(2) }}>
        {data.map((item, i) => (
          <div key={i} style={styles.card}>
            <h3 style={styles.title}>{item.title}</h3>

            {item.list ? (
              <ul style={styles.list}>
                {item.list.map((li, idx) => (
                  <li key={idx} style={styles.listItem}>{li}</li>
                ))}
              </ul>
            ) : (
              <p style={styles.text}>{item.text}</p>
            )}
          </div>
        ))}
      </section>
      

      {/* CTA */}
      <section ref={(el) => (refs.current[3] = el)} style={{ ...styles.cta, ...animate(3) }}>
        <h2 style={styles.ctaTitle}>Build Financial Confidence</h2>
        <p style={styles.ctaText}>
          Manage savings and loans with clarity and control.
        </p>
      </section>

    </div>
  );
}

export default About;

/* DATA */
const data = [
  {
    title: "Our Mission",
    text: "Empowering communities with secure and transparent financial tools.",
  },
  {
    title: "Our Vision",
    text: "A future where everyone has access to smart financial systems.",
  },
  {
    title: "What We Do",
    list: [
      "Track savings",
      "Manage loans",
      "Monitor repayments",
      "Improve transparency",
    ],
  },
  {
    title: "Who We Serve",
    text: "Community groups, NGOs, and financial associations.",
  },
];

/* STYLES */
const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    background: "#b0b1b4",
    overflowX: "hidden",
    position: "relative",
  },

  /* FLOATING BG */
  bgCircle1: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#047413",
    borderRadius: "50%",
    top: "-80px",
    left: "-80px",
    filter: "blur(100px)",
    opacity: 0.3,
  },

  bgCircle2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#047413",
    borderRadius: "50%",
    bottom: "-80px",
    right: "-80px",
    filter: "blur(120px)",
    opacity: 0.3,
  },

  /* HERO */
  hero: {
    textAlign: "center",
    padding: "100px 20px",
  },

  heroTitle: {
    fontSize: "clamp(32px,5vw,50px)",
    color: "#047413",
    fontWeight: "700",
  },

  heroText: {
    marginTop: "10px",
    color: "#374151",
  },

  ctaBtn: {
    marginTop: "20px",
    padding: "14px 30px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg,#047413,#047413)",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },

  /* STATS */
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },

  statCard: {
    padding: "20px",
    textAlign: "center",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "25px",
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  title: {
    textAlign: "center",
    color: "#047413",
    marginBottom: "10px",
  },

  text: {
    textAlign: "center",
    color: "#047413",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    padding: "10px",
    marginBottom: "8px",
    background: "#f3f4f6",
    color: "#047413",
    borderRadius: "8px",
    textAlign: "center",
  },

  /* CTA */
  cta: {
    marginTop: "50px",
    padding: "80px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg,#047413,#047413)",
    color: "#fff",
    borderRadius: "20px 20px 0 0",
  },

  ctaTitle: {
    fontSize: "28px",
  },

  ctaText: {
    opacity: 0.9,
  },
};