import React from 'react';
import { Globe, Users, ArrowRight, X } from 'lucide-react';

const Scholars = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-r from-primary-darker to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark-70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 animate-fade-in-up">
            CAG Scholars Program
          </h1>
          <p className="text-md md:text-md mb-2 text-secondary-orange animate-fade-in-up-delay-1">
            Your Launchpad to Global Leadership
          </p>
          <p className="text-md mb-8 opacity-90 animate-fade-in-up-delay-2">
            For Rwanda's Most Exceptional & Multifaceted Senior 6/Grade 12 Students
          </p>
          <div className="animate-fade-in-up-delay-3">
            <button className="bg-secondary-orange hover:bg-secondary-hover-100 px-8 py-4 rounded-full text-white font-bold text-md transition-all duration-300 transform hover:scale-105">
              Apply Now - Opens August 5th
            </button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-6 text-textcolor-100">Are You a Trailblazer?</h2>
            <p className="text-md text-textcolor-200 max-w-4xl mx-auto leading-relaxed">
              The CAG Scholars Program is Rwanda's premier fully-funded initiative designed exclusively for extraordinary, well-rounded students who redefine excellence through intellect, creativity, leadership, and community impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why CAG Scholars */}
      <section className="py-16 bg-bgcolor-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-12 text-textcolor-100 text-center animate-fade-in-up">Why CAG Scholars?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-md text-textcolor-200 mb-8 leading-relaxed">
                We don't just prepare you for university applications, we unlock your potential to compete for full scholarships at top US universities. Join a cohort of Rwanda's brightest minds.
              </p>
              <div className="space-y-4">
                {[
                  'Academic brilliance (top performers in Senior 6/Grade 12)',
                  'Multidimensional talent (arts, athletics, innovation, activism, entrepreneurship)',
                  'Visionary leadership (initiatives that drive change)',
                  'Global ambition (drive to learn, innovate, and lead)'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-teal rounded-full flex items-center justify-center mt-1 shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-textcolor-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in-up-delay-1">
              <img 
                src="/0V0A1958.jpg" 
                alt="Students studying" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-12 text-textcolor-100 text-center animate-fade-in-up">What You'll Experience</h2>
          <div className="text-center mb-8 animate-fade-in-up-delay-1">
            <p className="text-md text-textcolor-200">Over 2 intensive months (September–October), immerse yourself in a transformative journey:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Elite Application Mastery',
                points: [
                  'Craft compelling, authentic essays',
                  'Strategize your college search',
                  'Showcase your unique voice and experiences'
                ],
                color: 'bg-primary-medium',
                image: '/0V0A1968.jpg'
              },
              {
                title: 'Holistic Development',
                points: [
                  'Leadership simulations and workshops',
                  'Cross-cultural communication training',
                  'Mentorship from US university alumni'
                ],
                color: 'bg-secondary-orange',
                image: '/0V0A2004.jpg'
              },
              {
                title: 'Competitive Edge',
                points: [
                  'Insider insights into scholarship processes',
                  'Personalized coaching',
                  'Position yourself as an irresistible candidate'
                ],
                color: 'bg-accent-teal',
                image: '/0V0A2032.jpg'
              }
            ].map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up overflow-hidden cursor-pointer" style={{animationDelay: `${index * 0.2}s`}} onClick={() => setSelectedImage(experience.image)}>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 ${experience.color} text-white text-sm font-semibold rounded-full mb-3`}>
                    {experience.title}
                  </div>
                  <ul className="space-y-2">
                    {experience.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-textcolor-200">
                        <span className="text-accent-gold mt-1">🔹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Future Amplified */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-6">Your Future, Amplified</h2>
            <p className="text-md mb-8 opacity-90">
              CAG Scholars don't just attend top US universities, they become Rwanda's next generation of innovators, policymakers, scientists, and entrepreneurs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Globe, text: 'Access world-class education without financial barriers' },
              { Icon: Users, text: 'Join a global network of change-makers' },
              { Icon: ArrowRight, text: 'Return equipped to transform Rwanda and beyond' }
            ].map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-secondary-orange font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-secondary-orange to-secondary-hover-100 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">Ready to Redefine Your Future?</h2>
          <div className="bg-white bg-opacity-20 rounded-2xl p-8 mb-8 animate-fade-in-up-delay-1">
            <p className="text-md font-semibold mb-4">Application Opens: August 5th</p>
            <p className="mb-6">Secure, encrypted, and exclusively for Rwanda's most promising leaders</p>
            <button className="bg-white text-secondary-orange hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-md transition-all duration-300 transform hover:scale-105">
              Apply via Google Form
            </button>
          </div>
          <div className="animate-fade-in-up-delay-2">
            <p className="text-sm opacity-90 mb-2">⚠️ Only 30–40 seats available</p>
            <p className="font-semibold">This is more than a program, it's a movement for Rwanda's extraordinary youth.</p>
          </div>
        </div>
      </section> */}

      {/* Final Message */}
      <section className="py-12 bg-white text-textcolor-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-md animate-fade-in-up">
            If you're driven to excel, lead, and make an indelible mark, <span className="text-secondary-soft font-bold">CAG Scholars is your gateway.</span>
          </p>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Scholars;
