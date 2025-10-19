// src/pages/About.tsx — Halaman "Visi Kami" (premium + tilt avatar + patent strip)
import { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import Constellation from "../components/Constellation";
import GradientBlob from "../components/GradientBlob";
import {
  Sparkles,
  Quote,
  Building2,
  MapPin,
  ShieldCheck,
  Layers,
  Shield,
  Brain,
} from "lucide-react";

// Foto tim
import AS from "../assets/AS.png";     // Albert Gideon Sinlae
import ODPL from "../assets/ODPL.png"; // Olif Dian Putra Lalus
import PC from "../assets/PC.png";     // Albertinus Yos Perry Clemens
import IM from "../assets/IM.png";     // Leonardus K.H. Manggol
import AD from "../assets/AD.png";     // Fransisko A.D. Djemalu

type Member = {
  name: string;
  role: string;
  desc: string;
  photo?: string;
};

/* ------------------------- UI atoms ------------------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/60 ring-1 ring-white/10">
      <Sparkles className="h-3.5 w-3.5" />
      <span>{children}</span>
    </div>
  );
}

function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* foto hero (opsional) */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: "url('/assets/ntt-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/40 via-[#0B1220]/70 to-[#0B1220]" />
      {/* aurora blobs */}
      <div className="absolute -top-24 -left-32 h-[420px] w-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(56,189,248,0.35),transparent)]" />
      <div className="absolute -top-16 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(168,85,247,0.35),transparent)]" />
    </div>
  );
}

/* ------------------------- Tilt (parallax ringan) ------------------------- */
function TiltBox({
  children,
  className = "",
  maxTilt = 8,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rX = mapToTilt(py, maxTilt); // rotateX berdasarkan Y
  const rY = mapToTilt(px, -maxTilt); // rotateY berdasarkan X (negatif agar arah pas)

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const _px = (e.clientX - rect.left) / rect.width;
    const _py = (e.clientY - rect.top) / rect.height;
    px.set(clamp01(_px));
    py.set(clamp01(_py));
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: rX,
        rotateY: rY,
        transformPerspective: 800,
        willChange: "transform",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
function mapToTilt(v: MotionValue<number>, max: number) {
  return useTransform(v, [0, 0.5, 1], [max, 0, -max]);
}
function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/* ------------------------- Avatar & Cards ------------------------- */
function Avatar({ src, name }: { src?: string; name: string }) {
  const initials = useMemo(() => {
    const parts = name.split(" ").filter(Boolean);
    const a = parts[0]?.[0] || "";
    const b = parts[parts.length - 1]?.[0] || "";
    return (a + b).toUpperCase();
  }, [name]);

  if (src) {
    return (
      <div className="relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
        <img src={src} alt={name} className="h-full w-full object-cover" loading="lazy" />
      </div>
    );
  }
  return (
    <div className="relative h-18 w-18 sm:h-20 sm:w-20 shrink-0 rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center justify-center">
      <span className="text-lg font-semibold text-white/90">{initials}</span>
    </div>
  );
}

function ProfileCard({ m }: { m: Member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-blue-400/20 via-violet-400/10 to-transparent" />
      <div className="relative z-[1] flex items-start gap-4">
        {/* Tilt pada avatar */}
        <TiltBox className="rounded-2xl">
          <Avatar src={m.photo} name={m.name} />
        </TiltBox>
        <div>
          <div className="text-[11px] uppercase tracking-wider text-white/60">Para Arsitek</div>
          <h4 className="mt-0.5 text-lg font-semibold leading-snug">{m.name}</h4>
          <div className="text-white/70">{m.role}</div>
        </div>
      </div>
      <p className="relative z-[1] mt-4 text-white/80 leading-relaxed">{m.desc}</p>
    </motion.div>
  );
}

/* ------------------------- Page ------------------------- */
export default function About() {
  const team: Member[] = [
    {
      name: "Albert Gideon Sinlae",
      role: "CEO & Chief Architect",
      desc:
        "Inovator-Pembangun dan inventor di balik paten KAI. Keahlian full-stack dari mobile (Flutter) hingga arsitektur serverless modern, memastikan visi AI yang dapat diaudit terwujud menjadi produk yang tangguh, aman, dan skalabel.",
      photo: AS,
    },
     {
      name: "Fransisko A.D. Djemalu",
      role: "CCO (Chief Commercial Officer)",
      desc:
        "Pembuka Pintu & Penerjemah Lapangan. Lebih dari satu dekade di strategi komersial, logistik, dan pemberdayaan ekonomi komunitas NTT — memetakan pintu masuk strategis untuk solusi kami.",
      photo: AD,
    },
    {
      name: "Albertinus Yos Perry Clemens",
      role: "COO (Chief Operating Officer)",
      desc:
        "Master Eksekusi Lapangan. Berpengalaman sebagai Manajer Pembangunan di BUMD Kawasan Industri — ahli manajemen proyek infrastruktur, koordinasi investor, dan navigasi pengadaan pemerintah.",
      photo: PC,
    },
   
    {
      name: "Leonardus K.H. Manggol",
      role: "CPAO (Chief Public Affairs Officer)",
      desc:
        "Navigator Kebijakan & Kelembagaan. Ahli Perencana Wilayah & Kota — menjembatani regulasi, kebijakan tata ruang, dan hubungan kelembagaan agar inovasi selaras prioritas pembangunan.",
      photo: IM,
    },
    {
      name: "Olif Dian Putra Lalus",
      role: "CPIO (Chief Product & Innovation Officer)",
      desc:
        "Visioner Produk & AI-Accelerated Engineering. Menjembatani teknologi KAI yang kompleks dengan kebutuhan pasar, memimpin AI-Accelerated Engineering, dan memastikan setiap solusi mencapai product-market fit.",
      photo: ODPL,
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <GradientBlob />

      {/* HERO premium */}
      <section className="relative">
        <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-4 pt-14 md:px-6 md:pt-20 md:grid-cols-12 lg:gap-12 xl:gap-16">
          <Aurora />
          <Constellation className="pointer-events-none absolute -inset-x-8 -top-28 h-[420px] md:h-[520px] -z-10 opacity-60" points={44} />

          {/* kiri: title */}
          <div className="md:col-span-8">
            <SectionEyebrow>Visi Kami</SectionEyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Lahir dari Kebutuhan Lokal, <span className="text-blue-400">untuk Dampak Nasional</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-base md:text-lg text-white/80 max-w-3xl"
            >
              Perjalanan kami dimulai di Nusa Tenggara Timur—di tengah tantangan nyata—dan tumbuh menjadi misi
              membangun fondasi AI yang andal, kontekstual, dan akuntabel.
            </motion.p>

           </div>
        </div>
      </section>

      

      {/* cerita lengkap — dua kolom di desktop */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-10">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 md:p-10 ring-1 ring-white/10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Perjalanan kami tidak dimulai di ruang rapat dewan direksi di Jakarta. Ia dimulai di Nusa Tenggara Timur,
                di tengah-tengah tantangan nyata yang dihadapi oleh komunitas kami. Sebagai tim pengembang dan praktisi teknologi,
                kami terjun langsung membangun aplikasi untuk membuat perbedaan—membantu petani, berkolaborasi dengan pemerintah
                daerah, dan menyelami kompleksitas layanan publik di akar rumput.
              </p>
              <p>
                Dalam proses itu kami menabrak tembok. Alat AI canggih gagal memahami konteks lokal, sering tidak akurat, dan
                beroperasi sebagai kotak hitam yang sulit dipertanggungjawabkan. Kami menyimpulkan: masalahnya bukan di
                aplikasi, melainkan di otak di baliknya.
              </p>
            </div>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Kami melakukan riset fundamental untuk merancang arsitektur AI yang sesuai realitas enterprise dan pemerintahan—
                menuntut keandalan, konteks, dan akuntabilitas. Hasilnya adalah Platform KAI—cetakan biru yang kini dilindungi paten.
              </p>
              <p>
                Hari ini, AITI GLOBAL NEXUS berdiri sebagai bukti perjalanan tersebut: perusahaan deep-tech yang lahir dari masalah nyata.
                Misi kami: menggunakan teknologi yang ditempa di NTT ini sebagai blueprint untuk memberdayakan seluruh nusantara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-12 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Para Arsitek di Balik Transformasi</h2>
            <p className="mt-2 text-white/80 max-w-3xl">
              Tim multidisiplin yang menyeimbangkan riset deep-tech dan eksekusi lapangan — memastikan solusi
              kami canggih secara teknis, relevan secara konteks, dan bisa dijalankan di dunia nyata.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <ProfileCard key={m.name} m={m} />
          ))}
        </div>
      </section>
    </main>
  );
}
