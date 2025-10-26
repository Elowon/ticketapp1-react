import { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const idleTimer = useRef(null);
  const inactivityLimit = 60 * 1000;

  const handleLogout = useCallback(() => {
    localStorage.removeItem("ticketapp_session");
    toast.error("logged out.", {
      position: "top-right",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => navigate("/"), 1500);
  }, [navigate]);

  const resetIdleTimer = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(handleLogout, inactivityLimit);
  }, [handleLogout, inactivityLimit]);

  useEffect(() => {
    
    const session = JSON.parse(localStorage.getItem("ticketapp_session"));
    if (!session) {
      navigate("/auth/login");
      return;
    }

   
    const savedTickets =
      JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    setTickets(savedTickets);

  
    const activityEvents = [
      "mousemove",
      "mousedown",
      "keydown",
      "scroll",
      "touchstart",
    ];

   
    activityEvents.forEach((event) =>
      window.addEventListener(event, resetIdleTimer)
    );

    resetIdleTimer();

  
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      activityEvents.forEach((event) =>
        window.removeEventListener(event, resetIdleTimer)
      );
    };
  }, [navigate, resetIdleTimer]);

  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "in_progress"
  ).length;
  const closedTickets = tickets.filter((t) => t.status === "closed").length;

  return (
    <main className="dashboard-container">
      <ToastContainer /> 
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <button
          onClick={handleLogout}
          className="logout-btn"
          aria-label="logout and end session"
        >
          Logout
        </button>
      </header>

      <section className="stats-container">
        <article className="stat-card open">
          <h3>Open Tickets</h3>
          <p>{openTickets}</p>
        </article>
        <article className="stat-card in_progress">
          <h3>In Progress</h3>
          <p>{inProgressTickets}</p>
        </article>
        <article className="stat-card closed">
          <h3>Closed Tickets</h3>
          <p>{closedTickets}</p>
        </article>
        <article className="stat-card total">
          <h3>Total Tickets</h3>
          <p>{totalTickets}</p>
        </article>
      </section>

      <div className="ticket-link">
        <button onClick={() => navigate("/tickets")}>
          Go to Ticket Management
        </button>
      </div>

    </main>
  );
};

export default Dashboard;
