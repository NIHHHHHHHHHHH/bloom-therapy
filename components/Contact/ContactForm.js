'use client'

import { useState } from 'react'
import AnimatedDiv from '@/components/Resuable/AnimatedDiv'
import Button from '@/components/Resuable/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [status, setStatus] = useState('') // 'success', 'error', or ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="bg-secondary py-16 lg:py-24 px-6 lg:px-14 xl:px-20 2xl:px-24">
      <div className="max-w-3xl mx-auto">
        
        <AnimatedDiv className="mb-8">
          <h2 className="text-xl xs:text-3xl lg:text-4xl font-medium text-foreground text-center mb-4">
            Send Me a Message
          </h2>
          <p className="text-base lg:text-lg text-foreground text-center">
            I typically respond within 24-48 hours
          </p>
        </AnimatedDiv>

        <AnimatedDiv delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-base xs:text-lg font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-icon focus:border-transparent text-foreground"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base xs:text-lg font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-primary border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-icon focus:border-transparent text-foreground"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-base xs:text-lg font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-icon focus:border-transparent text-foreground"
                placeholder="(310) 555-1234"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-base xs:text-lg font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 bg-primary border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-icon focus:border-transparent text-foreground resize-none"
                placeholder="Tell me a bit about what brings you to therapy and what you're hoping to work on..."
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="p-4 bg-icon/10 border border-icon rounded-lg text-foreground">
                Thank you for reaching out! I'll get back to you within 24-48 hours.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Something went wrong. Please try again or contact me directly via email.
              </div>
            )}

            {/* Submit Button */}
            <Button fullWidth className="border!">
              Send Message
            </Button>

          </form>
        </AnimatedDiv>

      </div>
    </section>
  )
}