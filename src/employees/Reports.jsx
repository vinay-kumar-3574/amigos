import { motion } from 'framer-motion'

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2">Reports</h1>
          <p className="text-neutral-600 text-lg">Financial and operational reports</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Available Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Monthly Financial Report</h3>
              <p className="text-sm text-neutral-600 mb-4">Comprehensive monthly financial overview</p>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium">
                View Report
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Quarterly Performance</h3>
              <p className="text-sm text-neutral-600 mb-4">Quarterly performance analysis</p>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium">
                View Report
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Annual Report</h3>
              <p className="text-sm text-neutral-600 mb-4">Complete annual financial report</p>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors text-sm font-medium">
                View Report
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Reports

