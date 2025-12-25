import { motion } from 'framer-motion'

const KeyFinancialRatios = () => {
  const financialRatios = {
    marketCap: '₹2,450 Cr',
    currentPrice: '₹1,250',
    high52W: '₹1,450',
    low52W: '₹980',
    pe: '18.5',
    roe: '22.3%',
    roce: '19.8%',
    bookValue: '₹675',
    dividendYield: '2.4%',
    faceValue: '₹10',
    description: 'Amigos Pvt. Ltd. is a leading manufacturer of All-Terrain Vehicles (ATVs) in India, specializing in bi-fuel CNG vehicles with advanced safety systems. The company focuses on manufacturing utility and sports ATVs for industrial, agricultural, and recreational markets.',
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Key Financial Ratios */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Key Financial Ratios</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Market Cap</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.marketCap}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Current Price</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.currentPrice}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">High / Low</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.high52W} / {financialRatios.low52W}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Stock P/E</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.pe}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Book Value</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.bookValue}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Dividend Yield</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.dividendYield}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">ROCE</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.roce}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">ROE</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.roe}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              <p className="text-xs text-neutral-600 mb-1">Face Value</p>
              <p className="text-lg font-bold text-neutral-800">{financialRatios.faceValue}</p>
            </div>
          </div>
        </div>

        {/* Right Column - About and Key Points */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-neutral-800 mb-3">ABOUT</h3>
            <p className="text-sm text-neutral-700 leading-relaxed mb-4">{financialRatios.description}</p>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              READ MORE &gt;
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-neutral-800 mb-3">KEY POINTS</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Products & Brands:</strong> ATV manufacturing with bi-fuel CNG technology</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Premium Segment:</strong> Amigos Thunder 400 with advanced safety systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Market Position:</strong> Leading ATV manufacturer in India</span>
              </li>
            </ul>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-4">
              READ MORE &gt;
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default KeyFinancialRatios

