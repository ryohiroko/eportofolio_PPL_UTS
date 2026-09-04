/**
 * Default data for E-Portfolio Praktik Pengalaman Lapangan (PPL) Siklus 1
 * Data ini dapat diedit langsung melalui tombol "Edit Profil" di web
 * dan akan tersimpan secara otomatis di LocalStorage peramban (browser).
 */
const DEFAULT_PORTFOLIO_DATA = {


  // Produk 1: Rancangan / Perencanaan Pembelajaran Lengkap Siklus 1
  lessonPlan: {
    title: "Rancangan Pembelajaran Inovatif: Teks Eksplanasi Berbasis Problem-Based Learning (PBL)",
    cycle: "Siklus 1 - Praktik Mengajar Mandiri",
    target: "Fase E (Kelas X SMA) • 2 x 45 Menit (Pertemuan 1)",
    gdriveUrl: "https://drive.google.com/file/d/1mFg4vFChcYu9fxRl2ooUwBTlkt_dFlaX/view?usp=sharing",
    summary: "Rancangan pembelajaran lengkap yang mengintegrasikan pendekatan saintifik dengan model Problem-Based Learning (PBL) dan media interaktif Canva serta Quizizz untuk menstimulasi daya kritis siswa dalam membedah fenomena alam dan sosial.",
    learningGoals: [
      "Peserta didik mampu menganalisis struktur teks eksplanasi (pernyataan umum, deretan penjelas, interpretasi) secara tepat.",
      "Peserta didik mampu menelaah kaidah kebahasaan (konjungsi kausalitas & kronologis) melalui studi kasus fenomena banjir perkotaan.",
      "Peserta didik mampu menyajikan hasil diskusi kelompok dalam bentuk infografis ringkas secara kolaboratif dan komunikatif."
    ],
    components: [
      {
        id: "modul-inti",
        name: "Modul Ajar Inti (RPP)",
        badge: "Dokumen Utama",
        desc: "Memuat Identitas, Capaian Pembelajaran (CP), Alur Tujuan Pembelajaran (ATP), Pemahaman Bermakna, Pertanyaan Pemantik, Sintaks PBL, dan Asesmen.",
        pages: 12,
        previewType: "rpp"
      },
      {
        id: "lkpd",
        name: "LKPD Berorientasi HOTS",
        badge: "Lembar Kerja Siswa",
        desc: "Panduan kerja kelompok berbasis stimulus artikel fenomena hidrometeorologi terkini dengan scaffolding analisis kausalitas bertingkat.",
        pages: 4,
        previewType: "lkpd"
      },
      {
        id: "bahan-ajar",
        name: "Bahan Ajar & Media Digital",
        badge: "Media & Modul Tambahan",
        desc: "Slide presentasi interaktif Canva, video pemantik fenomena siklus air & longsor, serta panduan ringkas kebahasaan teks eksplanasi.",
        pages: 8,
        previewType: "bahan-ajar"
      },
      {
        id: "asesmen",
        name: "Instrumen & Rubrik Asesmen",
        badge: "Evaluasi Lengkap",
        desc: "Asesmen Diagnostik Non-Kognitif, Asesmen Formatif Diskusi (Rubrik Sikap & Kinerja Profil Pelajar Pancasila), dan Soal Asesmen Sumatif Sub-Materi.",
        pages: 6,
        previewType: "asesmen"
      }
    ]
  },

  // Produk 2: Video Pelaksanaan Praktik Mengajar Mandiri
  videoPractice: {
    title: "Video Pelaksanaan Praktik Mengajar Mandiri Siklus 1",
    subtitle: "Implementasi Model Problem-Based Learning (PBL) pada Materi Teks Eksplanasi Kelas X",
    youtubeUrl: "https://youtu.be/z-FU3a8PKPI?si=ogQkkXcrLXXGVaS0",
    embedUrl: "https://youtu.be/z-FU3a8PKPI?si=ogQkkXcrLXXGVaS0",
    duration: "28 Menit 40 Detik (Disunting sesuai format Uji Kinerja PPL)",
    schoolLocation: "Ruang Kelas X-MIPA 2 SMA Negeri 1 Prestasi Bangsa",
    date: "18 Agustus 2025",
    description: "Rekaman video pelaksanaan pembelajaran mandiri Siklus 1 yang menampilkan 3 tahapan utuh: Kegiatan Awal (apersepsi dan pemantik), Kegiatan Inti (sintaks 1 s.d. sintaks 5 PBL), dan Kegiatan Penutup (evaluasi, refleksi, serta tindak lanjut) secara runtut.",
    timestamps: [
      {
        time: "00:00 - 04:30",
        stage: "Kegiatan Awal / Pendahuluan",
        detail: "Salam pembuka, doa bersama, presensi presisi, ice-breaking fokus, dan penyampaian tujuan serta asesmen awal."
      },
      {
        time: "04:31 - 10:15",
        stage: "Sintaks 1: Orientasi Siswa pada Masalah",
        detail: "Penayangan video berita fenomena banjir kilat, pengajuan pertanyaan pemantik kritis, dan respons antusias peserta didik."
      },
      {
        time: "10:16 - 16:40",
        stage: "Sintaks 2 & 3: Pengorganisasian & Penyelidikan Kelompok",
        detail: "Pembagian kelompok heterogen, pembagian LKPD interaktif, fasilitasi penyelidikan dan bimbingan guru secara merata."
      },
      {
        time: "16:41 - 22:50",
        stage: "Sintaks 4: Pengembangan & Penyajian Hasil Karya",
        detail: "Perwakilan kelompok mempresentasikan analisis kausalitas, tanggapan aktif antar kelompok, dan konfirmasi materi."
      },
      {
        time: "22:51 - 28:40",
        stage: "Sintaks 5 & Penutup: Analisis, Evaluasi & Refleksi",
        detail: "Kuis evaluasi formatif, penarikan kesimpulan bersama peserta didik, lembar refleksi diri siswa, dan penutup pembelajaran."
      }
    ]
  },

  // Refleksi Pembelajaran Siklus 1
  reflection: {
    strengths: [
      "Antusiasme dan keaktifan peserta didik meningkat signifikan berkat penggunaan stimulus video fenomena kontekstual.",
      "Kolaborasi dalam kelompok berjalan dinamis karena LKPD dilengkapi petunjuk instruksi yang jelas dan terarah.",
      "Pengelolaan waktu pada tahap orientasi masalah dan penyajian karya berjalan tepat sesuai target rencana modul."
    ],
    challenges: [
      "Terdapat satu kelompok yang memerlukan waktu lebih lama dalam menyepakati kesimpulan kausalitas pada LKPD.",
      "Pemanfaatan audio visual di sudut belakang kelas sempat terdengar kurang lantang sebelum pengeras suara tambahan disesuaikan."
    ],
    followUp: [
      "Menerapkan teknik time-keeper khusus di setiap kelompok agar ritme pengerjaan tugas LKPD lebih seragam.",
      "Menyiapkan bahan bacaan pendukung bergradasi (scaffolding berdiferensiasi) untuk kelompok yang membutuhkan bimbingan intensif pada Siklus 2."
    ],
    mentorNotes: {
      lecturerNote: "\"Struktur sintaks PBL sangat terlihat dan interaksi dialogis guru-siswa terbangun sangat hangat. Pertahankan ketepatan artikulasi instruksi di Siklus 2.\" — Dr. Hj. Nurjanah, M.Pd. (DPL)",
      teacherNote: "\"Penguasaan kelas sudah sangat baik dan kondusif untuk pengajar mandiri pemula. Modul ajar dan LKPD tertata rapi serta relevan dengan Kurikulum Merdeka.\" — Drs. Bambang Hariyadi, M.Pd. (Guru Pamong)"
    }
  }
};

const PORTFOLIO_DATA = DEFAULT_PORTFOLIO_DATA;
