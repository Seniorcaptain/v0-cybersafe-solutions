"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Website visitor", email, message: "Requested a consultation from the homepage hero form.", type: "Consultation request" }),
      })
      if (!response.ok) throw new Error("Request failed")
      setEmail("")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-[#050506] pt-28 text-white">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute -right-40 top-20 h-[620px] w-[620px] rounded-full bg-[#d9163a]/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#d9163a]/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1440px] flex-col justify-between px-6 pb-12 md:px-12 lg:pb-16">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div className="max-w-5xl">
            <p className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.24em] text-[#ff516d]"><span className="h-2 w-2 rounded-full bg-[#ff2b4d] shadow-[0_0_18px_#ff2b4d]" /> Independent security operations / Nairobi</p>
            <h1 className="max-w-5xl text-balance text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.88] tracking-[-.075em]">Security is not a feature.<br /><span className="text-[#ff3657]">It is the system.</span></h1>
            <p className="mt-10 max-w-xl text-lg leading-8 text-white/55">Digital Asset Defenders finds the gaps attackers exploit, proves what matters, and helps regulated organizations build security that holds under pressure.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })} className="h-12 rounded-none bg-[#ff2b4d] px-7 font-semibold text-white hover:bg-[#e51f40]">Book a consultation <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
              <Button variant="outline" onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })} className="h-12 rounded-none border-white/20 bg-transparent px-7 text-white hover:bg-white/10">Explore capabilities</Button>
            </div>
            {status === "success" && <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400"><CheckCircle2 className="h-4 w-4" /> Request received. We&apos;ll be in touch.</p>}
            {status === "error" && <p className="mt-4 text-sm text-[#ff8195]">Something went wrong. Email Security@digitalassetdefenders.com.</p>}
          </div>

          <div className="border-l border-white/15 pl-6 lg:mb-2">
            <div className="mb-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/40"><ShieldCheck className="h-4 w-4 text-[#ff2b4d]" /> Defense in depth / 001</div>
            <div className="space-y-5 font-mono text-xs text-white/45"><p><span className="text-[#ff2b4d]">[01]</span> Penetration testing</p><p><span className="text-[#ff2b4d]">[02]</span> Compliance engineering</p><p><span className="text-[#ff2b4d]">[03]</span> Threat intelligence</p><p><span className="text-[#ff2b4d]">[04]</span> Incident readiness</p></div>
            <div className="mt-12 border-t border-white/10 pt-5"><p className="font-mono text-[10px] uppercase tracking-[.2em] text-white/35">Current posture</p><p className="mt-3 text-2xl font-semibold">Always auditing<span className="text-[#ff2b4d]">.</span></p></div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/35">Built for regulated environments</p>
          <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/35">PCI DSS / ISO 27001 / Kenya DPA</p>
          <form onSubmit={handleSubmit} className="flex gap-2 sm:justify-end"><Input type="email" required placeholder="your@email.com" value={email} onChange={(event) => setEmail(event.target.value)} disabled={status === "loading" || status === "success"} className="h-9 max-w-[220px] rounded-none border-white/15 bg-white/5 text-white placeholder:text-white/30" /><Button type="submit" disabled={status === "loading" || status === "success"} size="sm" className="h-9 rounded-none bg-white text-black hover:bg-white/90">{status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Start here"}</Button></form>
        </div>
      </div>
    </section>
  )
}
