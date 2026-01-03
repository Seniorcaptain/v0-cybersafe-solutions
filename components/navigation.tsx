"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Menu, X, Phone, Mail, ExternalLink } from "lucide-react"
import { useNotifications } from "@/components/notification-system"

const navigationLinks = [
  { href: "#services", label: "Services" },
  { href: "#onboarding", label: "Get Started" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#team", label: "Team" },
  { href: "#threat-feed", label: "Threat Intel" },
  { href: "#blog", label: "Insights" },
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

      // Update active section based on scroll position
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

      addNotification({
        type: "info",
        title: "Navigation",
        message: `Scrolling to ${href.substring(1)} section`,
        duration: 2000,
      })
    }
  }

  const handleEmergencyCall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:+15551234567"
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
      window.location.href = "mailto:hello@digitalassetdefenders.com"
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Digital Asset Defenders</h1>
              <p className="text-xs text-cyan-400 hidden sm:block">Enterprise Security</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium relative ${
                  activeSection === link.href.substring(1) ? "text-cyan-400" : ""
                }`}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 bg-transparent"
              onClick={handleEmergencyCall}
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              onClick={() => scrollToSection("#onboarding")}
            >
              Free Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-slate-800">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-slate-900 border-slate-700 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Digital Asset Defenders</h2>
                      <p className="text-xs text-cyan-400">Enterprise Security</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 py-6">
                  <div className="space-y-1 px-6">
                    {navigationLinks.map((link, index) => (
                      <button
                        key={link.href}
                        onClick={() => scrollToSection(link.href)}
                        className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-all duration-200 group ${
                          activeSection === link.href.substring(1)
                            ? "text-cyan-400 bg-cyan-400/10"
                            : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="font-medium">{link.label}</span>
                        <div
                          className={`ml-auto w-0 h-2 bg-cyan-400 rounded-full transition-all duration-200 ${
                            activeSection === link.href.substring(1) ? "w-2" : "group-hover:w-2"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="mt-8 px-6">
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <h3 className="text-white font-semibold mb-3">24/7 Support</h3>
                      <div className="space-y-3">
                        <button
                          onClick={handleEmergencyCall}
                          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors w-full"
                        >
                          <Phone className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm">+1 (555) 123-SAFE</span>
                          <ExternalLink className="w-3 h-3 ml-auto" />
                        </button>
                        <button
                          onClick={handleEmailContact}
                          className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors w-full"
                        >
                          <Mail className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm">hello@digitalassetdefenders.com</span>
                          <ExternalLink className="w-3 h-3 ml-auto" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Security Badges */}
                  <div className="mt-6 px-6">
                    <h3 className="text-white font-semibold mb-3">Certifications</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["ISO 27001", "SOC 2", "PCI DSS", "HIPAA"].map((cert) => (
                        <div
                          key={cert}
                          className="flex items-center justify-center p-3 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
                        >
                          <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                          <span className="text-xs text-slate-300">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="p-6 border-t border-slate-700 space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    onClick={() => scrollToSection("#onboarding")}
                  >
                    Get Free Assessment
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
