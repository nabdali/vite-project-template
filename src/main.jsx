import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import Layout from "./Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<div>Home Content</div>} />
          <Route path="pricing" element={<div>Pricing Content</div>} />
          <Route path="contact" element={<div>Contact Content</div>} />
          <Route path="sign-in" element={<div>Sign In Content</div>} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);
