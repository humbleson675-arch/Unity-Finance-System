// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Container, Card, Alert, Button } from "react-bootstrap";

// const VerifyEmail = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const localBaseUrl = "http://localhost:8080/";

//   const [message, setMessage] = useState("");
//   const [variant, setVariant] = useState("danger");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const verify = async () => {
//       try {
//         const response = await axios.get(
//           `${localBaseUrl}api/users/verify/${token}`
//         );

//         if (response.data.status === "00") {
//           setVariant("success");
//           setMessage(response.data.message || "Email verified successfully");
//           toast.success("Email verified successfully", {
//             position: "top-center",
//           });

//           // redirect after 3 seconds
//           setTimeout(() => navigate("/login"), 3000);
//         } else {
//           setVariant("danger");
//           setMessage(response.data.message || "Verification failed");
//           toast.error(response.data.message || "Verification failed", {
//             position: "top-center",
//           });
//         }
//       } catch (error) {
//         setVariant("danger");
//         setMessage("Verification failed: " + error.message);
//         toast.error("Verification failed", {
//           position: "top-center",
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//     verify();
//   }, [token, navigate]);

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <ToastContainer />
//       <Card
//         className="p-4 shadow-lg text-center"
//         style={{ maxWidth: "400px", width: "100%" }}
//       >
//         <h3 className="mb-4" style={{ color: "#0a2e5c" }}>
//           Email Verification
//         </h3>

//         {loading ? (
//           <>
//             <div className="d-flex justify-content-center mb-3">
//               <div
//                 className="spinner-border"
//                 role="status"
//                 aria-hidden="true"
//               ></div>
//             </div>
//             <p>Verifying your email...</p>
//           </>
//         ) : (
//           <>
//             {message && <Alert variant={variant}>{message}</Alert>}

//             <div className="d-grid mt-3">
//               <Button
//                 variant="primary"
//                 style={{ backgroundColor: "#0a2e5c", color: "#fff" }}
//                 onClick={() => navigate("/login")}
//               >
//                 Go to Login
//               </Button>
//             </div>
//           </>
//         )}
//       </Card>
//     </Container>
//   );
// };

// export default VerifyEmail;



// src/pages/VerifyEmail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const verify = async () => {
      try {
        // Call backend to verify
        await axios.get(`http://localhost:8080/api/users/verify/${token}`);
        
        // Redirect to login
        setMessage("Email verified! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } catch (err) {
        console.error(err);
        setMessage("Invalid or expired token.");
      }
    };

    verify();
  }, [token, navigate]);

  return <div className="text-center mt-20">{message}</div>;
}