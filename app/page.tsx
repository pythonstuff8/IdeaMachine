'use client'

import { motion } from 'framer-motion'
import { Zap, Download, Sparkles, FileText, Bookmark, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null)

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Generation',
      description: 'Generate unlimited unique ideas using advanced AI models from Ollama, OpenAI, Claude, or Gemini.',
    },
    {
      icon: FileText,
      title: 'Comprehensive Planning',
      description: 'Get detailed implementation plans for each idea with timelines, todos, and full development strategies.',
    },
    {
      icon: Bookmark,
      title: 'Save & Organize',
      description: 'Save your favorite ideas, track progress across sessions, and export your collection.',
    },
    {
      icon: TrendingUp,
      title: 'Smart Filtering',
      description: 'AI validates ideas against your original prompt and ranks them by quality and relevance.',
    },
  ]

  const platforms = [
    {
      name: 'macOS',
      icon: '/mac.png',
      download: 'https://github.com/pythonstuff8/IdeaMachine/releases/download/ideamachine/Idea.Machine-Mac-1.0.1-Installer.dmg',
      available: true,
      version: '1.0.1',
    },
    {
      name: 'Windows',
      icon: '/windows.png',
      download: 'https://github.com/pythonstuff8/IdeaMachine/releases/download/ideamachine/Idea.Machine-Windows-1.0.1-Setup.exe',
      available: true,
      version: '1.0.1',
        },
    {
      name: 'Linux',
      icon: '/linux.png',
      download: 'https://github.com/pythonstuff8/IdeaMachine/releases/download/ideamachine/Idea.Machine-Linux-1.0.1.AppImage',
      available: true,
      version: '1.0.1',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full animate-pulse-slow delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold">
            IDEA <span className="text-white/80">MACHINE</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">
            Features
          </a>
          <a href="#download" className="text-white/70 hover:text-white transition-colors">
            Download
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
          >
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-sm text-white/80">AI-Powered Idea Generation</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Prompts Into
            <br />
            <span className="text-white/90">Innovative Ideas</span>
          </h1>

          <p className="text-xl text-white/60 mb-4 max-w-2xl mx-auto leading-relaxed">
            Generate, filter, and plan your next big idea with AI. Save your favorites, track progress,
            and get comprehensive implementation plans—all in one powerful desktop app.
          </p>
          <p className="text-sm text-white/40 mb-12">
            Created by <span className="text-white/60 font-semibold">Suhaan Thayyil</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#download"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <Download className="w-5 h-5" />
              <span>Download Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-3 px-8 py-4 glass-panel rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              <span>Learn More</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to turn ideas into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Download Idea Machine</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Available for macOS, Windows, and Linux.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredPlatform(platform.name)}
              onMouseLeave={() => setHoveredPlatform(null)}
              className={`relative w-full md:w-64 glass-panel p-6 rounded-2xl transition-all ${
                platform.available
                  ? 'hover:bg-white/10 hover:scale-105 cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {platform.available && (
                <div className="absolute top-3 right-3">
                  <Check className="w-5 h-5 text-white/60" />
                </div>
              )}
              <div className="w-20 h-20 mb-4 mx-auto flex items-center justify-center bg-white/20 rounded-xl p-3">
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{platform.name}</h3>
              <p className="text-white/40 text-xs mb-3 text-center">{platform.version}</p>
              <a
                href={platform.download}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg text-white/80 hover:text-white transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Version 1.0.1</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Requires Ollama or API keys</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Full documentation included</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
              <Zap className="text-white w-4 h-4" />
            </div>
            <span className="font-bold">
              IDEA <span className="text-white/80">MACHINE</span>
            </span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/40 text-sm mb-1">
              © 2026 Suhaan Thayyil. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Created by <span className="text-white/70 font-semibold">Suhaan Thayyil</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

