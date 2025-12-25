import { motion } from 'framer-motion'
import KeyFinancials from './KeyFinancials.jsx'
import StockPriceChart from './StockPriceChart.jsx'
import ProsAndCons from './ProsAndCons.jsx'
import CompetitorAnalysis from './CompetitorAnalysis.jsx'
import CashFlowStatement from './CashFlowStatement.jsx'

const EmployeeApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-2">
              Employee Dashboard
            </h1>
            <p className="text-neutral-600 text-lg">Amigos Pvt. Ltd. - Internal Monitoring & Financial Overview</p>
          </motion.div>

          {/* KEY FINANCIALS (Proposed / Projected) */}
          <KeyFinancials />

          {/* FEATURE 2: STOCK PRICE CHART WITH VOLUME */}
          <StockPriceChart />

          {/* FEATURE 3: PROS AND CONS SECTION */}
          <ProsAndCons />

          {/* FEATURE 4: COMPETITOR ANALYSIS TABLE */}
          <CompetitorAnalysis />

          {/* FEATURE 5: CASH FLOW STATEMENT */}
          <CashFlowStatement />
        </div>
    </div>
  )
}

export default EmployeeApp
