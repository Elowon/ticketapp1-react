# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

ABOUT MY PROJECT-
TicketApp is a responsive, accessible, and secure Ticket Management System built with React.
It allows users to sign up, log in, and manage tickets (Create, View, Edit, Delete) in a visually consistent interface.

This project is part of a multi-framework challenge ,built using React, Vue.js, and Twig, each implementing the same layout, features, and design rules.

🧱 Features
🌐 1. Landing Page

Welcoming hero section with wavy SVG background and decorative circles.

Clear Call-to-Action buttons: "Login" and "Get Started".

Fully responsive layout (mobile → tablet → desktop).

Consistent footer on all pages.

🔐 2. Authentication

Login and Signup pages with form validation.

Inline and toast error messages for invalid inputs or existing users.

Simulated authentication using localStorage and session token:

Token key: ticketapp_session

User storage key: ticketapp_users

Logout clears session and redirects to Landing Page.

📊 3. Dashboard

Displays ticket summary:

Total tickets

Open

In Progress

Closed

Includes navigation to the Ticket Management screen.

Protected route, only accessible with a valid session.

🎟 4. Ticket Management (CRUD)

Create, View, Edit, and Delete tickets.

Real-time form validation.

Success/error toasts for feedback.

Status color coding:

🟢 open → Green tone

🟠 in_progress → Amber tone

⚪ closed → Gray tone

Data saved in localStorage.

🎨 Design Consistency Rules
Element	Rule
Max Width	1440px, centered horizontally
Hero Section	Wavy SVG background
Decorative Shapes	At least two circles across site
Boxes	Rounded corners + shadow
Responsive	Works across mobile, tablet, and desktop
Colors	Open (Green), In Progress (Amber), Closed (Gray)
Accessibility	Semantic HTML, focus states, sufficient contrast
♿ Accessibility Features

Semantic structure (<main>, <section>, <article>, <header>, <footer>).

React 18+

React Router v6

React Toastify (for toasts)

LocalStorage API (for mock authentication)

CSS3 (Flexbox, Grid, svg)

🧩 Project Structure
ticketapp-react/
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   └── ProtectedRoute.js
│   ├── pages/
│   │   ├── LandingPage.js
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── Dashboard.js
│   │   └── TicketManagement.js
│   ├── styles/
│   │   ├── general.css
│   │   ├── LandingPage.css
│   │   ├── Dashboard.css
│   │   ├── TicketManagement.css
│   │   └── Auth.css
        └── LoginPage.css
|
│   ├── App.js
│   └── index.js
└── package.json

⚙️ Setup & Run Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/ticketapp-react.git
cd ticketapp-react

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm start


