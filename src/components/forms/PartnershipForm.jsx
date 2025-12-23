import React, { useState } from 'react'
import Button from '../common/Button'

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    emailAddress: '',
    partnershipType: 'Educational Institution',
    partnershipGoals: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear messages when user starts editing
    setSubmitMessage('')
    setSubmitError('')
  }

  const validateForm = () => {
    if (!formData.organizationName.trim()) {
      setSubmitError('Organization name is required')
      return false
    }
    if (!formData.contactPerson.trim()) {
      setSubmitError('Contact person name is required')
      return false
    }
    if (!formData.emailAddress.trim()) {
      setSubmitError('Email address is required')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.emailAddress)) {
      setSubmitError('Please enter a valid email address')
      return false
    }
    if (!formData.partnershipGoals.trim()) {
      setSubmitError('Partnership goals are required')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitMessage('')

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Send form data to backend or email service
      // For now, we'll log it and show success message
      console.log('Partnership form submitted:', formData)
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitMessage('Thank you! We received your partnership inquiry. Our team will contact you shortly.')
      
      // Reset form after successful submission
      setFormData({
        organizationName: '',
        contactPerson: '',
        emailAddress: '',
        partnershipType: 'Educational Institution',
        partnershipGoals: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('An error occurred while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-primary-light" id="partnership-form">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-white text-base leading-relaxed max-w-3xl mx-auto">
            Ready to explore how a partnership with CAREER ACCESS GROUP can create mutual value while driving meaningful impact? Let's start the conversation about building a collaboration that benefits your organization and empowers the next generation of African talent.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitMessage && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg" role="alert">
                {submitMessage}
              </div>
            )}

            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg" role="alert">
                {submitError}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-textcolor-100 mb-2">
                  Organization Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="organizationName"
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  placeholder="Your organization name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-textcolor-100 mb-2">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactPerson"
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-textcolor-100 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-medium text-textcolor-100 mb-2">
                  Partnership Type
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  disabled={isSubmitting}
                >
                  <option value="Educational Institution">Educational Institution</option>
                  <option value="Corporation & Business">Corporation & Business</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Development Organization">Development Organization</option>
                  <option value="Foundation & Philanthropist">Foundation & Philanthropist</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="partnershipGoals" className="block text-sm font-medium text-textcolor-100 mb-2">
                Partnership Goals & Interests <span className="text-red-500">*</span>
              </label>
              <textarea
                id="partnershipGoals"
                name="partnershipGoals"
                value={formData.partnershipGoals}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your organization's goals and how you envision partnering with us..."
                className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-secondary-orange hover:bg-secondary-hover-100 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-full text-white font-semibold text-md transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule a Partnership Discussion'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PartnershipForm