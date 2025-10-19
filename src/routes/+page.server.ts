import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.resolve('static', 'content.json');

function getDefaultContent() {
  return {
    meta: {
      title: 'PT AITI GLOBAL NEXUS - Konsultasi & Pelatihan AI',
      description:
        'PT AITI GLOBAL NEXUS menyediakan konsultasi dan pelatihan AI untuk UMKM, profesional, dan pemerintah. Akselerasi bisnis Anda dengan program AI kami.'
    },
    hero: { title: 'PT AITI GLOBAL NEXUS' },
    services: {
      title: 'Program Akselerasi AI Kami',
      subtitle:
        'Kami menyediakan program pelatihan dan konsultasi yang dirancang untuk memberdayakan setiap level organisasi Anda, dari UMKM hingga enterprise, dalam mengadopsi teknologi AI secara efektif.',
      pillars: [
        {
          title: 'Fondasi Digital (UMKM & Pemula)',
          icon: 'alert',
          cards: [
            {
              title: 'AI Kickstart untuk UMKM',
              target: 'Pemilik UMKM, Manajer Pemasaran.',
              objective:
                'Mampu menggunakan tools AI generatif untuk membuat konten pemasaran, merespon pelanggan, dan analisis pasar sederhana.',
              format: 'Workshop interaktif 1 hari (Online/Offline).'
            },
            {
              title: 'Otomatisasi Bisnis dengan AI',
              target: 'UMKM lebih maju, Manajer Operasional.',
              objective:
                'Mampu mengidentifikasi dan menerapkan tools AI no-code untuk efisiensi proses bisnis (rekap data, penjadwalan).',
              format: 'Workshop 2 hari dengan studi kasus.'
            }
          ]
        },
        {
          title: 'Akselerasi Profesional (Pekerja & Tim)',
          icon: 'users-check',
          cards: [
            {
              title: 'AI for Professionals',
              target: 'Profesional Marketing, HR, Keuangan, Operasional.',
              objective:
                'Memberikan playbook dan use case AI spesifik per fungsi departemen untuk meningkatkan produktivitas.',
              format: 'Seri webinar bersertifikat (4 sesi).'
            },
            {
              title: 'Data-Driven Decision Making',
              target: 'Analis Bisnis, Manajer Produk.',
              objective:
                'Mampu menggunakan tools AI untuk membersihkan, menganalisis, dan memvisualisasikan data tanpa perlu coding mendalam.',
              format: 'Pelatihan online intensif dengan proyek akhir.'
            }
          ]
        },
        {
          title: 'Kepemimpinan Strategis',
          icon: 'star',
          cards: [
            {
              title: 'AI for Leaders Roundtable',
              target: 'C-Level Executives, Direktur, Kepala Dinas.',
              objective:
                'Mampu menyusun roadmap adopsi AI, memahami implikasi etis & tata kelola, serta mengukur ROI inisiatif AI.',
              format: 'Sesi meja bundar eksklusif (setengah hari).'
            }
          ]
        }
      ]
    },
    contact: {
      title: 'Hubungi Kami',
      body:
        'Siap untuk mengakselerasi bisnis Anda dengan AI?\nDiskusikan kebutuhan Anda dengan tim kami untuk mendapatkan solusi yang tepat.',
      emailEncoded: 'aW5mb0BhaXRpZ2xvYmFsLmxpbms=',
      phoneParts: ['62', '815', '2985', '0411']
    },
    nav: { home: 'Beranda', services: 'Layanan', contact: 'Kontak' },
    footer: '© 2025 PT AITI GLOBAL NEXUS. All Rights Reserved.'
  };
}

export const load: PageServerLoad = async () => {
  try {
    const raw = fs.readFileSync(CONTENT_PATH, 'utf8');
    const content = JSON.parse(raw);
    return { content };
  } catch {
    return { content: getDefaultContent() };
  }
};
