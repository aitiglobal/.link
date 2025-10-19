// src/pages/Contact.tsx — Halaman "Hubungi Kami" (premium)
import { motion } from "framer-motion";
import Constellation from "../components/Constellation";
import GradientBlob from "../components/GradientBlob";
import { ContactCard } from "../components/Cards";
import {
  CalendarClock,
  Handshake,
  Mail,
  ArrowRight,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="relative overflow-hidden">
      <GradientBlob />

      {/* HERO */}
      <section className="relative">
        <div className="relative mx-auto grid max-w-7xl items-start gap-8 px-4 pt-14 md:px-6 md:pt-20 md:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Animated constellation + soft aurora */}
          <Constellation className="pointer-events-none absolute -inset-x-8 -top-28 h-[420px] md:h-[520px] -z-10 opacity-60" points={40} />
          <div className="pointer-events-none absolute -top-24 -left-20 h-[400px] w-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(56,189,248,0.33),transparent)]" />
          <div className="pointer-events-none absolute -top-10 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(168,85,247,0.33),transparent)]" />

          {/* Kiri: judul + narasi */}
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/60 ring-1 ring-white/10">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Hubungi Kami</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            >
              Mari <span className="text-blue-400">Berkolaborasi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-base md:text-lg text-white/80 max-w-3xl"
            >
              Kami percaya inovasi sejati lahir dari kolaborasi. Baik Anda ingin melihat
              bagaimana solusi kami mentransformasi organisasi Anda, menjajaki kemitraan strategis,
              atau sekadar mempelajari visi kami—pilih jalur yang paling relevan, dan mari mulai percakapan yang produktif.
            </motion.p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:info@aitiglobal.link?subject=Permintaan%20Informasi%20-%20AITI%20GLOBAL%20NEXUS"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-[#0B1220] shadow hover:shadow-lg"
              >
                Kirim Email <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#opsi"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/5"
              >
                Lihat Opsi Kontak
              </a>
            </div>
          </div>

          {/* Kanan: tag perusahaan */}
          <aside className="md:col-span-4 md:justify-self-end">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/60">
                <Building2 className="h-3.5 w-3.5" />
                AITI GLOBAL NEXUS
              </div>
              <div className="mt-3 text-sm text-white/80">
                <p>Dibangun di NTT, untuk Indonesia</p>
                <p className="mt-1 text-white/60">Platform KAI — arsitektur kognitif terpaten.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PILIH OPSI */}
      <section id="opsi" className="mx-auto max-w-7xl px-4 pt-10 md:px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold">Pilih Jalur Anda</h2>
        <p className="mt-2 text-white/80 max-w-3xl">
          Tiga jalur yang kami siapkan agar percakapan fokus sejak awal.
        </p>

        <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Opsi 1: Demo */}
          <ContactCard
            icon={<CalendarClock className="h-5 w-5" />}
            title="Diskusi Produk & Demo"
            desc={
              "Untuk Calon Klien & Perusahaan.\n\n• Dengarkan tantangan spesifik Anda.\n• Tampilkan prototipe relevan.\n• Bahas use case & estimasi dampak (ROI)."
            }
            href={
              // TODO: ganti ke link Calendly/form begitu siap
              "mailto:info@aitiglobal.link?subject=Jadwalkan%20Demo%2030%20Menit&body=Tuliskan%20ringkas%20kebutuhan%20dan%20waktu%20yang%20diinginkan."
            }
            ctaText="Jadwalkan Sesi Demo"
          />

          {/* Opsi 2: Kemitraan/Investasi */}
          <ContactCard
            icon={<Handshake className="h-5 w-5" />}
            title="Kemitraan & Investasi"
            desc={
              "Untuk Investor, Mitra Teknologi & Institusi Riset.\n\n• Sinergi teknologi & integrasi.\n• Peluang investasi tahap awal (seed).\n• Kolaborasi riset terapan Platform KAI."
            }
            href={"mailto:partners@aitiglobal.link?subject=Kemitraan%20%2F%20Investasi%20-%20AITI%20GLOBAL%20NEXUS"}
            ctaText="Hubungi Tim Pendiri (Email)"
          />

          {/* Opsi 3: Umum & Media */}
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            title="Pertanyaan Umum & Media"
            desc={
              "Untuk Jurnalis, Analis Industri & Umum.\n\nKirim pertanyaan, permintaan wawancara, atau informasi pers—tim kami akan meneruskan ke departemen terkait."
            }
            href={"mailto:info@aitiglobal.link?subject=Pertanyaan%20Umum%20%2F%20Media"}
            ctaText="Kirim Email"
          />
        </div>

        {/* Note kecil */}
        <div className="mt-6 text-sm text-white/60">
          *Jika Anda lebih nyaman via WhatsApp/telepon, balas email awal—kami kirimkan kontak langsung tim terkait.
        </div>
      </section>
    </main>
  );
}
