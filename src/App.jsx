import React from "react";
import LandingPage from "./pages/landingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/dashBoard";
import TicketManagement from "./pages/TicketManagement";
import SignupPage from "./pages/SignupPage";




function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element = {<LandingPage />} />
        <Route path="/auth/login" element = {<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/tickets" element={<TicketManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
