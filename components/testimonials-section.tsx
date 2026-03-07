"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Kenindia Assurance",
    quote:
      "Digital Asset Defenders came in and did a thorough assessment of our internal network, core servers, and web applications—found several vulnerabilities we had no idea existed and gave us clear, actionable steps to fix them.",
    result: "Security posture improved significantly",
  },
  {
    name: "Postbank",
    quote:
      "They assessed our network, applications, and security policies, identified vulnerabilities we weren't aware of, and helped us remediate them effectively. They're also easy to work with and always up-to-date on the latest threats.",
    result: "Comprehensive vulnerability remediation",
  },
  {
    name: "MP Shah Hospital",
    quote:
      "They delivered an in-depth assessment covering web applications, network security, cloud environment, and mobile applications. They discovered several vulnerabilities and provided detailed remediation steps.",
    result: "Enterprise-wide security improvement",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-sm md:text-base font-semibold text-[#990012] uppercase tracking-widest mb-4">
            Client Feedback
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 mb-6">Trusted by Leading Organizations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how Digital Asset Defenders has helped enterprises across industries strengthen their security posture.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#990012]/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#990012] text-[#990012]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Result Badge */}
              <div className="mb-6 pb-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-[#990012] uppercase tracking-wide">{testimonial.result}</p>
              </div>

              {/* Company Name */}
              <p className="font-bold text-gray-950">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-t border-gray-200">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#990012] mb-2">500+</p>
            <p className="text-gray-600">Organizations Protected</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#990012] mb-2">15+</p>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#990012] mb-2">99.9%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-[#990012] mb-2">24/7</p>
            <p className="text-gray-600">Threat Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  )
}
