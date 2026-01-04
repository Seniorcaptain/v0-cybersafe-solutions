"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Download, Mail, Tag, Info } from "lucide-react"
import { useNotifications } from "@/components/notification-system"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const servicePricing = {
  "penetration-testing": { base: 650000, description: "External & Internal Infra" },
  "compliance-audit": { base: 1100000, description: "Standard Frameworks" },
  "soc-service": { base: 1500000, description: "Monthly 24/7 Monitoring" },
  "incident-response": { base: 1850000, description: "Crisis Management" },
  "cloud-security": { base: 1300000, description: "Multi-cloud Posture" },
  "virtual-ciso": { base: 2600000, description: "Strategy & Advisory" },
}

const sizeMultipliers = {
  small: 1.0,
  medium: 1.45,
  large: 1.9,
  enterprise: 2.8,
}

const getApplicableDiscounts = (selectedServices: string[], companySize: string) => {
  const discounts = []

  // Volume Discount: 3+ services
  if (selectedServices.length >= 3) {
    discounts.push({ name: "Multi-Service Bundle", rate: 0.15, reason: "3+ services selected" })
  }

  // Loyalty/Promotional: Enterprise scale
  if (companySize === "enterprise") {
    discounts.push({ name: "Strategic Partnership", rate: 0.1, reason: "Enterprise-wide coverage" })
  }

  // Limited time promotion
  discounts.push({ name: "New Client Launch", rate: 0.05, reason: "First-year engagement" })

  return discounts
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
    if (!companySize || selectedServices.length === 0) return { subtotal: 0, total: 0, discountsApplied: [] }

    const subtotal = selectedServices.reduce((total, serviceId) => {
      const service = servicePricing[serviceId as keyof typeof servicePricing]
      return total + service.base
    }, 0)

    const sizeMultiplier = sizeMultipliers[companySize as keyof typeof sizeMultipliers]
    const urgencyMultiplier = urgency === "urgent" ? 1.3 : 1.0

    const baseTotal = subtotal * sizeMultiplier * urgencyMultiplier

    const discountsApplied = getApplicableDiscounts(selectedServices, companySize)
    const totalDiscountRate = discountsApplied.reduce((sum, d) => sum + d.rate, 0)
    const discountAmount = baseTotal * totalDiscountRate

    return {
      subtotal: Math.round(baseTotal),
      total: Math.round(baseTotal - discountAmount),
      discountsApplied,
      discountAmount: Math.round(discountAmount),
    }
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
        value: calculateQuote().total,
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
        message: "Your detailed proposal has been generated with all discounts applied.",
        duration: 5000,
      })

      const { total, discountsApplied } = calculateQuote()
      const proposalData = {
        services: selectedServices,
        companySize,
        urgency,
        quote: total,
        discounts: discountsApplied,
        currency: "KES",
        timestamp: new Date().toISOString(),
      }

      console.log("[v0] Proposal data generated:", proposalData)
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
    const { total, discountsApplied } = calculateQuote()
    const serviceNames = selectedServices.map((id) => services.find((s) => s.id === id)?.name).join(", ")
    const discountText = discountsApplied.map((d) => `${d.name} (${d.rate * 100}%)`).join(", ")

    const subject = encodeURIComponent("Cybersecurity Quote Request - Digital Asset Defenders")
    const body = encodeURIComponent(
      `Hello,\n\nI've generated a quote for the following cybersecurity project:\n\n` +
        `Services: ${serviceNames}\n` +
        `Company Size: ${companySize}\n` +
        `Discounts Applied: ${discountText || "None"}\n` +
        `Final Estimated Quote: KES ${total.toLocaleString()}\n\n` +
        `Please reach out to discuss the implementation details.\n\nThank you!`,
    )

    window.location.href = `mailto:hello@digitalassetdefenders.com?subject=${subject}&body=${body}`
  }

  const { subtotal, total, discountsApplied, discountAmount } = calculateQuote()

  return (
    <section id="quote-calculator" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-black">Transparent Pricing</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Instant, industry-standard estimations tailored to your project scale and complexity.
          </p>
        </div>

        <Card className="bg-white border-0 shadow-2xl shadow-black/5 overflow-hidden rounded-3xl">
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
            {showQuote && total > 0 && (
              <div className="mt-12 p-10 bg-[#990012]/[0.02] rounded-2xl border border-[#990012]/10 animate-in fade-in slide-in-from-bottom-4">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="text-gray-500 font-medium">Standard Project Base</span>
                    <span className="text-gray-900 font-semibold">KES {subtotal.toLocaleString()}</span>
                  </div>

                  {discountsApplied.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-[#990012] font-semibold text-sm uppercase tracking-wider">
                        <Tag className="w-4 h-4" />
                        Applied Savings
                      </div>
                      {discountsApplied.map((discount, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            {discount.name}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-3.5 h-3.5 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{discount.reason}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <span className="text-green-600 font-medium">-{discount.rate * 100}%</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between pt-2 text-green-700 font-bold border-t border-gray-100/50">
                        <span>Total Savings</span>
                        <span>-KES {discountAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-6 text-center border-t border-gray-100">
                    <div className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-2">Final Estimated Total</div>
                    <div className="text-6xl font-bold text-black tracking-tighter mb-8">
                      KES {total.toLocaleString()}
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
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
