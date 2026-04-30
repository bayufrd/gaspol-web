# PT Gaspoll Management Center — Landing Page Docs

Dokumentasi ringkas untuk pembuatan landing page PT Gaspoll Management Center (GMC) beserta brand-brand di bawahnya.

## Sumber Dokumen

- `docs/SEKILAS TENTANG GASPOLL MANAGEMENT CENTER.pdf`
- `docs/Gaspoll Management Center.txt`
- Brand docs:
  - `docs/SEKILAS TENTANG GREEN BEANS.pdf` / `docs/Green Beans.txt`
  - `docs/SEKILAS TENTANG SAMBEL COLEK.pdf` / `docs/Sambel Colek.txt`
  - `docs/SEKILAS TENTANG JEMPOLAN.pdf` / `docs/Jempolan.txt` *(catatan: isi `.txt` saat ini sama dengan Sambel Colek)*
  - `docs/SEKILAS TENTANG SAMBEL'E NYAH TI.pdf` / `docs/Sambel'e Nyahti.txt`

## Sekilas PT Gaspoll Management Center (GMC)

- Nama: PT Gaspoll Management Center
- Tagline: “Gaspoll Menuju Sukses!”
- Legal: PT (Peresmian badan hukum: 30 Januari 2023)
- Kantor pusat: Jl. Perumnas Mundusaren, Caturtunggal, Depok, Sleman, DIY
- Fokus: Manajemen bisnis F&B

### Visi

Menjadi perusahaan bidang Manajemen Bisnis yang terus berkembang dan maju, mensejahterakan orang-orang yang mendukung dalam mengembangkan perusahaan, serta dapat memberikan manfaat bagi masyarakat.

### Misi (ASIK)

- **Amanah** — produk & layanan
- **Sistematis dan adaptif** — sistem operasi kerja
- **Integritas** — SDM
- **Kolaboratif** — pengembangan

### Nilai Dasar

- Kepribadian: Jujur, Disiplin, Tanggung Jawab, Ikhlas, Taqwa
- Prinsip kerja: Cepat, Sigap, Cermat, Rapi, Santun, Ceria

### Sekilas Perkembangan

- Berawal dari rumah makan prasmanan/penyetan (owner: Bapak Andi)
- Delegasi pengelolaan outlet → ekspansi cabang
- Pembentukan organisasi manajemen (±2018) dengan staf administrasi keuangan
- Legalisasi & peresmian GMC (30 Januari 2023)

### Layanan Utama

- Pengelolaan dan pengembangan bisnis F&B

### Prospek

- Ekspansi outlet skala nasional

## Brand di Bawah GMC

### Green Beans

- Tagline: “Sip – Relax - Repeat”
- Posisi: coffee shop & ruang komunal (pelajar, profesional, pecinta kopi)
- Fokus: pengalaman kopi autentik (biji berkualitas + teknik seduh presisi) dengan kualitas konsisten
- Nilai/visi/misi: mengikuti nilai “ASIK”

### Sambel Colek Asli Ngampel City

- Tagline: “Murah, Kenyang, Pedas, Puas”
- Posisi: rumah makan pecinta pedas dengan rasa tradisional + kenyamanan modern
- Fokus: bahan segar pilihan, standar kebersihan & kualitas rasa
- Nilai/visi/misi: mengikuti nilai “ASIK”

### Jempolan

- Referensi: `SEKILAS TENTANG JEMPOLAN.pdf` (prioritas sumber)
- Catatan: `Jempolan.txt` perlu disesuaikan karena saat ini duplikat Sambel Colek

### Sambel'e Nyah Ti

- Tagline: “JUwara PueDEZnya”
- Posisi: rumah makan pecinta pedas (tradisional + modern)
- Fokus: bahan segar, kebersihan, kualitas rasa
- Nilai/visi/misi: mengikuti nilai “ASIK”

## UI References (Layout & Contoh)

- Light: `docs/example.html`
- Dark: `docs/example-dark.html`
- Mobile: `docs/example-mobile.html` *(file masih kosong)*

## Asset Icons

- Icon PT GMC & brand ada di folder `icon/` *(sesuaikan jika folder ini nantinya diganti menjadi `icons/`)*

## Design System (Palette & Typography)

### Color Palette (utama)

- Primary: `#800000`
- Secondary: `#B8860B`
- Tertiary: `#121212`
- Neutral: `#4B5563`

### Typography

- Headline: **Manrope**
- Body/Label: **Inter**

## Roadmap (Next.js Stack) — Draft Awal

### Stack yang Disarankan

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Component UI**: shadcn/ui (Radix UI)
- **Dark mode**: `next-themes`
- **Font**: `next/font` (Manrope + Inter)
- **Forms**: React Hook Form + Zod
- **CMS/Content** (opsional): MDX atau headless CMS (nanti dipilih di roadmap)
- **Deploy**: Vercel

### Struktur Halaman (landing)

- Hero + value proposition GMC
- Portfolio brand (cards + CTA)
- Visi/Misi/Values
- Layanan utama + proses kerja (ringkas)
- CSR & prospek
- Footer (legal, alamat, kontak)

---