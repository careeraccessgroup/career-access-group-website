
import { useState } from 'react';
import { Globe, Target, Rocket, Quote, University, User, Phone, Mail, MapPin, Route } from 'lucide-react';

const UniversityFair = () => {
  const [formData, setFormData] = useState({
    universityName: '',
    repName: '',
    contact: '',
    email: '',
    country: '',
    city: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.universityName.trim()) newErrors.universityName = 'University name is required';
    if (!formData.repName.trim()) newErrors.repName = 'Representative name is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
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
          <h1 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in-up">University Fair</h1>
          <p className="text-md max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Critical catalysts in demystifying higher education and empowering students to make informed post-secondary choices
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        {/* Content Cards */}
        <div className="space-y-8 animate-fade-in-up mb-16">
          <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">The Role of University Fairs</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Democratizing Access',
                points: [
                  'Global Exposure: Connect with universities from 50+ countries',
                  'Diverse Pathways: Liberal arts in the U.S., specialized programs in Germany',
                  'Equity Focus: Direct access for first-generation students'
                ],
                Icon: Globe,
                color: 'bg-primary-medium'
              },
              {
                title: 'Personalized Guidance',
                points: [
                  'Fit Matching: Compare programs, campus cultures, and costs',
                  'Admissions Insights: Clarify IB scores vs. AP credits',
                  'Scholarship Access: Merit aid and country-specific funding'
                ],
                Icon: Target,
                color: 'bg-secondary-orange'
              },
              {
                title: 'Skill Building',
                points: [
                  'Networking Practice: Refine communication skills',
                  'Application Strategy: Understand holistic review processes',
                  'Dream Ignition: Transform abstract dreams into actionable plans'
                ],
                Icon: Rocket,
                color: 'bg-accent-teal'
              },{
                title: 'Inspiration & Aspiration',
                points: [
                  'Dream Ignition: A conversation with an Oxford rep could motivate a student to aim for Rhodes Scholarship.',
                  'Alternative Pathways: Discover options like 3-year degrees in the U.K., co-op programs in Canada, or tuition-free universities in Norway.',
                ],
                Icon: Route,
                color: 'bg-accent-gold'
              },
              
            ].map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up p-6" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${role.color} rounded-full flex items-center justify-center mr-4 shrink-0`}>
                    <role.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-md font-bold text-textcolor-100">{role.title}</h3>
                </div>
                <ul className="space-y-3">
                  {role.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-textcolor-200">
                      <span className="text-accent-teal mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-primary-light/10 p-8 rounded-lg animate-fade-in-up-delay-4 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Why It Matters</h3>
            <p className="text-base text-textcolor-200 mb-6 leading-relaxed">
              University fairs transform abstract dreams into actionable plans. A student from rural Ohio might discover a tuition-free program in South Korea; another could learn about disability services at a Canadian university. By strategically organizing these events, high schools become launchpads for global citizens, proving that geography need not limit ambition.
            </p>
            <div className="flex items-start gap-4">
              <Quote className="text-primary-medium w-8 h-8 mt-1 shrink-0" />
              <div>
                <p className="text-md italic text-textcolor-100">
                  "After our fair, applications to international universities tripled and so did student confidence."
                </p>
                <p className="text-base text-textcolor-200 mt-3">- High School Counselor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 animate-fade-in-up-delay-2 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <University className="text-primary-medium w-8 h-8" />
            <h3 className="text-2xl font-bold text-primary-dark">Become a University Fair Participant</h3>
          </div>
          
          {isSubmitted && (
            <div className="bg-successcolor-100/10 border border-successcolor-100 text-successcolor-100 p-4 rounded-lg mb-6 animate-fade-in-up">
              Registration submitted successfully! We'll contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <University className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
              <input
                type="text"
                name="universityName"
                placeholder="University Name"
                value={formData.universityName}
                onChange={handleChange}
                className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.universityName ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
              />
              {errors.universityName && <p className="text-errorcolor-100 text-sm mt-1">{errors.universityName}</p>}
            </div>

            <div className="relative">
              <User className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
              <input
                type="text"
                name="repName"
                placeholder="Representative Name"
                value={formData.repName}
                onChange={handleChange}
                className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.repName ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
              />
              {errors.repName && <p className="text-errorcolor-100 text-sm mt-1">{errors.repName}</p>}
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
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.country ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.country && <p className="text-errorcolor-100 text-sm mt-1">{errors.country}</p>}
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-textcolor-200" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full pl-12 pr-3 py-3 border rounded-lg transition-all ${errors.city ? 'border-errorcolor-100' : 'border-bordercolor-100 focus:border-primary-medium'}`}
                />
                {errors.city && <p className="text-errorcolor-100 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary-orange hover:bg-secondary-hover-100 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
            >
              Register Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UniversityFair;
