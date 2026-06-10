// import "../App.css";
// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// // import Unitypng from "../assets/unity.png";
// import logo from "../assets/logo.png";

// function Navbar(props) {
//   return (
//     <>
    
//         <div style={{    backgroundColor: "#047413",
//                          display: "flex",
//                          textDecoration: "none",
//                          justifyContent: "spacebetween",
//                          alignItems: "center",
//                          padding: "20px 50px"
//                      }}>
//       <div><li style={{  display: "left",
//                          color: "white",
//                          marginRight: "auto", 
//                          fontSize: "1.3rem",
//                          fontWeight: "bold",
//                        listStyle: "none"
//      }}><img src={logo} alt="logo" style={{
//                       width: "50px",
//                       height: "50px",
//                       marginRight: "10px",
//                       borderRadius: "10px",
//                       backgroundColor: "white",
//                       borderaRdius: "5%",
//                       padding: "4px",
//                       boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
//                      verticalAlign: "middle"
//   }}
// />UNITY FINANCE SYSTEM</li></div> 
//        <ul style={{
//                         listStyle: "none",
//                         display: "flex",
//                         gap: "30px",
//                         margin: 0,
//                         padding: 0,
//                        marginLeft: "auto" 
//         }}>
       
//        <Link to="/home"style={{color: "white" ,
//                                 fontSize: "1.3rem" ,
//                                 fontWeight: "bold" ,
//                                 textDecoration: "none", 
//                                 }}>{props.link1}</Link>

//         <Link to="/about"style={{color: "white" ,
//                                 fontSize: "1.3rem" ,
//                                 fontWeight: "bold" ,
//                                  textDecoration: "none"
//                                  }}>{props.link2}</Link>

//         <Link to="/connect"style={{color: "white" , 
//                                      fontSize: "1.3rem" ,
//                                      fontWeight: "bold" ,
//                                       textDecoration: "none"
//                                       }}>{props.link3}</Link>

//         <Link to="/contact"style={{color: "white", 
//                                    fontSize: "1.3rem" ,
//                                    fontWeight: "bold" ,
//                                    textDecoration: "none"
//                                    }}>{props.link4}</Link>

//         <Link to ="/sign" style={{color: "white" , 
//                                   fontSize: "1.3rem" ,
//                                   fontWeight: "bold" , 
//                                   textDecoration: "none"
//                                   }}>{props.link5}</Link>

        
//         <Link to="/login"style={{color: "white" , 
//                                      fontSize: "1.3rem" ,
//                                      fontWeight: "bold" ,
//                                       textDecoration: "none"
//                                       }}>{props.link6}</Link>
//               </ul>
//         </div>
//         <Outlet></Outlet>
//     </>
//   );
// }

// export default Navbar;
import "../App.css";
import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "#047413",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "15px 20px" : "20px 50px",
          position: "relative",
        }}
      >
        {/* Logo */}
        <div>
          <li
            style={{
              color: "white",
              fontSize: isMobile ? "1rem" : "1.3rem",
              fontWeight: "bold",
              listStyle: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: isMobile ? "40px" : "50px",
                height: isMobile ? "40px" : "50px",
                marginRight: "10px",
                borderRadius: "10px",
                backgroundColor: "white",
                padding: "4px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                verticalAlign: "middle",
              }}
            />
            UNITY FINANCE SYSTEM
          </li>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "30px",
              margin: 0,
              padding: 0,
            }}
          >
            <Link to="/home" style={linkStyle}>
              {props.link1}
            </Link>

            <Link to="/about" style={linkStyle}>
              {props.link2}
            </Link>

            <Link to="/connect" style={linkStyle}>
              {props.link3}
            </Link>

            <Link to="/contact" style={linkStyle}>
              {props.link4}
            </Link>

            <Link to="/sign" style={linkStyle}>
              {props.link5}
            </Link>

            <Link to="/login" style={linkStyle}>
              {props.link6}
            </Link>
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: "white",
              fontSize: "32px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            backgroundColor: "#047413",
            display: "flex",
            flexDirection: "column",
            padding: "15px",
            gap: "15px",
          }}
        >
          <Link
            to="/home"
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {props.link1}
          </Link>

          <Link
            to="/about"
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {props.link2}
          </Link>

          <Link
            to="/connect"
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {props.link3}
          </Link>

          <Link
            to="/contact"
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {props.link4}
          </Link>

          <Link
            to="/sign"
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {props.link5}
          </Link>

          <Link
            to="/login"
            style={mobileLinkStyle}
            onClick={() => setMenuOpen(false)}
          >
            {props.link6}
          </Link>
        </div>
      )}

      <Outlet />
    </>
  );
}

const linkStyle = {
  color: "white",
  fontSize: "1.1rem",
  fontWeight: "bold",
  textDecoration: "none",
};

const mobileLinkStyle = {
  color: "white",
  fontSize: "1.1rem",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "10px 0",
};

export default Navbar;
