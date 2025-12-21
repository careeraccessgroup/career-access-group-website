
import { useState } from 'react';
import { Award, Users, GraduationCap, Briefcase, Target, BookOpen, FileText, Globe, User, Phone, Mail, Building2 } from 'lucide-react';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    service: '',
    company: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.service.trim()) newErrors.service = 'Service interest is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
    setErrors(newErrors);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="min-h-screen bg-bgcolor-100">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-dark to-primary-medium text-textcolor-300 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-bold mb-6 animate-fade-in-up">Comprehensive Service Portfolio</h1>
          <p className="text-base max-w-3xl mx-auto animate-fade-in-up-delay-1">
            End-to-End Career Lifecycle Support from High School to Corporate Success
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary-dark mb-12 text-center animate-fade-in-up">What Sets Career Access Group Apart?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 animate-fade-in-up-delay-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-medium rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">Professional Accreditation & Trust</h3>
              </div>
              <p className="text-textcolor-200 text-base leading-relaxed">
                We are a proud member of the Career Development Association of Kenya (CDAK), the official professional body for career guidance practitioners in Kenya. This membership ensures our services adhere to the highest ethical and professional standards.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8 animate-fade-in-up-delay-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-orange rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark">End-to-End Career Lifecycle Support</h3>
              </div>
              <p className="text-textcolor-200 text-base leading-relaxed">
                We are the only partner that supports an individual's entire journey, from choosing a high school career path and securing university admission, to landing a first job, and progressing through a successful corporate career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {/* Student & University Services */}
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-primary-dark">Student & University Admissions Services</h2>
                </div>
                <p className="text-textcolor-200 text-base max-w-3xl mx-auto">
                  Our core differentiator, specializing in guiding high school and university students through career selection and university admissions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Career Guidance & Exploration',
                    points: [
                      'Professional Career Counseling: One-on-one and group sessions',
                      'Guest Speaker Series: Real-world industry insights'
                    ],
                    Icon: Users,
                    color: 'bg-primary-medium'
                  },
                  {
                    title: 'University Application Support',
                    points: [
                      'Admission Guidance: Strategic university recommendations',
                      'College Essay Writing: Compelling personal statements',
                      'Securing Scholarships: CAG Application Platform access'
                    ],
                    Icon: FileText,
                    color: 'bg-secondary-orange'
                  },
                  {
                    title: 'Test & Visa Preparation',
                    points: [
                      'Entry Exam Preparation: SAT, TOEFL, IELTS, DUOLINGO',
                      'Entry Visa Guidance: Expert immigration support'
                    ],
                    Icon: Globe,
                    color: 'bg-accent-teal'
                  },
                  {
                    title: 'Profile Development',
                    points: [
                      'Extracurricular Activities: Meaningful project initiation',
                      'Community Service: Well-rounded profile building'
                    ],
                    Icon: Target,
                    color: 'bg-accent-gold'
                  },
                  {
                    title: 'Institutional Collaboration',
                    points: [
                      'Career Fair Planning: University partnership events',
                      'Curriculum Development: Career readiness alignment'
                    ],
                    Icon: Building2,
                    color: 'bg-primary-dark'
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 ${service.color} rounded-full flex items-center justify-center mr-3`}>
                        <service.Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-primary-dark">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-textcolor-200">
                          <span className="text-accent-teal mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Development */}
            <div className="animate-fade-in-up">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-primary-dark">Professional Career Development & Transition</h2>
                </div>
                <p className="text-textcolor-200 text-base max-w-3xl mx-auto">
                  Direct, personalized support for individuals and recent graduates navigating the professional world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Career Advisory & Mentorship',
                    description: 'One-on-one coaching to help professionals define career goals and create strategic action plans.',
                    Icon: Target,
                    color: 'bg-primary-medium'
                  },
                  {
                    title: 'Personal Branding & Application Development',
                    description: 'Expert assistance in crafting professional CVs, cover letters, and optimizing LinkedIn profiles.',
                    Icon: FileText,
                    color: 'bg-secondary-orange'
                  },
                  {
                    title: 'Interview Preparation & Coaching',
                    description: 'Conducting mock interviews and providing constructive feedback to build confidence and improve performance.',
                    Icon: Users,
                    color: 'bg-accent-teal'
                  },
                  {
                    title: 'Psychometric & Skills Assessment',
                    description: 'Offering certified testing to help individuals understand their aptitudes and suitability for specific roles.',
                    Icon: BookOpen,
                    color: 'bg-accent-gold'
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mr-4`}>
                        <service.Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-dark">{service.title}</h3>
                    </div>
                    <p className="text-textcolor-200 text-base leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Briefcase className="text-primary-medium w-8 h-8" />
              <h3 className="text-2xl font-bold text-primary-dark">Get Started with Our Services</h3>
            </div>
            
            {isSubmitted && (
              <div className="bg-successcolor-100/10 border border-successcolor-100 text-successcolor-100 p-4 rounded-lg mb-6">
                Request submitted successfully! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.name ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.name && <p className="text-errorcolor-100 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.contact ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.contact && <p className="text-errorcolor-100 text-sm mt-1">{errors.contact}</p>}
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.email ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.email && <p className="text-errorcolor-100 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.service ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                  >
                    <option value="">Select Service</option>
                    <option value="career-guidance">Career Guidance</option>
                    <option value="university-admissions">University Admissions</option>
                    <option value="professional-development">Professional Development</option>
                    <option value="test-preparation">Test Preparation</option>
                  </select>
                  {errors.service && <p className="text-errorcolor-100 text-sm mt-1">{errors.service}</p>}
                </div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                  <input
                    type="text"
                    name="company"
                    placeholder="School/Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-12 pr-3 py-3 border border-bordercolor-100 focus:border-primary-medium rounded-lg transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary-orange hover:bg-secondary-hover-100 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
              >
                Request Service Information
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
