"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield, Loader2 } from "lucide-react"
import { useState } from "react"
import type React from "react"

export default function LeadMagnetSection() {
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
          message: "Requested a free external attack surface scan from the homepage.",
          type: "Free scan request",
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message)
      setStatus("success")
      setTimeout(() => {
        setEmail("")
        setStatus("idle")
      }, 4000)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#ff2b4d] to-[#d4173a]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Free External Attack Surface Scan</h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Discover what attackers see about your organization. Our scan identifies exposed assets,
            misconfigurations, and vulnerabilities in your public-facing infrastructure.
          </p>
        </div>

        <div className="bg-[#0b0b10] border border-white/10 rounded-xl p-8 md:p-12">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Request received</h3>
              <p className="text-gray-400">Our team will reach out from our official company email within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="your@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="flex-1 h-12 rounded-lg bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#ff2b4d] hover:bg-[#d4173a] text-white px-8 h-12 font-semibold rounded-lg transition-all"
              >
                {status === "loading" ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Get Free Scan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center mt-4">
              Something went wrong. Email us directly at Security@digitalassetdefenders.com.
            </p>
          )}

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 text-center mb-6">What you&apos;ll discover in your scan:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-semibold text-white mb-1">Exposed Services</p>
                <p className="text-sm text-gray-400">Unprotected ports and services</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-white mb-1">SSL/TLS Issues</p>
                <p className="text-sm text-gray-400">Certificate and encryption gaps</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-white mb-1">Vulnerable Technologies</p>
                <p className="text-sm text-gray-400">Outdated platforms and frameworks</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-red-100 text-sm mt-6">
          No commitment. No credit card required. Trusted by regulated enterprises worldwide.
        </p>
      </div>
    </section>
  )
}
