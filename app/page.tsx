"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Mail, Linkedin, Server, Database, Code, Terminal, ExternalLink, Menu, X, ChevronDown, Sparkles, Zap, Shield } from "lucide-react";

// --- BACKGROUND: Wuthering Waves Aesthetic ---
const BackgroundEffects = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number }>>([]);

  useEffect(() => {
    const particleCount = isMobile ? 4 : 12;
    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(generatedParticles);
  }, [isMobile]);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-gradient-to-br from-[#0a0515] via-[#120828] to-[#0f0620]">
      {/* Animated grid background with teal tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a62e_1px,transparent_1px),linear-gradient(to_bottom,#14b8a62e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Wuthering Waves glow effects */}
      {!isMobile && (
        <>
          {/* Main cyan/teal glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-cyan-500/25 blur-[180px] pointer-events-none"
          />
          {/* Purple accent glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-purple-600/20 blur-[200px] pointer-events-none"
          />
          {/* Violet top-right glow */}
          <motion.div 
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.08, 0.25, 0.08],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-500/15 blur-[150px] pointer-events-none"
          />
        </>
      )}
      
      {/* Floating particles/resonance effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -800, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 18 + particle.id * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 bg-gradient-to-b from-cyan-400 to-cyan-500/0 rounded-full blur-sm"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Scroll Progress Bar - Neon glow effect
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 origin-left z-[60] shadow-[0_0_20px_rgba(34,197,234,0.8)]"
      style={{ scaleX }}
    />
  );
};

// --- MAIN WEBSITE ---
export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen text-slate-200 selection:bg-cyan-500/40 selection:text-cyan-100 font-sans">
      <ScrollProgress />
      <BackgroundEffects />
      
      {/* ===== NAVBAR: Wuthering Waves Style ===== */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-gradient-to-b from-[#0a0515]/80 via-[#120828]/60 to-transparent backdrop-blur-2xl"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-2">
            <motion.div 
              className="relative flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(34,197,234,0.6)]"
              whileHover={{ rotate: 10, scale: 1.1, boxShadow: "0 0 30px rgba(34,197,234,0.8)" }}
            >
              I
            </motion.div>
            <span className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition hidden sm:inline">
              IVY<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">.DEV</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Resonators', href: '#resonators' },
              { name: 'Chronicle', href: '#experience' },
              { name: 'Arsenal', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <motion.a 
                key={item.name}
                href={item.href}
                whileHover={{ color: '#22d3ee' }}
                className="text-sm font-semibold text-cyan-200/70 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400 hover:text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden bg-gradient-to-b from-[#120828] to-[#0a0515] border-b border-cyan-500/20 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {[
                { name: 'Resonators', href: '#resonators' },
                { name: 'Chronicle', href: '#experience' },
                { name: 'Arsenal', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-cyan-300 hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* ===== HERO: Resonator Profile ===== */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center px-6 overflow-hidden">
        
        {/* Cinematic top/bottom vignette bars */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0515] via-[#0a0515]/50 to-transparent z-[5]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0515] to-transparent z-[5]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 max-w-5xl mx-auto text-center"
        >
          {/* Resonator Portrait */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-16 flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              {/* Outer resonance ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-clip-border shadow-[0_0_40px_rgba(34,197,234,0.4)]"
              />
              
              {/* Inner ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-clip-border opacity-50"
              />
              
              {/* Portrait card */}
              <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-[#1a0f2e] via-[#1a0f2e] to-[#0f0620] border border-cyan-500/40 flex items-center justify-center overflow-hidden shadow-[inset_0_0_30px_rgba(34,197,234,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
                <span className="text-8xl md:text-9xl relative z-10">⚔️</span>
              </div>
            </div>
          </motion.div>

          {/* Rarity badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 inline-block"
          >
            <div className="px-5 py-2 rounded-full border border-purple-500/60 bg-purple-500/10 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.3)]">
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">★ ★ ★ ★ ★ — LEGENDARY DEVELOPER</span>
            </div>
          </motion.div>

          {/* Name and title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-white tracking-tighter neon-title">
              IVY<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-300">.DEV</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-6 tracking-wide">RESONATOR CLASS: BACKEND ARCHITECT</h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Elite backend developer specializing in Laravel framework, database architecture, and enterprise-grade APIs. Master resonator of PHP optimization and scalable system design.
          </motion.p>

          {/* Core attributes */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['Laravel Mastery', 'PHP Expert', 'Database Architect', 'API Design', 'System Scaling'].map((skill, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-lg border border-cyan-500/40 bg-cyan-500/8 backdrop-blur-sm text-cyan-300 text-sm font-bold hover:border-cyan-400 hover:bg-cyan-500/15 transition-all cursor-pointer shadow-[0_0_10px_rgba(34,197,234,0.2)]"
              >
                {skill}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="#resonators" 
              className="group relative px-8 py-4 rounded-lg font-black text-white overflow-hidden text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 transition-all group-hover:from-cyan-500 group-hover:to-teal-500 shadow-[0_0_20px_rgba(34,197,234,0.5)]" />
              <div className="relative flex items-center justify-center gap-2">
                <Sparkles size={20} />
                View Profile
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ivy13534" 
              target="_blank"
              className="px-8 py-4 rounded-lg font-bold text-white border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,197,234,0.3)] transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Github size={20} />
                GitHub
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0] }} 
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-cyan-400/60">Explore</span>
          <ChevronDown size={20} className="text-cyan-400/60" />
        </motion.div>
      </section>

      {/* ===== RESONATORS: Core Abilities ===== */}
      <section id="resonators" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 neon-title">
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">RESONATORS</span>
            </h2>
            <p className="text-cyan-300/70 text-lg">Core abilities and specialized skills</p>
          </motion.div>

          {/* Abilities grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Laravel", icon: "🔥", element: "Pyro" },
              { name: "PHP", icon: "⚡", element: "Electro" },
              { name: "Database", icon: "💧", element: "Hydro" },
              { name: "API", icon: "🌪️", element: "Aero" },
              { name: "DevOps", icon: "🌱", element: "Verdure" },
              { name: "Security", icon: "❄️", element: "Cryo" },
            ].map((ability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer edge-frame"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#0f0620] to-[#0a0515]" />
                
                {/* Border effect */}
                <div className="absolute inset-0 rounded-xl border border-cyan-500/30 group-hover:border-cyan-400/80 transition-colors" />
                
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative z-10 p-6 backdrop-blur-sm h-full flex flex-col items-center justify-center gap-3 text-center">
                  <div className="text-4xl group-hover:scale-125 transition-transform">
                    {ability.icon}
                  </div>
                  <h3 className="font-bold text-white text-base">{ability.name}</h3>
                  <span className="text-xs text-cyan-300/60 group-hover:text-cyan-300 transition-colors font-semibold">{ability.element}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHRONICLE: Experience Timeline ===== */}
      <section id="experience" className="py-32 px-6 relative bg-gradient-to-b from-purple-950/20 to-[#0a0515]">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="mb-4 text-center text-4xl md:text-6xl font-black text-white neon-title"
          >
            MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">CHRONICLE</span>
          </motion.h2>
          <p className="text-center text-cyan-300/60 mb-20 text-lg">Career progression and achievements</p>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500/0 shadow-[0_0_30px_rgba(34,197,234,0.4)]" />

            <div className="space-y-16">
              {[
                { 
                  year: "2023 - Present", 
                  title: "Freelance Backend Architect", 
                  place: "Remote Deployment", 
                  desc: "Leading development of enterprise systems using Laravel resonance. Creating scalable APIs and architecting complex database systems for fortune companies.",
                  icon: "🎖️"
                },
                { 
                  year: "2021 - Present", 
                  title: "Information Systems Scholar", 
                  place: "University Campus", 
                  desc: "Specialized study in DBMS and Enterprise Architecture. Achieved 3.85/4.0 GPA, completed 40+ advanced engineering courses.",
                  icon: "📖️"
                },
                { 
                  year: "2022", 
                  title: "Backend Development Ascension", 
                  place: "Dicoding Academy", 
                  desc: "Completed intensive backend engineering certification. Mastered PHP, Laravel framework, and AWS cloud architecture.",
                  icon: "🏅"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative pl-16 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-20' : 'md:ml-1/2 md:pl-20'}`}
                >
                  {/* Timeline marker */}
                  <motion.div 
                    animate={{ scale: [1, 1.3, 1], boxShadow: ["0_0_0_0_rgba(34,197,234,0.4)", "0_0_20px_10px_rgba(34,197,234,0)"] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 ring-4 ring-[#0a0515] flex items-center justify-center z-20"
                  >
                    <div className="w-3 h-3 bg-[#0a0515] rounded-full" />
                  </motion.div>
                  
                  {/* Content card */}
                  <motion.div 
                    whileHover={{ y: -8, boxShadow: "0_0_30px_rgba(34,197,234,0.3)" }}
                    className="rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 bg-gradient-to-br from-[#1a0f2e]/80 to-[#0f0620]/80 backdrop-blur-sm p-8 transition-all"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-3">
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      <span className="text-sm font-mono text-cyan-400 bg-cyan-900/30 px-4 py-1 rounded-full w-fit shadow-[0_0_10px_rgba(34,197,234,0.2)]">{item.year}</span>
                    </div>
                    <p className="text-cyan-300/70 text-sm font-semibold mb-3">{item.place}</p>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARSENAL: Projects Showcase ===== */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-3 neon-title">
              PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ARSENAL</span>
            </h2>
            <p className="text-cyan-300/70 text-lg">Enterprise systems and featured applications</p>
          </motion.div>

          {/* Projects */}
          <div className="grid gap-10 lg:grid-cols-2">
            {[
              {
                num: 1,
                title: "Census Data Platform",
                desc: "Large-scale census management system with real-time analytics, PDF/Excel exports, advanced reporting dashboards, and multi-region deployment.",
                tags: ["Laravel", "MySQL", "Chart.js", "AWS"],
                icon: "📊"
              },
              {
                num: 2,
                title: "Point of Sale System", 
                desc: "Complete POS solution for retail with inventory management, payment processing, financial analytics, and multi-location support.",
                tags: ["Laravel", "MySQL", "Bootstrap", "Redis"],
                icon: "💳"
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/60 transition-all cursor-pointer"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#0f0620] to-[#0a0515]" />
                
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative z-10 p-10 md:p-12">
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-6xl md:text-7xl">{project.icon}</span>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-900/30 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(34,197,234,0.2)]">PROJECT #{project.num}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white mb-5 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-900/30 to-purple-900/20 border border-cyan-500/30 text-cyan-300 text-sm font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a 
                      whileHover={{ x: 3 }}
                      href="https://github.com/ivy13534" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-600/30 hover:border-cyan-400 text-sm font-bold transition-all"
                    >
                      <ExternalLink size={18} />
                      View Details
                    </motion.a>
                    <motion.a 
                      whileHover={{ x: 3 }}
                      href="https://github.com/ivy13534" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-700/20 border border-slate-600/50 text-slate-300 hover:bg-slate-700/30 hover:border-slate-500 text-sm font-bold transition-all"
                    >
                      <Github size={18} />
                      Repository
                    </motion.a>
                  </div>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT: Recruitment ===== */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-500/15 to-purple-600/15 blur-[200px] rounded-full pointer-events-none hidden md:block" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl relative z-10 rounded-3xl border-2 border-cyan-500/40 bg-gradient-to-br from-[#1a0f2e]/90 to-[#0a0515]/90 p-12 md:p-20 text-center backdrop-blur-xl shadow-[0_0_60px_rgba(34,197,234,0.2)]"
        >
          {/* Decorative element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-48 h-48 border-2 border-cyan-500/20 rounded-full hidden lg:block pointer-events-none"
          />
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 neon-title">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">COLLABORATE</span>
          </h2>
          
          <p className="mb-10 mx-auto max-w-3xl text-xl text-slate-300 leading-relaxed">
            I'm open to freelance projects, contract opportunities, and full-time positions. Let's create something legendary together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12 relative z-10">
            {[
              { label: "Projects", value: "15+" },
              { label: "Clients", value: "8+" },
              { label: "Experience", value: "3 Yrs" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all">
                <div className="text-3xl md:text-4xl font-black text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-slate-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-5 relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:your.email@example.com" 
              className="group relative px-10 py-4 rounded-lg font-black text-white overflow-hidden text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 group-hover:from-cyan-500 group-hover:to-teal-500 transition-all shadow-[0_0_20px_rgba(34,197,234,0.5)]" />
              <div className="relative flex items-center justify-center gap-2">
                <Mail size={22} />
                Send Email
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              className="px-10 py-4 rounded-lg font-bold text-white border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all shadow-[0_0_15px_rgba(34,197,234,0.2)]"
            >
              <div className="flex items-center justify-center gap-2">
                <Linkedin size={22} />
                LinkedIn
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ivy13534" 
              target="_blank"
              className="px-10 py-4 rounded-lg font-bold text-slate-200 border-2 border-slate-600/50 hover:border-slate-500 hover:bg-slate-700/30 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Github size={22} />
                GitHub
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-cyan-500/20 bg-gradient-to-b from-[#0a0515] to-[#000000] py-16 relative overflow-hidden">
        {/* Gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          {/* Social links */}
          <div className="mb-10 flex justify-center gap-8">
            {[
              { icon: <Github size={28} />, label: "GitHub", url: "https://github.com/ivy13534", color: "hover:text-cyan-400" },
              { icon: <Linkedin size={28} />, label: "LinkedIn", url: "https://linkedin.com/in/yourprofile", color: "hover:text-cyan-400" },
              { icon: <Mail size={28} />, label: "Email", url: "mailto:your.email@example.com", color: "hover:text-cyan-400" }
            ].map((social, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={social.url} 
                  target={social.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  title={social.label}
                  className={`text-cyan-300/50 transition-colors ${social.color} flex items-center shadow-[0_0_20px_rgba(34,197,234,0.1)]`}
                >
                  {social.icon}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-cyan-500/10 pt-10">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} <span className="text-cyan-400 font-bold neon-title">IVY.DEV</span> • Elite Backend Developer
            </p>
            <p className="text-xs text-slate-600 mt-3">
              Crafted with <span className="text-cyan-400">Next.js</span> • <span className="text-purple-400">Framer Motion</span> • <span className="text-blue-400">Tailwind CSS</span>
            </p>
            <p className="text-xs text-slate-700 mt-2 ">
              Resonance Protocol Active ✦ All Systems Operational
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
