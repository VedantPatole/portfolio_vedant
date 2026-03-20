/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Code2, 
  BrainCircuit, 
  Database, 
  Terminal,
  ChevronRight,
  MapPin,
  GraduationCap,
  Briefcase,
  Layers
} from 'lucide-react';
import { DATA } from './constants';

const SectionHeader = ({ title, icon: Icon, subtitle }: { title: string, icon: any, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-accent/10 rounded-lg">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h2 className="text-3xl font-bold tracking-tighter uppercase">{title}</h2>
    </div>
    {subtitle && <p className="text-text-dim font-mono text-sm">{subtitle}</p>}
    <div className="h-px w-full bg-gradient-to-r from-accent/50 to-transparent mt-4" />
  </div>
);

const ProjectCard: React.FC<{ project: typeof DATA.projects[0] }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="glass-panel p-6 rounded-2xl group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
          <ExternalLink className="w-5 h-5 text-text-dim group-hover:text-accent" />
        </div>
        <p className="text-text-dim text-sm mb-4 font-mono">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/70">
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-2">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-dim leading-relaxed">
              <span className="text-accent mt-1.5 shrink-0">
                <ChevronRight className="w-3 h-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <Terminal className="w-32 h-32" />
      </div>
    </motion.div>
  );
};

const SkillTag: React.FC<{ skill: string }> = ({ skill }) => (
  <motion.span 
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 65, 0.1)' }}
    className="px-3 py-1.5 bg-surface border border-border rounded-lg text-sm font-mono text-text-dim hover:text-accent hover:border-accent/50 transition-all cursor-default"
  >
    {skill}
  </motion.span>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen technical-grid pb-20">
      {/* Top Navigation / Status Bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-accent neon-text">System Active</span>
          </div>
          <div className="flex items-center gap-8 font-mono text-xs text-text-dim">
            <span className="hidden sm:inline">LOC: {DATA.location}</span>
            <span>{time}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-20">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter mb-6 leading-none">
                VEDANT<br />
                <span className="text-accent">PATOLE</span>
              </h1>
              <p className="text-xl text-text-dim max-w-lg mb-8 font-mono leading-relaxed">
                Building the intersection of <span className="text-white">Electronics</span> and <span className="text-white">Computer Science</span>. 
                Focused on AI, Full-Stack Systems, and Hardware Integration.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-accent transition-colors">
                  <Github className="w-5 h-5" /> GITHUB
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:border-accent hover:text-accent transition-all">
                  <Linkedin className="w-5 h-5" /> LINKEDIN
                </a>
                <a href={`mailto:${DATA.email}`} className="flex items-center gap-2 px-6 py-3 border border-border rounded-xl hover:border-accent hover:text-accent transition-all">
                  <Mail className="w-5 h-5" /> CONTACT
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] lg:h-[600px] glass-panel rounded-3xl overflow-hidden group mx-auto lg:mx-0 w-full max-w-[450px] lg:max-w-none"
            >
              <div className="absolute inset-0 opacity-20 technical-grid" />
              
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-accent/20 bg-background/50">
                  <img 
                    src={DATA.profileImage} 
                    alt={DATA.name}
                    crossOrigin="anonymous"
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-700 z-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center text-accent/20';
                        fallback.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
                  
                  {/* Scanning line effect */}
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-accent/30 z-20 shadow-[0_0_10px_rgba(0,255,65,0.5)] pointer-events-none"
                  />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="glass-panel p-4 rounded-xl backdrop-blur-md border-accent/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[10px] tracking-widest uppercase text-accent">Identity Verified</span>
                  </div>
                  <div className="space-y-1 font-mono text-[10px] text-text-dim">
                    <p>// UID: {DATA.name.toUpperCase().replace(' ', '_')}_001</p>
                    <p>// STATUS: ACTIVE_DEVELOPER</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/30 z-30" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/30 z-30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/30 z-30" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/30 z-30" />
            </motion.div>
          </div>
        </section>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <motion.div whileHover={{ y: -5 }} className="glass-panel p-8 rounded-3xl">
            <GraduationCap className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Education</h3>
            <p className="text-white font-medium">{DATA.education.school}</p>
            <p className="text-text-dim text-sm mb-4">{DATA.education.degree}</p>
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-accent">CGPA: {DATA.education.cgpa}</span>
              <span className="text-text-dim">{DATA.education.period}</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="glass-panel p-8 rounded-3xl">
            <Briefcase className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Experience</h3>
            <p className="text-white font-medium">{DATA.experience[0].company}</p>
            <p className="text-text-dim text-sm mb-4">{DATA.experience[0].role}</p>
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-accent">VERIFIED</span>
              <span className="text-text-dim">{DATA.experience[0].period}</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="glass-panel p-8 rounded-3xl">
            <MapPin className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Location</h3>
            <p className="text-white font-medium">Mumbai, India</p>
            <p className="text-text-dim text-sm mb-4">Available for remote & hybrid roles</p>
            <div className="flex justify-between items-center font-mono text-xs">
              <span className="text-accent">UTC+5:30</span>
              <span className="text-text-dim">IST</span>
            </div>
          </motion.div>
        </div>

        {/* Main Content Tabs */}
        <section className="mb-32">
          <div className="flex gap-8 mb-12 border-b border-border">
            {['projects', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-mono uppercase tracking-widest transition-all relative ${
                  activeTab === tab ? 'text-accent' : 'text-text-dim hover:text-white'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'projects' ? (
              <motion.div 
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {DATA.projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {DATA.skills.map((cat, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                      {cat.category === 'Programming' && <Code2 className="w-4 h-4" />}
                      {cat.category === 'AI/ML' && <BrainCircuit className="w-4 h-4" />}
                      {cat.category === 'Backend & DB' && <Database className="w-4 h-4" />}
                      {cat.category === 'Electronics' && <Cpu className="w-4 h-4" />}
                      {cat.category === 'Tools' && <Terminal className="w-4 h-4" />}
                      {cat.category === 'Core CS' && <Layers className="w-4 h-4" />}
                      <h4 className="text-xs font-mono uppercase tracking-widest">{cat.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map(skill => (
                        <SkillTag key={skill} skill={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
