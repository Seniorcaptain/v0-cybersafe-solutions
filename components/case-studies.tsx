"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building, TrendingUp, Shield, Clock, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    title: "Fortune 500 Financial Institution",
    industry: "Banking",
    challenge: "Legacy systems vulnerability assessment and GDPR compliance",
    solution:
      "Comprehensive penetration testing, security architecture review, and compliance framework implementation",
    results: {
      threatReduction: "89%",
      complianceScore: "98%",
      timeToDetection: "15 minutes",
      cost: "$2.3M saved in potential fines",
    },
    timeline: "6 months",
    services: ["Penetration Testing", "Compliance Audit", "SOC Implementation"],
  },
  {
    id: 2,
    title: "Healthcare Network Provider",
    industry: "Healthcare",
    challenge: "HIPAA compliance gaps and ransomware protection",
    solution: "End-to-end security overhaul with 24/7 monitoring and incident response capabilities",
    results: {
      threatReduction: "94%",
      complianceScore: "100%",
      timeToDetection: "8 minutes",
      cost: "$850K in avoided downtime",
    },
    timeline: "4 months",
    services: ["HIPAA Compliance", "SOC-as-a-Service", "Incident Response"],
  },
  {
    id: 3,
    title: "SaaS Startup Unicorn",
    industry: "Technology",
    challenge: "Rapid scaling security architecture and investor due diligence",
    solution: "Cloud-native security implementation and continuous compliance monitoring",
    results: {
      threatReduction: "92%",
      complianceScore: "96%",
      timeToDetection: "12 minutes",
      cost: "$50M funding secured",
    },
    timeline: "3 months",
    services: ["Cloud Security", "Virtual CISO", "Security Architecture"],
  },
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(0)

  return (
    <section id="case-studies" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from organizations that trusted us to protect their digital assets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={study.id}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedCase === index
                  ? "bg-gradient-to-br from-slate-700 to-slate-800 border-cyan-400 shadow-2xl shadow-cyan-400/20"
                  : "bg-slate-700/50 border-slate-600 hover:border-cyan-400/50"
              }`}
              onClick={() => setSelectedCase(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-cyan-400" />
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                    {study.industry}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{study.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{study.challenge}</p>
                <div className="flex items-center text-cyan-400 text-sm font-semibold">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed View */}
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-8 h-8 text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{caseStudies[selectedCase].title}</h3>
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 mt-2">
                      {caseStudies[selectedCase].industry}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Challenge</h4>
                    <p className="text-slate-300 leading-relaxed">{caseStudies[selectedCase].challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Solution</h4>
                    <p className="text-slate-300 leading-relaxed mb-4">{caseStudies[selectedCase].solution}</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudies[selectedCase].services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-600 text-slate-300">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>Timeline: {caseStudies[selectedCase].timeline}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-6">Results</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-3 mx-auto">
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      {caseStudies[selectedCase].results.threatReduction}
                    </div>
                    <div className="text-sm text-slate-400">Threat Reduction</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-3 mx-auto">
                      <Shield className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      {caseStudies[selectedCase].results.complianceScore}
                    </div>
                    <div className="text-sm text-slate-400">Compliance Score</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-3 mx-auto">
                      <Clock className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">
                      {caseStudies[selectedCase].results.timeToDetection}
                    </div>
                    <div className="text-sm text-slate-400">Detection Time</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-3 mx-auto">
                      <TrendingUp className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">
                      {caseStudies[selectedCase].results.cost}
                    </div>
                    <div className="text-sm text-slate-400">Cost Impact</div>
                  </div>
                </div>

                <Button className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Request Similar Assessment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
