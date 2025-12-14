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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Partnership form submitted:', formData)
  }

  return (
    <section className="py-20 bg-primary-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
            Ready to explore how a partnership with CAREER ACCESS GROUP can create mutual value while driving meaningful impact? Let's start the conversation about building a collaboration that benefits your organization and empowers the next generation of African talent.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-textcolor-100 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-textcolor-100 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-textcolor-100 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-textcolor-100 mb-2">
                  Partnership Type
                </label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
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
              <label className="block text-sm font-medium text-textcolor-100 mb-2">
                Partnership Goals & Interests
              </label>
              <textarea
                name="partnershipGoals"
                value={formData.partnershipGoals}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your organization's goals and how you envision partnering with us..."
                className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none"
                required
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-4 rounded-full text-white font-semibold text-lg transition-colors"
              >
                Schedule a Partnership Discussion
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PartnershipForm