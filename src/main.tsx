// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App"; // layout global (header/footer)
import Home from "./pages/Home";
import Prototypes from "./pages/Prototypes";
import SolutionDetail from "./pages/SolutionDetail"; // <- pakai ekstensi .tsx
import PlatformKAI from "./pages/PlatformKAI";
import About from "./pages/About";
import Contact from "./pages/Contact";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Parent layout harus punya path="/" */}
        <Route path="/" element={<App />}>
          {/* index = "/" */}
          <Route index element={<Home />} />

          {/* /solusi (grid) & /solusi/:id (halaman penuh) */}
          <Route path="solusi" element={<Prototypes />} />
          <Route path="solusi/:id" element={<SolutionDetail />} />

          {/* Halaman lain */}
          <Route path="platform-kai" element={<PlatformKAI />} />
          <Route path="visi-kami" element={<About />} />
          <Route path="kontak" element={<Contact />} />

          {/* Back-compat (opsional) */}
          <Route path="prototypes" element={<Prototypes />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
