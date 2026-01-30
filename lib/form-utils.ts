export interface FormSubmissionResult {
  success: boolean
  message: string
  data?: any
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-$$$$]/g, ""))
}

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
}

export const submitForm = async (endpoint: string, data: Record<string, any>): Promise<FormSubmissionResult> => {
  try {
    // Simulate API call with realistic delay
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000))

    // Simulate occasional failures for testing
    if (Math.random() < 0.05) {
      throw new Error("Network error")
    }

    // Log form submission for debugging
    console.log(`Form submitted to ${endpoint}:`, data)

    // Prepare email content
    const emailSubject = encodeURIComponent(data.subject || "New Contact Form Submission")
    const emailBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nPhone: ${data.phone}\n\nMessage:\n${data.message}\n\nEncryption Requested: ${data.encrypted ? "Yes" : "No"}`
    )

    // Send email to Security@digitalassetdefenders.com
    const mailtoLink = `mailto:Security@digitalassetdefenders.com?subject=${emailSubject}&body=${emailBody}`
    if (typeof window !== "undefined") {
      window.location.href = mailtoLink
    }

    return {
      success: true,
      message: "Form submitted successfully! We will contact you within 2 hours.",
      data: { submissionId: `DAD-${Date.now()}`, recipient: "Security@digitalassetdefenders.com" },
    }
  } catch (error) {
    return {
      success: false,
      message: "There was an error submitting your form. Please try again or contact us directly.",
    }
  }
}
