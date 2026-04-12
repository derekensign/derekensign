'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  Globe,
  Code2,
  BarChart3,
  Smartphone,
} from 'lucide-react';

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

const projects = [
  {
    title: 'Verde Manager',
    description:
      'A full-stack web app for tracking Austin FC\'s roster, salary cap, allocation money, and lineup strategy in real time. Features an AI-powered assistant that understands the full MLS rulebook.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Claude AI', 'Vercel'],
    liveUrl: 'https://verdemanager.com',
    githubUrl: 'https://github.com/derekensign/austin-fc-gm',
    featured: true,
  },
];

const services = [
  {
    icon: Globe,
    title: 'Custom Web Apps',
    description: 'Full-stack applications tailored to your business needs — dashboards, portals, internal tools.',
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Turn your data into interactive, insightful dashboards and reports.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Websites',
    description: 'Modern, fast, mobile-first websites that look great on every device.',
  },
  {
    icon: Code2,
    title: 'AI Integration',
    description: 'Add AI-powered features to your app — chatbots, search, content generation, and more.',
  },
];

export default function Home() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            derek<span className="text-accent">ensign</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-mono mb-4">Hi, I&apos;m Derek.</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              I build <span className="gradient-text">web apps</span> that<br />
              turn ideas into products.
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Full-stack developer based in Austin, TX. I help businesses and startups
              ship custom web applications, dashboards, and AI-powered tools.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent-dim transition-colors"
              >
                Get in Touch
                <Send className="h-4 w-4" />
              </a>
              <div className="flex items-center gap-3 ml-2">
                <a
                  href="https://github.com/derekensign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/derekensign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-mono mb-2">Latest Project</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Featured Work
            </h2>
          </motion.div>

          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-card-border rounded-2xl p-6 md:p-8"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dim transition-colors"
                  >
                    View Live Site
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-foreground transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-card-border hover:border-accent/30 transition-colors"
              >
                <Image
                  src="/verde-manager-screenshot.jpg"
                  alt="Verde Manager dashboard showing Austin FC roster, salary cap, and player data"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                  priority
                />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-mono mb-2">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
              Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-card-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <service.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent text-sm font-mono mb-2">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Let&apos;s build something together.
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Have a project in mind? Need a custom web app, dashboard, or website?
                Drop me a message and I&apos;ll get back to you within 24 hours.
              </p>
              <div className="flex flex-col gap-3 text-sm text-muted">
                <a
                  href="mailto:derek@derekensign.com"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  derek@derekensign.com
                </a>
                <a
                  href="https://linkedin.com/in/derekensign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4 text-accent" />
                  linkedin.com/in/derekensign
                </a>
                <a
                  href="https://github.com/derekensign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-4 w-4 text-accent" />
                  github.com/derekensign
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-card border border-card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'sending' || formState === 'sent'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-accent-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    'Sending...'
                  ) : formState === 'sent' ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
                {formState === 'error' && (
                  <p className="text-red-400 text-sm flex items-center gap-1.5">
                    <AlertCircle className="h-4 w-4" />
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-8 px-6 mt-auto">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Derek Ensign</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/derekensign"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/derekensign"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
