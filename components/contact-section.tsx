"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Shield, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    services: "",
    framework: "",
    testingApproach: "",
    environment: "",
    concerns: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handlePhoneCall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:+254714749513"
    }
  }

  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:Security@digitalassetdefenders.com"
    }
  }

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "General inquiry" }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.")
      }
      setStatus("success")
      setForm({ name: "", email: "", company: "", services: "", framework: "", testingApproach: "", environment: "", concerns: "", message: "" })
    } catch (err) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <section id="contact" className="py-32 bg-[#0b0b10]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 brand-gradient-text tracking-tight">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to secure your organization? Send us a message and our team will reply from our official
            company email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#ff2b4d]/10 rounded-full">
                    <MapPin className="w-5 h-5 text-[#ff2b4d]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Headquarters</p>
                    <p className="text-gray-400">14th Floor GTC, Nairobi</p>
                  </div>
                </div>

                <button onClick={handlePhoneCall} className="flex items-start gap-4 w-full text-left group">
                  <div className="mt-1 p-2 bg-[#ff2b4d]/10 rounded-full group-hover:bg-[#ff2b4d]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#ff2b4d]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400 group-hover:text-[#ff6b81] transition-colors">+254 (714) 749-513</p>
                  </div>
                </button>

                <button onClick={handleEmailClick} className="flex items-start gap-4 w-full text-left group">
                  <div className="mt-1 p-2 bg-[#ff2b4d]/10 rounded-full group-hover:bg-[#ff2b4d]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#ff2b4d]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 group-hover:text-[#ff6b81] transition-colors">
                      Security@digitalassetdefenders.com
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white border-b border-white/10 pb-4">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "ISO 27001", desc: "Security" },
                  { name: "SOC 2 Type II", desc: "Audit" },
                  { name: "PCI DSS", desc: "Payments" },
                  { name: "HIPAA", desc: "Healthcare" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 border border-white/10 rounded-xl hover:border-[#ff2b4d]/30 transition-all text-center"
                  >
                    <Shield className="w-6 h-6 text-[#ff2b4d] mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Notice */}
            <div className="p-6 bg-white/[0.03] rounded-xl border border-white/10">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#ff2b4d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">Confidential &amp; Secure</p>
                  <p className="text-gray-400 text-sm">
                    Messages submitted here are delivered straight to our team's inbox and answered from our
                    official company email address.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 border border-white/10 rounded-2xl bg-white/[0.02] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Name</label>
                  <Input
                    required
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Jane Doe"
                    disabled={status === "loading"}
                    className="bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Email</label>
                  <Input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@organization.com"
                    disabled={status === "loading"}
                    className="bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  ["services", "Services needed", "Penetration testing, audit, compliance..."],
                  ["framework", "Primary framework", "DPA, PCI DSS, ISO 27001, CBK..."],
                  ["testingApproach", "Testing approach", "Black-box, grey-box, white-box, unsure"],
                  ["environment", "Environment", "Cloud providers, applications, IP ranges..."],
                ].map(([field, label, placeholder]) => (
                  <div key={field} className="space-y-2">
                    <label className="text-sm text-gray-300" htmlFor={field}>{label}</label>
                    <Input
                      id={field}
                      value={form[field as keyof typeof form]}
                      onChange={handleChange(field as keyof typeof form)}
                      placeholder={placeholder}
                      disabled={status === "loading"}
                      className="bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="company">Company (optional)</label>
                <Input
                  value={form.company}
                  onChange={handleChange("company")}
                  placeholder="Organization name"
                  disabled={status === "loading"}
                  className="bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="concerns">Top security concerns</label>
                <Textarea
                  id="concerns"
                  rows={3}
                  value={form.concerns}
                  onChange={handleChange("concerns")}
                  placeholder="What are your top three security concerns or sensitive systems?"
                  disabled={status === "loading"}
                  className="bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-300" htmlFor="message">Additional details</label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your security requirements..."
                  disabled={status === "loading"}
                  className="bg-white/5 border-white/15 text-white placeholder:text-gray-500 focus-visible:ring-[#ff2b4d]/40"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full h-12 bg-[#ff2b4d] hover:bg-[#d4173a] text-white font-semibold"
              >
                {status === "loading" && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Sent
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-400 text-center">
                  Message delivered — we'll respond from our official company email within 2 business hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
