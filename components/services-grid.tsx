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
    <section id="services" className="relative overflow-hidden bg-background py-24">
      <div className="absolute inset-0 hero-gradient pointer-events-none opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-primary">
            Security capabilities
          </p>
          <h2 className="mb-6 text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Security built for the threats ahead.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From first assessment to continuous defense, our specialists turn complex security risks into clear, practical action.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group rounded-2xl border border-border bg-card/60 p-8 transition-all duration-300 hover:border-primary/40 hover:bg-card"
              >
                <div className="mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">{service.description}</p>

                <div className="space-y-2 border-t border-border pt-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">Ready to strengthen your security posture?</p>
          <button className="inline-flex items-center gap-2 bg-[#990012] hover:bg-[#7a000e] text-white px-8 py-3 rounded-lg font-semibold transition-all">
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
