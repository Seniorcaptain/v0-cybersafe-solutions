"use client"

import { Shield, Lock, AlertCircle, Cloud, Zap, BarChart3 } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Simulate real-world cyberattacks to uncover vulnerabilities across web, API, network, and mobile domains before criminals do.",
    features: ["Actionable Reports", "Risk Controls", "Vulnerability Assessments"],
  },
  {
    icon: Lock,
    title: "Security Audits & Compliance",
    description: "Understand your current risk posture and compliance readiness with comprehensive security assessments.",
    features: ["Cyber Resilience Planning", "Compliance Review", "Maturity Evaluation"],
  },
  {
    icon: Cloud,
    title: "Cloud Security Audit",
    description: "Strengthen your cloud environments by addressing hidden risks and security gaps.",
    features: ["Risk-Based Recommendations", "Policy Audits", "Weakness Identification"],
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description: "Rapid response and forensic analysis to minimize impact and accelerate recovery from security incidents.",
    features: ["24/7 Response", "Forensic Analysis", "Recovery Planning"],
  },
  {
    icon: Zap,
    title: "Security Automation",
    description: "Streamline security operations with advanced automation and orchestration tools.",
    features: ["SOAR Integration", "Workflow Automation", "Threat Mitigation"],
  },
  {
    icon: BarChart3,
    title: "Threat Intelligence",
    description: "Stay ahead of emerging threats with real-time intelligence and proactive monitoring.",
    features: ["Real-time Monitoring", "Threat Analysis", "Intelligence Feeds"],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-[#0b0b10]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm md:text-base font-semibold text-[#ff2b4d] uppercase tracking-widest mb-4">
            Our Core Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Premium Services to Secure Your Organization
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            We don't just point out problems—we provide clear, practical steps to secure your systems and reduce risks effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-white/10 hover:border-[#ff2b4d]/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#ff2b4d]/10 flex items-center justify-center group-hover:bg-[#ff2b4d]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#ff2b4d]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2 pt-6 border-t border-white/10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff2b4d] mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Ready to strengthen your security posture?</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#ff2b4d] hover:bg-[#d4173a] text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
