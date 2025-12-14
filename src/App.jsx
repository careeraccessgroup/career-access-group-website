import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import { preloadCriticalImages } from './utils/imagePreloader'
import { addStructuredData } from './utils/seo'

function App() {
  useEffect(() => {
    // Preload critical images on app start
    preloadCriticalImages()
    // Add structured data for SEO
    addStructuredData()
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}
export default App

