"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Database, Search, Network, Bot, AlertCircle, Briefcase, Code, Smartphone, Globe } from "lucide-react"

export function TeamSection() {
  const skills = [
    {
      icon: Database,
      label: "SIEM Implementation & Log Analysis",
      project: "Azure Log Analytics",
      description: "Centralized logging and sophisticated threat hunting workflows.",
    },
    {
      icon: Network,
      label: "Network Traffic Monitoring",
      project: "Detection Lab",
      description: "Real-time attack detection and packet-level traffic analysis.",
    },
    {
      icon: Bot,
      label: "Security Automation (Shuffle SOAR)",
      project: "SOC Automation",
      description: "Automated alert orchestration and incident response playbooks.",
    },
    {
      icon: AlertCircle,
      label: "Incident Response Execution",
      project: "Threat Mitigation",
      description: "Strategic planning and rapid containment of security breaches.",
    },
    {
      icon: Briefcase,
      label: "Case Management (TheHive)",
      project: "Incident Workflow",
      description: "Cohesive management of security incidents and investigations.",
    },
    {
      icon: Code,
      label: "Scripting for Threat Mitigation",
      project: "Custom Automation",
      description: "Python and Bash scripting for proactive defense mechanisms.",
    },
  ]

  const toolCategories = [
    { icon: Globe, label: "Network", tools: ["Snort", "Wireshark", "Suricata"] },
    { icon: Smartphone, label: "Endpoint", tools: ["Sysmon", "Wazuh", "Velociraptor"] },
    { icon: Search, label: "SIEM", tools: ["ELK Stack", "Splunk", "Azure Sentinel"] },
  ]

  return (
    <section id="experts" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Content Column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-[#990012] mb-4">The Expert</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight mb-8">
                Ndirangu Charles
              </h3>

              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-2xl">
                <p>
                  As a Computer Science graduate with a relentless drive for solving complex technological challenges,
                  Ndirangu Charles has cultivated a specialized expertise in defensive security operations. His
                  foundation in software principles is augmented by elite certifications, including{" "}
                  <span className="text-black font-medium">Certified Cybersecurity Technician (CCT)</span> and
                  EC-Council accreditations in Session Hijacking Prevention and Linux Network Administration.
                </p>
                <p>
                  His technical repertoire is defined by high-impact projects like the{" "}
                  <span className="text-black font-medium">Detection Lab</span> and{" "}
                  <span className="text-black font-medium">SOC Automation Project</span>. Through these, he has mastered
                  SIEM implementation, network traffic monitoring, and the orchestration of automated security workflows
                  using Shuffle SOAR and TheHive.
                </p>
                <p>
                  Currently focused on transitioning into a{" "}
                  <span className="text-black font-medium">SOC Tier 1 Analyst</span> role, Ndirangu leverages Microsoft
                  Azure for sophisticated log analysis and threat detection. His approach combines rigorous scripting
                  for threat mitigation with a strategic vision for organizational resilience, ensuring that every
                  digital asset is defended with precision.
                </p>
              </div>

              <div className="mt-16">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
                  Technical Expertise
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded bg-neutral-50 text-[#990012] group-hover:bg-[#990012] group-hover:text-white transition-colors duration-300">
                          <skill.icon size={18} />
                        </div>
                        <span className="text-xs font-mono text-neutral-400">{skill.project}</span>
                      </div>
                      <h5 className="font-semibold text-black mb-1">{skill.label}</h5>
                      <p className="text-sm text-neutral-500 leading-relaxed">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-16 p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Security Stack</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {toolCategories.map((cat, i) => (
                    <div key={cat.label}>
                      <div className="flex items-center gap-2 mb-4 text-[#990012]">
                        <cat.icon size={16} />
                        <span className="text-sm font-bold uppercase tracking-wider">{cat.label}</span>
                      </div>
                      <ul className="space-y-2">
                        {cat.tools.map((tool) => (
                          <li key={tool} className="text-sm text-neutral-600 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-neutral-300" />
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-12"
              >
                <a
                  href="https://linkedin.com/in/charles-ndirangu-1b434615a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#990012] transition-colors rounded-full text-sm font-medium"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-neutral-100 aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200"
            >
              <Image
                src="/images/bbc71bd5-123a-4654-a227-70f962344191-1-105-c.jpeg"
                alt="Ndirangu Charles - Chief Security Architect"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 flex justify-center border-t border-neutral-100 pt-8"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Digital Asset Defenders © 2026
          </span>
        </motion.div>
      </div>
    </section>
  )
}
