"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- DEFINISI ANIMASI (VARIANTS) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-white overflow-hidden">
      
      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-cyan-400 cursor-pointer"
          >
            IVY.DEV
          </motion.div>
          <div className="hidden space-x-6 md:flex">
            {['Tentang', 'Skill', 'Proyek', 'Kontak'].map((item, index) => (
               <a key={index} href={`#${item.toLowerCase().replace('tentang', 'about')}`} className="hover:text-cyan-400 transition relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
               </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="relative mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-cyan-500 shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]"
        >
           <motion.div 
             animate={{ opacity: [0.6, 1, 0.6] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="flex h-full w-full items-center justify-center bg-slate-800 text-xs text-slate-500"
           >
             Foto Profil
           </motion.div>
        </motion.div>

        <motion.h1 
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }}
          className="mb-2 text-4xl font-extrabold tracking-tight text-white md:text-6xl"
        >
          [Nama Lengkap Kamu]
        </motion.h1>
        <motion.h2 
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.6 }}
          className="mb-6 text-xl font-medium text-cyan-400"
        >
          Junior Web Developer (Laravel/PHP) & Data Specialist
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.8 }}
          className="max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          Saya adalah mahasiswa Sistem Informasi yang fokus pada pengembangan backend web yang efisien 
          dan manajemen database yang rapi. Memadukan pemahaman akademis dengan pengalaman praktis 
          membangun aplikasi berbasis Laravel dan MariaDB.
        </motion.p>

        <motion.div 
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 1 }}
          className="mt-8 flex gap-4"
        >
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="rounded-full bg-cyan-600 px-8 py-3 font-semibold text-white hover:bg-cyan-500 transition">
            Hubungi Saya
          </motion.a>
          <Link href="https://github.com/ivy13534" target="_blank" className="rounded-full border border-slate-700 bg-slate-900 px-8 py-3 font-semibold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition">
            GitHub Profil
          </Link>
        </motion.div>
      </section>

      {/* --- SKILLS & SERVICE --- */}
      <section id="skills" className="bg-slate-900 py-20 px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-5xl"
        >
          <motion.h2 variants={fadeInUp} className="mb-12 text-center text-3xl font-bold text-white">
            Keahlian & <span className="text-cyan-400">Layanan</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInUp} className="rounded-xl border border-slate-800 bg-slate-950 p-8 shadow-lg hover:border-cyan-500/50 transition duration-300">
              <h3 className="mb-6 text-xl font-bold text-white">Technical Stack</h3>
              <ul className="space-y-4">
                {['Backend: PHP Native, Laravel Framework', 'Database: MariaDB, MySQL', 'Tools: Git/GitHub, Postman, REST API', 'Frontend: HTML, CSS, Tailwind, Bootstrap'].map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="rounded-xl border border-slate-800 bg-slate-950 p-8 shadow-lg hover:border-cyan-500/50 transition duration-300">
              <h3 className="mb-6 text-xl font-bold text-white">Apa yang Saya Bantu?</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="border-b border-slate-800 pb-2">
                  <strong className="text-cyan-200">Website Custom (Laravel):</strong> <br/>
                  Sistem informasi, portal internal, atau aplikasi CRUD bisnis.
                </li>
                <li className="border-b border-slate-800 pb-2">
                  <strong className="text-cyan-200">Perbaikan & Modifikasi:</strong> <br/>
                  Fix bug website PHP atau tambah fitur kecil.
                </li>
                <li>
                  <strong className="text-cyan-200">Manajemen Data:</strong> <br/>
                  Merapikan database MariaDB & input data teknis.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-20 px-6">
        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.1 }}
           className="container mx-auto max-w-5xl"
        >
          <motion.h2 variants={fadeInUp} className="mb-12 text-center text-3xl font-bold text-white">
            Proyek <span className="text-cyan-400">Unggulan</span>
          </motion.h2>

          <div className="space-y-16">
            {/* Proyek 1 */}
            <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 lg:flex hover:border-cyan-500/30 transition duration-500">
              <div className="bg-slate-800 lg:w-1/2 min-h-[300px] relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 group-hover:text-cyan-400 transition z-10">Area Screenshot</div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-8 lg:w-1/2">
                <h3 className="text-2xl font-bold text-white">Sistem Pengaduan Masyarakat</h3>
                <p className="mt-2 text-sm text-cyan-400 font-mono">Laravel • MariaDB • Bootstrap UI</p>
                <p className="mt-4 text-slate-400">Aplikasi web pelaporan digital dengan pelacakan status laporan secara real-time.</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300 text-sm">
                  <li>Multi-User Role (Masyarakat, Petugas, Admin).</li>
                  <li>Sistem CRUD Lengkap & Validasi Keamanan.</li>
                </ul>
              </div>
            </motion.div>

            {/* Proyek 2 */}
            <motion.div variants={fadeInUp} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 lg:flex lg:flex-row-reverse hover:border-cyan-500/30 transition duration-500">
              <div className="bg-slate-800 lg:w-1/2 min-h-[300px] relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 group-hover:text-cyan-400 transition z-10">Area Screenshot</div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-8 lg:w-1/2">
                <h3 className="text-2xl font-bold text-white">Backend Web Service (API)</h3>
                <p className="mt-2 text-sm text-cyan-400 font-mono">PHP Native • REST API • JSON</p>
                <p className="mt-4 text-slate-400">Sistem backend pusat data mahasiswa fokus pada efisiensi API untuk integrasi sistem.</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300 text-sm">
                  <li>RESTful API Endpoint (GET, POST, PUT, DELETE).</li>
                  <li>Optimasi Query Database MariaDB.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="bg-slate-900 py-20 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-2xl"
        >
          <h2 className="mb-6 text-3xl font-bold text-white">Siap Bekerja Sama?</h2>
          <p className="mb-8 text-lg text-slate-400">Tersedia untuk proyek jangka pendek maupun menengah. Mari diskusikan kebutuhan Anda.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6,182,212,0.4)" }} whileTap={{ scale: 0.95 }} href="mailto:emailmu@contoh.com" className="w-full rounded-lg bg-cyan-600 px-8 py-4 font-bold text-white hover:bg-cyan-500 sm:w-auto transition">Kirim Email</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://github.com/ivy13534" target="_blank" className="w-full rounded-lg border border-slate-700 px-8 py-4 font-bold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 sm:w-auto transition">GitHub</motion.a>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-600 text-sm">
        <p>&copy; 2024 [Nama Kamu]. Build with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}