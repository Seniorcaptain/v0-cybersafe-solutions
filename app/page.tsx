import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import OnboardingFlow from "@/components/onboarding-flow"
import CaseStudies from "@/components/case-studies"
import TeamSection from "@/components/team-section"
import ThreatFeed from "@/components/threat-feed"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blog-section"
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
        <ServicesSection />
        <OnboardingFlow />
        <CaseStudies />
        <TeamSection />
        <ThreatFeed />
        <Testimonials />
        <BlogSection />
        <QuoteCalculator />
        <ContactSection />
      </div>
    </NotificationProvider>
  )
}
