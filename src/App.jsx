import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/ui/header-1.jsx'
import Footer from './components/Footer.jsx'
import ProductsGrid from './components/ProductsGrid.jsx'
import FeaturesPreview from './components/FeaturesPreview.jsx'
import ContactForm from './components/ContactForm.jsx'
import HomePage from './components/pages/HomePage.jsx'
import AboutPage from './components/pages/AboutPage.jsx'
import ProductsPage from './components/pages/ProductsPage.jsx'
import FeaturePage from './components/pages/FeaturePage.jsx'
import ServicesPage from './components/pages/ServicesPage.jsx'
import VideoGalleryPage from './components/pages/VideoGalleryPage.jsx'
import DetailPage from './components/pages/DetailPage.jsx'
import Chatbot from './components/Chatbot.jsx'
import Modal from './components/Modal.jsx'
import Alert from './components/Alert.jsx'
import {
  comfortCards,
  contactBlock,
  detailPages,
  featureCards,
  initialBotMessages,
  megaNewsCards,
  navLinks,
  productCards,
  servicesList,
} from './data.js'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const showAlert = (msg) => setAlertMessage(msg)
  const closeAlert = () => setAlertMessage('')

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.loginEmail?.value || ''
    setUserEmail(email)
    setIsLoggedIn(true)
    setIsLoginOpen(false)
    showAlert('Login successful!')
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const email = event.target.regEmail?.value || ''
    setUserEmail(email)
    setIsLoggedIn(true)
    setIsRegisterOpen(false)
    showAlert('Registration successful!')
  }

  return (
    <div className="app-shell">
      <Header navLinks={navLinks} onOpenLogin={() => setIsLoginOpen(true)} onOpenRegister={() => setIsRegisterOpen(true)} />

      <main>
        <Routes>
          <Route path="/" element={<HomePage products={productCards} />} />
          <Route path="/about" element={<AboutPage megaNewsCards={megaNewsCards} />} />
          <Route path="/products" element={<ProductsPage products={productCards} />} />
          <Route path="/features" element={<FeaturePage featureCards={featureCards} comfortCards={comfortCards} />} />
          <Route path="/services" element={<ServicesPage servicesList={servicesList} />} />
          <Route path="/video-gallery" element={<VideoGalleryPage />} />
          <Route path="/buy" element={<DetailPage slug="buy" detailPages={detailPages} productCards={productCards} />} />
          <Route path="/buy1" element={<DetailPage slug="buy1" detailPages={detailPages} productCards={productCards} />} />
          <Route path="/buy2" element={<DetailPage slug="buy2" detailPages={detailPages} productCards={productCards} />} />
          <Route path="/buy3" element={<DetailPage slug="buy3" detailPages={detailPages} productCards={productCards} />} />
        </Routes>
        <Footer navLinks={navLinks} contactBlock={contactBlock} />
      </main>

      <Modal isOpen={isLoginOpen} title="Welcome Back" onClose={() => setIsLoginOpen(false)}>
        <form onSubmit={handleLogin} className="form-stack">
          <input id="loginEmail" type="email" placeholder="Email" required />
          <input id="loginPassword" type="password" placeholder="Password" required />
          <button type="submit" className="modal-action primary-btn w-full">
            Login
          </button>
          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="google-wrapper">
            <div id="googleLoginBtn">Google Sign In</div>
      </div>
          <p className="modal-footnote">
            Don’t have an account?{' '}
            <span className="link" onClick={() => (setIsLoginOpen(false), setIsRegisterOpen(true))}>
              Register
            </span>
          </p>
        </form>
      </Modal>

      <Modal isOpen={isRegisterOpen} title="Create Account" onClose={() => setIsRegisterOpen(false)}>
        <form onSubmit={handleRegister} className="form-stack">
          <input id="regName" type="text" placeholder="Full Name" required />
          <input id="regEmail" type="email" placeholder="Email" required />
          <input id="regPhone" type="tel" placeholder="Phone Number" required />
          <select id="regRole" defaultValue="" required>
            <option value="">Select Role</option>
            <option value="customer">Customer</option>
            <option value="employee">Employee</option>
          </select>
          <input id="regPassword" type="password" placeholder="Password" required />
          <button type="submit" className="modal-action success-btn w-full">
            Register
        </button>
          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="google-wrapper">
            <div id="googleRegisterBtn">Google Sign In</div>
          </div>
          <p className="modal-footnote">
            Already have an account?{' '}
            <span className="link" onClick={() => (setIsRegisterOpen(false), setIsLoginOpen(true))}>
              Login
            </span>
          </p>
        </form>
      </Modal>

      <Alert isOpen={Boolean(alertMessage)} message={alertMessage} onClose={closeAlert} />
      <Chatbot isLoggedIn={isLoggedIn} initialMessages={initialBotMessages} userId={userEmail} />
      </div>
  )
}

export default App
