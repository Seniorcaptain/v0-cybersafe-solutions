"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, ArrowLeft, Building2, DollarSign, AlertCircle, Calendar, CheckCircle } from "lucide-react"
import { useNotifications } from "@/components/notification-system"
import { submitForm, validateEmail, validatePhone, sanitizeInput } from "@/lib/form-utils"

interface FormData {
  industry: string
  companySize: string
  budget: string
  concerns: string
  timeline: string
  contactInfo: {
    name: string
    email: string
    company: string
    phone: string
  }
}

interface FormErrors {
  [key: string]: string
}

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const { addNotification } = useNotifications()

  const [formData, setFormData] = useState<FormData>({
    industry: "",
    companySize: "",
    budget: "",
    concerns: "",
    timeline: "",
    contactInfo: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  })

  const totalSteps = 4

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    switch (step) {
      case 1:
        if (!formData.industry) newErrors.industry = "Please select your industry"
        if (!formData.companySize) newErrors.companySize = "Please select your company size"
        break
      case 2:
        if (!formData.budget) newErrors.budget = "Please select your budget range"
        if (!formData.timeline) newErrors.timeline = "Please select your timeline"
        break
      case 3:
        if (!formData.concerns.trim()) newErrors.concerns = "Please describe your security concerns"
        if (formData.concerns.length < 10) newErrors.concerns = "Please provide more details (minimum 10 characters)"
        break
      case 4:
        if (!formData.contactInfo.name.trim()) newErrors.name = "Name is required"
        if (!formData.contactInfo.email.trim()) newErrors.email = "Email is required"
        else if (!validateEmail(formData.contactInfo.email)) newErrors.email = "Please enter a valid email"
        if (!formData.contactInfo.company.trim()) newErrors.company = "Company name is required"
        if (formData.contactInfo.phone && !validatePhone(formData.contactInfo.phone)) {
          newErrors.phone = "Please enter a valid phone number"
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
        // Add progress notification
        addNotification({
          type: "info",
          title: "Progress Saved",
          message: `Step ${currentStep} completed successfully`,
          duration: 2000,
        })
      }
    } else {
      addNotification({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields correctly",
        duration: 4000,
      })
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({}) // Clear errors when going back
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      addNotification({
        type: "error",
        title: "Validation Error",
        message: "Please fill in all required fields correctly",
        duration: 4000,
      })
      return
    }

    setIsSubmitting(true)

    // Sanitize form data
    const sanitizedData = {
      ...formData,
      concerns: sanitizeInput(formData.concerns),
      contactInfo: {
        ...formData.contactInfo,
        name: sanitizeInput(formData.contactInfo.name),
        company: sanitizeInput(formData.contactInfo.company),
      },
    }

    try {
      const result = await submitForm("/api/onboarding", sanitizedData)

      if (result.success) {
        setIsCompleted(true)
        addNotification({
          type: "success",
          title: "Assessment Scheduled!",
          message: "We will contact you within 24 hours to schedule your consultation.",
          duration: 6000,
        })

        // Track conversion event
        if (typeof window !== "undefined" && (window as any).gtag) {
          ;(window as any).gtag("event", "conversion", {
            send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
            value: 1.0,
            currency: "USD",
          })
        }
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      addNotification({
        type: "error",
        title: "Submission Failed",
        message: "There was an error submitting your form. Please try again or contact us directly.",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string, nested?: string) => {
    if (nested) {
      setFormData((prev) => ({
        ...prev,
        [field]: {
          ...(prev[field as keyof FormData] as any),
          [nested]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }

    // Clear error when user starts typing
    if (errors[nested || field]) {
      setErrors((prev) => ({ ...prev, [nested || field]: "" }))
    }
  }

  if (isCompleted) {
    return (
      <section id="onboarding" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Assessment Request Submitted!</h2>
                <p className="text-xl text-slate-300 mb-6">
                  Thank you for choosing Digital Asset Defenders. Our security experts will review your information and
                  contact you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h3 className="font-semibold text-cyan-400 mb-2">Next Steps</h3>
                  <p className="text-sm text-slate-300">Expert consultation call</p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h3 className="font-semibold text-cyan-400 mb-2">Timeline</h3>
                  <p className="text-sm text-slate-300">Within 24 hours</p>
                </div>
                <div className="p-4 bg-slate-700/50 rounded-lg">
                  <h3 className="font-semibold text-cyan-400 mb-2">What to Expect</h3>
                  <p className="text-sm text-slate-300">Customized security roadmap</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    setIsCompleted(false)
                    setCurrentStep(1)
                    setFormData({
                      industry: "",
                      companySize: "",
                      budget: "",
                      concerns: "",
                      timeline: "",
                      contactInfo: { name: "", email: "", company: "", phone: "" },
                    })
                  }}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  Submit Another Request
                </Button>
                <Button
                  onClick={() => {
                    const element = document.querySelector("#contact")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Contact Us Directly
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="onboarding" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Get Your Free Security Assessment
          </h2>
          <p className="text-xl text-slate-300">Tell us about your organization and we'll tailor our recommendations</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  currentStep >= step ? "bg-cyan-400 border-cyan-400 text-slate-900" : "border-slate-500 text-slate-400"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-semibold text-white">Industry & Company Size</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-white mb-3 block">What industry are you in? *</Label>
                    <RadioGroup
                      value={formData.industry}
                      onValueChange={(value) => handleInputChange("industry", value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      {["Healthcare", "Financial Services", "Technology", "Manufacturing", "Government", "Other"].map(
                        (industry) => (
                          <div key={industry} className="flex items-center space-x-2">
                            <RadioGroupItem value={industry} id={industry} className="border-slate-500" />
                            <Label htmlFor={industry} className="text-slate-300 cursor-pointer">
                              {industry}
                            </Label>
                          </div>
                        ),
                      )}
                    </RadioGroup>
                    {errors.industry && <p className="text-red-400 text-sm mt-2">{errors.industry}</p>}
                  </div>

                  <div>
                    <Label className="text-white mb-3 block">Company Size *</Label>
                    <RadioGroup
                      value={formData.companySize}
                      onValueChange={(value) => handleInputChange("companySize", value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      {["1-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees"].map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <RadioGroupItem value={size} id={size} className="border-slate-500" />
                          <Label htmlFor={size} className="text-slate-300 cursor-pointer">
                            {size}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {errors.companySize && <p className="text-red-400 text-sm mt-2">{errors.companySize}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-semibold text-white">Budget & Timeline</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-white mb-3 block">What's your cybersecurity budget range? *</Label>
                    <RadioGroup
                      value={formData.budget}
                      onValueChange={(value) => handleInputChange("budget", value)}
                      className="space-y-3"
                    >
                      {["Under $10k", "$10k - $50k", "$50k - $200k", "$200k+", "Not sure"].map((budget) => (
                        <div key={budget} className="flex items-center space-x-2">
                          <RadioGroupItem value={budget} id={budget} className="border-slate-500" />
                          <Label htmlFor={budget} className="text-slate-300 cursor-pointer">
                            {budget}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {errors.budget && <p className="text-red-400 text-sm mt-2">{errors.budget}</p>}
                  </div>

                  <div>
                    <Label className="text-white mb-3 block">When do you need to get started? *</Label>
                    <RadioGroup
                      value={formData.timeline}
                      onValueChange={(value) => handleInputChange("timeline", value)}
                      className="space-y-3"
                    >
                      {["Immediately", "Within 1 month", "Within 3 months", "Within 6 months", "Just researching"].map(
                        (time) => (
                          <div key={time} className="flex items-center space-x-2">
                            <RadioGroupItem value={time} id={time} className="border-slate-500" />
                            <Label htmlFor={time} className="text-slate-300 cursor-pointer">
                              {time}
                            </Label>
                          </div>
                        ),
                      )}
                    </RadioGroup>
                    {errors.timeline && <p className="text-red-400 text-sm mt-2">{errors.timeline}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-semibold text-white">Security Concerns</h3>
                </div>

                <div>
                  <Label className="text-white mb-3 block">
                    What are your main cybersecurity concerns or challenges? *
                  </Label>
                  <Textarea
                    value={formData.concerns}
                    onChange={(e) => handleInputChange("concerns", e.target.value)}
                    placeholder="Tell us about any specific security incidents, compliance requirements, or areas where you need help..."
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 min-h-[150px]"
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.concerns && <p className="text-red-400 text-sm">{errors.concerns}</p>}
                    <p className="text-slate-500 text-sm ml-auto">{formData.concerns.length}/500</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white mb-2 block">Full Name *</Label>
                    <Input
                      value={formData.contactInfo.name}
                      onChange={(e) => handleInputChange("contactInfo", e.target.value, "name")}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label className="text-white mb-2 block">Email Address *</Label>
                    <Input
                      type="email"
                      value={formData.contactInfo.email}
                      onChange={(e) => handleInputChange("contactInfo", e.target.value, "email")}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label className="text-white mb-2 block">Company Name *</Label>
                    <Input
                      value={formData.contactInfo.company}
                      onChange={(e) => handleInputChange("contactInfo", e.target.value, "company")}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="Acme Corp"
                    />
                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <Label className="text-white mb-2 block">Phone Number</Label>
                    <Input
                      value={formData.contactInfo.phone}
                      onChange={(e) => handleInputChange("contactInfo", e.target.value, "phone")}
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Schedule Consultation
                      <Calendar className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
