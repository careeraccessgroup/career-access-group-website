import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App
<<<<<<< Updated upstream
function App() {

  return (
    <>
      <div className="bg-primary-dark text-textcolor-300">
  Header
</div>

<button className="bg-secondary-orange hover:bg-secondary-hover-100 text-white px-4 py-2 rounded">
  Join Now
</button>

<section className="bg-bgcolor-200 text-textcolor-100">
  Features section
</section>

    </>
=======
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
>>>>>>> Stashed changes
  )
}

export default App
