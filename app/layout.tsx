import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enterprise Cybersecurity & Compliance | PCI DSS | ISO 27001 | Digital Asset Defenders",
  description:
    "Global cybersecurity consultancy specializing in PCI DSS, ISO 27001, Kenya DPA, and regulatory compliance. Penetration testing, security audits, and threat intelligence for fintechs, banks, healthcare, and regulated enterprises worldwide.",
  keywords:
    "cybersecurity consultant, penetration testing, PCI DSS compliance, ISO 27001 certification, data protection, security audit, threat intelligence, compliance consulting, fintech security, Kenya cybersecurity, East Africa security",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalassetdefenders.com",
    title: "Enterprise Cybersecurity & Regulatory Compliance Solutions",
    description:
      "Premium cybersecurity services for regulated enterprises. PCI DSS, ISO 27001, Kenya DPA compliance. Pentesting, audits, and continuous threat intelligence.",
    siteName: "Digital Asset Defenders",
  },
  alternates: {
    canonical: "https://digitalassetdefenders.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        
        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "XXXXXXXXXX");
            `,
          }}
        />

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Digital Asset Defenders",
              image: "https://digitalassetdefenders.com/icon.svg",
              description:
                "Enterprise cybersecurity consultancy specializing in PCI DSS, ISO 27001, and Kenya DPA compliance",
              url: "https://digitalassetdefenders.com",
              telephone: "+254714749513",
              email: "Security@digitalassetdefenders.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "GTC, Westlands",
                addressLocality: "Nairobi",
                addressRegion: "Nairobi County",
                postalCode: "00100",
                addressCountry: "KE",
              },
              areaServed: ["KE", "UG", "TZ", "RW", "GB", "US", "DE", "SG", "AU"],
              priceRange: "$$",
              knowsAbout: [
                "Penetration Testing",
                "Security Audits",
                "ISO 27001 Compliance",
                "PCI DSS Compliance",
                "Threat Intelligence",
                "Incident Response",
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digital Asset Defenders",
              url: "https://digitalassetdefenders.com",
              logo: "https://digitalassetdefenders.com/icon.svg",
              sameAs: [
                "https://linkedin.com/company/digital-asset-defenders",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+254714749513",
                email: "Security@digitalassetdefenders.com",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
