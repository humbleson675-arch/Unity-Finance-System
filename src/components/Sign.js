import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "member",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const validateLogin = () => {
    const newErrors = {};
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Full name required";
    if (!data.phone) newErrors.phone = "Phone required";
    if (!data.email) newErrors.email = "Email required";
    if (data.password.length < 6) newErrors.password = "Password must be 6 characters";
    if (data.password !== data.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleLogin = async (e) => {
  e.preventDefault();
  if (!validateLogin()) return;

  setLoading(true); // start loading

  try {
    const response = await axios.post("http://localhost:8080/api/users/login", {
      email: data.email,
      password: data.password,
    });

    if (response.data.status === "00") {
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      const role = user.role.toLowerCase();
      if (role === "admin") navigate("/admin");
      else if (role === "treasurer") navigate("/treasurer");
      else navigate("/dashboard");
    } else alert(response.data.message);

  } catch (error) {
  alert(error.response?.data?.message || "Login failed");
} finally {
    setLoading(false); // stop loading
  }
};

const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  if (params.get("verified")) {
    alert(" Email verified successfully. You can now login.");
  }
}, [location]);

  const handleSignup = async (e) => {
  e.preventDefault();
  if (!validateSignup()) return;

  setLoading(true); // start loading

  try {
    const response = await axios.post("http://localhost:8080/api/users/register", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      role: data.role,
    });

    if (response.data.status === "00") {
      alert(response.data.message);
      setIsLogin(true);
    } else alert(response.data.message);

  } catch (error) {
  console.error(error.response?.data);
  alert(error.response?.data?.message || "Signup failed");
} finally {
    setLoading(false); // stop loading
  }
};

  /* STYLES */
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      background: "#b0b1b4", // page background white
    },
    container: {
      width: "100%",
      maxWidth: "420px",
      padding: "35px 30px",
      borderRadius: "16px",
      background: "#047413", // deep blue form
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      transition: "all 0.5s ease",
      color: "#fff",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#fff",
      fontSize: "24px",
      fontWeight: "700",
    },
    inputWrapper: {
      position: "relative",
      marginBottom: "15px",
    },
    input: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "14px",
      outline: "none",
      transition: "0.3s",
      color: "#047413",
      backgroundColor: "#fff",
    },
    toggleBtn: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "14px",
      color: "#047413",
      fontWeight: "600",
    },
    button: {
      width: "100%",
      padding: "14px",
      marginTop: "15px",
      background: "#047413", // lighter blue for button
      color: "#fff",
      border: "none",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "0.3s",
    },

    spinner: {
  border: "3px solid #f3f3f3",
  borderTop: "3px solid #fff",
  borderRadius: "50%",
  width: "16px",
  height: "16px",
  animation: "spin 1s linear infinite",
  margin: "0 auto",
},
    switch: {
      marginTop: "15px",
      textAlign: "center",
      cursor: "pointer",
      color: "#dbeafe",
      fontSize: "14px",
    },
    link: {
      textAlign: "center",
      marginTop: "10px",
      cursor: "pointer",
      color: "#dbeafe",
      fontSize: "14px",
    },
    error: {
      color: "#f87171",
      fontSize: "12px",
      marginTop: "4px",
    },
  };

  return (
    <div style={styles.page}>
      <div
        style={{
          ...styles.container,
          transform: isLogin ? "translateX(0)" : "translateX(-10px)",
        }}
      >
        <h2 style={styles.title}>{isLogin ? "Sign In" : "Create Account"}</h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <>
              <div style={styles.inputWrapper}>
                <input
                  style={styles.input}
                  placeholder="Full Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
                <div style={styles.error}>{errors.name}</div>
              </div>

              <div style={styles.inputWrapper}>
                <input
                  style={styles.input}
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                />
                <div style={styles.error}>{errors.phone}</div>
              </div>
            </>
          )}

          <div style={styles.inputWrapper}>
            <input
              style={styles.input}
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <div style={styles.error}>{errors.email}</div>
          </div>

          <div style={styles.inputWrapper}>
            <input
              style={styles.input}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <span style={styles.toggleBtn} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
            <div style={styles.error}>{errors.password}</div>
          </div>

          {!isLogin && (
            <div style={styles.inputWrapper}>
              <input
                style={styles.input}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
              />
              <span style={styles.toggleBtn} onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? "Hide" : "Show"}
              </span>
              <div style={styles.error}>{errors.confirmPassword}</div>
            </div>
          )}

          {!isLogin && (
            <div style={{ marginBottom: "12px" }}>
              <select style={styles.input} name="role" onChange={handleChange}>
                <option value="member">Member</option>
                <option value="treasurer">Treasurer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

         <button
  type="submit"
  style={{
    ...styles.button,
    opacity: loading ? 0.7 : 1,
    cursor: loading ? "not-allowed" : "pointer",
  }}
  disabled={loading}
>
  {loading
    ? isLogin
      ? "Logging in..."
      : "Creating account..."
    : isLogin
    ? "Login"
    : "Register"}
</button>
        </form>

        {isLogin && (
          <p style={styles.link} onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </p>
        )}

        <p style={styles.switch} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create Account" : "Already have an account? Sign In"}
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;