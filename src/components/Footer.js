import React from "react";
import { Link } from "react-router-dom";

function Footer({ page = "home" }) {
  return (
    <footer
      style={{
        background: "#1f2933",
        color: "#fff",
        padding: "40px 20px 20px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: "1 1 250px",
            minWidth: "250px",
          }}
        >
          <h4 style={{ marginBottom: "15px", fontSize: "18px" }}>UFSMS</h4>

          {page === "home" && (
            <p
              style={{
                color: "#d1d5db",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              Unity Finance & Savings Management System empowering refugee
              community groups through transparency and accountability.
            </p>
          )}
        </div>

        {/* CENTER */}
        <div
          style={{
            flex: "1 1 250px",
            minWidth: "250px",
          }}
        >
          <h4 style={{ marginBottom: "15px", fontSize: "18px" }}>
            Quick Links
          </h4>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#d1d5db",
                }}
              >
                Home
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "#d1d5db",
                }}
              >
                About
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/connect"
                style={{
                  textDecoration: "none",
                  color: "#d1d5db",
                }}
              >
                Connect
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#d1d5db",
                }}
              >
                Contact
              </Link>
            </li>

            <li style={{ marginBottom: "10px" }}>
              <Link
                to="/sign"
                style={{
                  textDecoration: "none",
                  color: "#d1d5db",
                }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div
          style={{
            flex: "1 1 250px",
            minWidth: "250px",
          }}
        >
          {(page === "home" || page === "login") && (
            <>
              <h4 style={{ marginBottom: "15px", fontSize: "18px" }}>
                What We Do
              </h4>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Secure Digital Savings
              </p>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Instant Digital Loans
              </p>

              <p
                style={{
                  color: "#d1d5db",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Improved Safety & Transparency
              </p>
            </>
          )}

          {page === "dashboard" && (
            <p
              style={{
                color: "#d1d5db",
                fontSize: "14px",
              }}
            >
              Version 1.0.0
            </p>
          )}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #374151",
          marginTop: "25px",
          paddingTop: "15px",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} DLSMS. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
