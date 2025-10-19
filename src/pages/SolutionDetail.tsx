// src/pages/SolutionDetail.tsx
import { useMemo } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { PILLARS, findSolutionById, ALL_ITEMS, type Accent } from "../data/solutions";

function ImageArea({ accent = "blue", imageSrc, imageAlt }: { accent?: Accent; imageSrc?: string; imageAlt?: string }) {
  if (imageSrc) {
    return (
      <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
        <img src={imageSrc} alt={imageAlt || "Snapshot"} className="w-full h-auto object-cover" />
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
    <div className={["relative w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br", p.from, p.to, "aspect-video"].join(" ")}>
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
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
    </div>
  );
}

export default function SolutionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = id ? findSolutionById(id) : null;

  const { prev, next } = useMemo(() => {
    if (!id) return { prev: null, next: null };
    const idx = ALL_ITEMS.findIndex((x) => x.id === id);
    return {
      prev: idx > 0 ? ALL_ITEMS[idx - 1] : null,
      next: idx >= 0 && idx < ALL_ITEMS.length - 1 ? ALL_ITEMS[idx + 1] : null,
    };
  }, [id]);

  if (!item) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 md:px-6">
        <h1 className="text-2xl font-bold">Solusi tidak ditemukan</h1>
        <p className="mt-2 text-white/70">Periksa URL atau kembali ke daftar solusi.</p>
        <div className="mt-6">
          <Link to="/solusi" className="rounded-2xl bg-white text-[#0B1220] px-4 py-2 font-semibold">
            Kembali ke Solusi
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      {/* breadcrumb */}
      <div className="text-sm text-white/60">
        <Link to="/solusi" className="hover:text-white">
          Solusi Kami
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white/80">{item.title}</span>
      </div>

      <div className="mt-4 grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7 md:pr-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">{item.title}</h1>
          <p className="mt-3 text-white/80">
            Di bawah adalah ringkasan masalah inti yang kami pecahkan dan pendekatan arsitektural KAI pada solusi ini.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10">
              <p className="text-[11px] uppercase tracking-wide text-white/50">Masalah</p>
              <p className="mt-1 text-white/90 leading-relaxed">{item.problemFull}</p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
              <p className="text-[11px] uppercase tracking-wide text-white/60">Solusi KAI</p>
              <p className="mt-1 text-white/95 leading-relaxed">{item.solutionFull}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => navigate("/solusi")} className="rounded-2xl bg-white text-[#0B1220] px-4 py-2 font-semibold">
              Kembali ke Solusi
            </button>
            {prev && (
              <Link to={`/solusi/${prev.id}`} className="rounded-2xl border border-white/15 px-4 py-2 text-white/90 hover:bg-white/5">
                ← {prev.title}
              </Link>
            )}
            {next && (
              <Link to={`/solusi/${next.id}`} className="rounded-2xl border border-white/15 px-4 py-2 text-white/90 hover:bg-white/5">
                {next.title} →
              </Link>
            )}
          </div>
        </div>

        <div className="md:col-span-5">
          <ImageArea
            accent={item.accent}
            // @ts-ignore: properti opsional dari data
            imageSrc={(item as any).imageSrc}
            // @ts-ignore
            imageAlt={(item as any).imageAlt || item.title}
          />
          {/* daftar pilar untuk konteks */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-[11px] uppercase tracking-wide text-white/60 mb-2">Konteks Pilar</p>
            <ul className="space-y-2 text-sm text-white/80">
              {PILLARS.map((p) => (
                <li key={p.id} className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${p.dotClass}`} />
                  {p.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
