import { motion } from "framer-motion";
import GradientBlob from "../components/GradientBlob";
import {
  Users,
  History,
  ShieldCheck,
  Brain,
  User,
  Search,
  Pencil,
  CheckCircle2,
  GitBranch,
} from "lucide-react";
import { PillarCard, ProofCard } from "../components/Cards";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <GradientBlob />

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:gap-12 xl:gap-16 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
        {/* KIRI */}
        <div className="md:col-span-7 md:pr-8 lg:pr-12 xl:pr-16">
          <motion.h1
            data-testid="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Dibangun di <span className="text-blue-400">NTT</span>, untuk{" "}
            <span className="text-blue-400">Indonesia</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-base md:text-lg text-white/80 max-w-2xl"
          >
            Lahir dari kebutuhan nyata di NTT, KAI bukanlah sekadar AI. Ini
            adalah arsitektur kognitif—sebuah Otak yang kami rancang untuk
            menalar, mengingat, dan memverifikasi. Kami hadir dengan bukti:
            keberhasilan meningkatkan efisiensi hingga 87% pada mitra lokal,
            membuktikan solusi dari akar rumput dan siap untuk skala nasional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3"
          >
            <a
              href="/prototypes"
              className="w-full sm:w-auto text-center rounded-2xl bg-white px-5 py-3 font-semibold text-[#0B1220] shadow hover:shadow-lg"
            >
              Lihat Solusi Kami
            </a>
            <a
              href="/platform-kai"
              className="w-full sm:w-auto text-center rounded-2xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/5"
            >
              Pelajari Platform Inti
            </a>
          </motion.div>
        </div>

        {/* KANAN: JEJAK ORKESTRASI – ikon polos (tanpa kotak) */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          data-testid="hero-right-card"
          className="relative md:col-span-5 md:justify-self-end w-full max-w-[520px] md:mt-6 lg:mt-8"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-xl ring-1 ring-white/10 backdrop-blur">
            <div className="rounded-2xl bg-black/60 p-4">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Jejak KAI</span>
                <span>p95: 73ms</span>
              </div>
              <div className="mt-3 space-y-3 text-sm text-white/90">
                <div className="flex gap-3 items-start">
                  <div className="text-lg leading-none">👤</div>
                  <p>Permintaan Anda: "Rangkum sentimen pasar terkini untuk 'Proyek Solar Panel NTT' dan draf email untuk investor potensial."</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="text-lg leading-none">🧠</div>
                  <div>
                    <p className="font-medium text-white/90">KAI Merencanakan Alur Kerja:</p>
                    <ul className="mt-1 list-disc pl-5 text-white/80 space-y-1">
                      <li>Agen 'Analis Data' akan menganalisis berita terkini.</li>
                      <li>Agen 'Ahli Strategi' akan merumuskan poin-poin kunci.</li>
                      <li>Agen 'Penulis' akan menyusun draf akhir.</li>
                    </ul>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="text-lg leading-none">🔍</div>
                  <p>
                    KAI Menganalisis &amp; Memverifikasi: "Agen 'Analis Data' mengakses snapshot memori terakhir, menemukan 3 artikel baru. Artikel-artikel tersebut kini sedang diverifikasi silang (
                    <span className="font-medium">Pipeline Imunisasi</span>
                    ) dengan sumber data A, B, dan C..."
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="text-lg leading-none">✍️</div>
                  <p>KAI Melaporkan Progres: "Verifikasi selesai. Agen 'Ahli Strategi' telah merumuskan 3 poin utama. Agen 'Penulis' sekarang sedang menyusun draf email berdasarkan hasil analisis dan strategi."</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-white/10 p-3 text-xs text-white/80">
                <strong>Output:</strong> Rangkuman sentimen dan draf email siap.
                Seluruh proses, sumber, dan keputusan tercatat dalam Execution
                Manifest untuk audit.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BAGIAN 2: MASALAH FUNDAMENTAL */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Mengapa Kami Membangun 'Otak' Kami Sendiri?
        </h2>

        {/* Dua paragraf penjelasan */}
        <div className="mt-3 md:max-w-4xl">
          <p className="text-white/80">
            AI generik memiliki kekuatan luar biasa, namun rapuh secara
            struktural—ia tidak bisa merencanakan, mengingat sejarah, atau
            menyaring kebohongan secara konsisten. Sebagai praktisi di
            lapangan, kami merasakan langsung betapa frustrasinya
            batasan-batasan ini. Itulah mengapa kami membangun Platform KAI:
            sebuah arsitektur kognitif terpaten yang menyelesaikan masalah ini
            dari akarnya.
          </p>
        </div>

        {/* JEMBATAN NARATIF */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-4 pl-5 ring-1 ring-white/[0.08] flex items-center gap-3"
        >
          <GitBranch className="h-5 w-5 text-white/80" />
          <p className="text-sm md:text-base text-white/90">
            Arsitektur ini kami bangun di atas tiga pilar fundamental:
          </p>
        </motion.div>
      </div>

      {/* TIGA PILAR – sudah interaktif & beraksen */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 pb-16 md:px-6"
      >
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
          <PillarCard
            accent="blue"
            icon={<Users className="h-6 w-6" />}
            eyebrow="Orkestrasi Dinamis"
            title="Tim AI Spesialis"
            desc="Lupakan pendekatan 'satu untuk semua'. Untuk setiap tugas, KAI merakit tim AI spesialis yang paling relevan, memastikan agen yang tepat selalu menangani pekerjaan Anda."
          />
          <PillarCard
            accent="emerald"
            icon={<History className="h-6 w-6" />}
            eyebrow="Memori Kausal"
            title="Memori Historis"
            desc="Setiap interaksi tidak dimulai dari nol. KAI membangun memori historis yang memahami alur cerita bisnis Anda dan mencatat 'mengapa' di balik setiap keputusan kunci yang Anda buat."
          />
          <PillarCard
            accent="amber"
            icon={<ShieldCheck className="h-6 w-6" />}
            eyebrow="Pipeline Imunisasi"
            title="Fakta Terverifikasi"
            desc="Informasi baru tidak langsung diterima. Setiap fakta dari luar harus melewati proses karantina dan verifikasi silang yang ketat untuk menyaring halusinasi."
          />
        </div>
      </motion.div>

      {/* BAGIAN 4: CTA */}
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold">
            Bergabunglah dalam Misi Kami.
          </h3>
          <p className="mt-3 text-white/80 max-w-3xl">
            Kami percaya inovasi besar berikutnya akan datang dari daerah.
            Jadilah bagian dari perjalanan untuk membangun teknologi yang
            memberdayakan Indonesia, dari akarnya.
          </p>
          <div className="mt-6">
            <a
              href="/kontak"
              className="inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-[#0B1220] shadow hover:shadow-lg"
            >
              Hubungi Tim Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
