import { useEffect, useState, useCallback, useMemo } from 'react'
import { X } from 'lucide-react'
import LazyImage from '../components/common/LazyImage'
import Pagination from '../components/common/Pagination'
import { updateMetaTags, pageMetadata } from '../utils/seo'
import galleryData from '../data/galleryData.json'

const IMAGES_PER_PAGE = 9

const FolderCard = ({ name, thumbnail, onClick, imageCount }) => (
  <button
    onClick={onClick}
    aria-label={`Open ${name} album with ${imageCount} items`}
    className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer text-left w-full bg-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
  >
    <LazyImage
      src={thumbnail}
      alt={`${name} album cover`}
      className="w-full h-40 sm:h-48"
      priority
    />
    <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/60 transition-all duration-300 flex items-center justify-center">
      <div className="text-center text-white p-4 transform transition-transform duration-300 group-hover:scale-105">
        <svg className="w-8 h-8 mx-auto mb-2 opacity-80" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-secondary-orange">{imageCount}</p>
      </div>
    </div>
  </button>
)

const BackButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-primary-dark hover:text-secondary-orange transition-colors mb-6 focus:outline-none focus:underline"
  >
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    <span className="font-medium">{label}</span>
  </button>
)

const ImageGrid = ({ images, basePath, currentPage, onImageClick }) => {
  const paginatedImages = useMemo(() => {
    const start = (currentPage - 1) * IMAGES_PER_PAGE
    return images.slice(start, start + IMAGES_PER_PAGE)
  }, [images, currentPage])

  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      role="list"
      aria-label="Gallery images"
    >
      {paginatedImages.map((img, index) => {
        const fullPath = basePath ? `${basePath}${img}` : img
        return (
          <button
            key={img}
            onClick={() => onImageClick(fullPath)}
            className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
            role="listitem"
            aria-label={`View image ${(currentPage - 1) * IMAGES_PER_PAGE + index + 1}`}
          >
            <LazyImage
              src={fullPath}
              alt={`Gallery photo ${(currentPage - 1) * IMAGES_PER_PAGE + index + 1}`}
              priority={index < 3}
              className="w-full h-56 sm:h-64"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        )
      })}
    </div>
  )
}

const ImageModal = ({ src, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <div className="relative max-w-5xl w-full max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-2 sm:right-2 bg-white/90 rounded-full p-2 hover:bg-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6 text-gray-800" />
        </button>
        <img
          src={src}
          alt="Full size preview"
          className="w-full h-full max-h-[85vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

const Gallery = () => {
  const [navStack, setNavStack] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    updateMetaTags(pageMetadata.gallery)
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [navStack])

  const view = useMemo(() => {
    if (navStack.length === 0) return { type: 'root', data: galleryData }
    
    const folder = galleryData[navStack[0]]
    if (navStack.length === 1) {
      if (folder.subfolders) return { type: 'subfolders', data: folder.subfolders, name: navStack[0] }
      return { type: 'images', data: folder.images, basePath: folder.basePath, name: navStack[0] }
    }
    
    const subfolder = folder.subfolders[navStack[1]]
    return { type: 'images', data: subfolder.images, basePath: subfolder.basePath, name: navStack[1] }
  }, [navStack])

  const totalPages = useMemo(() => {
    if (view.type !== 'images') return 0
    return Math.ceil(view.data.length / IMAGES_PER_PAGE)
  }, [view])

  const navigateTo = useCallback((folder) => setNavStack(prev => [...prev, folder]), [])
  const navigateBack = useCallback(() => setNavStack(prev => prev.slice(0, -1)), [])

  const breadcrumb = navStack.length > 0 ? (navStack.length === 1 ? 'All Albums' : navStack[0]) : null

  const getItemCount = (folder) => {
    if (folder.images) return `${folder.images.length} photos`
    if (folder.subfolders) return `${Object.keys(folder.subfolders).length} albums`
    return ''
  }

  return (
    <div>
      <section className="py-16 sm:py-20 bg-primary-dark text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Gallery</h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            Witness the Impact: Transforming Lives Through Education and Opportunity
            {view.type === 'images' && ` - ${view.name}`}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-textcolor-100">
              {view.type === 'root' ? 'Photo Albums' : view.name}
            </h2>
            <p className="text-textcolor-200 text-sm sm:text-base">
              {view.type === 'root'
                ? 'Explore our journey of empowering African youth.'
                : view.type === 'images'
                ? `${view.data.length} photos • Page ${currentPage} of ${totalPages}`
                : `${Object.keys(view.data).length} albums`}
            </p>
          </header>

          {breadcrumb && <BackButton onClick={navigateBack} label={`Back to ${breadcrumb}`} />}

          {view.type === 'root' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(view.data).map(([name, folder]) => (
                <FolderCard
                  key={name}
                  name={name}
                  thumbnail={folder.thumbnail}
                  imageCount={getItemCount(folder)}
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
                  imageCount={`${subfolder.images.length} photos`}
                  onClick={() => navigateTo(name)}
                />
              ))}
            </div>
          )}

          {view.type === 'images' && (
            <>
              <ImageGrid
                images={view.data}
                basePath={view.basePath}
                currentPage={currentPage}
                onImageClick={setSelectedImage}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                className="mt-10"
              />
            </>
          )}
        </div>
      </section>

      {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

export default Gallery
