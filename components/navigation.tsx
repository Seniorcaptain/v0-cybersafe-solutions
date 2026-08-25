"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Menu, X, Phone, Mail, ExternalLink } from "lucide-react"
import { useNotifications } from "@/components/notification-system"

// Every href below points at a real section id rendered in app/page.tsx.
const navigationLinks = [
  { href: "#services", label: "Services" },
  { href: "#threat-feed", label: "Threat Intel" },
  { href: "#trust", label: "Why Us" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { addNotification } = useNotifications()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navigationLinks.map((link) => link.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleEmergencyCall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:+254714749513"
      addNotification({
        type: "info",
        title: "Emergency Response",
        message: "Connecting you to our 24/7 emergency response team",
        duration: 3000,
      })
    }
  }

  const handleEmailContact = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:Security@digitalassetdefenders.com"
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#08080c]/85 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Shield className="w-5 h-5 text-[#ff2b4d]" />
            <h1 className="text-sm font-bold tracking-[0.1em] text-white">DIGITAL ASSET DEFENDERS</h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-[13px] font-medium tracking-tight transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "text-[#ff2b4d]" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleEmailContact}
              className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors"
            >
              Email Us
            </button>
            <Button
              className="bg-[#ff2b4d] hover:bg-[#d4173a] text-white rounded-full px-6 h-9 text-[13px] font-medium transition-all"
              onClick={() => scrollToSection("#contact")}
            >
              Book a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-[#08080c] border-l border-white/10 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#ff2b4d]" />
                    <h2 className="text-sm font-bold tracking-tight text-white">DIGITAL ASSET DEFENDERS</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 py-6">
                  <div className="space-y-1 px-6">
                    {navigationLinks.map((link) => (
                      <button
                        key={link.href}
                        onClick={() => scrollToSection(link.href)}
                        className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                          activeSection === link.href.substring(1)
                            ? "text-[#ff2b4d] bg-[#ff2b4d]/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="text-sm font-medium">{link.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="mt-8 px-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                      <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-3">Support</h3>
                      <div className="space-y-3">
                        <button
                          onClick={handleEmergencyCall}
                          className="flex items-center gap-3 text-gray-300 hover:text-[#ff2b4d] transition-colors w-full"
                        >
                          <Phone className="w-4 h-4 text-[#ff2b4d]" />
                          <span className="text-sm font-medium">+254 714749513</span>
                        </button>
                        <button
                          onClick={handleEmailContact}
                          className="flex items-center gap-3 text-gray-300 hover:text-[#ff2b4d] transition-colors w-full"
                        >
                          <Mail className="w-4 h-4 text-[#ff2b4d]" />
                          <span className="text-sm font-medium">Security@digitalassetdefenders.com</span>
                          <ExternalLink className="w-3 h-3 ml-auto" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Security Badges */}
                  <div className="mt-6 px-6">
                    <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-3">Certifications</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["ISO 27001", "SOC 2", "PCI DSS", "HIPAA"].map((cert) => (
                        <div
                          key={cert}
                          className="flex items-center justify-center p-3 bg-white/5 rounded-xl border border-white/10"
                        >
                          <Shield className="w-3 h-3 text-[#ff2b4d] mr-2" />
                          <span className="text-[10px] font-bold text-gray-300 tracking-tight">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="p-6 border-t border-white/10 space-y-3">
                  <Button
                    className="w-full bg-[#ff2b4d] hover:bg-[#d4173a] text-white rounded-full"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Book a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-red-400/50 text-red-400 hover:bg-red-400/10 bg-transparent"
                    onClick={handleEmergencyCall}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Response
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
