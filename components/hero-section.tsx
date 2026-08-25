"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ShieldCheck, Search, TriangleAlert, Loader2, CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website visitor",
          email,
          company: "",
          message: "Requested a demo / consultation from the homepage hero form.",
          type: "Demo request",
        }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#08080c] pt-24 pb-16">
      {/* Ambient gradient wash */}
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      {/* Decorative winding-path graphic (desktop only) */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1400 900"
          className="absolute -bottom-20 -right-32 w-[1100px] h-[900px] opacity-90"
          fill="none"
        >
          <path
            d="M1350 120 L1050 120 L1050 380 L800 380 L800 620 L560 620 L560 860"
            stroke="url(#violetPath)"
            strokeWidth="26"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-dash"
          />
          <path
            d="M1400 480 L1140 480 L1140 700 L900 700 L900 900"
            stroke="url(#orangePath)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <defs>
            <linearGradient id="violetPath" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#ff2b4d" />
            </linearGradient>
            <linearGradient id="orangePath" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff2b4d" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating icon cards */}
        <div className="absolute right-[20%] top-[38%] w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 shadow-2xl shadow-violet-900/40 flex items-center justify-center rotate-[-6deg]">
          <ShieldCheck className="w-7 h-7 text-white" />
        </div>
        <div className="absolute right-[24%] top-[47%] w-16 h-16 rounded-2xl bg-[#15151c] border border-white/10 shadow-2xl flex items-center justify-center rotate-[4deg]">
          <Search className="w-6 h-6 text-white/80" />
        </div>
        <div className="absolute right-[17%] top-[56%] w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff2b4d] to-orange-500 shadow-2xl shadow-red-900/40 flex items-center justify-center rotate-[3deg]">
          <TriangleAlert className="w-7 h-7 text-white" />
        </div>

        <span className="absolute right-[6%] top-[16%] text-[11px] tracking-widest uppercase text-white/40 font-mono rotate-[-8deg]">
          legitimate traffic
        </span>
        <span className="absolute right-[8%] top-[63%] text-[11px] tracking-widest uppercase text-[#ff6b81] font-mono rotate-[-6deg]">
          threat detected
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#ff6b81] uppercase tracking-widest mb-6 border border-[#ff2b4d]/30 bg-[#ff2b4d]/5 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2b4d] animate-pulse-glow" />
            Global Compliance &amp; Security Expertise
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-balance">
            <span className="text-white">Securing your organization </span>
            <span className="brand-gradient-text">from day one</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
            Digital Asset Defenders delivers penetration testing, security audits, and continuous threat
            intelligence for regulated enterprises — PCI DSS, ISO 27001, and Kenya DPA compliance built in
            from the start.
          </p>

          {/* Email capture / demo request */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mb-4">
            <Input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="h-12 bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
            />
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="h-12 px-6 bg-white text-black hover:bg-gray-200 font-semibold whitespace-nowrap"
            >
              {status === "loading" && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {status === "success" ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Request sent
                </>
              ) : (
                <>
                  Get a demo <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
          {status === "success" && (
            <p className="text-sm text-green-400 mb-2">
              Thanks — our team will reach out from our official company email shortly.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 mb-2">
              Something went wrong. Email us directly at Security@digitalassetdefenders.com.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              variant="outline"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-white/20 text-white px-8 py-6 text-base font-semibold rounded-lg hover:bg-white/5 bg-transparent"
            >
              Explore Services
            </Button>
            <Button
              variant="ghost"
              onClick={() => document.querySelector("#threat-feed")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-300 px-8 py-6 text-base font-semibold hover:bg-white/5 hover:text-white"
            >
              View Live Threat Feed
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-16 pt-10 border-t border-white/10 max-w-md">
            <div>
              <p className="text-3xl md:text-4xl font-bold brand-gradient-text">ISO 27001</p>
              <p className="text-gray-500 mt-2 text-sm">Aligned Practice</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold brand-gradient-text">PCI DSS</p>
              <p className="text-gray-500 mt-2 text-sm">Compliance Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
