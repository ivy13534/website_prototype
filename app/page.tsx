"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-stars text-slate-200 selection:bg-cyan-400 selection:text-void overflow-x-hidden font-sans">
      
      {/* NAVBAR HUD */}
      <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-void/80 backdrop-blur-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-orbitron text-xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            IVY.ARCHIVES //
          </div>
          <div className="hidden space-x-8 md:flex text-xs tracking-widest uppercase">
            {['Tentang', 'Skill', 'Proyek'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_cyan] transition-all duration-300">
                [{item}]
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION - Tampilan Karakter */}
      <section id="tentang" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Dekorasi Lingkaran Belakang */}
        <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-500/10 bg-gradient-radial from-cyan-500/5 to-transparent blur-3xl -z-10 animate-pulse"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          {/* Bingkai Foto Hexagon/Bulat ala Game */}
          <div className="mx-auto mb-8 h-40 w-40 rounded-full border-2 border-cyan-400 p-1 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
             <div className="h-full w-full rounded-full bg-slate-800 overflow-hidden relative">
                {/* Ganti dengan <Image /> nanti */}
                <div className="absolute inset-0 flex items-center justify-center text-cyan-400/50 text-xs font-orbitron">
                  NO SIGNAL
                </div>
             </div>
          </div>

          <h1 className="mb-2 text-5xl md:text-7xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white drop-shadow-sm">
            [NAMA KAMU]
          </h1>
          
          <div className="mb-8 flex justify-center gap-2 text-xs font-orbitron tracking-[0.3em] text-cyan-400/80">
            <span>LEVEL 20</span>
            <span>///</span>
            <span>WAVEFORM: STABLE</span>
          </div>

          <p className="max-w-2xl mx-auto text-lg text-slate-400 border-l-2 border-cyan-500/50 pl-4 text-left font-light leading-relaxed bg-gradient-to-r from-cyan-900/10 to-transparent p-4">
            "Mahasiswa Sistem Informasi. Spesialisasi Backend & Database. Siap melakukan sinkronisasi data dan pengembangan sistem."
          </p>
        </motion.div>
      </section>

      {/* SKILLS SECTION - Seperti Menu Stats */}
      <section id="skill" className="py-24 px-6 bg-void relative">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-2 w-10 bg-cyan-400"></div>
            <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-wider">
              Resonance <span className="text-cyan-400">Skills</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: 'Laravel Framework', type: 'Backend', val: '90%' },
              { name: 'MariaDB / MySQL', type: 'Database', val: '85%' },
              { name: 'Next.js / React', type: 'Frontend', val: '70%' },
              { name: 'REST API', type: 'Protocol', val: '80%' }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative border border-white/10 bg-white/5 p-6 hover:bg-cyan-900/20 hover:border-cyan-400/50 transition-all"
              >
                {/* Efek Sudut Tech */}
                <div className="absolute top-0 right-0 h-2 w-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition"></div>
                <div className="absolute bottom-0 left-0 h-2 w-2 bg-cyan-400 opacity-0 group-hover:opacity-100 transition"></div>
                
                <div className="flex justify-between items-end mb-2">
                  <h3 className="font-orbitron font-bold text-lg text-white">{skill.name}</h3>
                  <span className="text-xs text-cyan-400 font-mono">{skill.type}</span>
                </div>
                {/* Progress Bar ala HP Bar */}
                <div className="h-1 w-full bg-slate-800">
                  <div className="h-full bg-cyan-400 shadow-[0_0_10px_cyan]" style={{ width: skill.val }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* PROJECT SECTION - Updated with Real Repos */}
      <section id="proyek" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl">
           <div className="flex items-center gap-4 mb-12 justify-end">
            <h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-wider text-right">
              Mission <span className="text-gold">Log</span>
            </h2>
            <div className="h-2 w-10 bg-gold"></div>
          </div>

          <div className="space-y-8">
            
            {/* Project 1: SINVENT (Inventory) */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-sm border-l-4 border-gold bg-gradient-to-r from-slate-900 to-slate-900/50 p-8 hover:from-slate-800 transition-all group"
            >
              <div className="absolute top-2 right-2 text-xs font-orbitron text-slate-600 group-hover:text-gold">Class: S-Rank</div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">S-INVENT (UKK)</h3>
              <p className="text-slate-400 mb-4 font-light">
                Sistem Informasi Inventaris Barang. Fitur lengkap mencakup manajemen stok masuk/keluar, 
                generate laporan otomatis, dan manajemen hak akses (Admin/Petugas).
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-gold/10 text-gold text-xs border border-gold/20">LARAVEL</span>
                <span className="px-2 py-1 bg-gold/10 text-gold text-xs border border-gold/20">MYSQL</span>
                <span className="px-2 py-1 bg-gold/10 text-gold text-xs border border-gold/20">UKK PROJECT</span>
              </div>
              <div className="mt-4">
                <a href="https://github.com/ivy13534/sinvent_ukk" target="_blank" className="text-cyan-400 text-sm hover:text-white transition-colors">>> ACCESS REPOSITORY</a>
              </div>
            </motion.div>

            {/* Project 2: CCTV V3 */}
             <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-sm border-l-4 border-cyan-400 bg-gradient-to-r from-slate-900 to-slate-900/50 p-8 hover:from-slate-800 transition-all group"
            >
              <div className="absolute top-2 right-2 text-xs font-orbitron text-slate-600 group-hover:text-cyan-400">Class: A-Rank</div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">CCTV MONITOR V3</h3>
              <p className="text-slate-400 mb-4 font-light">
                Pengembangan sistem monitoring keamanan. Versi ke-3 dengan peningkatan pada 
                logging aktivitas dan dashboard visualisasi area pengawasan.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs border border-cyan-400/20">PHP NATIVE</span>
                <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs border border-cyan-400/20">SYSTEM ANALYTICS</span>
              </div>
              <div className="mt-4">
                <a href="https://github.com/ivy13534/cctv_v3" target="_blank" className="text-cyan-400 text-sm hover:text-white transition-colors">>> ACCESS REPOSITORY</a>
              </div>
            </motion.div>

            {/* Project 3: MPP / Final Project */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-sm border-l-4 border-slate-600 bg-gradient-to-r from-slate-900 to-slate-900/50 p-8 hover:from-slate-800 transition-all group"
            >
              <div className="absolute top-2 right-2 text-xs font-orbitron text-slate-600 group-hover:text-white">Class: B-Rank</div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2">ACADEMIC ARCHIVES</h3>
              <p className="text-slate-400 mb-4 font-light">
                Kumpulan proyek akademik termasuk Manajemen Proyek Perangkat Lunak (MPP) 
                dan Final Project Semester 1. Dokumentasi pembelajaran logika dan struktur data.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs border border-slate-600">ACADEMIC</span>
                <span className="px-2 py-1 bg-slate-800 text-slate-300 text-xs border border-slate-600">C++ / BASIC WEB</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-void py-8 text-center text-slate-600 text-xs font-orbitron tracking-widest">
        SYSTEM SHUTDOWN // © 2026 IVY PROTOCOL
      </footer>

    </main>
  );
}