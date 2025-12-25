import { motion } from 'framer-motion'
import { Download, Pencil } from 'lucide-react'
import { useState } from 'react'

const KeyFinancials = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [newRatio, setNewRatio] = useState('')

  const keyFinancials = {
    marketSegment: 'hCNG & Off-Road Vehicles',
    initialInvestment: '₹100 Cr',
    estimatedMarketSize: '₹47,371.83 Billion',
    pricingStrategy: 'Dynamic & Psychological Pricing',
    revenueModel: 'B2B • B2C • D2C',
    breakEvenPeriod: '6 months(Projected)',
    roiExpectation: 'Medium to High (Post Break-Even)',
  }

  const exportToExcel = () => {
    // Create CSV content
    const csvContent = [
      ['KEY FINANCIALS (Proposed / Projected)'],
      ['Parameter', 'Details'],
      ['Market Segment', keyFinancials.marketSegment],
      ['Initial Investment', keyFinancials.initialInvestment],
      ['Estimated Market Size', keyFinancials.estimatedMarketSize],
      ['Pricing Strategy', keyFinancials.pricingStrategy],
      ['Revenue Model', keyFinancials.revenueModel],
      ['Break-Even Period', keyFinancials.breakEvenPeriod],
      ['ROI Expectation', keyFinancials.roiExpectation],
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n')

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `Key_Financials_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="mb-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Key Financials Cards */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-neutral-800">KEY FINANCIALS (Proposed / Projected)</h2>
            <button
              onClick={exportToExcel}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
            >
              <Download className="w-4 h-4" />
              EXPORT TO EXCEL
            </button>
          </div>
          
          {/* Financial Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Market Segment</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.marketSegment}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Initial Investment</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.initialInvestment}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Estimated Market Size</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.estimatedMarketSize}</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Pricing Strategy</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.pricingStrategy}</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Revenue Model</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.revenueModel}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Break-Even Period</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.breakEvenPeriod}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">ROI Expectation</p>
              <p className="text-lg font-bold text-neutral-800">{keyFinancials.roiExpectation}</p>
            </div>
          </div>

          {/* Add Ratio Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="eg. Promoter holding"
                value={newRatio}
                onChange={(e) => setNewRatio(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-neutral-700 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
              >
                <Pencil className="w-4 h-4" />
                EDIT RATIOS
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - About, Products, Target Market, Key Strengths */}
        <div className="lg:col-span-1 space-y-6">
          {/* ABOUT Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-neutral-800 mb-3">ABOUT</h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-3">
              AMIGOS Private Limited is an emerging Indian automotive company focused on developing safe, eco-friendly, and affordable hCNG-based off-road vehicles. The company aims to simplify the transition to green mobility while delivering strong performance, customization, and driver safety.
            </p>
            <p className="text-sm text-neutral-700 leading-relaxed">
              AMIGOS targets young riders, adventure enthusiasts, and commercial rental businesses by offering innovative vehicle platforms that balance sustainability, performance, and cost efficiency.
            </p>
          </div>

          {/* PRODUCTS & SERVICES Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-neutral-800 mb-3">PRODUCTS & SERVICES</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-neutral-800 mb-2">🚗 Flagship Product:</p>
                <p className="text-sm text-neutral-700">AMIGOS Thunder 400</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-800 mb-2">🛠️ Core Offerings</p>
                <ul className="text-sm text-neutral-700 space-y-1 ml-4">
                  <li>• hCNG-powered off-road vehicles</li>
                  <li>• Customizable vehicle platforms</li>
                  <li>• Safety-focused vehicle design</li>
                  <li>• After-sales & service support</li>
                </ul>
              </div>
            </div>
          </div>

        
        
        </div>
      </div>
    </motion.section>
  )
}

export default KeyFinancials

