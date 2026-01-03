"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Shield, Send, CheckCircle } from "lucide-react"
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
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to secure your organization? Contact our cybersecurity experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Headquarters</p>
                    <p className="text-slate-400">14th Floor GTC, </p>
                  </div>
                </div>

                <button
                  onClick={handlePhoneCall}
                  className="flex items-center gap-3 w-full text-left hover:bg-slate-700/50 p-2 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-400 hover:text-cyan-400 transition-colors">+254 (714) 749-513</p>
                  </div>
                </button>

                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 w-full text-left hover:bg-slate-700/50 p-2 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-400 hover:text-cyan-400 transition-colors">
                      hello@digitalassetdefenders.com
                    </p>
                  </div>
                </button>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Response Time</p>
                    <p className="text-slate-400">Within 2 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Badges */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Security Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "ISO 27001", desc: "Information Security" },
                    { name: "SOC 2 Type II", desc: "Service Organization" },
                    { name: "PCI DSS", desc: "Payment Card Industry" },
                    { name: "HIPAA", desc: "Healthcare Compliance" },
                  ].map((cert) => (
                    <div
                      key={cert.name}
                      className="text-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-slate-300">{cert.name}</p>
                      <p className="text-xs text-slate-500">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Secure Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-300">Thank you for contacting us. We'll get back to you within 2 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-white mb-2 block">Full Name *</Label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <Label className="text-white mb-2 block">Email Address *</Label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label className="text-white mb-2 block">Company</Label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                          placeholder="Acme Corporation"
                        />
                      </div>

                      <div>
                        <Label className="text-white mb-2 block">Phone</Label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                          placeholder="+1 (555) 123-4567"
                        />
                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Subject</Label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                        placeholder="Security consultation request"
                      />
                    </div>

                    <div>
                      <Label className="text-white mb-2 block">Message *</Label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-slate-700 border-slate-600 text-white focus:border-cyan-400"
                        placeholder="Tell us about your security needs, current challenges, or any specific requirements..."
                      />
                      <div className="flex justify-between items-center mt-2">
                        {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                        <p className="text-slate-500 text-sm ml-auto">{formData.message.length}/1000</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="encrypted"
                          checked={formData.encrypted}
                          onCheckedChange={(checked) => handleCheckboxChange("encrypted", checked as boolean)}
                        />
                        <Label htmlFor="encrypted" className="text-slate-300 text-sm cursor-pointer">
                          This message contains sensitive information and should be encrypted
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleCheckboxChange("newsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-slate-300 text-sm cursor-pointer">
                          Subscribe to our cybersecurity newsletter and threat alerts
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Secure Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Secure Message
                        </>
                      )}
                    </Button>

                    <p className="text-slate-400 text-sm text-center">
                      Your message is protected by 256-bit SSL encryption and our privacy policy.
                    </p>
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
