import React from "react";

import {
  profile,
  facebook,
  instagram,
  linkedin,
  twitter,
  uns,
  tulisanKanan,
  send,
  shield,
  star,
} from "@/assets";

// 🔹 Menu Navigasi
export const navLinks = [
  { id: "#home", title: "Home" },
  { id: "#about", title: "Tentang" },
  { id: "#how", title: "Cara Kerja" },
  { id: "#why", title: "Benefit" },
  { id: "#clients", title: "Klien" },
  { id: "#impact", title: "Dampak" },
  { id: "#testimony", title: "Testimoni" },
  { id: "/login", title: "Login" },
];

// 🔹 Statistik
export const stats = [
  { id: "stats-1", title: "Tenant", value: "500+" },
  { id: "stats-2", title: "Produk", value: "1000+" },
  { id: "stats-3", title: "Direkomendasikan", value: "100%" },
];

interface ProblemSolution {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

// 🔹 Problem Statement
export const problems: ProblemSolution[] = [
  {
    id: "problem-1",
    icon: star,
    title: "Keterbatasan Waktu",
    content: (
      <React.Fragment>
        Proses mendaftar dan mengelola toko di e-commerce membutuhkan waktu yang
        lama.
      </React.Fragment>
    ),
  },
  {
    id: "problem-2",
    icon: shield,
    title: "Kurangnya Pengetahuan Digital",
    content: (
      <React.Fragment>
        Banyak UMKM yang belum familiar dengan pengelolaan e-commerce.
      </React.Fragment>
    ),
  },
  {
    id: "problem-3",
    icon: send,
    title: "Minimnya Eksposur Produk",
    content: (
      <React.Fragment>
        Sulit untuk bersaing di pasar digital tanpa strategi pemasaran yang
        tepat.
      </React.Fragment>
    ),
  },
];

// 🔹 Our Solution
export const solutions: ProblemSolution[] = [
  {
    id: "solution-1",
    icon: send,
    title: "Mudah Daftar",
    content: (
      <React.Fragment>
        Tenant hanya perlu mendaftar melalui WhatsApp.
      </React.Fragment>
    ),
  },
  {
    id: "solution-2",
    icon: star,
    title: "Verifikasi Cepat",
    content: (
      <React.Fragment>
        Produk yang diunggah tenant akan diverifikasi oleh admin untuk
        memastikan kualitas.
      </React.Fragment>
    ),
  },
  {
    id: "solution-3",
    icon: shield,
    title: "Integrasi Otomatis",
    content: (
      <React.Fragment>
        Produk yang lolos verifikasi langsung terpublikasi di platform
        e-commerce besar (Tokopedia, Shopee, dll.) melalui akun <b>PDIN Mall</b>{" "}
        dengan centang biru.
      </React.Fragment>
    ),
  },
];

// 🔹 Feedback Pelanggan
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Sangat memuaskan dan sangat cepat dalam pembuatan website dan aplikasi.",
    name: "Dwi Haryanti",
    title: "Founder & Leader",
    img: profile, // Ganti dengan gambar unik jika tersedia
  },
  {
    id: "feedback-2",
    content:
      "Sangat cepat dan sangat baik dalam pengembangan website dan aplikasi.",
    name: "Reno Zajraa",
    title: "Founder & Leader",
    img: profile,
  },
  {
    id: "feedback-3",
    content:
      "Sangat baik dalam pembuatan website terutama dalam desain website dan aplikasi.",
    name: "Alfian",
    title: "Founder & Leader",
    img: profile,
  },
  {
    id: "feedback-4",
    content:
      "Pelayanan profesional, desain website yang menarik, dan performa aplikasi yang optimal.",
    name: "Octa",
    title: "Founder & Leader",
    img: profile,
  },
  {
    id: "feedback-5",
    content: "Tim sangat responsif dan hasilnya sesuai dengan yang diharapkan.",
    name: "Agus",
    title: "Founder & Leader",
    img: profile,
  },
];

export const howToUse = [
  {
    id: "how-to-use-1",
    content: (
      <React.Fragment>
        Setelah mendaftar, upload produk lengkap dengan deskripsi dan harga.
      </React.Fragment>
    ),
  },
  {
    id: "how-to-use-2",
    content: (
      <React.Fragment>
        Admin memverifikasi produk sesuai standar e-commerce besar.
      </React.Fragment>
    ),
  },
  {
    id: "how-to-use-3",
    content: (
      <React.Fragment>
        Produk otomatis terintegrasi ke Tokopedia, Shopee, dan lainnya dengan
        branding profesional (centang biru).
      </React.Fragment>
    ),
  },
];

export const tenantType = [
  {
    id: "tenant-1",
    type: "Makanan & Minuman",
  },
  {
    id: "tenant-2",
    type: "Fashion",
  },
  {
    id: "tenant-3",
    type: "Kerajinan Tangan",
  },
  {
    id: "tenant-4",
    type: "Produk Lokal Unggulan",
  },
];

export const valuePropositions = [
  {
    id: "value-1",
    value: "Tidak perlu ribet mengelola toko di banyak platform.",
  },
  {
    id: "value-2",
    value:
      "Produk Anda tampil di e-commerce besar yang menjangkau jutaan pembeli.",
  },
  {
    id: "value-3",
    value:
      "Dengan akun PDIN Mall bercentang biru, produk tenant memiliki kredibilitas tinggi.",
  },
];

export const impact = [
  {
    id: "impact-1",
    value: "Akses ke jutaan pembeli di e-commerce besar.",
  },
  {
    id: "impact-2",
    value: "Tenant belajar mengelola produk di pasar digital.",
  },
  {
    id: "impact-3",
    value: "Membantu UMKM berkembang dan bersaing di era digital.",
  },
];

// 🔹 Footer Links
export const footerLinks = [
  {
    title: "Menu",
    links: [
      { link: "#home", name: "Home" },
      { link: "#about", name: "Tentang" },
      { link: "#how", name: "Cara Kerja" },
      { link: "#why", name: "Benefit" },
      { link: "#clients", name: "Klien" },
      { link: "#impact", name: "Dampak" },
      { link: "#testimony", name: "Testimoni" },
      { link: "/login", name: "Login" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "+62 895-1966-6644",
        link: "https://www.dodolit.com/help-center/",
      },
      {
        name: "dodolanIt@official.com",
        link: "https://www.dodolit.com/partners/",
      },
      {
        name: "Rejosari RT 01/07, Dua, Kateguhan",
        link: "https://www.dodolit.com/suggestions/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      { name: "Our Partner", link: "https://www.dodolit.com/our-partner/" },
      {
        name: "Become a Partner",
        link: "https://www.dodolit.com/become-a-partner/",
      },
    ],
  },
];

// 🔹 Sosial Media
export const socialMedia = [
  { id: "social-media-1", icon: instagram, link: "https://www.instagram.com/" },
  { id: "social-media-2", icon: facebook, link: "https://www.facebook.com/" },
  { id: "social-media-3", icon: twitter, link: "https://www.twitter.com/" },
  { id: "social-media-4", icon: linkedin, link: "https://www.linkedin.com/" },
];

// 🔹 Klien
export const clients = [
  { id: "client-1", logo: uns },
  { id: "client-2", logo: tulisanKanan },
];
