import React, { useEffect, useState, useCallback } from 'react'
import OptimizedImage from '../components/common/OptimizedImage'
import { updateMetaTags, pageMetadata } from '../utils/seo'
import { X } from 'lucide-react'

const galleryData = {
  'Career Day': {
    thumbnail: '/CareerDay/CAREER WEEK /0V0A0001.jpg',
    subfolders: {
      'Career Week Day 1': {
        thumbnail: '/CareerDay/CAREER WEEK /0V0A0001.jpg',
        images: [
          '0V0A0001.jpg', '0V0A0006.jpg', '0V0A0012.jpg', '0V0A0014.jpg', '0V0A0018.jpg',
          '0V0A0022.jpg', '0V0A0024.jpg', '0V0A0028.jpg', '0V0A0029.jpg', '0V0A0030.jpg',
          '0V0A0035.jpg', '0V0A0036.jpg', '0V0A0041.jpg', '0V0A0042.jpg', '0V0A0101.jpg',
          '0V0A0106-2 copy.jpg', '0V0A0107.jpg', '0V0A0114.jpg', '0V0A0123.jpg', '0V0A0140.jpg',
          '0V0A0151.jpg', '0V0A0153.jpg', '0V0A0155.jpg', '0V0A0190.jpg', '0V0A0192.jpg',
          '0V0A0194.jpg', '0V0A0197.jpg', '0V0A0202.jpg', '0V0A0207.jpg', '0V0A0213.jpg'
        ].map(img => `/CareerDay/CAREER WEEK /${img}`)
      },
      'Career Week Day 2': {
        thumbnail: '/CareerDay/CAREER WEEK DAY 2/0V0A0220.jpg',
        images: [
          '0V0A0220.jpg', '0V0A0233.jpg', '0V0A0235.jpg', '0V0A0249.jpg', '0V0A0255.jpg',
          '0V0A0261.jpg', '0V0A0265.jpg', '0V0A0267.jpg', '0V0A0268.jpg', '0V0A0269.jpg',
          '0V0A0278.jpg', '0V0A0282.jpg', '0V0A0283.jpg', '0V0A0285.jpg', '0V0A0286.jpg',
          '0V0A0288.jpg', '0V0A0290.jpg', '0V0A0295.jpg', '0V0A0312.jpg', '0V0A0317.jpg',
          '0V0A0326.jpg', '0V0A0327.jpg', '0V0A0328.jpg', '0V0A0334.jpg', '0V0A0345.jpg'
        ].map(img => `/CareerDay/CAREER WEEK DAY 2/${img}`)
      },
      'Career Day 3': {
        thumbnail: '/CareerDay/CAREER DAY 3/0V0A0008.jpg',
        images: [
          '0V0A0008.jpg', '0V0A0013.jpg', '0V0A0023.jpg', '0V0A0028.jpg', '0V0A0037.jpg',
          '0V0A0052.jpg', '0V0A0053.jpg', '0V0A0056.jpg', '0V0A0068.jpg', '0V0A0092.jpg',
          '0V0A0094.jpg', '0V0A0098.jpg', '0V0A0104.jpg', '0V0A0118.jpg', '0V0A0141.jpg',
          '0V0A0142.jpg', '0V0A0152.jpg', '0V0A0157.jpg', '0V0A0158.jpg', '0V0A0159.jpg',
          '0V0A0173.jpg', '0V0A0174.jpg', '0V0A0178.jpg', '0V0A0187.jpg', '0V0A0198.jpg'
        ].map(img => `/CareerDay/CAREER DAY 3/${img}`)
      },
      'Last Day': {
        thumbnail: '/CareerDay/last day/ZAP_3898.jpg',
        images: [
          'ZAP_3898.jpg', 'ZAP_3922.jpg', 'ZAP_3937.jpg', 'ZAP_3947.jpg', 'ZAP_3951.jpg',
          'ZAP_3954.jpg', 'ZAP_3957.jpg', 'ZAP_3973.jpg', 'ZAP_3979.jpg', 'ZAP_3985.jpg',
          'ZAP_3992.jpg', 'ZAP_4007.jpg', 'ZAP_4011.jpg', 'ZAP_4012.jpg', 'ZAP_4014.jpg',
          'ZAP_4027.jpg', 'ZAP_4030.jpg', 'ZAP_4032.jpg', 'ZAP_4034.jpg', 'ZAP_4071.jpg',
          'ZAP_4076.jpg', 'ZAP_4077.jpg', 'ZAP_4082.jpg', 'ZAP_4091.jpg', 'ZAP_4098.jpg'
        ].map(img => `/CareerDay/last day/${img}`)
      }
    }
  },
  'Programs & Events': {
    thumbnail: '/0V0A1479.jpg',
    images: [
      '/0V0A1479.jpg', '/0V0A1486.jpg', '/0V0A1604.jpg', '/0V0A1609.jpg', '/0V0A1619.jpg',
      '/0V0A1640.jpg', '/0V0A1644.jpg', '/0V0A1658.jpg', '/0V0A1776.jpg', '/0V0A1843.jpg',
      '/0V0A1898.jpg', '/0V0A1958.jpg', '/0V0A1968.jpg', '/0V0A2004.jpg', '/0V0A2032.jpg'
    ]
  }
}

const FolderCard = ({ name, thumbnail, onClick, imageCount }) => (
  <button
    onClick={onClick}
    className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer text-left w-full bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <OptimizedImage
      src={thumbnail}
      alt={name}
      className="w-full h-38 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-primary-dark bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
      <div className="text-center text-white p-4 transform transition-transform duration-300 group-hover:scale-105">
        <svg className="w-8 h-8 mx-auto mb-2 opacity-80 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        <h3 className="text-lg font-semibold">{name}</h3>
        {imageCount && <p className="text-sm text-secondary-orange">{imageCount} photos</p>}
      </div>
    </div>
  </button>
)

const BackButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-primary-dark hover:text-secondary-orange transition-colors mb-6"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    <span className="font-medium">{label}</span>
  </button>
)

const ImageGrid = ({ images, onImageClick }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {images.map((img, index) => (
      <div key={img} className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={() => onImageClick(img)}>
        <OptimizedImage
          src={img}
          alt={`Gallery image ${index + 1}`}
          priority={index < 6}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    ))}
  </div>
)

const Gallery = () => {
  const [navStack, setNavStack] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    updateMetaTags(pageMetadata.gallery)
  }, [])

  const getCurrentView = useCallback(() => {
    if (navStack.length === 0) return { type: 'root', data: galleryData }
    if (navStack.length === 1) {
      const folder = galleryData[navStack[0]]
      if (folder.subfolders) return { type: 'subfolders', data: folder.subfolders, name: navStack[0] }
      return { type: 'images', data: folder.images, name: navStack[0] }
    }
    const subfolder = galleryData[navStack[0]].subfolders[navStack[1]]
    return { type: 'images', data: subfolder.images, name: navStack[1] }
  }, [navStack])

  const navigateTo = (folder) => setNavStack(prev => [...prev, folder])
  const navigateBack = () => setNavStack(prev => prev.slice(0, -1))

  const view = getCurrentView()
  const breadcrumb = navStack.length > 0 ? (navStack.length === 1 ? 'All Albums' : navStack[0]) : null

  return (
    <div>
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Gallery</h1>
          <p className="text-base sm:text-lg">Witness the Impact: Transforming Lives Through Education and Opportunity</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-textcolor-100">
              {view.type === 'root' ? 'Photo Albums' : view.name}
            </h1>
            <p className="text-textcolor-200 text-base">
              {view.type === 'root' 
                ? 'Explore our journey of empowering African youth through innovative programs and partnerships.'
                : `${view.data.length || Object.keys(view.data).length} ${view.type === 'images' ? 'photos' : 'albums'}`}
            </p>
          </div>

          {breadcrumb && <BackButton onClick={navigateBack} label={`Back to ${breadcrumb}`} />}
                {/* Root Folder */}
          {view.type === 'root' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {Object.entries(view.data).map(([name, folder]) => (
                <FolderCard
                  key={name}
                  name={name}
                  thumbnail={folder.thumbnail}
                  imageCount={folder.images?.length || Object.keys(folder.subfolders || {}).length + ' albums'}
                  onClick={() => navigateTo(name)}
                />
              ))}
            </div>
          )}

          {view.type === 'subfolders' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(view.data).map(([name, subfolder]) => (
                <FolderCard
                  key={name}
                  name={name}
                  thumbnail={subfolder.thumbnail}
                  imageCount={subfolder.images.length}
                  onClick={() => navigateTo(name)}
                />
              ))}
            </div>
          )}

          {view.type === 'images' && <ImageGrid images={view.data} onImageClick={setSelectedImage} />}
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
  )
}

export default Gallery
