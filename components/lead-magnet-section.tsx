"use client"

import Link from "next/link"
import { ArrowUpRight, BookOpen, FileCheck2, Video } from "lucide-react"

const featuredContent = [
  {
    type: "Insight",
    icon: BookOpen,
    title: "Kenya Data Protection Act (DPA) 2019",
    description:
      "A practical compliance roadmap covering ODPC registration, lawful processing, data subject rights, DPIAs, breach notification, and enforcement exposure.",
    tag: "Data protection",
    href: "/blog/kenya-dpa",
  },
  {
    type: "Guide",
    icon: FileCheck2,
    title: "PCI DSS v4.0.1 Transition Guide",
    description:
      "Understand the new requirements for fintechs and payment processors, including MFA, WAF coverage, script management, segmentation testing, and SBOMs.",
    tag: "Payment security",
    href: "/blog/pci-dss-v4",
  },
  {
    type: "Insight",
    icon: BookOpen,
    title: "ISO 27001:2022 Certification",
    description:
      "Move from preparation to continuous improvement with a clear view of the 93 Annex A controls, new controls, migration strategy, and audit evidence.",
    tag: "Information security",
    href: "/blog/iso-27001",
  },
  {
    type: "Briefing",
    icon: Video,
    title: "CBK Cybersecurity Guidelines",
    description:
      "Interpret the requirements shaping Kenya's financial sector, from vulnerability management and audit trails to zero trust and third-party risk.",
    tag: "Financial services",
    href: "/blog/cbk-guidelines",
  },
]

export default function LeadMagnetSection() {
  return (
    <section id="insights" className="bg-[#0b0b10] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#ff2b4d]">
              Featured insights
            </p>
            <h2 className="mb-5 text-balance text-4xl font-bold leading-tight md:text-5xl">
              Practical guidance for a changing threat landscape
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              Explore our cybersecurity and compliance content for organisations across Kenya and East Africa. Clear context, actionable steps, and the regulatory detail your team needs to make confident decisions.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#ff2b4d] transition-colors hover:text-white"
          >
            Request the complete content pack
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredContent.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="group flex min-h-64 flex-col justify-between border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-[#ff2b4d]/50 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                      <Icon className="h-4 w-4 text-[#ff2b4d]" aria-hidden="true" />
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-500">{item.tag}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="leading-relaxed text-gray-400">{item.description}</p>
                </div>
                <Link href={item.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-[#ff2b4d]">
                  Explore this topic
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>

        <div className="mt-5 border border-[#ff2b4d]/25 bg-[#ff2b4d]/[0.06] p-7 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#ff2b4d]">Inside the full package</p>
            <p className="max-w-3xl text-gray-300">Eight in-depth insights, six service pages, anonymised case studies, downloadable resources, website copy, and webinar content—organised for publishing and ongoing client education.</p>
          </div>
          <a href="#contact" className="mt-5 inline-flex shrink-0 items-center justify-center bg-[#ff2b4d] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d4173a] md:mt-0">
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  )
}
