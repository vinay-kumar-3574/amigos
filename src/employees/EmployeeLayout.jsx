import { EmployeeNavbar } from './EmployeeNavbar.jsx'
import { Outlet, Navigate } from 'react-router-dom'

const EmployeeLayout = ({ userEmail, onLogout }) => {
  // Get userEmail from localStorage if not provided
  const email = userEmail || localStorage.getItem('userEmail') || ''
  
  // Check if user has @vishnu.edu.in email
  if (!email || !email.endsWith('@vishnu.edu.in')) {
    return <Navigate to="/" replace />
  }
  
  return (
    <>
      <EmployeeNavbar userEmail={email} onLogout={onLogout} />
      <Outlet context={{ userEmail: email, onLogout }} />
    </>
  )
}

export default EmployeeLayout

