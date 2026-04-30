# Performance Notes (Lighthouse)

## Kondisi terakhir

- Performance sempat mentok di ~79 karena bottleneck utama ada di **LCP** (3.6s).
- FCP sudah sangat cepat (0.3s), CLS = 0 (stabil), TBT kecil.

## Akar masalah (dari Insights Lighthouse)

1. **Font icon Material Symbols terlalu besar**
   - `public/fonts/material-symbols-outlined.woff2` sebelumnya ~3.8MB.
   - Masuk critical request chain dan memperpanjang jalur kritis → LCP turun.
2. **Image delivery**
   - Ada beberapa image (hasil `/_next/image?...`) yang masih bisa dikompresi (quality/format).

## Step-by-step penyelesaian

### 1) Hilangkan render-blocking Google Fonts (sudah)

- Remove `<link>` Google Fonts untuk Material Symbols di `app/layout.tsx`.
- Self-host font di `public/fonts/material-symbols-outlined.woff2`.
- Tambah `@font-face` + class `.material-symbols-outlined` di `app/globals.css`.

### 2) Kurangi payload font icon (sudah)

- Replace font file menjadi versi jauh lebih kecil (±444KB, weight 400) dari unpkg.
- Update `@font-face` `font-weight` menjadi `400` agar sesuai file.
- Preload font di `app/layout.tsx`:
  - `<link rel="preload" href="/fonts/material-symbols-outlined.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />`

### 3) Optimasi hero image brand (sudah)

- `app/brand/[slug]/page.tsx`:
  - Hapus `priority`
  - Tambah `sizes="100vw"`
  - Set `loading="lazy"`

## Next langkah yang direkomendasikan (untuk naik ke 90+)

1. **Hero image jangan `lazy` untuk route yang jadi landing utama**
   - Kalau page `/brand/[slug]` adalah page utama yang sering di-audit, hero biasanya jadi LCP.
   - Untuk skor terbaik: jadikan LCP element `eager/priority` dan kecilkan file (WEBP/AVIF + kompres).
2. **Kompresi image di `public/hero/*`**
   - Pastikan ukuran sesuai kebutuhan (mis. 1920px lebar sudah cukup).
   - Gunakan format modern (AVIF/WEBP) bila memungkinkan.
3. **Kurangi pemakaian icon-font**
   - Untuk icon kecil di atas fold, SVG inline (seperti Instagram/WA) lebih ringan daripada font.

