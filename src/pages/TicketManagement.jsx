import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TicketManagement.css";
import NavigationBar from "../components/NavigationBar"

const TicketManagement = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("ticketapp_session"));
    if (!session) navigate("/auth/login");

    const savedTickets =
      JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    setTickets(savedTickets);
  }, [navigate]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("open");
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !status) {
      toast.error("Title and Status are required.");
      return;
    }

    if (!["open", "in_progress", "closed"].includes(status)) {
      toast.error("Status must be open, in_progress, or closed.");
      return;
    }

    let updatedTickets;
    if (editingId !== null) {
      updatedTickets = tickets.map((t) =>
        t.id === editingId ? { ...t, title, description, status } : t
      );
      toast.success("Ticket updated successfully!");
    } else {
      const newTicket = {
        id: Date.now(),
        title,
        description,
        status,
      };
      updatedTickets = [...tickets, newTicket];
      toast.success("Ticket created successfully!");
    }

    setTickets(updatedTickets);
    localStorage.setItem("ticketapp_tickets", JSON.stringify(updatedTickets));
    resetForm();
  };

  const handleEdit = (ticket) => {
    setTitle(ticket.title);
    setDescription(ticket.description);
    setStatus(ticket.status);
    setEditingId(ticket.id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      const updatedTickets = tickets.filter((t) => t.id !== id);
      setTickets(updatedTickets);
      localStorage.setItem("ticketapp_tickets", JSON.stringify(updatedTickets));
      toast.success("Ticket deleted successfully!");
    }
  };

  return (
    <>
    < NavigationBar />
    <main className="ticket-container">
      <h1>Ticket Management</h1>

      <form className="ticket-form" onSubmit={handleSubmit}>
        <h2 aria-label={editingId ? "Edit Ticket Form" : "Create Ticket Form"}>
          {editingId !== null ? "Edit Ticket" : "Create Ticket"}
        </h2>

        <label htmlFor="title">Title*</label>
        <input
          id="title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ticket title"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ticket description"
          required
        />

        <label htmlFor="status">Status*</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        <button type="submit">
          {editingId !== null ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>

      <section className="ticket-list">
        <h2>Existing Tickets</h2>
        {tickets.length === 0 && <p>No tickets yet.</p>}
        {tickets.map((ticket) => (
          <article key={ticket.id} className={`ticket-card ${ticket.status}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <span className="status">{ticket.status}</span>
            <div className="actions">
              <button onClick={() => handleEdit(ticket)}>Edit</button>
              <button onClick={() => handleDelete(ticket.id)}>Delete</button>
            </div>
          </article>
        ))}
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </main>
    </>
  );
};

export default TicketManagement;
