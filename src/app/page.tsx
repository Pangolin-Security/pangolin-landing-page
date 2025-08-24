'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Submit to Vercel function
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString()
        }),
      });
      
      if (response.ok) {
        setShowThankYou(true);
        setEmail('');
      } else {
        // Still show thank you for good UX
        setShowThankYou(true);
        setEmail('');
      }
    } catch (error) {
      // Still show thank you for good UX
      setShowThankYou(true);
      setEmail('');
    }
  };

  const closeModal = () => {
    setShowThankYou(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-2xl border border-cyan-500/30 max-w-md w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Family!</h3>
              <p className="text-slate-300 mb-6">Thank you for being an early supporter. You'll be among the first to know when Pangolin Security launches in Q2 2026!</p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
                <p className="text-amber-300 text-sm font-medium">
                  🎁 As an early supporter, you'll get 50% off our launch pricing + exclusive beta access!
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
              >
                Awesome, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/pangolin-logo.png" 
              alt="Pangolin Security Logo" 
              className="w-10 h-10 rounded-xl shadow-lg"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Pangolin Security
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors duration-300">How It Works</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo + Shield - Front and Center */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-6">
              <img 
                src="/pangolin-logo.png" 
                alt="Pangolin Security Shield" 
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
              />
            </div>
            <div className="mb-6">
              <span className="bg-gradient-to-r from-cyan-500/20 to-amber-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30">
                $4.9 billion lost to scammers in 2024
              </span>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI-Powered</span> Scam Protection
          </h1>
          
          <p className={`text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Scams are stealing millions daily, often from the people we love most. Pangolin Security protects your family's digital life—calls, texts, and email—with AI-powered security built on privacy, so you can stay connected with confidence and peace of mind.
          </p>

          {/* Email Form + CTAs */}
          <div className={`max-w-lg mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
              <p className="text-slate-300 mb-6">Join thousands protecting their families from scams.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  required 
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
                  >
                    Join the Waitlist
                  </button>
                  <button 
                    type="button"
                    className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </form>
              <p className="text-slate-400 text-sm mt-4">Free to join. Launch expected Q2 2026.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Development Timeline & Privacy Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">🚀</span>
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <div>
                      <span className="text-amber-300 font-semibold">Q1 2026:</span>
                      <span className="text-slate-300 ml-2">Beta testing begins</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <div>
                      <span className="text-cyan-300 font-semibold">Q2 2026:</span>
                      <span className="text-slate-300 ml-2">Public launch</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <div>
                      <span className="text-emerald-300 font-semibold">Q3 2026:</span>
                      <span className="text-slate-300 ml-2">Advanced features</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div>
                      <span className="text-orange-300 font-semibold">Q4 2026:</span>
                      <span className="text-slate-300 ml-2">Family plans</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                  <p className="text-amber-300 text-sm font-medium">
                    🎁 Waitlist members get 50% off launch pricing + beta access
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">🔒</span>
                  Your Privacy is Sacred
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">End-to-end encryption</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">No data selling, ever</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Local-first processing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">GDPR compliant</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-lg">
                  <p className="text-cyan-300 text-sm font-medium">
                    ✅ Built with privacy by design - your data stays yours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built for real-world threats</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced protection against the scams that target your family most often, with technology that actually works.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time scam alerts</h3>
              <p className="text-slate-300">Get instant warnings when suspicious calls, texts, or emails come through. Stay one step ahead of scammers.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy-first</h3>
              <p className="text-slate-300">Your personal information stays on your device. We never sell or share your data with third parties.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🪶</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightweight & quiet</h3>
              <p className="text-slate-300">Runs silently in the background without slowing down your device or interrupting your daily routine.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Trusted contacts</h3>
              <p className="text-slate-300">Add family members who get notified instantly when you receive suspicious communications.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scam log</h3>
              <p className="text-slate-300">Review all blocked attempts with detailed explanations of why they were flagged as potential scams.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast setup</h3>
              <p className="text-slate-300">Get protected in minutes with our simple setup process. No technical knowledge required.</p>
            </div>
          </div>
        </div>
      </div>

      {/* STAR Framework Section */}
      <div id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 The STAR Framework</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              4 simple steps to stay safe with Pangolin Security
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                S
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Setup</h3>
              <p className="text-slate-300 text-center">Download and install the Pangolin app on your device (or a loved one's phone). Quick start, no hassle.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                T
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Threat Protection</h3>
              <p className="text-slate-300 text-center">Enable scam screening across calls, texts, and emails. You stay in control of permissions.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-amber-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                A
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Alerts</h3>
              <p className="text-slate-300 text-center">Get real-time warnings the moment something suspicious comes through. Stay one step ahead.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                R
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Review</h3>
              <p className="text-slate-300 text-center">Check your Scam Log for full details on blocked scams. Learn exactly what was stopped — and why.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/pangolin-logo.png" 
                alt="Pangolin Security Logo" 
                className="w-8 h-8 rounded-lg shadow-lg"
              />
              <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pangolin Security
              </h2>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/pangolinsecurity/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.070-4.85.070-3.204 0-3.584-.012-4.849-.070-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://x.com/PangolinSe10379" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
            © 2025 Pangolin Security. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
