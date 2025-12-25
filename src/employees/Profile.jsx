import { motion } from 'framer-motion'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import { User, Mail, Phone, Briefcase, Calendar, Camera } from 'lucide-react'

const Profile = () => {
  const { userEmail: contextEmail } = useOutletContext() || {}
  // Get user email from context, location state, or localStorage
  const userEmail = contextEmail || localStorage.getItem('userEmail') || 'employee@vishnu.edu.in'
  
  // Extract name from email (part before @)
  const extractNameFromEmail = (email) => {
    if (!email) return 'Employee Name'
    const namePart = email.split('@')[0]
    // Convert name.pattern to "Name Pattern" format
    return namePart
      .replace(/[._]/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }
  
  const userName = localStorage.getItem('userName') || extractNameFromEmail(userEmail)
  const userRole = localStorage.getItem('userRole') || 'Employee'
  const userPhone = localStorage.getItem('userPhone') || '+91 9876543210'
  const joinDate = localStorage.getItem('joinDate') || '2023-01-15'
  
  // Profile picture state
  const [profilePic, setProfilePic] = useState(() => {
    const savedPic = localStorage.getItem('profilePic')
    return savedPic || null
  })
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageDataUrl = reader.result
        setProfilePic(imageDataUrl)
        localStorage.setItem('profilePic', imageDataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2">Profile</h1>
          <p className="text-neutral-600 text-lg">Manage your account information</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-8 border border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg">
                {profilePic ? (
                  <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span>{userName.charAt(0).toUpperCase()}</span>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-black text-white rounded-full p-2 cursor-pointer hover:bg-neutral-800 transition-colors shadow-lg">
                <Camera className="w-4 h-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-neutral-800 mb-2">{userName}</h2>
              <p className="text-neutral-600 mb-4">{userRole}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-neutral-600 mt-1" />
              <div>
                <p className="text-sm text-neutral-600 mb-1">Email</p>
                <p className="text-lg font-medium text-neutral-800">{userEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-neutral-600 mt-1" />
              <div>
                <p className="text-sm text-neutral-600 mb-1">Phone</p>
                <p className="text-lg font-medium text-neutral-800">{userPhone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <Briefcase className="w-5 h-5 text-neutral-600 mt-1" />
              <div>
                <p className="text-sm text-neutral-600 mb-1">Role</p>
                <p className="text-lg font-medium text-neutral-800">{userRole}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-neutral-600 mt-1" />
              <div>
                <p className="text-sm text-neutral-600 mb-1">Join Date</p>
                <p className="text-lg font-medium text-neutral-800">{new Date(joinDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Account Settings</h3>
            <div className="space-y-3">
              <button className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium">
                Edit Profile
              </button>
              <button className="w-full md:w-auto px-6 py-3 bg-gray-100 text-neutral-700 rounded-lg hover:bg-gray-200 transition-colors font-medium ml-0 md:ml-3">
                Change Password
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Profile

