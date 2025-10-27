import "./LandingPage.css";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    < NavigationBar />
    <main className="landing-container">
      <section className="hero" aria-labelledby="hero-heading">
        <h1 id="hero-heading">Welcome to TicketApp</h1>
        <p>Manage your tickets easily and efficiently!</p>
        <div className="action-buttons" aria-labelledby="btn actions">
          <button
            className="btn login"
            onClick={() => navigate("auth/login")}
            aria-labelledby="Login page"
          >
            Login
          </button>
          <button
            className="btn get-started"
            onClick={() => navigate("auth/signup")}
            aria-labelledby="signup page"
          >
            Get Started
          </button>
        </div>

        <div className="circle circle1" aria-hidden="true"></div>
        <div className="circle circle2" aria-hidden="true"></div>

        <svg
          className="wave"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fill="#4f46e5"
            d="M0,0 C480,150 960,0 1440,150 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </section>

      <section class="features-section">
    <h2>Why Choose TicketApp?</h2>

    <div class="features-grid">
      <div class="feature-box">
        <h3>🎟 Easy Ticket Management</h3>
        <p>Create, track, and update tickets effortlessly in one place.</p>
      </div>

      <div class="feature-box">
        <h3>⚡ Real-Time Updates</h3>
        <p>Stay informed with live ticket status and instant notifications.</p>
      </div>

      <div class="feature-box">
        <h3>🔒 Secure Access</h3>
        <p>Your account and data are protected with advanced encryption.</p>
      </div>

      <div class="feature-box">
        <h3>📊 Smart Dashboard</h3>
        <p>View open, closed, and in-progress tickets at a glance.</p>
      </div>
    </div>
  </section>


      <Footer />
    </main>
    </>
  );
};

export default LandingPage;
