// src/data/solutions.ts
import TaniMandiri from "../assets/TaniMandiri.png";
import AsistenGuru from "../assets/AsistenGuru.png";
import CegahStuntin from "../assets/CegahStuntin.png"; // pastikan nama file persis

export type Accent = "blue" | "emerald" | "amber" | "violet";

export type Item = {
  id: string;
  title: string;
  accent: Accent;
  problemShort: string;
  problemFull: string;
  solutionFull: string;
  imageSrc?: string; // NEW
  imageAlt?: string; // NEW
};

export type Pillar = {
  id: "sda" | "sdm" | "governance";
  name: string;
  dotClass: string;
  items: Item[];
};

export const PILLARS: Pillar[] = [
  {
    id: "sda",
    name: "Pemberdayaan Sumber Daya Alam (SDA)",
    dotClass: "bg-emerald-400/80",
    items: [
      {
        id: "tani-mandiri",
        title: "Tani Mandiri™",
        accent: "emerald",
        problemShort:
          "Petani bergulat dengan ketidakpastian cuaca dan praktik coba-coba—risiko gagal panen serta ketergantungan pada tengkulak.",
        problemFull:
          "Petani kerap mengandalkan intuisi dalam menentukan jadwal tanam, dosis pupuk, hingga mitigasi hama. Ketidakpastian cuaca serta minimnya rekomendasi presisi menjadikan produktivitas rentan dan posisi tawar lemah.",
        solutionFull:
          "Asisten agrikultur cerdas yang memberi rekomendasi pertanian presisi (jadwal tanam, dosis pupuk, prediksi hama) melalui antarmuka sederhana di ponsel. Fokus pada peningkatan potensi panen serta penguatan posisi tawar petani.",
        imageSrc: TaniMandiri,
        imageAlt: "Tangkapan layar Tani Mandiri",
      },
      {
        id: "nelayan-pintar",
        title: "Nelayan Pintar™",
        accent: "blue",
        problemShort:
          "Nelayan tradisional sulit menemukan zona ikan produktif dan menghadapi risiko keselamatan—membuang waktu dan bahan bakar.",
        problemFull:
          "Rute melaut sering berdasarkan kebiasaan. Minimnya informasi cuaca real-time dan pola sebaran ikan menyebabkan perjalanan sia-sia dan risiko keselamatan meningkat.",
        solutionFull:
          "Informasi zona potensi ikan berbasis data satelit, prediksi cuaca maritim akurat, dan harga pasar terkini—mendorong keselamatan serta efisiensi tangkapan.",
        // imageSrc: (belum ada) -> akan pakai placeholder elegan di UI
      },
      {
        id: "desa-wisata",
        title: "Desa Wisata™",
        accent: "amber",
        problemShort:
          "Banyak desa berpotensi wisata, namun belum punya alat profesional untuk manajemen, promosi, dan analitik.",
        problemFull:
          "Potensi wisata lokal sering tak terkelola karena keterbatasan sistem reservasi, promosi sporadis, dan ketiadaan analitik pengunjung untuk keputusan yang berbasis data.",
        solutionFull:
          "Platform untuk BUMDes & komunitas: kelola inventaris/homestay, promosi digital, serta analitik pengunjung—mendorong keputusan strategis dan berkelanjutan.",
      },
    ],
  },
  {
    id: "sdm",
    name: "Pemberdayaan Sumber Daya Manusia (SDM)",
    dotClass: "bg-violet-400/80",
    items: [
      {
        id: "asisten-guru",
        title: "Asisten Guru™",
        accent: "violet",
        problemShort:
          "Guru di daerah 3T—terutama non-spesialis—sering terisolasi dari materi ajar berkualitas dan dukungan kurikulum.",
        problemFull:
          "Keterbatasan akses membuat guru kesulitan menyiapkan bahan ajar relevan, kontekstual, dan praktis dalam waktu singkat.",
        solutionFull:
          "Rekan mengajar virtual: guru bertanya via WhatsApp (mis. 'besok ajar siklus air kelas 4'), KAI menyusun RPP praktis sesuai kurikulum dan kearifan lokal.",
        imageSrc: AsistenGuru,
        imageAlt: "Tangkapan layar Asisten Guru",
      },
      {
        id: "stunting-ntt",
        title: "Cegah Stunting NTT™ (Konsep)",
        accent: "blue",
        problemShort:
          "Stunting tetap kritis—diperparah akses rekomendasi gizi yang tak kontekstual dan keterlambatan deteksi risiko.",
        problemFull:
          "Orang tua dan kader Posyandu membutuhkan panduan gizi yang mudah dipraktikkan berbasis pangan lokal dan alat pantau tumbuh kembang yang tepercaya.",
        solutionFull:
          "Aplikasi rekomendasi gizi personal berbasis pangan lokal + pelacak tumbuh kembang dengan peringatan dini risiko—menutup kesenjangan informasi kritis.",
        imageSrc: CegahStuntin,
        imageAlt: "Tangkapan layar Cegah Stunting NTT",
      },
    ],
  },
  {
    id: "governance",
    name: "Tata Kelola & Layanan Publik yang Responsif",
    dotClass: "bg-blue-400/80",
    items: [
      {
        id: "satu-respon",
        title: "Satu Respon™",
        accent: "blue",
        problemShort:
          "Laporan warga sering tidak terstruktur, sulit dilacak, dan lambat ditangani—menimbulkan frustrasi publik.",
        problemFull:
          "Saluran pelaporan multipel dan manual membuat prioritas kabur serta tindak lanjut lambat.",
        solutionFull:
          "Platform pelaporan cerdas: laporan diprioritaskan, dipetakan, dan diteruskan otomatis ke dinas terkait—respons cepat dan berbasis data.",
      },
      {
        id: "jalan-beta",
        title: "Jalan Beta™",
        accent: "emerald",
        problemShort:
          "Pemantauan ribuan km jalan mengandalkan laporan manual yang sering tak akurat dan sulit diverifikasi.",
        problemFull:
          "Tanpa verifikasi lokasi otomatis, banyak laporan tak dapat ditindak cepat dan presisi.",
        solutionFull:
          "Aplikasi pemantauan infrastruktur: laporan jalan rusak terverifikasi koordinat (via citra/satelit) dan terpetakan real time—dasbor presisi untuk perencanaan perbaikan.",
      },
      {
        id: "desa-cerdas",
        title: "Desa Cerdas (RAG Desa)™ (Konsep)",
        accent: "amber",
        problemShort:
          "Aparat desa kewalahan dengan dokumen/peraturan kompleks—memperlambat keputusan.",
        problemFull:
          "Mencari pasal relevan secara manual memakan waktu dan rentan keliru.",
        solutionFull:
          "Asisten dokumen berbasis RAG: tanya bahasa natural (mis. 'syarat Dana Desa tahap 2?'), KAI mencari, merangkum, dan menyajikan jawaban terverifikasi.",
      },
    ],
  },
];

export const ALL_ITEMS: Item[] = PILLARS.flatMap((p) => p.items);

export function findSolutionById(id: string) {
  return ALL_ITEMS.find((i) => i.id === id) || null;
}
