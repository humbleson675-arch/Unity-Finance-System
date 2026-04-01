import "../App.css";
import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Unitypng from "../assets/unity.png";
import logo from "../assets/logo.png";

function Navbar(props) {
  return (
    <>
        <div style={{    backgroundColor: "#047413",
                         display: "flex",
                         textDecoration: "none",
                         justifyContent: "spacebetween",
                         alignItems: "center",
                         padding: "20px 50px"
                     }}>
      <div><li style={{  display: "left",
                         color: "white",
                         marginRight: "auto", 
                         fontSize: "1.3rem",
                         fontWeight: "bold",
                       listStyle: "none"
     }}><img src={logo} alt="logo" style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      borderaRdius: "5%",
                      padding: "4px",
                      boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
                     verticalAlign: "middle"
  }}
/>UNITY FINANCE SYSTEM</li></div> 
       <ul style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "30px",
                        margin: 0,
                        padding: 0,
                       marginLeft: "auto" 
        }}>
       
       <Link to="/home"style={{color: "white" ,
                                fontSize: "1.3rem" ,
                                fontWeight: "bold" ,
                                textDecoration: "none", 
                                }}>{props.link1}</Link>

        <Link to="/about"style={{color: "white" ,
                                fontSize: "1.3rem" ,
                                fontWeight: "bold" ,
                                 textDecoration: "none"
                                 }}>{props.link2}</Link>

        <Link to="/connect"style={{color: "white" , 
                                     fontSize: "1.3rem" ,
                                     fontWeight: "bold" ,
                                      textDecoration: "none"
                                      }}>{props.link3}</Link>

        <Link to="/contact"style={{color: "white", 
                                   fontSize: "1.3rem" ,
                                   fontWeight: "bold" ,
                                   textDecoration: "none"
                                   }}>{props.link4}</Link>

        <Link to ="/sign" style={{color: "white" , 
                                  fontSize: "1.3rem" ,
                                  fontWeight: "bold" , 
                                  textDecoration: "none"
                                  }}>{props.link5}</Link>

        
        <Link to="/login"style={{color: "white" , 
                                     fontSize: "1.3rem" ,
                                     fontWeight: "bold" ,
                                      textDecoration: "none"
                                      }}>{props.link6}</Link>
              </ul>
        </div>
        <Outlet></Outlet>
    </>
  );
}

export default Navbar;
