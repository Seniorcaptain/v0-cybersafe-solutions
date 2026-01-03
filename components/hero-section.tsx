"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Lock, Globe, Zap } from "lucide-react"

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 md:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Shield
          className="absolute top-1/4 left-1/4 w-6 h-6 text-cyan-400/30 animate-bounce"
          style={{ animationDelay: "0s" }}
        />
        <Lock
          className="absolute top-1/3 right-1/4 w-5 h-5 text-cyan-400/20 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Globe
          className="absolute bottom-1/3 left-1/3 w-7 h-7 text-cyan-400/25 animate-bounce"
          style={{ animationDelay: "2s" }}
        />
        <Zap
          className="absolute bottom-1/4 right-1/3 w-5 h-5 text-cyan-400/30 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-cyan-400/20">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400">Enterprise Cybersecurity</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Digital Asset Defenders
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-slate-300 font-light">Secure by Design. Trusted by Enterprises.</p>

        <p className="text-lg mb-8 text-slate-400 max-w-3xl mx-auto">
          Advanced cybersecurity consultancy protecting your digital assets through penetration testing, compliance
          audits, and 24/7 threat monitoring.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Free Risk Assessment
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            Schedule Consultation
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>ISO 27001 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-cyan-400" />
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>24/7 Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  )
}
