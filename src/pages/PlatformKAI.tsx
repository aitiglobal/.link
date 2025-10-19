// src/pages/PlatformKAI.tsx
import Constellation from "../components/Constellation";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import GradientBlob from "../components/GradientBlob";
import {
  AlertTriangle,
  History,
  User,
  Users,
  ShieldCheck,
  GitBranch,
  Brain,
  Sparkles,
  Activity,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ----------------------------- utilities ----------------------------- */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const ios: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
        { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
      );
      io.observe(el);
      ios.push(io);
    });
    return () => ios.forEach((i) => i.disconnect());
  }, [ids]);
  return active;
}

/* --------------------------- shared components --------------------------- */
function PremiumCard({
  icon,
  title,
  eyebrow,
  desc,
  accent = "blue",
}: {
  icon: React.ReactNode;
  title: string;
  eyebrow?: string;
  desc: string;
  accent?: "blue" | "emerald" | "violet" | "amber";
}) {
  const ring = useMemo(() => {
    switch (accent) {
      case "emerald":
        return "from-emerald-400/30 via-emerald-500/20 to-transparent";
      case "violet":
        return "from-violet-400/30 via-violet-500/20 to-transparent";
      case "amber":
        return "from-amber-400/30 via-amber-500/20 to-transparent";
      default:
        return "from-blue-400/30 via-blue-500/20 to-transparent";
    }
  }, [accent]);

  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1">
      <div className={`pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${ring}`} />
      <div className="relative z-[1]">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            {icon}
          </div>
          <div>
            {eyebrow && (
              <div className="text-[11px] uppercase tracking-wider text-white/60">
                {eyebrow}
              </div>
            )}
            <h4 className="text-lg font-semibold leading-snug">{title}</h4>
          </div>
        </div>
        <p className="mt-3 text-white/80">{desc}</p>
      </div>
    </div>
  );
}

function BlackBoxWindow() {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur">
      <div className="rounded-2xl bg-black/60 p-5 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.08),transparent_35%)]" />
        <div className="flex items-center justify-between text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <Brain className="h-3.5 w-3.5" />
            Black Box — Windowed Trace
          </span>
          <span className="inline-flex items-center gap-1">
            <Activity className="h-3.5 w-3.5" /> p95: 73ms
          </span>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex gap-3 items-start">
            <span className="text-lg leading-none">👤</span>
            <p className="text-white/90">
              Permintaan: “Rancang kebijakan akses PII untuk model & jalankan guardrails.”
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg leading-none">🧠</span>
            <div className="text-white/90">
              <p className="font-medium">Orkestrasi:</p>
              <ul className="mt-1 list-disc pl-5 text-white/80">
                <li>Analyst Policy → parsing policy-as-code.</li>
                <li>Compliance Agent → cek GDPR/HIPAA.</li>
                <li>Approver → redaksi/log/approve.</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg leading-none">📚</span>
            <p className="text-white/90">Memori Kausal: referensi keputusan & relasi entitas.</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg leading-none">🛡️</span>
            <p className="text-white/90">Pipeline Imunisasi: verifikasi silang, karantina, rekonsiliasi.</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-white/10 p-3 text-xs text-white/80">
          <strong>Output:</strong> Akses granular diset. PII dilindungi. Jejak audit tersimpan.
        </div>
      </div>
    </div>
  );
}

/* --------------------- vertical connected pillars (premium) --------------------- */
type Accent = "blue" | "emerald" | "violet";
function accentClasses(a: Accent) {
  switch (a) {
    case "emerald":
      return {
        dot: "bg-emerald-400/80 ring-emerald-300/40",
        iconBg: "bg-emerald-500/15",
        glow: "from-emerald-400/25",
      };
    case "violet":
      return {
        dot: "bg-violet-400/80 ring-violet-300/40",
        iconBg: "bg-violet-500/15",
        glow: "from-violet-400/25",
      };
    default:
      return {
        dot: "bg-blue-400/80 ring-blue-300/40",
        iconBg: "bg-blue-500/15",
        glow: "from-blue-400/25",
      };
  }
}

function PillarNode({
  accent,
  icon,
  title,
  desc,
  to,
}: {
  accent: Accent;
  icon: React.ReactNode;
  title: string;
  desc: string;
  to?: string; // optional deep-link
}) {
  const c = accentClasses(accent);
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45 }}
      className="relative pl-16"
    >
      {/* node dot */}
      <div className={`absolute left-6 top-5 h-3.5 w-3.5 rounded-full ring-4 ${c.dot}`} />
      {/* card */}
      <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5">
        <div className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${c.glow} via-transparent to-transparent`} />
        <div className="relative z-[1] flex items-start gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.iconBg} ring-1 ring-white/10`}>
            {icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="mt-2 text-white/80">{desc}</p>
            {to && (
              <Link
                to={to}
                className="mt-3 inline-flex items-center gap-1 text-sm text-white/90 hover:text-white"
              >
                Pelajari modul <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

function VerticalPillars() {
  return (
    <div className="relative mt-6">
      {/* spine / connector */}
      <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-emerald-400/40 to-violet-400/50" />
      <ol className="space-y-5">
        <PillarNode
          accent="blue"
          icon={<Users className="h-6 w-6" />}
          title="Keahlian Sesuai Tugas (Orkestrasi Dinamis)"
          desc="‘Manajer proyek cerdas’ yang merakit tim agen AI spesialis paling relevan per tugas—akurasi & efisiensi meningkat drastis."
          to="/platform-kai/orkestrasi"
        />
        <PillarNode
          accent="emerald"
          icon={<GitBranch className="h-6 w-6" />}
          title="Konteks yang Mendalam (Memori Kausal)"
          desc="Graf pengetahuan jangka panjang: memetakan entitas & mencatat ‘mengapa’ di balik keputusan—memahami alur cerita bisnis secara utuh."
          to="/platform-kai/memori"
        />
        <PillarNode
          accent="violet"
          icon={<ShieldCheck className="h-6 w-6" />}
          title="Fakta yang Terverifikasi (Pipeline Imunisasi)"
          desc="Setiap data baru wajib melewati karantina dan verifikasi silang sebelum masuk basis pengetahuan—bertindak sebagai ‘sistem kekebalan’."
          to="/platform-kai/imunisasi"
        />
      </ol>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */
export default function PlatformKAI() {
  const sections = ["why", "architecture", "vision"];
  const active = useActiveSection(sections);

  return (
    <section className="relative overflow-hidden">
      <GradientBlob />

      {/* HERO */}
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pt-14 md:px-6 md:pt-20 md:grid-cols-12 lg:gap-12 xl:gap-16">
        {/* Animated constellation background */}
        <Constellation
          className="pointer-events-none absolute -inset-x-8 -top-24 h-[420px] md:h-[520px] -z-10 opacity-60"
          points={48}
        />

        <div className="md:col-span-8">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Platform KAI: <span className="text-blue-400">Otak</span> di Balik Transformasi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-base md:text-lg text-white/80 max-w-3xl"
          >
            Bukan sekadar model AI—melainkan arsitektur tata kelola cerdas yang
            mengubah AI dari kotak hitam menjadi mitra strategis yang transparan.
          </motion.p>

          <BlackBoxWindow />
        </div>

        {/* Sticky TOC */}
        <aside className="md:col-span-4 order-first md:order-last">
          <div className="md:sticky md:top-24">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-xs uppercase tracking-wider text-white/60 mb-2 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Navigasi
              </div>
              <ul className="space-y-1 text-sm">
                {[
                  { id: "why", label: "Tiga Lapisan Masalah" },
                  { id: "architecture", label: "Arsitektur Tiga Pilar" },
                  { id: "vision", label: "Visi Jangka Panjang" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() =>
                        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                      }
                      className={`w-full text-left rounded-xl px-3 py-2 transition ${
                        active === item.id ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* WHY */}
      <div id="why" className="mx-auto max-w-7xl px-4 md:px-6 pt-14">
        <h2 className="text-2xl md:text-3xl font-bold">
          Mengapa Kami Membangun ‘Otak’ Kami Sendiri?
        </h2>
        <p className="mt-3 text-white/80 md:max-w-4xl">
          Platform KAI lahir dari frustrasi nyata saat AI generik diterapkan
          pada masalah enterprise. Ada tiga lapisan masalah fundamental yang
          menghalangi adopsi AI yang bertanggung jawab.
        </p>

        <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          <PremiumCard
            accent="amber"
            icon={<AlertTriangle className="h-6 w-6" />}
            eyebrow="Kegagalan Teknis"
            title="Masalah ‘Kotak Hitam’ yang Rapuh"
            desc="Tidak ada memori jangka panjang, rentan halusinasi, dan sulit diaudit—berbahaya untuk keputusan krusial."
          />
          <PremiumCard
            accent="blue"
            icon={<History className="h-6 w-6" />}
            eyebrow="Kegagalan Operasional"
            title="Inefisiensi & Pemborosan Tersembunyi"
            desc="Satu-ukuran-untuk-semua itu mahal. ‘Pajak kontekstual’ dibayar berulang hanya untuk mengingatkan AI."
          />
          <PremiumCard
            accent="violet"
            icon={<User className="h-6 w-6" />}
            eyebrow="Kegagalan Tata Kelola"
            title="Kekosongan Akuntabilitas"
            desc="Kotak hitam memutus rantai tanggung jawab—sulit diterima regulator, dewan, atau pengadilan."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 pl-5 ring-1 ring-white/[0.08] flex items-center gap-3"
        >
          <Brain className="h-5 w-5 text-white/80" />
          <p className="text-sm md:text-base text-white/90">
            Masalah-masalah ini tidak bisa ditambal—harus diselesaikan pada level
            arsitektur. Itulah mengapa kami merancang Platform KAI.
          </p>
        </motion.div>
      </div>

      {/* ARCHITECTURE – vertical connected timeline */}
      <div id="architecture" className="mx-auto max-w-7xl px-4 md:px-6 pt-14">
        <h3 className="text-xl md:text-2xl font-bold">
          Arsitektur Tiga Pilar Kami <span className="text-white/50">(Paten No. P00202509686)</span>
        </h3>
        <p className="mt-3 text-white/80 md:max-w-4xl">
          Lapisan tata kelola cerdas memastikan setiap aksi AI dapat diorkestrasi, diingat,
          dan diverifikasi. Visual berikut menunjukkan tiga kemampuan inti sebagai satu
          kesatuan sistem—terhubung oleh “spine” arsitektur.
        </p>

        <VerticalPillars />
      </div>

      {/* VISION */}
      <div id="vision" className="mx-auto max-w-7xl px-4 md:px-6 pt-14 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-10 ring-1 ring-white/10">
          <h3 className="text-xl md:text-2xl font-bold">Dari NTT ke Nusantara: Mesin Solusi Universal</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            
          </div>
          <div className="mt-4 space-y-3 text-white/80 md:max-w-4xl">
             Kami akan membuktikannya di medan tersulit lebih dulu—Nusa Tenggara Timur—sebagai
              batu uji menuju skala nasional.
                        <p>
              Setelah fondasi ini terbukti, visi kami adalah membuka Platform KAI untuk
              mendorong inovasi di seluruh industri Indonesia.
            </p>
                    <div className="mt-6">
            <Link
              to="/kontak"
              className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-[#0B1220] shadow hover:shadow-lg"
            >
              Diskusikan Implementasi KAI
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
