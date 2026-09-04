/**
 * Main Application Script for E-Portfolio PPL Siklus 1
 * Mahasiswa: Kadek Angga Arijaya Kusuma, S.Pd. (PPG Prajabatan Informatika - UNDIKSHA)
 * Modul: NAVIGATOR JEJARING DATA (Tree & Graph) - SMP Negeri 1 Singaraja
 */

// Helper to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url) {
  if (!url) return "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ";
  try {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0].split("&")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    } else if (url.includes("embed/")) {
      videoId = url.split("embed/")[1].split("?")[0].split("&")[0];
    }
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  } catch (e) {
    console.warn("Could not parse YouTube URL", e);
  }
  return url;
}

// Sample Content for In-App Document Viewer verbatim from Authentic PDF
const DOC_SAMPLES = {
  "modul-inti": {
    title: "MODUL AJAR INFORMATIKA: NAVIGATOR JEJARING DATA",
    subtitle: "Eksplorasi Konsep & Pemodelan Struktur Data Tree & Graph • Terintegrasi PSE (Fase D / Kelas IX SMPN 1 Singaraja)",
    content: `
      <div style="background: var(--primary-light); border-left: 4px solid var(--primary); padding: 12px 16px; border-radius: 6px; margin-bottom: 20px;">
        <strong style="color: var(--primary); font-size: 1.05rem;">"Petakan Simpulnya, Telusuri Jalurnya, Hubungkan Solusinya!"</strong><br>
        <span style="font-size: 0.85rem; color: var(--text-secondary);">Pendekatan Pembelajaran Mendalam (Deep Learning) Terintegrasi 5 Kompetensi Sosial Emosional (CASEL)</span>
      </div>

      <h5>A. INFORMASI UMUM</h5>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 0.9rem;">
        <tr><td style="padding: 6px; border: 1px solid var(--border-color); width: 35%;"><strong>Satuan Pendidikan</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">SMP Negeri 1 Singaraja</td></tr>
        <tr><td style="padding: 6px; border: 1px solid var(--border-color);"><strong>Mata Pelajaran / Elemen</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">Informatika / Berpikir Komputasional (BK)</td></tr>
        <tr><td style="padding: 6px; border: 1px solid var(--border-color);"><strong>Topik Pembelajaran</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">Struktur Data (Tree dan Graph)</td></tr>
        <tr><td style="padding: 6px; border: 1px solid var(--border-color);"><strong>Fase / Kelas / Semester</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">Fase D / Kelas IX / Semester Ganjil</td></tr>
        <tr><td style="padding: 6px; border: 1px solid var(--border-color);"><strong>Alokasi Waktu</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">3 × 40 Menit (1 Pertemuan)</td></tr>
        <tr><td style="padding: 6px; border: 1px solid var(--border-color);"><strong>Model Pembelajaran</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">Problem Based Learning (PBL) Terintegrasi PSE</td></tr>
        <tr><td style="padding: 6px; border: 1px solid var(--border-color);"><strong>Penyusun</strong></td><td style="padding: 6px; border: 1px solid var(--border-color);">Kadek Angga Arijaya Kusuma, S.Pd. (PPG Informatika UNDIKSHA)</td></tr>
      </table>

      <h5>B. TUJUAN PEMBELAJARAN (TP)</h5>
      <ol style="margin-left: 20px; margin-bottom: 16px;">
        <li style="margin-bottom: 8px;"><strong>TP 1:</strong> Melalui penyelidikan studi kasus kontekstual dan pemodelan visual, murid mampu membedakan serta merepresentasikan karakteristik struktur data <strong>Tree (hierarkis)</strong> dan <strong>Graph (jaringan/relasional)</strong> secara tepat dengan menunjukkan sikap gigih, tenang, dan tidak mudah menyerah saat menghadapi kerumitan penelusuran cabang/jalur data (<em>Self-Management</em>).</li>
        <li><strong>TP 2:</strong> Melalui diskusi kolaboratif dan pemecahan masalah komputasi dalam kelompok, murid mampu menganalisis pemilihan struktur data (Tree atau Graph) yang tepat beserta alasan logisnya, dengan menunjukkan kemampuan mendengarkan aktif, menghargai perspektif teman, dan mengambil keputusan bersama secara bertanggung jawab (<em>Social Awareness, Relationship Skills, & Responsible Decision-Making</em>).</li>
      </ol>

      <h5>C. MATERI POKOK PEMBELAJARAN</h5>
      <ul>
        <li><strong>Struktur Data Tree (Pohon):</strong> Struktur hierarki bertingkat, komponen Akar (<em>Root</em>), Simpul (<em>Node/Vertex</em>), Cabang (<em>Edge/Branch</em>), Daun (<em>Leaf</em>), Relasi Induk-Anak (<em>Parent-Child</em>). <u>Aturan penting:</u> Bebas siklus (<em>acyclic</em>) dan hanya ada 1 jalur antar-dua simpul. Contoh nyata: Direktori folder komputer dan bagan silsilah OSIS.</li>
        <li><strong>Struktur Data Graph (Graf):</strong> Struktur jejaring antar-entitas, komponen Simpul (<em>Vertex</em>) dan Sisi (<em>Edge</em>). Varian graf: Graf Berarah (<em>Directed</em>), Graf Tak Berarah (<em>Undirected</em>), Graf Berbobot (<em>Weighted</em>), serta dapat memiliki siklus (<em>cycle</em>). Contoh nyata: Peta jalan raya/Google Maps dan rute navigasi antar-ruang di SMPN 1 Singaraja.</li>
      </ul>

      <h5>D. LANGKAH-LANGKAH PEMBELAJARAN (5 SINTAKS PBL TERINTEGRASI PSE)</h5>
      <ul>
        <li><strong>Kegiatan Pembuka (10 Menit):</strong> Doa, presensi, <em>Emotional Check-in</em> "Periksa Sinyal Diri" (Sinyal 5G, 3G, No Service), apersepsi perbedaan folder file dengan rute Google Maps menuju SMPN 1 Singaraja, dan penegasan budaya lab: <em>"Boleh salah, harus mencoba, dan saling membantu"</em>.</li>
        <li><strong>Sintaks 1 PBL - Orientasi Murid pada Masalah (15 Menit):</strong> Misi Kasus: "Kekacauan Navigasi & Direktori Cerdas Server SMPN 1 Singaraja" dan robot pengantar surat yang tersesat (<em>infinite loop</em>).</li>
        <li><strong>Sintaks 2 PBL - Mengorganisasikan Murid (15 Menit):</strong> Pembagian kelompok heterogen (3-4 murid per workstation) dengan pembagian peran: <em>Route Navigator</em>, <em>Map Operator</em>, <em>Integrity Checker</em>, dan <em>Juru Bicara</em>.</li>
        <li><strong>Sintaks 3 PBL - Membimbing Penyelidikan Lab (40 Menit):</strong> Eksperimen 1 (Tree direktori sekolah), Eksperimen 2 (Graph rute antar-ruang lab), Misi 3 (<em>Error Detective</em>: melacak siklus terlarang & simpul terisolasi), dan Tantangan "Pilih Model yang Tepat!".</li>
        <li><strong>Sintaks 4 PBL - Mengembangkan & Menyajikan Hasil Karya (20 Menit):</strong> Presentasi proyeksi layar kelompok ("Data Talk") dan mekanisme apresiasi <em>"2B Feedback"</em> (Beri Apresiasi & Beri Pertanyaan).</li>
        <li><strong>Sintaks 5 PBL - Menganalisis & Mengevaluasi (10 Menit):</strong> Tinjauan metakognitif "Jejak Logika Navigator Data" dan perumusan strategi <em>debugging</em>.</li>
        <li><strong>Kegiatan Penutup (10 Menit):</strong> Exit Ticket "3-2-1 Jejaring Data", lembar refleksi emosional, penguatan materi, tindak lanjut remedial/pengayaan, dan doa bersama.</li>
      </ul>
    `
  },
  "lkpd": {
    title: "LKPD TERINTEGRASI: NAVIGATOR JEJARING DATA",
    subtitle: "Pendekatan Problem Based Learning & Pembelajaran Sosial Emosional (PSE) • SMPN 1 Singaraja",
    content: `
      <h5>BAGIAN 1: IDENTITAS & KASUS MASALAH</h5>
      <p><strong>Kasus Masalah:</strong><br>
      <em>"SMPN 1 Singaraja memiliki server file sekolah dan jaringan LAN yang menghubungkan berbagai ruangan. Akhir-akhir ini, tim IT menerima laporan: (1) Saat mengakses beberapa folder di server, sistem menjadi lambat bahkan terjadi looping (jalan memutar) sehingga proses tidak berhenti. (2) Pada peta rute jaringan/evakuasi, ada jalur yang terputus dan beberapa ruangan tidak terhubung sehingga rute darurat tidak efektif. Analisislah masalah tersebut menggunakan konsep struktur data Tree dan Graph, lalu berikan solusi terbaik untuk sekolah!"</em></p>

      <h5>BAGIAN 2: EKSPERIMEN LAB (VISUAL & DIAGRAM)</h5>
      <ul>
        <li><strong>Eksperimen 1 - TREE (Direktori Folder Server):</strong><br>
        Menentukan Root: <code>/ (Server)</code> → Parent: <code>Administrasi, Akademik, Kesiswaan</code> → Child: <code>Surat, Keuangan, Kelas IX, Kurikulum, Prestasi</code> → Leaf: <code>Surat2025.pdf, Laporan.xlsx, Rapor.pdf, Prota.docx, Juara.png</code>.<br>
        <em>Pertanyaan:</em> Apakah struktur di atas memiliki siklus (loop)? Mengapa struktur Tree harus bebas siklus (acyclic)?</li>
        
        <li><strong>Eksperimen 2 - GRAPH (Peta Jaringan Antar-Ruangan SMPN 1 Singaraja):</strong><br>
        Simpul (Vertex): <code>Ruang Server, Lab Komputer, Perpustakaan, Ruang Guru, Ruang Kelas IX, Ruang TU, Aula</code>.<br>
        Sisi (Edge): Jalur koneksi antar-ruangan. Murid membedakan graf berarah (directed) vs tak berarah (undirected) serta mencari lintasan (path) tercepat dari Lab Komputer ke Aula.</li>
      </ul>

      <h5>BAGIAN 3: MISI ERROR DETECTIVE - LAPORAN KESALAHAN STRUKTUR DATA</h5>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 0.88rem;">
        <thead>
          <tr style="background: var(--bg-subtle);">
            <th style="padding: 6px; border: 1px solid var(--border-color);">Kasus Simulasi Kesalahan (Bug)</th>
            <th style="padding: 6px; border: 1px solid var(--border-color);">Tipe Struktur</th>
            <th style="padding: 6px; border: 1px solid var(--border-color);">Dampak</th>
            <th style="padding: 6px; border: 1px solid var(--border-color);">Rekomendasi Solusi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Folder "Kelas IX" berisi shortcut ke folder "Akademik", dan di dalamnya ada shortcut kembali ke "Kelas IX" (Membentuk siklus).</td>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Tree</td>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Server terus berputar (infinite loop) & lambat.</td>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Hapus shortcut memutar; jadwalkan hierarki murni.</td>
          </tr>
          <tr>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Rute jaringan: Ruang TU terputus (tidak ada jalur ke ruangan lain).</td>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Graph</td>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Ruang TU tidak bisa mengakses internet/server.</td>
            <td style="padding: 6px; border: 1px solid var(--border-color);">Tambahkan sisi penghubung (edge) ke Ruang Guru / Server.</td>
          </tr>
        </tbody>
      </table>

      <h5>BAGIAN 4: PRESENTASI DATA TALK & 2B FEEDBACK</h5>
      <p>Setiap kelompok memaparkan temuan solusi dengan format: <em>Masalah yang Diselesaikan → Model yang Dipilih → Pemetaan Simpul & Sisi → Temuan Solusi & Alasan Logis</em>.<br>
      Kelompok penilai menerapkan <strong>Metode 2B Feedback</strong>: Berikan 2 apresiasi positif dan 2 pertanyaan membangun.</p>
    `
  },
  "bahan-ajar": {
    title: "BAHAN AJAR & MEDIA PRESENTASI MULTIMEDIA",
    subtitle: "Slide Presentasi Interaktif 'Navigator Jejaring Data' (Terintegrasi Canva & Google Slide)",
    content: `
      <h5>TAUTAN RESMI BERKAS PRESENTASI:</h5>
      <p>Bahan ajar interaktif ini dapat diakses dan diproyeksikan langsung melalui tautan Google Docs/Slide resmi penyusun:</p>
      <div style="margin: 16px 0;">
        <a href="https://docs.google.com/presentation/d/1tzBCnnIMWXY9vWLSmyrhmJ8IXxAWPn6d/edit?usp=sharing&ouid=117389899220007573449&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          🔗 Buka Slide Presentasi di Google Slide
        </a>
      </div>

      <h5>RINGKASAN KONTEN MEDIA AJAR:</h5>
      <ul>
        <li><strong>Slide 1-4 (Orientasi & Check-in):</strong> Visualisasi pembuka "Navigator Jejaring Data", pengenalan peran misi, dan papan emoji/metafora "Periksa Sinyal Diri" (5G, 3G, No Service).</li>
        <li><strong>Slide 5-9 (Eksplorasi Konsep Tree):</strong> Animasi struktur direktori File Explorer, hierarki silsilah organisasi, dan kaidah wajib <em>acyclic</em> (tanpa siklus tertutup).</li>
        <li><strong>Slide 10-14 (Eksplorasi Konsep Graph):</strong> Peta rute jalan Google Maps, konsep simpul (<em>Vertex</em>), sisi (<em>Edge</em>), graf berarah vs tak berarah, dan graf berbobot (<em>Weighted Graph</em>).</li>
        <li><strong>Slide 15-18 (Studi Kasus & Misi Tantangan):</strong> Misi server SMPN 1 Singaraja, panduan kerja kelompok LKPD, rubrik Data Talk 2B Feedback, dan Exit Ticket 3-2-1.</li>
      </ul>
    `
  },
  "asesmen": {
    title: "INSTRUMEN & RUBRIK ASESMEN PEMBELAJARAN LENGKAP",
    subtitle: "Asesmen Diagnostik, Formatif (LKPD & Observasi Lab), Sumatif (Data Talk), dan Evaluasi 5 KSE",
    content: `
      <h5>1. ASESMEN AWAL / DIAGNOSTIK KONTEKSTUAL</h5>
      <p>Diberikan di awal sesi untuk memetakan kesiapan murid (Perlu Bimbingan, Cakap, Mahir):</p>
      <ol style="margin-left: 20px; margin-bottom: 16px;">
        <li><strong>Kasus Bagan Struktur Organisasi OSIS:</strong> Analisis mengapa struktur kepengurusan selalu bercabang ke bawah dan tidak boleh memiliki instruksi melingkar.</li>
        <li><strong>Kasus Peta Rute Jalan ke SMPN 1 Singaraja:</strong> Analisis mengapa rute jalan raya bisa membentuk jalur melingkar (putaran alternatif) saat satu jalan ditutup.</li>
        <li><strong>Kasus Pengelolaan Berkas di Komputer:</strong> Analisis mengapa berkas diatur dalam Drive D: → Folder → Subfolder bertingkat dari induk ke anak.</li>
        <li><strong>Respon Emosional:</strong> Sikap dan langkah yang diambil murid ketika menemui jalan buntu pada pemodelan alur data.</li>
      </ol>

      <h5>2. ASESMEN SUMATIF: KINERJA & PRESENTASI DATA TALK (7 KRITERIA × SKOR 1-4)</h5>
      <ul style="margin-bottom: 16px;">
        <li><strong>Kriteria 1:</strong> Analisis Karakteristik Masalah (Membedah kebutuhan hierarki vs jaringan).</li>
        <li><strong>Kriteria 2:</strong> Pemodelan Struktur Tree (Akurasi root, parent, child, leaf, dan bebas siklus).</li>
        <li><strong>Kriteria 3:</strong> Pemodelan Struktur Graph (Akurasi vertex, edge, directed/undirected, dan validitas lintasan).</li>
        <li><strong>Kriteria 4:</strong> Penelusuran Bug & Debugging (Melacak dan memperbaiki siklus terlarang / simpul buntu).</li>
        <li><strong>Kriteria 5:</strong> Pemilihan Struktur Data & Alasan Logis (Argumentasi rasional Tree vs Graph).</li>
        <li><strong>Kriteria 6:</strong> Kolaborasi & Etika Komunikasi Lab (Keadilan giliran workstation dan saling mendukung).</li>
        <li><strong>Kriteria 7:</strong> Presentasi & Tanggung Jawab Solusi (Kejelasan pemaparan dan responsivitas pada sesi 2B Feedback).</li>
      </ul>

      <h5>3. OBSERVASI 5 KOMPETENSI SOSIAL EMOSIONAL (CASEL)</h5>
      <p>• <strong>Self-Awareness:</strong> Mengenali batas pemahaman dan regulasi emosi saat membaca diagram rumit.<br>
      • <strong>Self-Management:</strong> Ketenangan, ketelitian, dan tidak mudah menyerah saat alur data buntu.<br>
      • <strong>Social Awareness:</strong> Menghargai ritme berpikir teman dan tidak meremehkan rekan satu kelompok.<br>
      • <strong>Relationship Skills:</strong> Berbagi peran adil di workstation lab dan beretika santun saat berdiskusi.<br>
      • <strong>Responsible Decision-Making:</strong> Menentukan model Tree/Graph berdasarkan pertimbangan kriteria logis.</p>

      <h5>4. REFLEKSI EXIT TICKET 3-2-1 JEJARING DATA</h5>
      <p>• <strong>3:</strong> Tiga konsep kunci yang dipahami hari ini (Root, Node/Vertex, Edge, Cycle).<br>
      • <strong>2:</strong> Dua perbedaan mendasar antara Tree dan Graph.<br>
      • <strong>1:</strong> Satu strategi mengendalikan emosi/fokus saat menghadapi kerumitan jalur data.</p>
    `
  }
};

// Helper to convert Google Drive link to Preview Embed format
function getGoogleDriveEmbedUrl(url) {
  if (!url) return "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/preview";
  try {
    if (url.includes("/preview")) return url;
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("drive.google.com/file/d/")[1].split("/")[0].split("?")[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    if (url.includes("docs.google.com/presentation/d/")) {
      const presId = url.split("docs.google.com/presentation/d/")[1].split("/")[0].split("?")[0];
      return `https://docs.google.com/presentation/d/${presId}/preview`;
    }
    if (url.includes("docs.google.com/document/d/")) {
      const docId = url.split("docs.google.com/document/d/")[1].split("/")[0].split("?")[0];
      return `https://docs.google.com/document/d/${docId}/preview`;
    }
  } catch (e) {
    console.warn("Could not parse Google Drive URL", e);
  }
  return url;
}

// Modal Handlers
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";

    // Stop video playback when video modal is closed
    if (modalId === "video-player-modal") {
      const iframe = document.getElementById("modal-video-iframe");
      if (iframe) iframe.src = "";
    }
    // Clear Google Drive iframe when doc modal is closed
    if (modalId === "doc-viewer-modal") {
      const iframe = document.getElementById("modal-gdrive-iframe");
      if (iframe) iframe.src = "";
    }
  }
};

// Helper to convert YouTube or Google Drive video URL to embed format
function getVideoEmbedUrl(url) {
  if (!url) return "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ";
  try {
    // If Google Drive link for video
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("drive.google.com/file/d/")[1].split("/")[0].split("?")[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    // If YouTube link
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0].split("&")[0];
    } else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    } else if (url.includes("embed/")) {
      videoId = url.split("embed/")[1].split("?")[0].split("&")[0];
    }
    if (videoId) {
      return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    }
  } catch (e) {
    console.warn("Could not parse video URL", e);
  }
  return url;
}

// Open Video Modal (Embed Player & Redirect)
window.playCycleVideoModal = function() {
  const data = (typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : DEFAULT_PORTFOLIO_DATA);
  const videoUrl = (data && data.videoPractice && data.videoPractice.youtubeUrl) 
    ? data.videoPractice.youtubeUrl 
    : "https://youtu.be/z-FU3a8PKPI?si=ogQkkXcrLXXGVaS0";
  
  const embedUrl = getVideoEmbedUrl(videoUrl);
  const iframe = document.getElementById("modal-video-iframe");
  if (iframe) {
    iframe.src = embedUrl;
  }

  // Update redirect buttons in modal footer
  const ytBtn = document.getElementById("btn-modal-youtube");
  if (ytBtn) {
    ytBtn.href = videoUrl;
  }

  const gdriveVideoBtn = document.getElementById("btn-modal-video-gdrive");
  if (gdriveVideoBtn) {
    const driveUrl = (data && data.videoPractice && data.videoPractice.gdriveUrl)
      ? data.videoPractice.gdriveUrl
      : (videoUrl.includes("drive.google.com") ? videoUrl : "https://drive.google.com");
    gdriveVideoBtn.href = driveUrl;
  }

  window.openModal("video-player-modal");
};

// Open Document Viewer Modal (Embed Google Drive PDF & Redirect)
window.openDocViewer = function(docType = "pdf") {
  const data = (typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : DEFAULT_PORTFOLIO_DATA);
  const gdriveUrl = (data && data.lessonPlan && data.lessonPlan.gdriveUrl) 
    ? data.lessonPlan.gdriveUrl 
    : "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view?usp=sharing";
  
  const embedUrl = getGoogleDriveEmbedUrl(gdriveUrl);
  
  const iframe = document.getElementById("modal-gdrive-iframe");
  if (iframe) {
    iframe.src = embedUrl;
  }

  const redirectBtn = document.getElementById("btn-modal-gdrive");
  if (redirectBtn) {
    redirectBtn.href = gdriveUrl;
  }

  window.openModal("doc-viewer-modal");
};

// Switch Document Tab
window.switchDocTab = function(docKey) {
  const doc = DOC_SAMPLES[docKey] || DOC_SAMPLES["modul-inti"];
  
  document.querySelectorAll(".doc-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.doc === docKey);
  });

  const titleEl = document.getElementById("viewer-doc-title");
  const subtitleEl = document.getElementById("viewer-doc-subtitle");
  const bodyEl = document.getElementById("viewer-doc-content");

  if (titleEl) titleEl.textContent = doc.title;
  if (subtitleEl) subtitleEl.textContent = doc.subtitle;
  if (bodyEl) bodyEl.innerHTML = doc.content;
};

// Theme Toggle (Dark / Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem("ppl_portfolio_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", current);
      localStorage.setItem("ppl_portfolio_theme", current);
      updateThemeIcon(current);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-toggle-icon");
  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// Modal Backdrop & ESC Listeners
function initModalListeners() {
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        window.closeModal(backdrop.id);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.active").forEach(m => window.closeModal(m.id));
    }
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initModalListeners();

  // Print button
  const printBtn = document.getElementById("btn-print-portfolio");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
});
