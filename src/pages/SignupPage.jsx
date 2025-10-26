import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";
import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("All fields are required.");
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    
    const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];

    const newUser = { email, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("ticketapp_users", JSON.stringify(updatedUsers));

    toast.success("Signup successful! Redirecting to login...");
    setTimeout(() => navigate("/auth/login"), 1500);
  };

  return (
  
    <main className="auth-container">
      < NavigationBar />

      <form className="auth-form" onSubmit={handleSignup}>
        <h1>Signup</h1>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />

        <button type="submit">Sign up</button>
        <p>
          Alredy have an account?
          <Link to="/auth/login">Login</Link>
        </p>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
};

export default SignupPage;
