"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Search, Eye, Cloud, AlertTriangle, Users, ArrowRight } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Penetration Testing",
    description:
      "Comprehensive web, mobile, and network security assessments to identify vulnerabilities before attackers do.",
    icon: Search,
    details:
      "Our certified ethical hackers conduct thorough penetration tests using industry-standard methodologies including OWASP, NIST, and PTES frameworks.",
    techStack: ["Kali Linux", "Burp Suite", "Metasploit", "Nmap", "OWASP ZAP"],
  },
  {
    id: 2,
    title: "Security Audits & Compliance",
    description:
      "ISO 27001, GDPR, and NIST compliance assessments to ensure your organization meets regulatory requirements.",
    icon: Shield,
    details:
      "Complete compliance frameworks implementation with gap analysis, risk assessments, and ongoing monitoring.",
    techStack: ["ISO 27001", "GDPR", "NIST", "SOC 2", "HIPAA"],
  },
  {
    id: 3,
    title: "SOC-as-a-Service",
    description: "24/7 security operations center monitoring and incident response for continuous threat detection.",
    icon: Eye,
    details:
      "Round-the-clock monitoring with advanced SIEM tools and expert analysts to detect and respond to threats.",
    techStack: ["Splunk", "QRadar", "ArcSight", "Elastic Stack", "MITRE ATT&CK"],
  },
  {
    id: 4,
    title: "Cloud Security",
    description: "AWS, Azure, and GCP security consulting to secure your cloud infrastructure and applications.",
    icon: Cloud,
    details: "Cloud-native security architecture design, configuration reviews, and automated compliance monitoring.",
    techStack: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
  },
  {
    id: 5,
    title: "Incident Response",
    description: "Rapid incident response and digital forensics to minimize damage and recover from security breaches.",
    icon: AlertTriangle,
    details: "Expert incident responders available 24/7 to contain threats, preserve evidence, and restore operations.",
    techStack: ["EnCase", "Volatility", "Wireshark", "YARA", "Autopsy"],
  },
  {
    id: 6,
    title: "Virtual CISO",
    description: "Fractional CISO services providing strategic security leadership for organizations of all sizes.",
    icon: Users,
    details: "Strategic security program development, board reporting, and ongoing security governance.",
    techStack: ["GRC Tools", "Risk Assessment", "Security Metrics", "Policy Framework"],
  },
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your organization from evolving threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            const isSelected = selectedService === service.id

            return (
              <Card
                key={service.id}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  isSelected
                    ? "bg-gradient-to-br from-slate-700 to-slate-800 border-cyan-400 shadow-2xl shadow-cyan-400/20"
                    : "bg-slate-700/50 border-slate-600 hover:border-cyan-400/50"
                }`}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg transition-colors ${
                        isSelected ? "bg-cyan-400/20" : "bg-slate-600 group-hover:bg-cyan-400/20"
                      }`}
                    >
                      <IconComponent
                        className={`w-8 h-8 transition-colors ${
                          isSelected ? "text-cyan-400" : "text-slate-300 group-hover:text-cyan-400"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>

                  {isSelected && (
                    <div className="animate-in fade-in duration-300">
                      <p className="text-slate-400 mb-4 text-sm leading-relaxed">{service.details}</p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-slate-600/50 text-slate-300 text-xs rounded-full border border-slate-500"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white group" size="sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  )}

                  {!isSelected && (
                    <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:text-cyan-300">
                      Click to expand
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
