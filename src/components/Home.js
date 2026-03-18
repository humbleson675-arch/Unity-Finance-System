import React, { useEffect, useState } from "react";
import Homeimage1 from "../assets/imag.png";
import Homeimage2 from "../assets/.png";
import Homeimage3 from "../assets/cash.png";

function Home() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [offsetY, setOffsetY] = useState(0);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counter animation
  const useCounter = (end, duration = 1500) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    return count;
  };

  const savings = useCounter(12000);
  const loans = useCounter(8500);
  const users = useCounter(320);

  const styles = {
    container: {
      fontFamily: "Segoe UI, sans-serif",
      background: "#eef2ff",
      overflowX: "hidden",
    },

    wrapper: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },

    // PARALLAX HERO
    hero: {
      height: "50vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      color: "#fff",
      borderRadius: "20px",
      marginBottom: "60px",
      background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
      transform: `translateY(${offsetY * 0.3}px)`,
    },

    heroTitle: {
      fontSize: "48px",
      fontWeight: "700",
      marginBottom: "20px",
    },

    heroText: {
      fontSize: "30px",
      maxWidth: "700px",
      marginBottom: "30px",
      color: "#dbeafe",
    },

    heroButton: {
      padding: "16px 40px",
      borderRadius: "10px",
      border: "none",
      background: "#fff",
      color: "#1e3a8a",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },

    // GLASS CARDS (STATS)
    statsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
      gap: "20px",
      marginBottom: "60px",
    },

    glassCard: {
      backdropFilter: "blur(12px)",
      background: "rgba(255,255,255,0.6)",
      borderRadius: "16px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
    },

    statNumber: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#1e3a8a",
    },

    statLabel: {
      marginTop: "10px",
      color: "#374151",
    },

    // IMAGES
    imagesContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
      gap: "25px",
      marginBottom: "60px",
    },

    imageWrapper: {
  width: "100%",
  aspectRatio: "4 / 3", 
  overflow: "hidden",
  borderRadius: "16px",
},

    image: {
             width: "100%",
             height: "100%",    
             objectFit: "cover", 
             transition: "transform 0.6s ease", 
            },

    imageHover: { transform: "scale(1.12)",  },

    // TEXT
    heading: { textAlign: "center",
               fontSize: "34px",
               color: "#1e3a8a",
               marginBottom: "10px",
              },

    paragraph: { textAlign: "center",
                 maxWidth: "750px",
                 margin: "0 auto 30px",
                 color: "#374151",
                 },

    list: { listStyle: "none",
            padding: 0,
            maxWidth: "600px",
            margin: "auto",
          },

    listItem: { background: "#fff",
                padding: "16px",
                marginBottom: "12px",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "0.3s",
              },};

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        
        {/* HERO */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>Smart Financial System</h1>
          <p style={styles.heroText}>
            Save smarter, borrow better, and stay in control of your money.
          </p>
          <button style={styles.heroButton}>Get Started</button>
        </section>

        {/* STATS */}
        <div style={styles.statsContainer}>
          <div style={styles.glassCard}>
            <div style={styles.statNumber}>{savings}+</div>
            <div style={styles.statLabel}>Total Savings</div>
          </div>
          <div style={styles.glassCard}>
            <div style={styles.statNumber}>{loans}+</div>
            <div style={styles.statLabel}>Loans Issued</div>
          </div>
          <div style={styles.glassCard}>
            <div style={styles.statNumber}>{users}+</div>
            <div style={styles.statLabel}>Active Users</div>
          </div>
        </div>

        {/* IMAGES */}
        <div style={styles.imagesContainer}>
          {[Homeimage1, Homeimage2, Homeimage3].map((img, i) => (
            <div
              key={i}
              style={styles.imageWrapper}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <img
                src={img}
                alt=""
                style={{
                  ...styles.image,
                  ...(hoverIndex === i ? styles.imageHover : {}),
                }}
              />
            </div>
          ))}
        </div>

        {/* TEXT */}
        <h2 style={styles.heading}>Why Choose Our System?</h2>

        <p style={styles.paragraph}>
          A powerful yet simple system designed to manage savings, loans,
          and financial growth.
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>Secure and transparent transactions</li>
          <li style={styles.listItem}>Real-time financial tracking</li>
          <li style={styles.listItem}>Smart loan management</li>
          <li style={styles.listItem}>Accessible anytime, anywhere</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;