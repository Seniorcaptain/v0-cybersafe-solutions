"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Shield } from "lucide-react"
import { useState } from "react"

export default function LeadMagnetSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Track conversion
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "lead_magnet",
          event_label: "attack_surface_scan",
        })
      }
      setSubmitted(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#990012] to-[#7a000e]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Free External Attack Surface Scan
          </h2>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Discover what attackers see about your organization. Our automated scan identifies exposed assets, misconfigurations, and vulnerabilities in your public-facing infrastructure—delivered within 48 hours.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Check your inbox</h3>
              <p className="text-gray-600">
                We&apos;ve sent you details about your free scan. Our team will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="your@organization.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 rounded-lg border-gray-300 focus:border-[#990012] focus:ring-[#990012]/20"
              />
              <Button
                type="submit"
                className="bg-[#990012] hover:bg-[#7a000e] text-white px-8 h-12 font-semibold rounded-lg transition-all"
              >
                Get Free Scan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-6">
              What you&apos;ll discover in your scan:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Exposed Services</p>
                <p className="text-sm text-gray-600">Unprotected ports and services</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">SSL/TLS Issues</p>
                <p className="text-sm text-gray-600">Certificate and encryption gaps</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900 mb-1">Vulnerable Technologies</p>
                <p className="text-sm text-gray-600">Outdated platforms and frameworks</p>
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
