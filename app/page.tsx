import HeroSection from "@/components/hero-section"
import ServicesGrid from "@/components/services-grid"
import ThreatFeed from "@/components/threat-feed"
import QuoteCalculator from "@/components/quote-calculator"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import { NotificationProvider } from "@/components/notification-system"

export default function Home() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-white text-gray-900">
        <Navigation />
        <HeroSection />
        <ServicesGrid />
        <ThreatFeed />
        <QuoteCalculator />
        <ContactSection />
      </div>
    </NotificationProvider>
  )
}
