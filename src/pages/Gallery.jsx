import React, { useEffect } from 'react'
import OptimizedImage from '../components/common/OptimizedImage'
import { updateMetaTags, pageMetadata } from '../utils/seo'

const Gallery = () => {
  useEffect(() => {
    updateMetaTags(pageMetadata.gallery)
  }, [])

  const galleryImages = [
    { id: 1, title: 'Training Session', category: 'Programs', image: '/0V0A1479.jpg' },
    { id: 2, title: 'Career Fair', category: 'Events', image: '/0V0A1486.jpg' },
    { id: 3, title: 'Workshop', category: 'Programs', image: '/0V0A1604.jpg' },
    { id: 4, title: 'Career Fair', category: 'Events', image: '/0V0A1609.jpg' },
    { id: 5, title: 'Mentorship Program', category: 'Programs', image: '/0V0A1619.jpg' },
    { id: 6, title: 'Community Outreach', category: 'Impact', image: '/0V0A1640.jpg' },
    { id: 7, title: 'Skills Development', category: 'Programs', image: '/0V0A1644.jpg' },
    { id: 8, title: 'Partner Meeting', category: 'Events', image: '/0V0A1658.jpg' },
    { id: 9, title: 'Youth Empowerment', category: 'Impact', image: '/0V0A1776.jpg' },
    {id: 10, title: 'Networking Event', category: 'Events', image: '/0V0A1843.jpg' },
    {id: 11, title: 'Career Fair', category: 'Events', image: '/0V0A1898.jpg' },
    {id: 12, title: 'Interview Preparation', category: 'Programs', image: '/0V0A1958.jpg' },
    {id: 13, title: 'Career Fair', category: 'Programs', image: '/0V0A1968.jpg' },
    {id: 14, title: 'Career Guidance', category: 'Programs', image: '/0V0A2004.jpg' },
    {id: 15, title: 'Mentorship Program', category: 'Programs', image: '/0V0A2032.jpg' },

  ]

  return (
    <div>
      {/* Gallery Hero */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Gallery</h1>
          <p className="text-base sm:text-lg">Witness the Impact: Transforming Lives Through Education and Opportunity</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-2xl font-bold mb-4 text-textcolor-100">Moments That Matter</h2>
            <p className="text-textcolor-200 text-base">Explore our journey of empowering African youth through innovative programs and partnerships.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={img.id} className="relative rounded-lg overflow-hidden shadow-lg group">
                <OptimizedImage 
                  src={img.image} 
                  alt={img.title}
                  priority={index < 6} // Priority load first 6 images
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-md font-semibold mb-2">{img.title}</h3>
                    <p className="text-secondary-orange text-sm">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
