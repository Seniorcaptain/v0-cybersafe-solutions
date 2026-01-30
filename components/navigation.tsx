"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Menu, X, Phone, Mail, ExternalLink } from "lucide-react"
import { useNotifications } from "@/components/notification-system"

const navigationLinks = [
  { href: "#threat-feed", label: "Threat Intel" },
  { href: "#experts", label: "Experts" },
  { href: "#quote-calculator", label: "Calculator" },
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
      window.location.href = "mailto:hello@digitalassetdefenders.com"
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-gray-100/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Simplified Apple-style logo and navigation layout */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Shield className="w-5 h-5 text-[#990012]" />
            <h1 className="text-sm font-bold tracking-[0.1em] text-gray-900">DIGITAL ASSET DEFENDERS</h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-[12px] font-medium tracking-tight transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "text-[#990012]" : "text-gray-500 hover:text-black"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-[#990012] hover:bg-[#7a000e] text-white rounded-full px-6 h-8 text-[12px] font-medium transition-all"
              onClick={() => scrollToSection("#quote-calculator")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gray-900 hover:bg-gray-100">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 bg-white border-l border-gray-100 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#990012]" />
                    <div>
                      <h2 className="text-sm font-bold tracking-tight text-gray-900">DIGITAL ASSET DEFENDERS</h2>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-black"
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
                            ? "text-[#990012] bg-[#990012]/5"
                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-sm font-medium">{link.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="mt-8 px-6">
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <h3 className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-3">Support</h3>
                      <div className="space-y-3">
                        <button
                          onClick={handleEmergencyCall}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#990012] transition-colors w-full"
                        >
                          <Phone className="w-4 h-4 text-[#990012]" />
                          <span className="text-sm font-medium">+254 714749513</span>
                        </button>
                        <button
                          onClick={handleEmailContact}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#990012] transition-colors w-full"
                        >
                          <Mail className="w-4 h-4 text-[#990012]" />
                          <span className="text-sm font-medium">Security@digitalassetdefenders.com</span>
                          <ExternalLink className="w-3 h-3 ml-auto" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Security Badges */}
                  <div className="mt-6 px-6">
                    <h3 className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-3">Certifications</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["ISO 27001", "SOC 2", "PCI DSS", "HIPAA"].map((cert) => (
                        <div
                          key={cert}
                          className="flex items-center justify-center p-3 bg-white rounded-xl border border-gray-100"
                        >
                          <Shield className="w-3 h-3 text-[#990012] mr-2" />
                          <span className="text-[10px] font-bold text-gray-600 tracking-tight">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <Button
                    className="w-full bg-[#990012] hover:bg-[#7a000e] text-white rounded-full"
                    onClick={() => scrollToSection("#quote-calculator")}
                  >
                    Get Quote
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
