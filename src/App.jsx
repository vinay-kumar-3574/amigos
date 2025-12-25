import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import EmployeeApp from './employees/EmployeeApp.jsx'
import EmployeeLayout from './employees/EmployeeLayout.jsx'
import Profile from './employees/Profile.jsx'
import Reports from './employees/Reports.jsx'
import Analytics from './employees/Analytics.jsx'
import ProtectedRoute from './employees/ProtectedRoute.jsx'
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
  const location = useLocation()
  const navigate = useNavigate()
  const isEmployeeRoute = location.pathname.startsWith('/employees') || location.pathname.startsWith('/dashboard')
  
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isEmployeeLoginOpen, setIsEmployeeLoginOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('userEmail')
  })
  const [alertMessage, setAlertMessage] = useState('')
  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem('userEmail') || ''
  })

  // Restore login state from localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail')
    if (savedEmail) {
      setUserEmail(savedEmail)
      setIsLoggedIn(true)
    }
  }, [])

  const showAlert = (msg) => setAlertMessage(msg)
  const closeAlert = () => setAlertMessage('')

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.loginEmail?.value || ''
    
    // Check if trying to access employee pages
    const isTryingEmployeeAccess = location.pathname.startsWith('/employees') || location.pathname.startsWith('/dashboard')
    
    // If trying to access employee pages, check for @vishnu.edu.in
    if (isTryingEmployeeAccess && !email.endsWith('@vishnu.edu.in')) {
      showAlert('Access denied! Only @vishnu.edu.in emails can access employee pages.')
      return
    }
    
    setUserEmail(email)
    setIsLoggedIn(true)
    setIsLoginOpen(false)
    // Store in localStorage
    localStorage.setItem('userEmail', email)
    // Extract name from email (part before @)
    const nameFromEmail = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    localStorage.setItem('userName', nameFromEmail)
    showAlert('Login successful!')
  }

  const handleRegister = (event) => {
    event.preventDefault()
    const email = event.target.regEmail?.value || ''
    const name = event.target.regName?.value || ''
    const phone = event.target.regPhone?.value || ''
    const role = event.target.regRole?.value || ''
    
    // If no name provided, extract from email
    const finalName = name || (() => {
      const namePart = email.split('@')[0]
      return namePart
        .replace(/[._]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    })()
    
    setUserEmail(email)
    setIsLoggedIn(true)
    setIsRegisterOpen(false)
    // Store in localStorage
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userName', finalName)
    localStorage.setItem('userPhone', phone)
    localStorage.setItem('userRole', role)
    localStorage.setItem('joinDate', new Date().toISOString())
    showAlert('Registration successful!')
  }

  const handleEmployeeLogin = (event) => {
    event.preventDefault()
    const email = event.target.employeeLoginEmail?.value || ''
    const password = event.target.employeeLoginPassword?.value || ''
    
    // Check for @vishnu.edu.in email
    if (!email.endsWith('@vishnu.edu.in')) {
      showAlert('Access denied! Only @vishnu.edu.in emails can access employee pages.')
      return
    }
    
    setUserEmail(email)
    setIsLoggedIn(true)
    setIsEmployeeLoginOpen(false)
    // Store in localStorage
    localStorage.setItem('userEmail', email)
    // Extract name from email (part before @)
    const nameFromEmail = email.split('@')[0]
      .replace(/[._]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    localStorage.setItem('userName', nameFromEmail)
    localStorage.setItem('userRole', 'Employee')
    showAlert('Employee login successful!')
    // Redirect to employee dashboard
    navigate('/employees')
  }

  const handleLogout = () => {
    setUserEmail('')
    setIsLoggedIn(false)
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    localStorage.removeItem('userPhone')
    localStorage.removeItem('userRole')
    localStorage.removeItem('joinDate')
    localStorage.removeItem('profilePic')
    showAlert('Logged out successfully!')
    navigate('/')
  }

  // Get userName from localStorage or extract from email
  const getUserName = () => {
    const savedName = localStorage.getItem('userName')
    if (savedName) return savedName
    if (userEmail) {
      return userEmail.split('@')[0]
        .replace(/[._]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ')
    }
    return ''
  }

  const userName = getUserName()

  return (
    <div className="app-shell">
      {!isEmployeeRoute && (
        <Header 
          navLinks={navLinks} 
          onOpenLogin={() => setIsLoginOpen(true)} 
          onOpenRegister={() => setIsRegisterOpen(true)} 
          onOpenEmployeeLogin={() => setIsEmployeeLoginOpen(true)}
          isLoggedIn={isLoggedIn}
          userEmail={userEmail}
          userName={userName}
          onLogout={handleLogout}
        />
      )}

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
          <Route path="/employees" element={
            <ProtectedRoute>
              <EmployeeLayout userEmail={userEmail} onLogout={handleLogout} />
            </ProtectedRoute>
          }>
            <Route index element={<EmployeeApp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="reports" element={<Reports />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <><EmployeeLayout userEmail={userEmail} onLogout={handleLogout} /><EmployeeApp /></>
            </ProtectedRoute>
          } />
        </Routes>
        {!isEmployeeRoute && <Footer navLinks={navLinks} contactBlock={contactBlock} />}
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

      <Modal isOpen={isEmployeeLoginOpen} title="Employee Login" onClose={() => setIsEmployeeLoginOpen(false)}>
        <form onSubmit={handleEmployeeLogin} className="form-stack">
          <input id="employeeLoginEmail" type="email" placeholder="Email (@vishnu.edu.in)" required />
          <input id="employeeLoginPassword" type="password" placeholder="Password" required />
          <p className="text-sm text-gray-600 mb-4">Only @vishnu.edu.in emails are allowed</p>
          <button type="submit" className="modal-action primary-btn w-full">
            Sign In as Employee
          </button>
          <div className="divider">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="google-wrapper">
            <div id="googleEmployeeLoginBtn">Google Sign In</div>
          </div>
          <p className="modal-footnote">
            Not an employee?{' '}
            <span className="link" onClick={() => (setIsEmployeeLoginOpen(false), setIsLoginOpen(true))}>
              Regular Sign In
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
