"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Mail, Linkedin, Server, Database, Code, Terminal, ExternalLink, Menu, X, ChevronDown, Star, Zap, Shield, Flame, Wind, Sparkles, Download } from "lucide-react";

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

// 1. Background Grid & Glow - Game-like cinematic background
const BackgroundEffects = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number }>>([]);

  useEffect(() => {
    // Only generate particles on client side to avoid hydration mismatch
    const particleCount = isMobile ? 3 : 8;
    const generatedParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(generatedParticles);
  }, [isMobile]);
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Cinematic glow effects - desktop only */}
      {!isMobile && (
        <>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-600/30 blur-[150px] pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[150px] pointer-events-none"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none"
          />
        </>
      )}
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -800, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + particle.id * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full blur-sm"
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

// 3. Typewriter Effect Text - Kept for future use but currently unused
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setIsMobile(mobile);
    
    if (mobile) {
      setDisplayText(text);
      return;
    }
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}<span className={isMobile ? "text-cyan-400" : "animate-pulse text-cyan-400"}>|</span></span>;
};

// --- MAIN PORTFOLIO ---
export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <ScrollProgress />
      <BackgroundEffects />
      
      {/* --- NAVBAR (GAME-STYLE) --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full border-b border-cyan-500/10 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60"
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-2">
            <motion.div 
              className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 text-white font-bold text-lg"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              I
            </motion.div>
            <span className="text-xl font-black tracking-tight text-white group-hover:text-cyan-400 transition hidden sm:inline">
              IVY<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">.DEV</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Characters', href: '#characters' },
              { name: 'Quest Log', href: '#experience' },
              { name: 'Showcase', href: '#projects' },
              { name: 'Recruit', href: '#contact' }
            ].map((item) => (
              <motion.a 
                key={item.name}
                href={item.href}
                whileHover={{ color: '#06b6d4' }}
                className="text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
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
              {[
                { name: 'Characters', href: '#characters' },
                { name: 'Quest Log', href: '#experience' },
                { name: 'Showcase', href: '#projects' },
                { name: 'Recruit', href: '#contact' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-slate-300 hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* --- HERO SECTION (CINEMATIC) --- */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center px-6 overflow-hidden">
        
        {/* Cinematic background bars */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent z-[5]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-[5]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 max-w-5xl mx-auto text-center"
        >
          {/* Main Character/Title */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Outer glow ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 bg-clip-border"
              />
              
              {/* Character card */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
                <span className="text-7xl md:text-8xl relative z-10">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Rarity tier */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-block"
          >
            <div className="px-4 py-2 rounded-full border border-purple-500/50 bg-purple-500/10 backdrop-blur-sm">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">★★★★★ LEGENDARY</span>
            </div>
          </motion.div>

          {/* Character name and title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-white tracking-tighter">
              IVY<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">.DEV</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-cyan-400 mb-4">BACKEND ARCHITECT</h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Powerful Backend Developer specializing in Laravel Framework, Database Architecture, and Enterprise API Solutions. Master of PHP optimization and system scalability.
          </motion.p>

          {/* Skill tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {['Laravel', 'PHP', 'MariaDB', 'API Design', 'System Architecture'].map((skill, idx) => (
              <div 
                key={idx}
                className="px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm text-cyan-300 text-sm font-semibold hover:border-cyan-500/60 transition-colors"
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
              href="#characters" 
              className="group relative px-8 py-4 rounded-lg font-bold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 transition-all group-hover:from-cyan-500 group-hover:to-purple-500" />
              <div className="relative flex items-center justify-center gap-2">
                <Sparkles size={20} />
                View Full Profile
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ivy13534" 
              target="_blank"
              className="px-8 py-4 rounded-lg font-bold text-white border-2 border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Github size={20} />
                GitHub Profile
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* --- CHARACTER ABILITIES / TECH STACK --- */}
      <section id="characters" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ABILITIES</span>
            </h2>
            <p className="text-slate-400 text-lg">Master-level skills in Backend Engineering</p>
          </motion.div>

          {/* Abilities grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Laravel", icon: <Server size={32} />, color: "from-red-500 to-orange-500", element: "Fire" },
              { name: "PHP", icon: <Code size={32} />, color: "from-purple-500 to-pink-500", element: "Dark" },
              { name: "Database", icon: <Database size={32} />, color: "from-cyan-400 to-blue-500", element: "Water" },
              { name: "API", icon: <Zap size={32} />, color: "from-yellow-400 to-orange-400", element: "Lightning" },
              { name: "DevOps", icon: <Terminal size={32} />, color: "from-green-400 to-emerald-500", element: "Nature" },
              { name: "Security", icon: <Shield size={32} />, color: "from-slate-400 to-slate-600", element: "Shield" },
            ].map((ability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Card background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ability.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Border glow */}
                <div className="absolute inset-0 rounded-xl border border-slate-700 group-hover:border-cyan-500/50 transition-colors" />
                
                {/* Content */}
                <div className="relative z-10 p-4 md:p-6 backdrop-blur-sm bg-slate-900/50 h-full flex flex-col items-center justify-center gap-2 text-center">
                  <div className={`text-cyan-400 group-hover:text-white transition-colors`}>
                    {ability.icon}
                  </div>
                  <h3 className="font-bold text-white text-sm md:text-base">{ability.name}</h3>
                  <span className="text-xs text-slate-500 group-hover:text-cyan-300/70 transition-colors">{ability.element}</span>
                </div>
                
                {/* Hover effect line */}
                <motion.div 
                  className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-50 transition-opacity"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE TIMELINE (GAME QUEST LOG) --- */}
      <section id="experience" className="py-24 px-6 relative bg-gradient-to-b from-slate-900/30 to-slate-950">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            className="mb-4 text-center text-3xl md:text-5xl font-black text-white"
          >
            QUEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">LOG</span>
          </motion.h2>
          <p className="text-center text-slate-400 mb-16">Career achievements and milestones</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />

            <div className="space-y-12">
              {[
                { 
                  year: "2023 - Present", 
                  title: "Freelance Backend Architect", 
                  place: "Remote", 
                  desc: "Leading development of enterprise systems and financial applications using Laravel. Building scalable APIs and complex database architectures.",
                  icon: "⚔️"
                },
                { 
                  year: "2021 - Present", 
                  title: "Information Systems Student", 
                  place: "University", 
                  desc: "Advanced coursework in Database Management Systems and Enterprise Architecture. Current GPA: 3.85/4.0.",
                  icon: "📚"
                },
                { 
                  year: "2022", 
                  title: "Backend Development Bootcamp", 
                  place: "Dicoding Indonesia", 
                  desc: "Completed intensive courses in PHP Backend Development and AWS Cloud Architecture. Certified Professional.",
                  icon: "🎓"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative pl-16 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:ml-1/2 md:pl-16'}`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 ring-4 ring-slate-950 flex items-center justify-center text-xs"
                  >
                    <div className="w-2 h-2 bg-slate-950 rounded-full" />
                  </motion.div>
                  
                  {/* Content card */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="text-sm font-mono text-cyan-400 bg-cyan-900/20 px-3 py-1 rounded-full w-fit">{item.year}</span>
                    </div>
                    <p className="text-slate-400 text-sm font-semibold mb-2">{item.place}</p>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS (GAME COLLECTIONS) --- */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2">
              PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SHOWCASE</span>
            </h2>
            <p className="text-slate-400">Featured systems built with production-grade architecture</p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                num: 1,
                title: "Enterprise Data System",
                desc: "Large-scale census management platform with real-time analytics, PDF/Excel export, and advanced reporting dashboards.",
                tags: ["Laravel", "MySQL", "Chart.js"],
                icon: "📊"
              },
              {
                num: 2,
                title: "Point of Sale System", 
                desc: "Complete POS solution for retail and hospitality with inventory management, payment processing, and financial reports.",
                tags: ["Laravel", "MySQL", "Bootstrap"],
                icon: "💳"
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950" />
                
                {/* Project header with icon */}
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl md:text-6xl">{project.icon}</span>
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full">PROJECT #{project.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-base leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.a 
                      whileHover={{ x: 3 }}
                      href="https://example.com/demo" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-600/20 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-600/30 text-sm font-bold transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a 
                      whileHover={{ x: 3 }}
                      href="https://github.com/ivy13534" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700/30 border border-slate-600 text-slate-300 hover:bg-slate-700/50 text-sm font-bold transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / RECRUIT SECTION --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Glow Background Contact - Hidden on mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-[150px] rounded-full pointer-events-none hidden md:block" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl relative z-10 rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 md:p-16 text-center backdrop-blur-md"
        >
          {/* Decorative elements */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-8 -right-8 w-32 h-32 border border-cyan-500/20 rounded-full hidden md:block pointer-events-none"
          />
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 relative z-10">
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">RECRUIT?</span>
          </h2>
          
          <p className="mb-8 mx-auto max-w-2xl text-lg text-slate-300 relative z-10 leading-relaxed">
            I'm available for freelance projects, contract work, and full-time positions. Let's build something extraordinary together.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 relative z-10">
            {[
              { label: "Projects", value: "15+" },
              { label: "Clients", value: "8+" },
              { label: "Experience", value: "3 Yrs" }
            ].map((stat, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
                <div className="text-2xl md:text-3xl font-black text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:emailmu@contoh.com" 
              className="group relative px-8 py-4 rounded-lg font-bold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all group-hover:from-cyan-500 group-hover:to-blue-500" />
              <div className="relative flex items-center justify-center gap-2">
                <Mail size={20} />
                Send Email
              </div>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/namamu" 
              target="_blank"
              className="px-8 py-4 rounded-lg font-bold text-white border-2 border-cyan-500/50 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Linkedin size={20} />
                LinkedIn
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ivy13534" 
              target="_blank"
              className="px-8 py-4 rounded-lg font-bold text-slate-200 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-700/30 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Github size={20} />
                GitHub
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER (GAME STYLE) --- */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 relative overflow-hidden">
        {/* Gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        
        <div className="container mx-auto px-6">
          {/* Social links */}
          <div className="mb-8 flex justify-center gap-6">
            {[
              { icon: <Github size={24} />, label: "GitHub", url: "https://github.com/ivy13534", color: "hover:text-slate-300" },
              { icon: <Linkedin size={24} />, label: "LinkedIn", url: "https://linkedin.com/in/namamu", color: "hover:text-blue-400" },
              { icon: <Mail size={24} />, label: "Email", url: "mailto:emailmu@contoh.com", color: "hover:text-cyan-400" }
            ].map((social, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={social.url} 
                  target={social.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  title={social.label}
                  className={`text-slate-500 transition-colors ${social.color} flex items-center`}
                >
                  {social.icon}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} <span className="text-cyan-400 font-bold">IVY.DEV</span> • Backend Architect & Developer
            </p>
            <p className="text-xs text-slate-700 mt-2">
              Built with <span className="text-cyan-400">Next.js</span>, <span className="text-purple-400">Framer Motion</span>, and <span className="text-blue-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}