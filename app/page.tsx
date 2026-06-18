import HeroSection from "@/components/hero-section"
import LeadMagnetSection from "@/components/lead-magnet-section"
import ServicesGrid from "@/components/services-grid"
import TrustSection from "@/components/trust-section"
import ThreatFeed from "@/components/threat-feed"
import CTASection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import { NotificationProvider } from "@/components/notification-system"

export default function Home() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <HeroSection />
        <LeadMagnetSection />
        <ServicesGrid />
        <TrustSection />
        <ThreatFeed />
        <CTASection />
        <ContactSection />
      </div>
    </NotificationProvider>
  )
}
