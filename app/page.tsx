"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Mail, Linkedin, Server, Database, Code, Terminal, ExternalLink, Menu, X, ChevronDown, Star } from "lucide-react";

// --- VARIANTS ANIMASI ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

// --- COMPONENTS KECIL ---

// 1. Background Grid & Glow
const BackgroundEffects = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[100px]"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]"
    />
  </div>
);

// 2. Scroll Progress Bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

// 3. Typewriter Effect Text
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50); // Kecepatan ketik
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse text-cyan-400">|</span></span>;
};

// --- MAIN PORTFOLIO ---
export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Parallax Text Hook
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <ScrollProgress />
      <BackgroundEffects />
      
      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Link href="/" className="group relative flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold">
              I
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:text-cyan-400 transition">
              IVY<span className="text-cyan-500">.DEV</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Tech', 'Experience', 'Projects'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white hover:bg-cyan-500 transition-all hover:scale-105 active:scale-95 border border-white/10">
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300 hover:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {['About', 'Tech', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        
        {/* Konten Hero */}
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-8 relative h-32 w-32 md:h-40 md:w-40"
          >
             <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-50 animate-pulse"></div>
             <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center">
                {/* Ganti dengan <Image /> asli Anda */}
                <span className="text-4xl">👋</span> 
             </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h2 variants={fadeInUp} className="mb-4 text-lg font-medium text-cyan-400 tracking-wide uppercase">
              Hello, I'm Ivy
            </motion.h2>
            <motion.h1 variants={fadeInUp} className="mb-6 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
              Backend <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Wizard.</span>
              <Star size={26} className="inline-block ml-4 text-cyan-400" aria-hidden="true" />
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="h-8 mb-8 text-xl text-slate-400 md:text-2xl font-mono">
              <TypewriterText text="Laravel Framework • Database Architecture • API Specialist" />
            </motion.div>

            <motion.p variants={fadeInUp} className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed">
              Mahasiswa Sistem Informasi yang mengubah logika kompleks menjadi kode PHP yang bersih dan efisien. 
              Fokus pada performa backend, keamanan data, dan arsitektur database yang skalabel.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#projects" className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-cyan-600 px-8 py-4 font-bold text-white transition-all hover:bg-cyan-500 hover:pr-6">
                Lihat Karya
                <ChevronDown className="transition-transform group-hover:translate-y-1" size={20}/>
              </a>
              <a href="https://github.com/ivy13534" target="_blank" className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 font-bold text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Github size={20} />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-cyan-500 to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* --- TECH STACK (GRID) --- */}
      <section id="tech" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical <span className="text-cyan-400">Arsenal</span></h2>
            <p className="text-slate-400">Alat tempur yang saya gunakan untuk membangun sistem.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Laravel", icon: <Server />, color: "text-red-500", desc: "Framework Utama" },
              { name: "PHP Native", icon: <Code />, color: "text-purple-400", desc: "Core Logic" },
              { name: "MariaDB", icon: <Database />, color: "text-cyan-300", desc: "Data Management" },
              { name: "REST API", icon: <ExternalLink />, color: "text-green-400", desc: "System Integration" },
              { name: "Linux/Bash", icon: <Terminal />, color: "text-slate-200", desc: "Server Ops" },
              { name: "Tailwind", icon: <Code />, color: "text-blue-400", desc: "Styling Cepat" },
            ].map((tech, idx) => (
              <motion.div 
                key={idx} 
                variants={scaleIn}
                whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.5)" }}
                className="group relative rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all"
              >
                <div className={`mb-4 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{tech.desc}</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- EXPERIENCE TIMELINE --- */}
      <section id="experience" className="py-24 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
           <motion.h2 
             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
             className="mb-16 text-center text-3xl font-bold text-white"
           >
             Perjalanan <span className="text-cyan-400">Karir & Studi</span>
           </motion.h2>

           <div className="relative border-l border-slate-800 ml-4 md:ml-10 space-y-12">
             {[
               { year: "2023 - Sekarang", title: "Freelance Web Developer", place: "Remote", desc: "Mengembangkan sistem informasi desa dan aplikasi kasir berbasis web menggunakan Laravel." },
               { year: "2021 - Sekarang", title: "Mahasiswa Sistem Informasi", place: "Universitas [Nama Kampus]", desc: "Fokus studi pada Database Management System dan Advanced Web Programming. IPK Saat ini: 3.85." },
               { year: "2022", title: "Peserta Bootcamp Backend", place: "Dicoding Indonesia", desc: "Menyelesaikan kelas 'Belajar Back-End Pemula dengan PHP' dan 'Architecting on AWS'." }
             ].map((item, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: idx * 0.2 }}
                 viewport={{ once: true }}
                 className="relative pl-8 md:pl-12"
               >
                 {/* Dot Timeline */}
                 <span className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-slate-900" />
                 
                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-sm font-mono text-cyan-400 bg-cyan-900/20 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{item.year}</span>
                 </div>
                 <p className="text-slate-400 text-sm font-semibold mb-2">{item.place}</p>
                 <p className="text-slate-500 leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 flex items-end justify-between border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured <span className="text-cyan-400">Projects</span></h2>
              <p className="mt-2 text-slate-400">Implementasi nyata dari kode yang saya tulis.</p>
            </div>
            <Link href="https://github.com/ivy13534" className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition">
              Lihat semua di GitHub <ExternalLink size={16} />
            </Link>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {[1, 2].map((num) => (
              <motion.div 
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: num * 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
              >
                {/* Image Placeholder dengan efek Zoom */}
                <div className="aspect-video w-full overflow-hidden bg-slate-800 relative">
                  <div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition duration-500 flex items-center justify-center">
                     <span className="text-slate-500 group-hover:text-slate-300">Project Screenshot {num}</span>
                  </div>
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="relative p-8">
                  <div className="mb-4 flex gap-2">
                    {['Laravel', 'MySQL', 'Bootstrap'].map(tag => (
                      <span key={tag} className="rounded-md bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-300 border border-slate-700">{tag}</span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Sistem Informasi Manajemen {num}</h3>
                  <p className="mb-6 text-slate-400 line-clamp-3">
                    Aplikasi berbasis web untuk mengelola data sensus penduduk dengan fitur export PDF, Excel, dan grafik statistik real-time menggunakan Chart.js.
                  </p>
                  <div className="flex gap-4">
                     <div className="relative group">
                       <a href="https://example.com/demo" target="_blank" rel="noopener noreferrer" title="Open Live Demo" className="text-sm font-bold text-white hover:underline decoration-cyan-500 underline-offset-4">Live Demo</a>
                       <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-800/90 px-2 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-opacity transition-transform duration-150 ease-out">Open Live Demo</span>
                     </div>
                     <div className="relative group">
                       <a href="https://github.com/ivy13534" target="_blank" rel="noopener noreferrer" title="View Source on GitHub" className="text-sm font-bold text-slate-400 hover:text-white flex items-center gap-1"><Github size={14}/> Source Code</a>
                       <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-800/90 px-2 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-opacity transition-transform duration-150 ease-out">View Source on GitHub</span>
                     </div>
                  </div> 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Glow Background Contact */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl relative z-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:p-16 text-center backdrop-blur-md"
        >
          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-white">Let's Build Something <br/><span className="text-cyan-400">Amazing Together</span></h2>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-slate-400">
            Sedang mencari Backend Developer untuk proyek freelance atau posisi intern? 
            Saya siap membantu Anda membangun arsitektur sistem yang solid.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:emailmu@contoh.com" 
              className="flex w-full md:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
            >
              <Mail size={20} />
              Kirim Email
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/namamu" 
              target="_blank"
              className="flex w-full md:w-auto items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 font-bold text-slate-200 hover:bg-slate-700 hover:text-white"
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex justify-center gap-6 text-slate-500">
            <div className="relative group">
              <a href="https://github.com/ivy13534" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="Open GitHub profile" className="hover:text-cyan-400 transition flex items-center"><Github size={24}/></a>
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-800/90 px-2 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-opacity transition-transform duration-150 ease-out">Open GitHub profile</span>
            </div>

            <div className="relative group">
              <a href="https://linkedin.com/in/namamu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="Open LinkedIn profile" className="hover:text-cyan-400 transition flex items-center"><Linkedin size={24}/></a>
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-800/90 px-2 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-opacity transition-transform duration-150 ease-out">Open LinkedIn profile</span>
            </div>

            <div className="relative group">
              <a href="mailto:emailmu@contoh.com" aria-label="Email" title="Send an email" className="hover:text-cyan-400 transition flex items-center"><Mail size={24}/></a>
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-800/90 px-2 py-1 text-xs text-white opacity-0 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 transition-opacity transition-transform duration-150 ease-out">Send an email</span>
            </div>
          </div>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Ivy.Dev. Dibuat dengan <span className="text-cyan-500">Next.js</span> & <span className="text-cyan-500">Framer Motion</span>.
          </p>
        </div>
      </footer>
    </main>
  );
}