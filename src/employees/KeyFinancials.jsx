import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const KeyFinancials = () => {
  const keyFinancials = {
    marketSegment: 'hCNG & Off-Road Vehicles',
    initialInvestment: '₹100 Cr',
    estimatedMarketSize: '₹47,371.83 Billion',
    pricingStrategy: 'Dynamic & Psychological Pricing',
    revenueModel: 'B2B • B2C • D2C',
    breakEvenPeriod: '3-5 Years (Projected)',
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
      className="mb-12"
    >
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
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Parameter</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">Market Segment</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.marketSegment}</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">Initial Investment</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.initialInvestment}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">Estimated Market Size</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.estimatedMarketSize}</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">Pricing Strategy</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.pricingStrategy}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">Revenue Model</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.revenueModel}</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">Break-Even Period</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.breakEvenPeriod}</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700">ROI Expectation</td>
              <td className="px-4 py-3 text-sm text-neutral-600">{keyFinancials.roiExpectation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.section>
  )
}

export default KeyFinancials

