"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-sm md:text-base font-semibold text-[#990012] uppercase tracking-widest mb-4">
                PCI DSS & Kenya DPA Compliance Specialists
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-950 leading-tight mb-6">
                Cybersecurity for East African Fintechs & SACCOs
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Meet your regulatory obligations. Digital Asset Defenders helps East African fintechs, SACCOs, and regulated enterprises achieve PCI DSS, ISO 27001, and Kenya Data Protection Act compliance through penetration testing, security audits, and ongoing threat intelligence.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-8 my-12 py-12 border-y border-gray-200">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#990012]">ISO 27001</p>
                <p className="text-gray-600 mt-2">Certified Partner</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#990012]">PCI DSS</p>
                <p className="text-gray-600 mt-2">Compliance Expert</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#990012] hover:bg-[#7a000e] text-white px-8 py-6 text-base font-semibold rounded-lg transition-all">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-900 px-8 py-6 text-base font-semibold rounded-lg hover:bg-gray-50">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-[#990012]/10 to-transparent rounded-2xl" />
              <div className="absolute inset-4 border-2 border-[#990012]/20 rounded-xl" />
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-semibold text-[#990012] uppercase tracking-wide mb-2">Protected</p>
                  <p className="text-5xl font-bold text-gray-900">24/7</p>
                  <p className="text-gray-600 mt-2">Threat Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
