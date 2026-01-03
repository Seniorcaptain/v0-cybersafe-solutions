"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, DollarSign, CheckCircle, Download, Mail } from "lucide-react"
import { useNotifications } from "@/components/notification-system"

const servicePricing = {
  "penetration-testing": { base: 600000, multiplier: 1.5 },
  "compliance-audit": { base: 960000, multiplier: 1.8 },
  "soc-service": { base: 1440000, multiplier: 2.0 },
  "incident-response": { base: 1800000, multiplier: 1.2 },
  "cloud-security": { base: 1200000, multiplier: 1.6 },
  "virtual-ciso": { base: 2400000, multiplier: 2.5 },
}

const sizeMultipliers = {
  small: 1.0,
  medium: 1.5,
  large: 2.0,
  enterprise: 3.0,
}

export default function QuoteCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [companySize, setCompanySize] = useState("")
  const [urgency, setUrgency] = useState("")
  const [showQuote, setShowQuote] = useState(false)
  const [isGeneratingProposal, setIsGeneratingProposal] = useState(false)
  const { addNotification } = useNotifications()

  const services = [
    { id: "penetration-testing", name: "Penetration Testing", description: "Comprehensive security assessment" },
    { id: "compliance-audit", name: "Compliance Audit", description: "ISO 27001, GDPR, HIPAA compliance" },
    { id: "soc-service", name: "SOC-as-a-Service", description: "24/7 security monitoring" },
    { id: "incident-response", name: "Incident Response", description: "Emergency breach response" },
    { id: "cloud-security", name: "Cloud Security", description: "AWS, Azure, GCP security" },
    { id: "virtual-ciso", name: "Virtual CISO", description: "Fractional security leadership" },
  ]

  const calculateQuote = () => {
    if (!companySize || selectedServices.length === 0) return 0

    const basePrice = selectedServices.reduce((total, serviceId) => {
      const service = servicePricing[serviceId as keyof typeof servicePricing]
      return total + service.base * service.multiplier
    }, 0)

    const sizeMultiplier = sizeMultipliers[companySize as keyof typeof sizeMultipliers]
    const urgencyMultiplier = urgency === "urgent" ? 1.3 : 1.0

    return Math.round(basePrice * sizeMultiplier * urgencyMultiplier)
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId])
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId))
    }
  }

  const handleCalculate = () => {
    if (!companySize || selectedServices.length === 0) {
      addNotification({
        type: "warning",
        title: "Missing Information",
        message: "Please select at least one service and company size to calculate your quote.",
        duration: 4000,
      })
      return
    }

    setShowQuote(true)
    addNotification({
      type: "success",
      title: "Quote Generated",
      message: "Your estimated quote has been calculated based on your selections.",
      duration: 3000,
    })

    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "generate_quote", {
        event_category: "engagement",
        event_label: selectedServices.join(","),
        value: calculateQuote(),
      })
    }
  }

  const handleGetProposal = async () => {
    setIsGeneratingProposal(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      addNotification({
        type: "success",
        title: "Proposal Generated",
        message: "Your detailed proposal has been generated. Check your downloads folder.",
        duration: 5000,
      })

      const proposalData = {
        services: selectedServices,
        companySize,
        urgency,
        quote: calculateQuote(),
        currency: "KES",
        timestamp: new Date().toISOString(),
      }

      console.log("Proposal data:", proposalData)
    } catch (error) {
      addNotification({
        type: "error",
        title: "Generation Failed",
        message: "There was an error generating your proposal. Please try again.",
        duration: 4000,
      })
    } finally {
      setIsGeneratingProposal(false)
    }
  }

  const handleEmailQuote = () => {
    const quote = calculateQuote()
    const serviceNames = selectedServices.map((id) => services.find((s) => s.id === id)?.name).join(", ")

    const subject = encodeURIComponent("Cybersecurity Quote Request")
    const body = encodeURIComponent(
      `Hello,\n\nI'm interested in getting a detailed quote for the following services:\n\n` +
        `Services: ${serviceNames}\n` +
        `Company Size: ${companySize}\n` +
        `Timeline: ${urgency || "standard"}\n` +
        `Estimated Quote: KES ${quote.toLocaleString()}\n\n` +
        `Please provide a detailed proposal.\n\nThank you!`,
    )

    window.location.href = `mailto:hello@digitalassetdefenders.com?subject=${subject}&body=${body}`
  }

  const quote = calculateQuote()

  return (
    <section id="quote-calculator" className="py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Get Instant Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate estimated pricing for your cybersecurity needs in Kenyan Shillings (KES)
          </p>
        </div>

        <Card className="bg-white border-red-200">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-red-600" />
              Security Services Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Services Selection */}
            <div>
              <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                Select Services (choose all that apply)
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                      selectedServices.includes(service.id)
                        ? "bg-red-500/10 border-red-400/50"
                        : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleServiceChange(service.id, !selectedServices.includes(service.id))}
                  >
                    <Checkbox
                      id={service.id}
                      checked={selectedServices.includes(service.id)}
                      onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label htmlFor={service.id} className="text-gray-900 font-medium cursor-pointer">
                        {service.name}
                      </Label>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Size */}
            <div>
              <Label className="text-lg font-semibold text-gray-900 mb-4 block">Company Size</Label>
              <RadioGroup value={companySize} onValueChange={setCompanySize}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: "small", label: "Small (1-50 employees)", desc: "Startups and small businesses" },
                    { value: "medium", label: "Medium (51-200 employees)", desc: "Growing companies" },
                    { value: "large", label: "Large (201-1000 employees)", desc: "Established enterprises" },
                    { value: "enterprise", label: "Enterprise (1000+ employees)", desc: "Large corporations" },
                  ].map((size) => (
                    <div
                      key={size.value}
                      className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                        companySize === size.value
                          ? "bg-red-500/10 border-red-400/50"
                          : "bg-gray-50 border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setCompanySize(size.value)}
                    >
                      <RadioGroupItem value={size.value} id={size.value} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={size.value} className="text-gray-900 font-medium cursor-pointer">
                          {size.label}
                        </Label>
                        <p className="text-gray-600 text-sm mt-1">{size.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Urgency */}
            <div>
              <Label className="text-lg font-semibold text-gray-900 mb-4 block">Timeline</Label>
              <RadioGroup value={urgency} onValueChange={setUrgency}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                      urgency === "standard"
                        ? "bg-red-500/10 border-red-400/50"
                        : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setUrgency("standard")}
                  >
                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="standard" className="text-gray-900 font-medium cursor-pointer">
                        Standard (2-4 weeks)
                      </Label>
                      <p className="text-gray-600 text-sm mt-1">Regular timeline</p>
                    </div>
                  </div>
                  <div
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                      urgency === "urgent"
                        ? "bg-red-500/10 border-red-400/50"
                        : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setUrgency("urgent")}
                  >
                    <RadioGroupItem value="urgent" id="urgent" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="urgent" className="text-gray-900 font-medium cursor-pointer">
                        Urgent (1-2 weeks)
                      </Label>
                      <p className="text-gray-600 text-sm mt-1">Rush delivery (+30%)</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Calculate Button */}
            <div className="text-center">
              <Button
                onClick={handleCalculate}
                disabled={!companySize || selectedServices.length === 0}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg disabled:opacity-50"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Quote
              </Button>
            </div>

            {/* Quote Results */}
            {showQuote && quote > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-400/30 animate-in">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <DollarSign className="w-8 h-8 text-red-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Estimated Quote</h3>
                  </div>

                  <div className="text-4xl font-bold text-red-600 mb-4">KES {quote.toLocaleString()}</div>

                  <p className="text-gray-700 mb-6">
                    This is an estimated quote based on your selections. Final pricing may vary based on specific
                    requirements.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700">Free consultation included</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700">30-day money-back guarantee</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-700">24/7 support included</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleGetProposal}
                      disabled={isGeneratingProposal}
                      className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
                    >
                      {isGeneratingProposal ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Generating...
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Get Detailed Proposal
                        </>
                      )}
                    </Button>

                    <Button
                      onClick={handleEmailQuote}
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-50 bg-white"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Quote
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
