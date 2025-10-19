// src/pages/Prototypes.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, BookOpen, Route } from "lucide-react";
import { PILLARS, type Item, type Accent, type Pillar } from "../data/solutions";

type Density = "comfortable" | "compact";

/* Snapshot gambar kalau tersedia, atau placeholder elegan */
function Snapshot({
  accent = "blue",
  imageSrc,
  imageAlt,
}: {
  accent?: Accent;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 aspect-video">
        <img
          src={imageSrc}
          alt={imageAlt || "Snapshot"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
      </div>
    );
  }
  const palette: Record<Accent, { from: string; to: string; grid: string }> = {
    blue: { from: "from-blue-500/20", to: "to-indigo-500/10", grid: "rgba(59,130,246,0.16)" },
    emerald: { from: "from-emerald-500/20", to: "to-teal-500/10", grid: "rgba(16,185,129,0.18)" },
    amber: { from: "from-amber-500/25", to: "to-orange-500/10", grid: "rgba(245,158,11,0.18)" },
    violet: { from: "from-violet-500/25", to: "to-fuchsia-500/10", grid: "rgba(139,92,246,0.18)" },
  };
  const p = palette[accent];
  return (
    <div className={["relative w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-br", p.from, p.to, "aspect-video"].join(" ")}>
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(255,255,255,0.14),transparent_40%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          // @ts-ignore
          ["--grid" as any]: p.grid,
        }}
      />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function SnapshotCard({
  item,
  density,
  onDetail,
}: {
  item: Item;
  density: Density;
  onDetail: (it: Item) => void;
}) {
  const pad = density === "compact" ? "p-3 sm:p-4" : "p-4 sm:p-5";
  const textTitle = density === "compact" ? "text-base" : "text-lg";
  return (
    <div className={["group rounded-3xl border border-white/10 bg-white/[0.04]", pad, "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"].join(" ")}>
      <Snapshot accent={item.accent} imageSrc={(item as any).imageSrc} imageAlt={(item as any).imageAlt} />
      <div className="mt-4">
        <h4 className={`${textTitle} font-semibold`}>{item.title}</h4>
        <div className="mt-3 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10 relative">
          <p className="text-[11px] uppercase tracking-wide text-white/50">Masalah</p>
          <div className="mt-1 text-sm text-white/80 leading-relaxed max-h-20 overflow-hidden">
            {item.problemShort}
          </div>
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 rounded-b-2xl bg-gradient-to-t from-[#0B1220] to-transparent" />
        </div>
        <div className="mt-4">
          <button
            onClick={() => onDetail(item)}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Prototypes() {
  const [density, setDensity] = useState<Density>("comfortable");
  const [active, setActive] = useState<Pillar["id"]>("sda");
  const navigate = useNavigate();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-pillar]"));
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setActive(v.target.id as Pillar["id"]);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const gridGaps = density === "compact" ? "gap-3 sm:gap-4 md:gap-5" : "gap-4 sm:gap-6";
  const gridCols = density === "compact" ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 md:grid-cols-3";

  const openDetail = (it: Item) => navigate(`/solusi/${it.id}`);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 scroll-smooth">
      <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Solusi Kami: <span className="text-blue-400">Aplikasi Nyata</span> untuk Masalah Nyata
        </h1>
        <p className="mt-3 text-white/80 max-w-4xl">
          Platform KAI adalah "Otak" sentral yang melahirkan aplikasi spesialis untuk tantangan paling mendesak di daerah.
          Berikut contoh nyata dari visi kami dalam aksi.
        </p>

        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          {/* TOC */}
          <nav className="rounded-2xl border border-white/10 bg-white/[0.04] ring-1 ring-white/10 px-2 py-2 md:px-3 md:py-2 sticky md:static top-20 z-30">
            <ul className="flex flex-wrap items-center gap-1 md:gap-2">
              <li>
                <a
                  href="#sda"
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                    active === "sda" ? "bg-white text-[#0B1220] font-semibold" : "text-white/80 hover:bg-white/5",
                  ].join(" ")}
                >
                  <Leaf className="h-4 w-4" /> SDA
                </a>
              </li>
              <li>
                <a
                  href="#sdm"
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                    active === "sdm" ? "bg-white text-[#0B1220] font-semibold" : "text-white/80 hover:bg-white/5",
                  ].join(" ")}
                >
                  <BookOpen className="h-4 w-4" /> SDM
                </a>
              </li>
              <li>
                <a
                  href="#governance"
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                    active === "governance" ? "bg-white text-[#0B1220] font-semibold" : "text-white/80 hover:bg-white/5",
                  ].join(" ")}
                >
                  <Route className="h-4 w-4" /> Tata Kelola
                </a>
              </li>
            </ul>
          </nav>

          {/* Density Switch */}
          <div
            role="group"
            aria-label="Tampilan Kartu"
            className="inline-flex rounded-2xl border border-white/10 bg-white/[0.04] ring-1 ring-white/10"
          >
            <button
              type="button"
              aria-pressed={density === "comfortable"}
              onClick={() => setDensity("comfortable")}
              className={[
                "px-4 py-2 text-sm rounded-l-2xl",
                density === "comfortable" ? "bg-white text-[#0B1220] font-semibold" : "text-white/80 hover:bg-white/5",
              ].join(" ")}
            >
              Comfortable
            </button>
            <button
              type="button"
              aria-pressed={density === "compact"}
              onClick={() => setDensity("compact")}
              className={[
                "px-4 py-2 text-sm rounded-r-2xl",
                density === "compact" ? "bg-white text-[#0B1220] font-semibold" : "text-white/80 hover:bg-white/5",
              ].join(" ")}
            >
              Compact
            </button>
          </div>
        </div>
      </motion.header>

      {/* Sections */}
      {PILLARS.map((pillar) => (
        <section key={pillar.id} id={pillar.id} data-pillar className="scroll-mt-28 mt-12">
          <div className="flex items-center gap-3">
            <div className={`h-2 w-2 rounded-full ${pillar.dotClass}`} />
            <h2 className="text-xl md:text-2xl font-bold">{pillar.name}</h2>
          </div>

          <div className={`mt-6 grid ${gridGaps} ${gridCols}`}>
            {pillar.items.map((it) => (
              <SnapshotCard key={it.id} item={it} density={density} onDetail={openDetail} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
