import { useState, useEffect, useRef } from 'react'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { 
  sanitizeInput, 
  checkRateLimit, 
  checkFormTiming,
  generateHoneypotName,
  validateHoneypot
} from '../utils/formSecurity'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })
  const [honeypot, setHoneypot] = useState('')
  const honeypotName = useRef(generateHoneypotName())
  const formStartTime = useRef(Date.now())

  useEffect(() => {
    // Reset form start time when component mounts
    formStartTime.current = Date.now()
  }, [])

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult('')

    // Rate limiting check
    const rateLimit = checkRateLimit('contact', 3, 15)
    if (!rateLimit.allowed) {
      setResult(rateLimit.message)
      setIsSubmitting(false)
      return
    }

    // Form timing check (minimum 5 seconds)
    const timingCheck = checkFormTiming(formStartTime.current, 5)
    if (!timingCheck.allowed) {
      setResult(timingCheck.message)
      setIsSubmitting(false)
      return
    }

    // Honeypot validation
    if (!validateHoneypot(honeypot)) {
      setResult('Submission failed. Please try again.')
      setIsSubmitting(false)
      return
    }

    const formData = new FormData(e.target)
    formData.append('access_key', import.meta.env.VITE_FORM_API)
    formData.append('subject', 'New Contact Form Submission')
    formData.append('botcheck', '')

    try {
      const response = await fetch(import.meta.env.VITE_FORM_API_URL, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      if (data.success) {
        setResult('Thank you for reaching out! We will get back to you soon.')
        setFormData({ name: '', email: '', organization: '', message: '' })
        setHoneypot('')
        formStartTime.current = Date.now() // Reset timer for next submission
      } else {
        const errorMsg = data.message || 'Something went wrong. Please try again.'
        setResult(sanitizeInput(errorMsg))
      }
    } catch {
      setResult('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Contact Hero */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg">Let's Create Opportunities Together – Reach Out Today!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-textcolor-100">Get In Touch</h2>
              {result && (
                <div className={`p-4 rounded-lg ${result.includes('Thank you') ? 'bg-green-50 border border-green-200 text-green-700' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                  {result}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                  <input
                    type="text"
                    name={honeypotName.current}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                    required
                    minLength="2"
                    maxLength="100"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-textcolor-100">Message</label>
                  <textarea
                    name="message"
                    placeholder='Your message here...'
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-bordercolor-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none"
                    required
                    minLength="10"
                    maxLength="1000"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-secondary-orange hover:bg-secondary-hover-100 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-textcolor-100">Our Location</h2>
              
              <div className="mb-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.55383056382!2d29.96243184589952!3d-1.9297626222122253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fbe52f740ac8675%3A0x7507ca3114e24395!2sCAREER%20ACCESS%20GROUP!5e0!3m2!1sen!2srw!4v1766349368186!5m2!1sen!2srw" width="100%" height="450" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="p-6 bg-primary-dark text-white rounded-lg text-center">
                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-primary-medium rounded-full flex items-center justify-center hover:bg-secondary-orange transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-medium rounded-full flex items-center justify-center hover:bg-secondary-orange transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-medium rounded-full flex items-center justify-center hover:bg-secondary-orange transition-colors">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
