import { Outlet, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./components/Logo";

export default function App() {
  const [open, setOpen] = useState(false);

  const nav = [
    { name: "Solusi Kami", to: "/solusi" },
    { name: "Platform KAI", to: "/platform-kai" },
    { name: "Visi Kami", to: "/visi-kami" },
    { name: "Hubungi Kami", to: "/kontak" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1220] text-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <p className="font-semibold tracking-wide">AITI GLOBAL NEXUS</p>
              <p className="text-[11px] text-white/60">Dibangun di NTT, untuk Indonesia</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm px-1 py-1 rounded-xl ${isActive ? "text-white" : "text-white/80 hover:text-white"}`
                }
              >
                {n.name}
              </NavLink>
            ))}
            <NavLink
              to="/kontak"
              className="rounded-2xl bg-white text-[#0B1220] px-4 py-2 text-sm font-semibold shadow hover:shadow-lg"
            >
              Get Access
            </NavLink>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span>≡</span>
          </button>
        </nav>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-[#0B1220]">
            <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 grid gap-2">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/5"
                >
                  {n.name}
                </NavLink>
              ))}
              <NavLink
                to="/kontak"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white text-[#0B1220] px-3 py-2 text-center font-semibold"
              >
                Get Access
              </NavLink>
            </div>
          </div>
        )}
      </header>

      {/* Halaman */}
      <Outlet />

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <Logo small />
              <span className="text-white/60">
                © {new Date().getFullYear()} PT AITI GLOBAL NEXUS. All Rights Reserved.
              </span>
            </div>
            <div className="flex gap-6 text-white/60">
              <NavLink to="/platform-kai" className="hover:text-white">Platform KAI</NavLink>
              <NavLink to="/visi-kami" className="hover:text-white">Visi Kami</NavLink>
              <NavLink to="/kontak" className="hover:text-white">Hubungi Kami</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
