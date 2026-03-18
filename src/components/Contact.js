import React from "react";

function Contact() {
  const styles = {
    container: {
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundColor: "#f4f6fb", // subtle banking background
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "100%",
      maxWidth: "900px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "35px 30px",
      boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    },

    title: {
      textAlign: "center",
      fontSize: "32px",
      color: "#1e3a8a",
      marginBottom: "12px",
      fontWeight: "600",
    },

    subtitle: {
      textAlign: "center",
      fontSize: "16px",
      color: "#374151",
      marginBottom: "30px",
    },

    section: {
      marginBottom: "30px",
    },

    sectionTitle: {
      fontSize: "20px",
      color: "#1e40af",
      marginBottom: "12px",
      borderBottom: "2px solid #e0e7ff",
      paddingBottom: "6px",
    },

    text: {
      fontSize: "15px",
      color: "#374151",
      margin: "6px 0",
      lineHeight: "1.7",
    },

    link: {
      color: "#2563eb",
      textDecoration: "none",
      fontWeight: "500",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },

    input: {
      padding: "12px",
      fontSize: "15px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
      width: "100%",
    },

    textarea: {
      padding: "12px",
      fontSize: "15px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      outline: "none",
      width: "100%",
      minHeight: "140px",
      resize: "vertical",
    },

    button: {
      backgroundColor: "#1e40af",
      color: "#ffffff",
      padding: "14px",
      borderRadius: "8px",
      border: "none",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
    },

    buttonHover: {
      backgroundColor: "#2563eb",
      transform: "translateY(-2px)",
    },

    footerNote: {
      textAlign: "center",
      fontSize: "13px",
      color: "#6b7280",
      marginTop: "25px",
    },

    // Responsive tweaks
    "@media (max-width: 768px)": {
      title: { fontSize: "26px" },
      subtitle: { fontSize: "14px" },
      sectionTitle: { fontSize: "18px" },
      text: { fontSize: "14px" },
      input: { fontSize: "14px" },
      textarea: { fontSize: "14px" },
      button: { fontSize: "15px", padding: "12px" },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.subtitle}>
          We’re here to help. Reach out anytime for support, feedback, or collaboration.
        </p>

        {/* Contact Details */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📞 Contact Information</h3>
          <p style={styles.text}>
            <strong>Email:</strong>{" "}
            <a href="mailto:gatluakgatkuoth2@gmail.com" style={styles.link}>
              gatluakgatkuoth2@gmail.com
            </a>
          </p>
          <p style={styles.text}>
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/254112590503" style={styles.link}>
              0112 590 503
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🌐 Social Media</h3>
          <p style={styles.text}>
            <strong>Facebook:</strong> Peter Gatkuothjr Son Dengjoklual
          </p>
          <p style={styles.text}>
            <strong>TikTok:</strong> Peter Gatkuothjr Son Dengjoklual
          </p>
        </div>

        {/* Location */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>📍 Location</h3>
          <p style={styles.text}>Turkana County, Kakuma Refugee Camp</p>
          <p style={styles.text}>Zone 3, Block 5, Group 20</p>
        </div>

        {/* Contact Form */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>✉ Send Us a Message</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Your Full Name" style={styles.input} />
            <input type="email" placeholder="Your Email Address" style={styles.input} />
            <textarea placeholder="Write your message here..." style={styles.textarea}></textarea>
            <button type="button" style={styles.button}>Send Message</button>
          </form>
        </div>

        <p style={styles.footerNote}>
          We value your communication and will respond as soon as possible.
        </p>
      </div>
    </div>
  );
}

export default Contact;