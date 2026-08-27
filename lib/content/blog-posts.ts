export interface BlogBlock {
  type: string
  text?: string
  items?: string[]
  head?: string
  body?: string
  header?: string[]
  rows?: (string | number)[][]
  col_widths?: number[]
}

export interface BlogPost {
  slug: string
  tag: string
  category: string
  title: string
  fullTitle: string
  subtitle: string
  description: string
  updated: string
  pdf: string
  blocks: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    "slug": "kenya-dpa",
    "tag": "Insight",
    "category": "Data protection",
    "title": "Kenya Data Protection Act (DPA) 2019",
    "fullTitle": "Kenya Data Protection Act 2019: The 2026 Corporate Compliance Roadmap",
    "subtitle": "What registration, enforcement, and the pending 2025 Amendment Bill actually mean for your organisation",
    "description": "A practical compliance roadmap covering ODPC registration, lawful processing, data subject rights, DPIAs, breach notification, and enforcement exposure.",
    "updated": "Updated August 2026",
    "pdf": "/downloads/kenya-dpa-2019-compliance-roadmap-2026.pdf",
    "blocks": [
      {
        "type": "h2",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "The Data Protection Act, 2019 (Act No. 24 of 2019) came into force on 25 November 2019, giving effect to Article 31 of the Constitution of Kenya and establishing the country's first comprehensive data protection regime. Three sets of implementing regulations — covering registration, general processing, and complaints handling — followed in 2021. For its first few years, the Office of the Data Protection Commissioner (ODPC) was widely seen as a young, education-focused regulator. That has changed. By early 2026, Kenya's data protection regime had shifted decisively from awareness-building into structured, financially consequential enforcement, and a new amendment bill working through Parliament is about to raise the stakes further."
      },
      {
        "type": "p",
        "text": "This guide sets out where the law actually stands today: who must register, what enforcement now looks like in practice, and the compliance roadmap Digital Asset Defenders uses with clients across banking, fintech, healthcare, and public-sector organisations in Kenya."
      },
      {
        "type": "h2",
        "text": "Who Has to Register — and Who's Exempt"
      },
      {
        "type": "p",
        "text": "Under section 18 of the DPA and the Data Protection (Registration of Data Controllers and Data Processors) Regulations, 2021 (Legal Notice No. 207 of 2021), no person may act as a data controller or data processor in Kenya without registering with the ODPC. The regulations took effect on 14 July 2022, and registration is handled through the ODPC's online portal."
      },
      {
        "type": "p",
        "text": "The general registration threshold is an annual turnover above KES 5,000,000 or more than ten employees. But size-based exemptions do not apply across the board: organisations in roughly eighteen designated sectors — including financial services, telecommunications, healthcare, education, insurance, hospitality, gaming, direct marketing, and CCTV operators — must register regardless of revenue or headcount. If your organisation touches any of these sectors, assume you need to register and confirm from there, rather than assuming a small headcount exempts you."
      },
      {
        "type": "callout",
        "head": "Practical note",
        "body": "Operating without registration is itself an offence under the Act, independent of any breach or complaint. Registration status is one of the first things the ODPC checks when it opens an inquiry, so it is also one of the cheapest compliance gaps to close."
      },
      {
        "type": "h2",
        "text": "The Enforcement Reality in 2026"
      },
      {
        "type": "p",
        "text": "The clearest evidence that the DPA has teeth is in the ODPC's own numbers. Since the Act came into force, the regulator has received over 9,061 complaints, issued 357 determinations, 134 enforcement notices, and 20 penalty notices, and ordered compensation directly to affected data subjects. In 2025 alone the ODPC issued roughly 96 determinations — nearly double the 2024 figure — and in a single announcement in January 2026 it issued 184 compensation orders to individuals whose data had been mishandled, one of the strongest enforcement actions taken by any data protection regulator in Africa to date."
      },
      {
        "type": "p",
        "text": "Total administrative fines had exceeded KES 26 million by September 2024, with maximum KES 5 million penalties issued against organisations including Oppo Kenya, Whitepath, and Regus Kenya (the Regus fine was later reduced on appeal, though the High Court upheld the ODPC's underlying enforcement authority). In a more recent set of notices, the ODPC fined three organisations a combined KES 9.375 million: KES 2.975 million against a digital lender for abusive, third-party-data debt collection — a penalty the High Court subsequently upheld — alongside KES 1.85 million and KES 4.55 million penalties against a hospitality venue and a school respectively."
      },
      {
        "type": "p",
        "text": "Enforcement is no longer limited to fines. In a January 2026 ruling against a digital lender, the Data Commissioner found the company had posted a former customer's images and personal details on social media without a lawful basis, ordered deletion of the data, and recommended prosecution of the company's directors for obstructing the investigation — exposing individuals, not just the company, to fines of up to KES 5 million or a two-year jail term on conviction. Kenyan courts have separately ordered the deletion of unlawfully collected biometric data, establishing judicial enforcement as a live, practical risk alongside regulatory action."
      },
      {
        "type": "h2",
        "text": "Core Compliance Obligations"
      },
      {
        "type": "h3",
        "text": "Lawful basis for processing"
      },
      {
        "type": "p",
        "text": "Every processing activity needs a documented lawful basis under section 30: consent, performance of a contract, compliance with a legal obligation, protection of vital interests, public interest or official authority, or legitimate interests (subject to a balancing test against the data subject's rights). “We've always collected this” is not a lawful basis, and it is usually the first thing an ODPC investigator asks for."
      },
      {
        "type": "h3",
        "text": "Data subject rights"
      },
      {
        "type": "ul",
        "items": [
          "Right to be informed",
          "Right of access",
          "Right to rectification",
          "Right to erasure (“right to be forgotten”)",
          "Right to restriction of processing",
          "Right to data portability",
          "Right to object"
        ]
      },
      {
        "type": "h3",
        "text": "Data Protection Impact Assessments (DPIAs)"
      },
      {
        "type": "p",
        "text": "Section 31 requires a DPIA before undertaking processing likely to result in high risk to data subjects' rights and freedoms — large-scale profiling, sensitive personal data processing, or new technology deployments are the usual triggers."
      },
      {
        "type": "h3",
        "text": "Breach notification"
      },
      {
        "type": "p",
        "text": "Data controllers must notify the ODPC within 72 hours of becoming aware of a personal data breach. Data processors must notify their controller within 48 hours of discovery. Organisations designated as critical-infrastructure operators under the 2024 cybersecurity regulations face a tighter 24-hour notification window. Where a breach poses a high risk to individuals, affected data subjects must also be notified without undue delay, in plain language."
      },
      {
        "type": "h2",
        "text": "Penalties: What's Currently at Stake, and What's Changing"
      },
      {
        "type": "table",
        "header": [
          "Violation type",
          "Current exposure"
        ],
        "rows": [
          [
            "Administrative fine (controller)",
            "Up to KES 5 million or 1% of annual turnover, whichever is lower"
          ],
          [
            "Administrative fine (processor)",
            "Up to KES 3 million or 0.5% of annual turnover, whichever is lower"
          ],
          [
            "Criminal offences (e.g. unlawful disclosure, unauthorised access, failure to register)",
            "Fines up to KES 3 million and/or imprisonment up to 10 years"
          ],
          [
            "Continuing violations",
            "Daily fines of up to KES 10,000"
          ],
          [
            "Compensation orders",
            "Ordered directly to affected data subjects, separate from any fine"
          ]
        ],
        "col_widths": [
          230,
          250
        ]
      },
      {
        "type": "callout",
        "head": "Watch this space: the Amendment Bill",
        "body": "The Data Protection (Amendment) Bill 2025, currently before Parliament, proposes changing the penalty calculation from “whichever is lower” to “whichever is higher” between the KES 5 million cap and 1% of turnover — a change that would dramatically increase exposure for large organisations, banks, and telecoms. The Bill also introduces new obligations around AI governance and cross-border data-sharing. It has not yet passed at the time of writing, but organisations budgeting for compliance risk in 2026–2027 should plan against the higher figure, not the current cap."
      },
      {
        "type": "h2",
        "text": "Other 2025–2026 Developments Worth Tracking"
      },
      {
        "type": "ul",
        "items": [
          "<b>Draft Conduct of Compliance Audit Regulations</b> — would formalise the ODPC's power to conduct desk-based and on-site regulator-led audits, with defined timelines and documentation expectations.",
          "<b>Draft Data Sharing Code</b> — published for consultation in December 2024, intended to govern inter-agency and cross-organisation data-sharing arrangements.",
          "<b>ODPC Cloud Policy (December 2024)</b> — encourages data localisation for entities adopting cloud solutions, particularly for sensitive government and critical-infrastructure data.",
          "<b>Kenya–EU adequacy dialogue</b> — launched in May 2024, the first such dialogue between the EU and an African nation. Kenya's GDPR-aligned framework strengthens its case; the dialogue remained ongoing as of early 2026."
        ]
      },
      {
        "type": "h2",
        "text": "Step-by-Step Compliance Roadmap"
      },
      {
        "type": "ol",
        "items": [
          "<b>Conduct a data audit</b> — identify every category of personal data you collect, process, store, and share, and with whom.",
          "<b>Register with the ODPC</b> — confirm your sector and size against the registration thresholds and submit an accurate application.",
          "<b>Document a lawful basis for every processing activity</b> — not just a privacy policy, but an internal record you can produce on request.",
          "<b>Update privacy policies and notices</b> to DPA standard, including plain-language explanations of data subject rights.",
          "<b>Build data subject request procedures</b> that can meet statutory response timeframes.",
          "<b>Run DPIAs</b> for high-risk processing activities before they go live, not after.",
          "<b>Implement technical and organisational security measures</b> — encryption, access controls, logging, regular testing.",
          "<b>Write and rehearse a data breach response plan</b>, including the 72-hour ODPC notification workflow.",
          "<b>Train staff</b> on data protection obligations on a recurring basis, not as a one-off induction module.",
          "<b>Prepare for regulator-led audits</b> now, given the direction the draft Conduct of Compliance Audit Regulations are heading."
        ]
      },
      {
        "type": "h2",
        "text": "How Digital Asset Defenders Can Help"
      },
      {
        "type": "ul",
        "items": [
          "DPA gap assessments benchmarked against current ODPC enforcement priorities",
          "ODPC registration support and sector-threshold determination",
          "Privacy policy and data subject request procedure development",
          "Data Protection Impact Assessments (DPIAs)",
          "24/7 data breach response, including the 72-hour ODPC notification workflow",
          "Staff training programmes"
        ]
      },
      {
        "type": "p",
        "text": "The Kenya DPA is no longer a compliance checkbox that regulators quietly enforce in the background. With 184 compensation orders issued in a single month, director-level prosecutions being recommended, and an amendment bill poised to raise financial exposure further, the cost of getting this wrong is now immediate and quantifiable. Contact Digital Asset Defenders to assess where your organisation currently stands."
      },
      {
        "type": "sources",
        "items": [
          "Office of the Data Protection Commissioner (ODPC), Kenya — odpc.go.ke",
          "Data Protection Act, 2019 (No. 24 of 2019) and the Data Protection (Registration of Data Controllers and Data Processors) Regulations, 2021 (Legal Notice No. 207 of 2021)",
          "Dawan Africa, “ODPC Issues 184 Compensation Orders to Data Protection Complainants”, January 2026",
          "Recording Law, “Kenya Data Privacy Laws: DPA 2019, ODPC Enforcement, and 2026 Compliance Guide”",
          "Xcobean, “Kenya Cloud & Data Protection Compliance 2026”",
          "Sentinel Assurance Partners, “Preparing for an ODPC Data Protection Compliance Audit in Kenya”, April 2026",
          "Capital FM Kenya, “ODPC faults LOLC Kenya over data breach, orders deletion of client data”, April 2026",
          "Global Law Experts, “Kenya's Data-Protection Enforcement Turn: 2026 Audits”, July 2026",
          "OLM Law, “Data Protection Compliance in Kenya: 2026 Guide”"
        ]
      }
    ]
  },
  {
    "slug": "pci-dss-v4",
    "tag": "Guide",
    "category": "Payment security",
    "title": "PCI DSS v4.0.1 Transition Guide",
    "fullTitle": "PCI DSS v4.0.1 in 2026: What's Actually Mandatory Now",
    "subtitle": "The transition period is over. Here is what every fintech and payment processor needs to know today.",
    "description": "Understand the new requirements for fintechs and payment processors, including MFA, WAF coverage, script management, segmentation testing, and SBOMs.",
    "updated": "Updated August 2026",
    "pdf": "/downloads/pci-dss-v4-0-1-transition-guide-2026.pdf",
    "blocks": [
      {
        "type": "h2",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "PCI DSS v4.0 was published in March 2022 as the first major revision to the Payment Card Industry Data Security Standard in over a decade, introducing 64 new or revised requirements. To give organisations time to adapt, the PCI Security Standards Council (PCI SSC) split those requirements into two tiers: 13 took effect immediately, and 51 were designated “future-dated” — treated as best practice until a hard deadline. That deadline, 31 March 2025, has now passed. There is no grace period, and there is no remaining ambiguity: every PCI DSS assessment conducted from that date forward scores all 64 requirements as fully in scope."
      },
      {
        "type": "p",
        "text": "A limited revision, PCI DSS v4.0.1, was published on 11 June 2024. It corrected formatting and clarified intent in places, but added no new requirements and did not move the 31 March 2025 cutover. PCI DSS v4.0 itself retired on 31 December 2024 (v3.2.1 had already retired on 31 March 2024), which means v4.0.1 is now the only active version of the standard. If your last assessment predates March 2025, or if you treated the future-dated controls as optional, your next assessment will not give you that latitude."
      },
      {
        "type": "h2",
        "text": "Timeline: How We Got Here"
      },
      {
        "type": "table",
        "header": [
          "Date",
          "Milestone"
        ],
        "rows": [
          [
            "March 2022",
            "PCI DSS v4.0 published, introducing 64 new/revised requirements"
          ],
          [
            "31 March 2024",
            "PCI DSS v3.2.1 retires"
          ],
          [
            "11 June 2024",
            "PCI DSS v4.0.1 published (limited revision, clarifications only)"
          ],
          [
            "31 December 2024",
            "PCI DSS v4.0 retires; v4.0.1 becomes the sole active version"
          ],
          [
            "31 March 2025",
            "All 51 future-dated requirements become mandatory, with no grace period"
          ],
          [
            "June–July 2026",
            "PCI SSC runs a further RFC on the next standard, with a focus on AI and emerging technology"
          ]
        ],
        "col_widths": [
          130,
          350
        ]
      },
      {
        "type": "h2",
        "text": "What's Actually Mandatory in a 2026 Assessment"
      },
      {
        "type": "p",
        "text": "The following controls were “best practice” as recently as early 2025. They are not anymore. These are the requirements Digital Asset Defenders sees fail most often in gap assessments today:"
      },
      {
        "type": "ul",
        "items": [
          "<b>Requirement 8.3.1 — Multi-factor authentication for all access to the cardholder data environment.</b> Previously MFA was required only for administrative and remote access; it now applies to all user access to system components in the CDE.",
          "<b>Requirement 6.4.2 — Web Application Firewall (or equivalent).</b> All external-facing web applications handling cardholder data must be protected by a WAF or an equivalent dynamic application security solution.",
          "<b>Requirement 6.4.3 — Payment page script management.</b> Organisations must maintain an inventory of every script that executes on a payment page and justify why each one is authorised to run there.",
          "<b>Requirement 11.6.1 — Payment page tamper detection.</b> A mechanism must detect and alert on unauthorised modifications to payment-page HTTP headers and script content (the control most directly aimed at web-skimming/Magecart-style attacks).",
          "<b>Segmentation testing</b> — service providers must perform segmentation testing at least twice per year for multi-tenant environments, not annually.",
          "<b>Encryption of stored account data</b> — full-disk encryption alone is no longer an acceptable control for protecting stored cardholder data; more granular, application- or field-level encryption is expected.",
          "<b>Vulnerability management</b> — remediation now covers vulnerabilities of all severities, not only high and critical findings.",
          "<b>A documented, organisation-specific penetration testing methodology</b> — aligned to an industry-accepted approach such as OWASP Top 10, NIST SP 800-115, or PTES, and consistently applied.",
          "<b>Software Bill of Materials (SBOM)</b> — for custom software, organisations must obtain and maintain an SBOM documenting all third-party and open-source components.",
          "<b>Requirement 5.4.1 — Phishing-aware training.</b> Security awareness training must now include methods for confirming sender identity, not just generic phishing recognition.",
          "<b>Requirement 12 scope validation</b> — PCI DSS scope must be formally re-validated annually for merchants and every six months for Third-Party Service Providers (TPSPs)."
        ]
      },
      {
        "type": "h2",
        "text": "Where 2026 Assessments Actually Fail"
      },
      {
        "type": "p",
        "text": "In practice, the e-commerce script requirements (6.4.3 and 11.6.1) are the most common source of assessment failures right now — and they typically fail on governance, not technology. Most payment gateways already support the required tamper-detection capability; what's usually missing is the documented inventory, the change-approval process for adding a new script, and evidence that someone actually reviews it. The second most common failure mode is treating the annual PCI cycle as a point-in-time event rather than the continuous, business-as-usual programme v4.0.1 explicitly requires: organisations that pass an assessment and then let controls lapse until the next cycle are increasingly caught out."
      },
      {
        "type": "h2",
        "text": "What Comes Next"
      },
      {
        "type": "p",
        "text": "A successor standard is in early development but is not imminent. According to the PCI SSC's 2025 Annual Report (published January 2026), a second Request for Comments cycle for a future version closed in December 2025, and a further RFC ran from 3 June to 20 July 2026, specifically asking stakeholders how the standard should evolve to address AI and future payment technology. No release date has been announced, and the Council's own history suggests a multi-year runway before any new major version becomes mandatory — but organisations should expect the next revision to formalise AI-related risks (fraud models, AI-assisted attacks, and AI-generated code in payment applications) given the direction of that consultation."
      },
      {
        "type": "h2",
        "text": "The Kenyan Context: PCI DSS Meets the DPA and CBK Guidelines"
      },
      {
        "type": "p",
        "text": "For Kenyan fintechs and payment service providers, PCI DSS compliance rarely stands alone. The Central Bank of Kenya's Guidelines on Cybersecurity for Payment Service Providers (2019) explicitly ties payments-data handling to the Data Protection Act 2019, and CBK's 2024 harmonisation effort is pulling PSP-specific cybersecurity requirements, the Commercial Banks Cybersecurity Guidelines, and the Computer Misuse and Cybercrimes (Critical Information Infrastructure and Cybersecurity) Regulations 2024 into one converging compliance obligation. In practice, this means a PCI DSS gap assessment for a Kenyan payment processor should be scoped alongside DPA breach-notification timelines and CBK incident-reporting obligations from the outset, rather than treated as three separate exercises."
      },
      {
        "type": "h2",
        "text": "Compliance Roadmap"
      },
      {
        "type": "ol",
        "items": [
          "Run a full gap analysis against PCI DSS v4.0.1, including every formerly future-dated requirement.",
          "Prioritise the highest-effort controls first: payment-page integrity (6.4.3 / 11.6.1), WAF deployment, expanded MFA coverage, and authenticated vulnerability scanning.",
          "Build a documented, repeatable penetration testing methodology rather than an ad hoc annual test.",
          "Generate and maintain an SBOM for any custom payment-facing software.",
          "Move from an annual compliance event to a continuous evidence-collection habit — logs, change records, and scan results that are already organised before your assessor asks for them.",
          "Engage your QSA (Qualified Security Assessor) early if your validation level requires one, so scope is agreed well before the assessment window opens."
        ]
      },
      {
        "type": "h2",
        "text": "How Digital Asset Defenders Can Help"
      },
      {
        "type": "ul",
        "items": [
          "PCI DSS v4.0.1 gap assessments, including the formerly future-dated requirements",
          "Scope definition and validation (annual for merchants, semi-annual for TPSPs)",
          "Penetration testing aligned to OWASP, NIST SP 800-115, or PTES",
          "Segmentation testing for multi-tenant service provider environments",
          "WAF selection, deployment, and tuning",
          "SBOM generation and software supply chain documentation",
          "Policy development and staff training"
        ]
      },
      {
        "type": "p",
        "text": "PCI DSS v4.0.1 has moved payment security from a checkbox exercise to a continuous, risk-based discipline. With the transition deadline behind us and a further evolution already being scoped by the Council, the organisations in the strongest position are the ones treating this as an ongoing programme rather than a once-a-year scramble. Contact Digital Asset Defenders for a gap assessment against the full current standard."
      },
      {
        "type": "sources",
        "items": [
          "PCI Security Standards Council — pcisecuritystandards.org",
          "PCI SSC Blog, “Now is the Time for Organizations to Adopt the Future-Dated Requirements of PCI DSS v4.x”",
          "Compyl, “PCI DSS 4.0.1 Compliance Guide: Every Requirement That's Now Mandatory”",
          "Cybernion, “PCI DSS 4.0.1 Changes”, July 2026",
          "SICHERTEN, “PCI DSS v4.0.1 in 2026: every requirement is now mandatory”",
          "SecurityWall, “PCI DSS v4.0 & v4.0.1: Everything That Changed and What You Must Do by 2026”",
          "Xcobean, “Kenya Cloud & Data Protection Compliance 2026”"
        ]
      }
    ]
  },
  {
    "slug": "iso-27001",
    "tag": "Insight",
    "category": "Information security",
    "title": "ISO 27001:2022 Certification",
    "fullTitle": "ISO/IEC 27001:2022: Certification Is Now Mandatory, Not Optional",
    "subtitle": "The transition deadline has passed. Here's what that actually means for a 2013-certified organisation.",
    "description": "Move from preparation to continuous improvement with a clear view of the 93 Annex A controls, new controls, migration strategy, and audit evidence.",
    "updated": "Updated August 2026",
    "pdf": "/downloads/iso-27001-2022-certification-guide-2026.pdf",
    "blocks": [
      {
        "type": "h2",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "ISO/IEC 27001:2022 replaced the 2013 edition of the world's leading information security management system (ISMS) standard on 25 October 2022. The International Accreditation Forum (IAF) set a three-year transition window for existing certificate holders — and that window closed on 31 October 2025. Any organisation still holding an ISO/IEC 27001:2013 certificate today is no longer certified to a recognised standard: certificates issued or reissued against the 2013 edition during the transition period carried 31 October 2025 as their expiry date, regardless of the usual three-year validity cycle."
      },
      {
        "type": "p",
        "text": "This is not a minor administrative update. This guide covers what actually changed in the standard, what happens if your organisation missed the deadline, and how to approach certification or recertification against the only version that now exists."
      },
      {
        "type": "h2",
        "text": "Transition Timeline"
      },
      {
        "type": "table",
        "header": [
          "Date",
          "Milestone"
        ],
        "rows": [
          [
            "25 October 2022",
            "ISO/IEC 27001:2022 published; three-year transition window begins"
          ],
          [
            "30 April 2024",
            "Certification bodies stop issuing new initial certifications against the 2013 edition"
          ],
          [
            "31 July 2025",
            "All transition audits (recertification and surveillance) were expected to be completed"
          ],
          [
            "31 October 2025",
            "Transition window closes; all remaining 2013 certificates expire or are withdrawn"
          ],
          [
            "1 January 2026",
            "Global Accreditation Cooperation Incorporated (GACI) begins operating, taking over international accreditation functions previously split between IAF and ILAC"
          ]
        ],
        "col_widths": [
          140,
          340
        ]
      },
      {
        "type": "callout",
        "head": "If your certificate lapsed",
        "body": "An expired ISO/IEC 27001:2013 certificate is not eligible for a lighter “transition audit” any longer. Certification bodies now treat a lapsed organisation as a new client, requiring a full Stage 1 and Stage 2 audit against the 2022 edition — a materially longer and more expensive process than the transition path that was available before the deadline."
      },
      {
        "type": "h2",
        "text": "What Actually Changed in the Standard"
      },
      {
        "type": "h3",
        "text": "Annex A restructured and consolidated"
      },
      {
        "type": "p",
        "text": "The most visible change is in Annex A, which governs the specific security controls an ISMS can select from. The previous 114 controls spread across 14 domains have been consolidated into 93 controls organised under four themes:"
      },
      {
        "type": "table",
        "header": [
          "Theme",
          "Controls"
        ],
        "rows": [
          [
            "Organisational",
            "37"
          ],
          [
            "People",
            "8"
          ],
          [
            "Physical",
            "14"
          ],
          [
            "Technological",
            "34"
          ]
        ],
        "col_widths": [
          220,
          260
        ]
      },
      {
        "type": "h3",
        "text": "Eleven new controls"
      },
      {
        "type": "p",
        "text": "Eleven controls are entirely new, reflecting how the threat landscape and technology stack have shifted since 2013 — particularly around cloud, threat intelligence, and secure development:"
      },
      {
        "type": "ul",
        "items": [
          "5.7 — Threat intelligence",
          "5.23 — Information security for use of cloud services",
          "5.30 — ICT readiness for business continuity",
          "7.4 — Physical security monitoring",
          "8.9 — Configuration management",
          "8.10 — Information deletion",
          "8.11 — Data masking",
          "8.12 — Data leakage prevention",
          "8.16 — Monitoring activities",
          "8.23 — Web filtering",
          "8.28 — Secure coding"
        ]
      },
      {
        "type": "h3",
        "text": "Supply chain controls (5.19–5.22)"
      },
      {
        "type": "p",
        "text": "These four controls cover the full supplier relationship lifecycle. Control 5.21, addressing ICT supply chain security specifically, is the one auditors probe hardest — and evidence for it increasingly requires organisations to produce a Software Bill of Materials (SBOM) for any in-house software, mirroring a requirement that has also become mandatory under PCI DSS v4.0.1."
      },
      {
        "type": "h3",
        "text": "ISMS clause updates"
      },
      {
        "type": "p",
        "text": "Beyond Annex A, the management system clauses themselves picked up new or revised requirements: Clause 4.4 (understanding the interaction between ISMS processes), Clause 6.3 (planning changes to the ISMS), and Clause 9.1 (evaluating ISMS performance) all carry meaningfully expanded expectations compared with 2013."
      },
      {
        "type": "h2",
        "text": "Migration Strategy"
      },
      {
        "type": "p",
        "text": "The cleanest way to approach migration is as a structured remap rather than a rebuild. Eighty-two of the retained controls map directly from the 2013 structure with only cosmetic changes. The eleven new controls need fresh, individual risk analysis — exclusion is permitted where a control genuinely doesn't apply, but that exclusion has to be defensible and documented in the Statement of Applicability, not simply asserted. Your risk treatment plan needs to be restructured around the new four-theme layout without losing the historical risk register that documents why past decisions were made."
      },
      {
        "type": "ol",
        "items": [
          "Gap-assess your current ISMS against the 2022 Annex A structure and the updated management clauses.",
          "Individually risk-assess each of the eleven new controls; document any exclusions in the SoA with clear justification.",
          "Update the risk treatment plan and control implementation evidence to the new theme structure.",
          "Run an internal audit against the 2022 requirements before your external audit.",
          "Engage your certification body early — best practice is starting 12–18 months ahead of any renewal or first-time certification, given constrained auditor availability post-deadline."
        ]
      },
      {
        "type": "h2",
        "text": "Why This Matters for Kenyan and East African Organisations"
      },
      {
        "type": "p",
        "text": "ISO 27001 certification is frequently a prerequisite for enterprise and government procurement, and for correspondent banking and partnership relationships with international financial institutions. A lapsed certificate doesn't just create an internal governance gap — it can immediately disqualify an organisation from tenders and contract renewals that specify current certification. For organisations pursuing DPA, PCI DSS, or CBK cybersecurity compliance in parallel, the 2022 edition's new cloud security, threat intelligence, and secure coding controls also map cleanly onto obligations those other frameworks already require, making a well-executed ISO 27001:2022 implementation a strong backbone for the rest of a compliance programme rather than a parallel exercise."
      },
      {
        "type": "h2",
        "text": "How Digital Asset Defenders Can Help"
      },
      {
        "type": "ul",
        "items": [
          "ISO/IEC 27001:2022 gap analysis for both first-time certification and lapsed-certificate recovery",
          "Annex A control mapping and Statement of Applicability development",
          "Implementation support for the eleven new controls, including SBOM generation for control 5.21",
          "ISMS documentation: policies, risk register, risk treatment plan",
          "Internal audits ahead of your certification body's external audit",
          "Certification body liaison and audit support"
        ]
      },
      {
        "type": "p",
        "text": "With the transition deadline behind us, ISO/IEC 27001:2022 is simply what “ISO 27001 certified” means now. Whether you're recovering from a lapsed 2013 certificate or pursuing certification for the first time, the earlier you start the fresh risk analysis the new controls require, the less disruptive the process will be. Contact Digital Asset Defenders to scope your gap assessment."
      },
      {
        "type": "sources",
        "items": [
          "ISO/IEC 27001:2022 — Information security, cybersecurity and privacy protection — Information security management systems — Requirements",
          "SGS, “Last Chance to Transition to ISO/IEC 27001:2022 and Next Steps If You Miss the Deadline”",
          "A-LIGN, “ISO 27001 Transition: What Now?”",
          "BrightDefense, “ISO 27001:2022 Deadline Puts Legacy Certificates At Risk”, June 2026",
          "BALTUM, “ISO 27001:2022 Transition — What You Need to Know Before the Deadline”",
          "databrackets, “The ISO 27001:2022 Update”"
        ]
      }
    ]
  },
  {
    "slug": "cbk-guidelines",
    "tag": "Briefing",
    "category": "Financial services",
    "title": "CBK Cybersecurity Guidelines",
    "fullTitle": "CBK Cybersecurity Guidelines in 2026: Reading the New Regulatory Stack",
    "subtitle": "How the 2017 and 2019 guidelines, the 2024 critical infrastructure regulations, and a new national cyber agency now fit together",
    "description": "Interpret the requirements shaping Kenya's financial sector, from vulnerability management and audit trails to zero trust and third-party risk.",
    "updated": "Updated August 2026",
    "pdf": "/downloads/cbk-cybersecurity-guidelines-2026.pdf",
    "blocks": [
      {
        "type": "h2",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "Kenyan banks and payment service providers no longer answer to a single cybersecurity guideline — they sit inside a stack of overlapping regimes that has grown substantially since 2024. The Central Bank of Kenya (CBK) is actively harmonising its Commercial Banks Cybersecurity Guidelines (2017) and Guidelines on Cybersecurity for Payment Service Providers (2019) with the Computer Misuse and Cybercrimes (Critical Information Infrastructure and Cybersecurity) Regulations, 2024 — and, as of mid-2026, a new national cybersecurity agency has entered the picture as well. This guide interprets what that stack means in practice and how to build a compliance programme that actually holds up against it."
      },
      {
        "type": "h2",
        "text": "The Regulatory Stack, Piece by Piece"
      },
      {
        "type": "table",
        "header": [
          "Instrument",
          "What it covers"
        ],
        "rows": [
          [
            "Commercial Banks Cybersecurity Guidelines, 2017",
            "Baseline risk-based cybersecurity framework for licensed banks: governance, incident reporting, independent testing"
          ],
          [
            "Guidelines on Cybersecurity for Payment Service Providers, 2019",
            "Equivalent framework for PSPs, tied explicitly to the National Payment System Act 2011"
          ],
          [
            "Computer Misuse and Cybercrimes (Critical Information Infrastructure and Cybersecurity) Regulations, 2024",
            "Designates critical information infrastructure (banks included), sets breach-notification and audit powers, establishes sector-level Cyber Security Operations Centres"
          ],
          [
            "National Cybersecurity Agency gazette order, July 2026",
            "Creates an 11-member national board with authority over critical infrastructure across sectors, overlapping existing regulator mandates"
          ]
        ],
        "col_widths": [
          180,
          300
        ]
      },
      {
        "type": "p",
        "text": "CBK's own communications describe this explicitly as harmonisation in progress: the 2017 and 2019 guidelines are being aligned with the 2024 regulations rather than replaced outright, which means banks and PSPs should expect obligations from both layers to apply simultaneously rather than the newer instrument superseding the older ones."
      },
      {
        "type": "h2",
        "text": "New Institutions You Now Answer To"
      },
      {
        "type": "h3",
        "text": "The Banking Sector Cybersecurity Operations Centre (BS-SOC)"
      },
      {
        "type": "p",
        "text": "The BS-SOC is a strategic initiative under the CBK Strategic Plan 2024–2027 and a direct implementation of the 2024 critical infrastructure regulations. Sitting under CBK's Cyber Fusion Unit, it provides cyber threat intelligence, incident response, digital forensics, and cyber investigation capability for the banking sector. For regulated institutions, this means CBK now has an operational, technical counterpart — not just a policy office — that can be engaged during a live incident."
      },
      {
        "type": "h3",
        "text": "A national layer above CBK"
      },
      {
        "type": "p",
        "text": "In July 2026, a presidential gazette order established an 11-member security-intelligence-finance board with authority over critical infrastructure nationally, positioned as the most structurally ambitious cyber governance move in East Africa to date. The Order's budget, timeline, and jurisdictional boundaries remain unspecified, and its mandate visibly overlaps with existing bodies — the Communications Authority, CBK, and the Data Protection Commissioner among them. For banks and PSPs, the practical implication is straightforward even while the institutional detail is still settling: expect coordinated, possibly duplicated, reporting and audit obligations across regulators for the foreseeable future, and design your compliance programme to produce evidence once and satisfy multiple regulators from the same records, rather than building parallel processes for each."
      },
      {
        "type": "h2",
        "text": "The Threat Backdrop Driving All of This"
      },
      {
        "type": "p",
        "text": "The urgency behind this regulatory build-out is visible in the Communications Authority's own quarterly numbers, which have been extraordinarily volatile through the 2025–2026 financial year:"
      },
      {
        "type": "table",
        "header": [
          "Quarter",
          "Cyber threat events detected (KE-CIRT/CC)",
          "Change"
        ],
        "rows": [
          [
            "Jan–Mar 2025",
            "2.5 billion",
            "+201.7% on prior quarter"
          ],
          [
            "Apr–Jun 2025",
            "4.5–4.6 billion",
            "+80.8%"
          ],
          [
            "Jul–Sep 2025",
            "842.3 million",
            "−81.6%"
          ],
          [
            "Oct–Dec 2025",
            "4.56 billion",
            "+441%"
          ]
        ],
        "col_widths": [
          110,
          250,
          130
        ]
      },
      {
        "type": "p",
        "text": "The Communications Authority attributes part of the swings to genuinely improved detection capability rather than attack volume alone, but the underlying drivers are consistent quarter to quarter: system vulnerabilities from weak patching and misconfiguration account for the large majority of events, DDoS attacks have repeatedly surged (up over eleven-fold in the October–December 2025 quarter alone), and regulators are pointing to the same set of countermeasures every time — offline backups, network segmentation, multi-factor authentication, and zero-trust architecture. The healthcare sector saw a 95% jump in ransomware incidents in one recent reporting month; manufacturing and finance were also called out as rising targets."
      },
      {
        "type": "h2",
        "text": "Core CBK Cybersecurity Requirements"
      },
      {
        "type": "ul",
        "items": [
          "<b>Risk-based information security framework</b> — documented policy, risk assessment methodology, business continuity plan, and incident response plan.",
          "<b>Vulnerability and patch management</b> — regular vulnerability scanning, risk-based prioritisation, and emergency patch deployment within 24–48 hours for critical findings.",
          "<b>Formal change management</b> — all patches and fixes must go through a documented change control process, not ad hoc deployment.",
          "<b>Third-party risk management</b> — vendors and service providers must be held to the same patch and vulnerability management standards as the institution itself.",
          "<b>Independent testing</b> — institutions are expected to commission at least one independent cyber threat assessment per year, alongside regular penetration testing and, for larger institutions, red team exercises.",
          "<b>Quarterly incident reporting to CBK</b> — using CBK's prescribed reporting format, covering the occurrence and handling of cybersecurity incidents during the period.",
          "<b>Zero trust direction</b> — CBK has established a regulatory framework encouraging a move away from perimeter-based security toward continuous verification.",
          "<b>Board-level oversight</b> — the board must receive and act on the findings of independent assessments, not merely receive them for information."
        ]
      },
      {
        "type": "h2",
        "text": "Building a CBK-Compliant Programme"
      },
      {
        "type": "ol",
        "items": [
          "Maintain a centralised, continuously updated inventory of all IT assets — you cannot patch or segment what you haven't inventoried.",
          "Deploy automated vulnerability scanning across that inventory, covering missing patches, misconfigurations, and known CVEs.",
          "Prioritise remediation using a risk-based method such as CVSS combined with exploit-likelihood scoring (EPSS), rather than working through findings in the order a scanner lists them.",
          "Maintain detailed audit trails for every patch, configuration change, and security action — this is what both CBK and, separately, the ODPC will ask for first in an inquiry.",
          "Run regular, methodology-driven penetration testing rather than an annual check-box test.",
          "Commission an independent cyber threat assessment at least annually and route the findings to the board.",
          "Align your CBK quarterly incident reporting with your DPA 72-hour breach notification workflow — a single incident at a bank or PSP will very often trigger both obligations at once, and building one incident response process that satisfies both timelines avoids duplicated, inconsistent reporting under pressure.",
          "Extend all of the above to critical third-party vendors through contractual security requirements and periodic assessment."
        ]
      },
      {
        "type": "h2",
        "text": "How Digital Asset Defenders Can Help"
      },
      {
        "type": "ul",
        "items": [
          "CBK cybersecurity compliance assessments against the harmonised 2017/2019/2024 requirements",
          "Vulnerability and patch management programme design",
          "Penetration testing and red team exercises",
          "Zero trust architecture design and implementation",
          "Incident response capability development, including a joint CBK/DPA reporting workflow",
          "Third-party and vendor risk management programmes"
        ]
      },
      {
        "type": "p",
        "text": "The regulatory stack Kenyan financial institutions now operate under is more layered than it was even two years ago, and the threat data explains why regulators keep tightening it. Digital Asset Defenders helps banks, PSPs, and fintechs build a single, evidence-based security programme that satisfies CBK, the ODPC, and whichever national body ultimately takes shape around the 2026 gazette order — rather than juggling separate compliance tracks for each. Contact us to assess where your current programme stands."
      },
      {
        "type": "sources",
        "items": [
          "Central Bank of Kenya, “Establishment of Banking Sector Cyber Security Operations Centre”, press release",
          "Central Bank of Kenya, Guidance Note on Cybersecurity for the Banking Sector, 2017",
          "Central Bank of Kenya, Guidelines on Cybersecurity for Payment Service Providers, 2019",
          "Computer Misuse and Cybercrimes (Critical Information Infrastructure and Cybersecurity) Regulations, 2024",
          "CyberSpace Chronicles, “Kenya National Cybersecurity Agency Order 2026 Explained”, July 2026",
          "Communications Authority of Kenya / National KE-CIRT/CC, quarterly Cyber Security Reports, FY2025/26",
          "The Star, “2025 in review: Kenya's cybersecurity journey from threats to strategy”",
          "Capital FM Africa / East African Herald, “Cyber threats surge 441pc to 4.56bn on digital growth”, April 2026",
          "Xcobean, “Kenya Cloud & Data Protection Compliance 2026”"
        ]
      }
    ]
  }
]
