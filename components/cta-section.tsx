"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight } from "lucide-react"

export default function CTASection() {
  const handlePhoneClick = () => {
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
    <section className="py-24 bg-gradient-to-br from-[#0b0b10] to-[#0b0b10]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#ff2b4d] rounded-2xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to strengthen your security posture?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Schedule a consultation with our cybersecurity experts today. We'll assess your current security posture and recommend tailored solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePhoneClick}
              className="bg-white hover:bg-slate-100 text-[#ff2b4d] px-8 py-6 text-base font-semibold rounded-lg transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +254 (714) 749-513
            </Button>
            <Button
              onClick={handleEmailClick}
              className="bg-black/20 hover:bg-black/30 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all border border-white/30 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: Security@digitalassetdefenders.com
            </Button>
          </div>

          <p className="text-white/70 text-sm mt-8">Response time: Within 2 hours during business hours</p>
        </div>
      </div>
    </section>
  )
}
