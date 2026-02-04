"use client"

import { MapPin, Phone, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#990012] tracking-tight">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to secure your organization? Contact our cybersecurity experts today for a confidential consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-900 border-b border-slate-100 pb-4">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#990012]/5 rounded-full">
                    <MapPin className="w-5 h-5 text-[#990012]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Headquarters</p>
                    <p className="text-slate-600">14th Floor GTC, Nairobi</p>
                  </div>
                </div>

                <button onClick={handlePhoneCall} className="flex items-start gap-4 w-full text-left group">
                  <div className="mt-1 p-2 bg-[#990012]/5 rounded-full group-hover:bg-[#990012]/10 transition-colors">
                    <Phone className="w-5 h-5 text-[#990012]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Phone</p>
                    <p className="text-slate-600 group-hover:text-[#990012] transition-colors">+254 (714) 749-513</p>
                  </div>
                </button>

                <button onClick={handleEmailClick} className="flex items-start gap-4 w-full text-left group">
                  <div className="mt-1 p-2 bg-[#990012]/5 rounded-full group-hover:bg-[#990012]/10 transition-colors">
                    <Mail className="w-5 h-5 text-[#990012]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Email</p>
                    <p className="text-slate-600 group-hover:text-[#990012] transition-colors">
                      Security@digitalassetdefenders.com
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 border-b border-slate-100 pb-4">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "ISO 27001", desc: "Security" },
                  { name: "SOC 2 Type II", desc: "Audit" },
                  { name: "PCI DSS", desc: "Payments" },
                  { name: "HIPAA", desc: "Healthcare" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 border border-slate-100 rounded-xl hover:border-[#990012]/20 transition-all text-center"
                  >
                    <Shield className="w-6 h-6 text-[#990012] mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-semibold text-slate-900">{cert.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Contact Actions */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">Reach Out Directly</h3>
                <p className="text-lg text-slate-600">Choose your preferred way to connect with our security team.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Card */}
                <div className="p-10 border border-slate-100 rounded-2xl hover:border-[#990012]/30 hover:shadow-[0_8px_30px_rgb(153,0,18,0.06)] transition-all duration-300">
                  <div className="w-14 h-14 bg-[#990012]/10 rounded-full flex items-center justify-center mb-6">
                    <Mail className="w-7 h-7 text-[#990012]" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Email Us</h4>
                  <p className="text-slate-600 mb-6">
                    Send us a detailed message about your security requirements. We'll respond within 2 hours.
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    className="w-full bg-[#990012] hover:bg-[#7a000e] text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Security Team
                  </Button>
                  <p className="text-sm text-slate-500 mt-4 text-center">Security@digitalassetdefenders.com</p>
                </div>

                {/* Phone Card */}
                <div className="p-10 border border-slate-100 rounded-2xl hover:border-[#990012]/30 hover:shadow-[0_8px_30px_rgb(153,0,18,0.06)] transition-all duration-300">
                  <div className="w-14 h-14 bg-[#990012]/10 rounded-full flex items-center justify-center mb-6">
                    <Phone className="w-7 h-7 text-[#990012]" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">Call Us</h4>
                  <p className="text-slate-600 mb-6">
                    Speak directly with our specialists for immediate consultation on urgent security matters.
                  </p>
                  <Button
                    onClick={handlePhoneCall}
                    className="w-full bg-[#990012] hover:bg-[#7a000e] text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <p className="text-sm text-slate-500 mt-4 text-center">+254 (714) 749-513</p>
                </div>
              </div>

              {/* Security Notice */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-[#990012] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Confidential & Secure</p>
                    <p className="text-slate-600 text-sm">
                      All communications with Digital Asset Defenders are encrypted and treated with the highest confidentiality standards. We comply with ISO 27001 and maintain strict data protection protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
