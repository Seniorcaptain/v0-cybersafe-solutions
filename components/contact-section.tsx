"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Shield, Send, CheckCircle } from "lucide-react"
import { useNotifications } from "@/components/notification-system"
import { submitForm, validateEmail, validatePhone, sanitizeInput } from "@/lib/form-utils"

interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  encrypted: boolean
  newsletter: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    encrypted: false,
    newsletter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const { addNotification } = useNotifications()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters"

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
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
      name: sanitizeInput(formData.name),
      company: sanitizeInput(formData.company),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    }

    try {
      const result = await submitForm("/api/contact", sanitizedData)

      if (result.success) {
        setIsSubmitted(true)
        addNotification({
          type: "success",
          title: "Message Sent!",
          message: "Thank you for contacting us. We will get back to you within 2 hours.",
          duration: 6000,
        })

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: "",
            encrypted: false,
            newsletter: false,
          })
        }, 3000)
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      addNotification({
        type: "error",
        title: "Submission Failed",
        message: "There was an error sending your message. Please try again or call us directly.",
        duration: 6000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handlePhoneCall = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:+254714749513"
    }
  }

  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:hello@digitalassetdefenders.com"
    }
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#990012] tracking-tight">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to secure your organization? Contact our cybersecurity experts today for a confidential consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-900 border-b border-slate-100 pb-4">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-[#990012]/5 rounded-full">
                    <MapPin className="w-5 h-5 text-[#990012]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Headquarters</p>
                    <p className="text-slate-600">14th Floor GTC, Nairobi</p>
                  </div>
                </div>

                <button onClick={handlePhoneCall} className="flex items-start gap-4 w-full text-left group">
                  <div className="mt-1 p-2 bg-[#990012]/5 rounded-full group-hover:bg-[#990012]/10 transition-colors">
                    <Phone className="w-5 h-5 text-[#990012]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Phone</p>
                    <p className="text-slate-600 group-hover:text-[#990012] transition-colors">+254 (714) 749-513</p>
                  </div>
                </button>

                <button onClick={handleEmailClick} className="flex items-start gap-4 w-full text-left group">
                  <div className="mt-1 p-2 bg-[#990012]/5 rounded-full group-hover:bg-[#990012]/10 transition-colors">
                    <Mail className="w-5 h-5 text-[#990012]" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Email</p>
                    <p className="text-slate-600 group-hover:text-[#990012] transition-colors">
                      hello@digitalassetdefenders.com
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 border-b border-slate-100 pb-4">Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "ISO 27001", desc: "Security" },
                  { name: "SOC 2 Type II", desc: "Audit" },
                  { name: "PCI DSS", desc: "Payments" },
                  { name: "HIPAA", desc: "Healthcare" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 border border-slate-100 rounded-xl hover:border-[#990012]/20 transition-all text-center"
                  >
                    <Shield className="w-6 h-6 text-[#990012] mx-auto mb-2 opacity-80" />
                    <p className="text-sm font-semibold text-slate-900">{cert.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{cert.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white p-8">
              <CardContent className="p-0">
                {isSubmitted ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Message Sent</h3>
                    <p className="text-slate-600 text-lg">Thank you. Our specialists will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium ml-1">Full Name</Label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-slate-200 focus:border-[#990012] focus:ring-[#990012]/20 h-12 rounded-lg"
                          placeholder="Name"
                        />
                        {errors.name && <p className="text-[#990012] text-xs mt-1">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium ml-1">Email Address</Label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-slate-200 focus:border-[#990012] focus:ring-[#990012]/20 h-12 rounded-lg"
                          placeholder="email@company.com"
                        />
                        {errors.email && <p className="text-[#990012] text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium ml-1">Company</Label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-[#990012] focus:ring-[#990012]/20 h-12 rounded-lg"
                          placeholder="Company"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-900 font-medium ml-1">Phone</Label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-slate-200 focus:border-[#990012] focus:ring-[#990012]/20 h-12 rounded-lg"
                          placeholder="+254..."
                        />
                        {errors.phone && <p className="text-[#990012] text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-slate-900 font-medium ml-1">Message</Label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-slate-200 focus:border-[#990012] focus:ring-[#990012]/20 rounded-lg resize-none"
                        placeholder="Tell us about your security needs..."
                      />
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center space-x-3 group">
                        <Checkbox
                          id="encrypted"
                          checked={formData.encrypted}
                          onCheckedChange={(checked) => handleCheckboxChange("encrypted", checked as boolean)}
                          className="data-[state=checked]:bg-[#990012] data-[state=checked]:border-[#990012]"
                        />
                        <Label htmlFor="encrypted" className="text-slate-600 text-sm cursor-pointer select-none">
                          Request end-to-end encrypted communication for this request
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#990012] hover:bg-[#7a000e] text-white py-6 rounded-lg text-lg font-semibold transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Establishing Secure Connection...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-slate-400 text-xs mt-6">
                      <Shield className="w-3 h-3" />
                      Protected by 256-bit SSL encryption
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
