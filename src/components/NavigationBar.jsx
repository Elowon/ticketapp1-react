import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../src/styles/NavigationBar.css";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const isLoggedIn = useMemo(() => !!localStorage.getItem("ticketapp_session"), []);

  const handleProtectedRoute = (path, closeMenu = false) => {
    if (closeMenu) toggleMenu();
    if (isLoggedIn) {
      navigate(path);
    } else {
      alert("Please login.");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          TicketApp
        </Link>

        {!mobileMenuOpen && (
          <ul className="nav-links">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleProtectedRoute("/dashboard");
                }}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleProtectedRoute("/tickets");
                }}
              >
                Tickets
              </a>
            </li>
            {!isLoggedIn && (
              <li>
                <Link to="/auth/signup" className="signup-btn">
                  Get Started
                </Link>
              </li>
            )}
          </ul>
        )}

        <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <ul className="mobile-menu">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleProtectedRoute("/dashboard", true);
              }}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleProtectedRoute("/tickets", true);
              }}
            >
              Tickets
            </a>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/auth/signup" onClick={toggleMenu}>
                Get Started
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default NavigationBar;
