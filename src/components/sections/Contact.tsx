'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

const painCategories = [
  'Back Pain',
  'Neck Pain',
  'Joint Pain',
  'Sports Injury',
  'Post-Surgery Rehabilitation',
  'Muscle Strain',
  'Arthritis',
  'Neurological Conditions',
  'Other',
]

const preferredTimings = [
  'Morning (9 AM - 12 PM)',
  'Afternoon (12 PM - 4 PM)',
  'Evening (4 PM - 8 PM)',
]

const serviceTypes = ['In-Clinic Visit', 'Home Visit', 'Virtual Consultation']

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    painCategory: '',
    serviceType: '',
    message: '',
    previousPhysio: 'no',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://kinesphere.com/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit inquiry')
      }

      toast.success('Your inquiry has been submitted successfully! We will contact you soon.')
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        age: '',
        painCategory: '',
        serviceType: '',
        message: '',
        previousPhysio: 'no',
      })
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again later.')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Get in Touch</h2>
          <p className="text-base md:text-lg text-gray-300">
            Ready to start your journey to better movement and health? Fill out the form below and
            our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                  Age (Optional)
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="1"
                  max="120"
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Your age"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Your email address"
                />
              </div>
            </div>

            {/* Treatment Related Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="painCategory"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Type of Pain/Condition *
                </label>
                <select
                  id="painCategory"
                  name="painCategory"
                  value={formData.painCategory}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                >
                  <option value="">Select pain category</option>
                  {painCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <label htmlFor="previousPhysio" className="text-sm font-medium text-gray-300">
                    Previous Physiotherapy? *
                  </label>
                  <div className="group relative">
                    <svg
                      className="w-4 h-4 text-gray-400 cursor-help"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-dark-300 text-xs text-gray-300 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      Let us know if you have received physiotherapy treatment before, so we can
                      better understand your medical history.
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="previousPhysio"
                      value="yes"
                      checked={formData.previousPhysio === 'yes'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-300">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="previousPhysio"
                      value="no"
                      checked={formData.previousPhysio === 'no'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-300">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Service Preferences */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Service Type *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              >
                <option value="">Select service type</option>
                {serviceTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="Please provide any additional details about your condition or specific requirements"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>

            <p className="text-sm text-gray-400 text-center mt-4">* Required fields</p>
          </form>
        </div>
      </div>
    </section>
  )
}
