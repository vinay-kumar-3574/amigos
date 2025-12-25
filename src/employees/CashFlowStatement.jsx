import { motion } from 'framer-motion'

const CashFlowStatement = () => {
  const cashFlowSummary = [
    { year: 'Mar 2024', operating: 4923, investing: -1828, financing: -2717, net: 379 },
    { year: 'Mar 2025', operating: 4297, investing: -1703, financing: -2815, net: -221 },
    { year: 'Mar 2026', operating: 4850, investing: -1950, financing: -2900, net: 0 },
    { year: 'Mar 2027', operating: 5200, investing: -2100, financing: -3000, net: 100 },
  ]


  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-neutral-800 mb-6">Cash Flows</h2>

      {/* Consolidated Cash Flow Summary - Matching Image Structure */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <p className="text-sm text-neutral-600 mb-4">Consolidated Figures in Rs. Crores</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-max">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-300">
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">Cash Flows</th>
                {cashFlowSummary.map((row) => (
                  <th key={row.year} className="px-4 py-3 text-right text-sm font-semibold text-neutral-700">
                    {row.year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 bg-white">
                <td className="px-4 py-3 text-sm font-medium text-neutral-700">Cash from Operating Activity</td>
                {cashFlowSummary.map((row) => (
                  <td key={row.year} className="px-4 py-3 text-right text-sm text-neutral-600">
                    {row.operating.toLocaleString('en-IN')}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-neutral-700">Cash from Investing Activity</td>
                {cashFlowSummary.map((row) => (
                  <td key={row.year} className="px-4 py-3 text-right text-sm text-neutral-600">
                    {row.investing > 0 ? '' : '-'}{Math.abs(row.investing).toLocaleString('en-IN')}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-white">
                <td className="px-4 py-3 text-sm font-medium text-neutral-700">Cash from Financing Activity</td>
                {cashFlowSummary.map((row) => (
                  <td key={row.year} className="px-4 py-3 text-right text-sm text-neutral-600">
                    {row.financing > 0 ? '' : '-'}{Math.abs(row.financing).toLocaleString('en-IN')}
                  </td>
                ))}
              </tr>
              <tr className="border-b-2 border-gray-300 bg-white">
                <td className="px-4 py-3 text-sm font-bold text-neutral-800">Net Cash Flow</td>
                {cashFlowSummary.map((row) => (
                  <td key={row.year} className="px-4 py-3 text-right text-sm font-bold text-neutral-800">
                    {row.net > 0 ? '' : '-'}{Math.abs(row.net).toLocaleString('en-IN')}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </motion.section>
  )
}

export default CashFlowStatement

