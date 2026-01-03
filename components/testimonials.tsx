"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CISO",
    company: "Digital Asset Defenders",
    industry: "Technology",
    quote:
      "Digital Asset Defenders transformed our security posture completely. Their penetration testing uncovered critical vulnerabilities we never knew existed, and their ongoing SOC services give us peace of mind.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 2,
    name: "Dr. Sarah Williams",
    role: "Chief Technology Officer",
    company: "HealthFirst Medical",
    industry: "Healthcare",
    quote:
      "The HIPAA compliance audit was thorough and professional. They helped us achieve 100% compliance while implementing practical security measures that don't hinder our daily operations.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 3,
    name: "Robert Martinez",
    role: "VP of Security",
    company: "Global Bank Corp",
    industry: "Financial Services",
    quote:
      "Outstanding incident response capabilities. When we faced a potential breach, their team was on-site within hours and contained the threat before any damage occurred.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Chief Executive Officer",
    company: "StartupInnovate",
    industry: "Technology",
    quote:
      "As a growing startup, we needed enterprise-level security without the enterprise cost. Their virtual CISO service provided exactly what we needed to secure our Series A funding.",
    rating: 5,
    logo: "/placeholder.svg?height=60&width=120",
  },
]

const partners = [
  { name: "AWS Partner", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Microsoft Gold", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Google Cloud", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Palo Alto", logo: "/placeholder.svg?height=40&width=100" },
  { name: "CrowdStrike", logo: "/placeholder.svg?height=40&width=100" },
  { name: "Splunk", logo: "/placeholder.svg?height=40&width=100" },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See what our clients say about their security transformation journey
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-16">
          <Card className="bg-slate-800 border-slate-700 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-cyan-400/20" />

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonials[currentTestimonial].rating
                            ? "text-yellow-400 fill-current"
                            : "text-slate-600"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 font-light">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  <div className="flex items-center justify-center gap-6">
                    <img
                      src={testimonials[currentTestimonial].logo || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].company}
                      className="h-12 opacity-70"
                    />
                    <div className="text-center">
                      <div className="text-lg font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                      <div className="text-cyan-400 font-medium">{testimonials[currentTestimonial].role}</div>
                      <div className="text-slate-400">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-slate-600 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? "bg-cyan-400" : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-slate-600 hover:border-cyan-400 hover:bg-cyan-400/10 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Technology Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-10 filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
