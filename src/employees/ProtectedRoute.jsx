import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const userEmail = localStorage.getItem('userEmail') || ''
  
  // Check if user has @vishnu.edu.in email
  if (!userEmail || !userEmail.endsWith('@vishnu.edu.in')) {
    return <Navigate to="/" replace />
  }
  
  return children
}

export default ProtectedRoute

