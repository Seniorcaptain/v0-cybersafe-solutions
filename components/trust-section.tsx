"use client"
import { CheckCircle, Award, Users, BookOpen } from "lucide-react"

export default function TrustSection() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-[#111117]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Global & Regional Enterprises
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether you operate in East Africa or globally, we deliver compliance expertise, penetration testing, and security assurance for regulated organizations that demand results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Certifications */}
          <div className="bg-[#0b0b10] rounded-lg p-8 border border-white/10">
            <div className="w-12 h-12 bg-[#ff2b4d]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#ff2b4d]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">ISO 27001 Certified</h3>
            <p className="text-gray-400 text-sm">
              Information Security Management System certification for our own operations and as advisors.
            </p>
          </div>

          {/* Compliance Focus */}
          <div className="bg-[#0b0b10] rounded-lg p-8 border border-white/10">
            <div className="w-12 h-12 bg-[#ff2b4d]/10 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-[#ff2b4d]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">PCI DSS & DPA Expert</h3>
            <p className="text-gray-400 text-sm">
              Specialized guidance for Kenya DPA 2019, CBK requirements, and PCI DSS compliance.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-[#0b0b10] rounded-lg p-8 border border-white/10">
            <div className="w-12 h-12 bg-[#ff2b4d]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#ff2b4d]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">50+ Organizations</h3>
            <p className="text-gray-400 text-sm">
              Active partnerships with fintechs, banks, healthcare providers, and regulated enterprises globally.
            </p>
          </div>

          {/* Research */}
          <div className="bg-[#0b0b10] rounded-lg p-8 border border-white/10">
            <div className="w-12 h-12 bg-[#ff2b4d]/10 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-[#ff2b4d]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Continuous Research</h3>
            <p className="text-gray-400 text-sm">
              Active in vulnerability research and threat intelligence to keep you ahead of emerging risks.
            </p>
          </div>
        </div>

        {/* Client Sectors */}
        <div className="bg-[#0b0b10] rounded-lg p-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Fintech & Payment Processors",
              "SACCOs & Micro-Finance",
              "Commercial & Central Banks",
              "Healthcare & HIPAA-Regulated",
              "Law Firms & Legal Tech",
              "E-Commerce & SaaS Platforms",
              "Government & Public Sector",
              "Cryptocurrency & Web3",
            ].map((industry, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#ff2b4d] flex-shrink-0" />
                <span className="text-gray-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Frameworks */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">We Help You Comply With</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              "Kenya Data Protection Act 2019",
              "PCI DSS (Payment Card Industry)",
              "ISO 27001",
              "CBK Guidelines",
              "SASRA Requirements",
              "HIPAA (Healthcare)",
              "GDPR (EU Operations)",
              "Industry-Specific Standards",
            ].map((framework, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300">
                <span className="w-1.5 h-1.5 bg-[#ff2b4d] rounded-full" />
                {framework}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
