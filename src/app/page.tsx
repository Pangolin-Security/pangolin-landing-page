'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Pangolin Security
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#platform" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Platform</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">Solutions</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">About</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <section className="px-6 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Trust Indicator */}
            <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-300">Trusted by Fortune 500 companies worldwide</span>
              </div>
            </div>

            <div className="text-center mb-16">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  We Stop Breaches.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  You Stay Protected.
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI-powered cybersecurity platform that adapts faster than threats evolve. 
                <span className="text-white font-semibold"> Stop breaches before they happen</span> with 
                autonomous defense that scales with your business.
              </p>

              <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  Start Free Trial
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  Watch Demo
                  <span className="ml-2 group-hover:scale-110 transition-transform duration-300">▶</span>
                </button>
              </div>
            </div>

            {/* Customer Testimonial */}
            <div className={`bg-gradient-to-r from-white/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 md:p-12 mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-center">
                <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
                  "Pangolin Security achieved a <span className="font-bold text-purple-300">98% reduction</span> in security incidents 
                  while cutting our response time from hours to <span className="font-bold text-blue-300">seconds</span>."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Jane Doe</p>
                    <p className="text-gray-300">CISO at TechCorp</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: "🤖",
                  title: "AI-Native Defense",
                  description: "Autonomous threat detection and response powered by machine learning that evolves with every attack.",
                  color: "from-purple-500/20 to-pink-500/20",
                  delay: "delay-1000"
                },
                {
                  icon: "⚡",
                  title: "Real-Time Response",
                  description: "Stop breaches in milliseconds with automated incident response and threat containment.",
                  color: "from-blue-500/20 to-cyan-500/20", 
                  delay: "delay-1200"
                },
                {
                  icon: "🛡️",
                  title: "Zero-Trust Security",
                  description: "Complete ecosystem protection with continuous verification and adaptive access controls.",
                  color: "from-indigo-500/20 to-purple-500/20",
                  delay: "delay-1400"
                }
              ].map((feature, index) => (
                <div key={index} className={`group bg-gradient-to-br ${feature.color} backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${feature.delay}`}>
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Logos */}
            <div className={`text-center transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-gray-400 text-sm mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['Microsoft', 'AWS', 'Google Cloud', 'Salesforce', 'Okta'].map((company, index) => (
                  <div key={index} className="text-white font-semibold text-lg hover:opacity-100 transition-opacity duration-300">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Pangolin Security
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                The AI-native cybersecurity platform that stops breaches before they happen. 
                Protect what matters most with autonomous defense.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">AI Defense</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Threat Intelligence</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Incident Response</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Pangolin Security. All rights reserved. | 
              <span className="ml-1 text-purple-400">Built to defend. Designed to scale.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}