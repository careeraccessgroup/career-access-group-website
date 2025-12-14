import React from 'react'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Adeline Mahoro',
      role: 'Chief Executive Officer',
      description: '15+ years in HR leadership with expertise in talent acquisition and organizational development.',
      image: '/CAA Profile photo/394A0557.jpg'
    },
    {
      id: 2,
      name: 'Caroline Kaari Mwangangi',
      role: 'Chief Operating Officer',
      description: 'Operations expert focused on scaling services and enhancing client experience.',
      image: '/CAA Profile photo/394A0559.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Chief Operating Officer',
      description: 'Operations expert focused on scaling services and enhancing client experience.',
      image: '/CAA Profile photo/394A0561.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Head of Strategic Partnerships',
      description: 'Business development leader with extensive network in Fortune 500 companies.',
      image: '/CAA Profile photo/394A0567.jpg'
    },
    {
      id: 5,
      name: 'Jessica Park',
      role: 'Head of Career Coaching',
      description: 'Certified career coach with 10+ years helping professionals achieve their goals.',
      image: '/CAA Profile photo/394A0571.jpg'
    },
    {
      id: 6,
      name: 'Alex Kumar',
      role: 'Head of Marketing',
      description: 'Marketing strategist specializing in career services and professional development.',
      image: '/CAA Profile photo/394A0573.jpg'
    }
  ]

  return (
    <section className="py-20 bg-bgcolor-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-textcolor-100 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-textcolor-200 text-lg">
            Experienced professionals dedicated to advancing careers and building meaningful connections.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg p-8 shadow-lg text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-textcolor-100 mb-2">{member.name}</h3>
              <h4 className="text-primary-medium font-semibold mb-4">{member.role}</h4>
              <p className="text-textcolor-200 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
