import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const StockPriceChart = () => {
  const [timeFilter, setTimeFilter] = useState('1Y')
  const [chartType, setChartType] = useState('Price')

  // Sample stock price data (you can replace with real data)
  const generatePriceData = (period) => {
    const data = []
    let months, isPrediction = false
    
    if (period === 'Prediction') {
      months = 180 // 6 months prediction
      isPrediction = true
    } else {
      months = period === '1M' ? 30 : period === '6M' ? 180 : period === '1Y' ? 365 : 2555
    }
    
    const basePrice = 1250
    const baseVolume = 500000
    
    for (let i = 0; i < months; i += period === '1M' ? 1 : period === '6M' || period === 'Prediction' ? 5 : 10) {
      const date = new Date()
      if (isPrediction) {
        date.setDate(date.getDate() + i) // Future dates for prediction
      } else {
        date.setDate(date.getDate() - (months - i))
      }
      data.push({
        date: date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
        price: basePrice + Math.random() * 200 - 100 + (isPrediction ? 50 : 0), // Slightly higher for prediction
        pe: 15 + Math.random() * 5,
        volume: baseVolume + Math.random() * 200000,
      })
    }
    return data
  }

  const chartData = generatePriceData(timeFilter)

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-neutral-800 mb-6">Historical Price Chart</h2>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        {/* Time Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {['1M', '6M', '1Y', 'Prediction', 'Max'].map((period) => (
            <button
              key={period}
              onClick={() => setTimeFilter(period)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                timeFilter === period
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-neutral-700 hover:bg-gray-200'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Chart Type Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setChartType('Price')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              chartType === 'Price'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-neutral-700 hover:bg-gray-200'
            }`}
          >
            Price
          </button>
          <button
            onClick={() => setChartType('P/E Ratio')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              chartType === 'P/E Ratio'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-neutral-700 hover:bg-gray-200'
            }`}
          >
            P/E Ratio
          </button>
        </div>

        {/* Chart */}
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis
                yAxisId="left"
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                label={{ value: chartType === 'Price' ? 'Price (₹)' : 'P/E Ratio', angle: -90, position: 'insideLeft' }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#6b7280"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                label={{ value: 'Volume', angle: 90, position: 'insideRight' }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                formatter={(value, name) => {
                  if (name === 'price') return [`₹${value.toFixed(2)}`, 'Price']
                  if (name === 'pe') return [value.toFixed(2), 'P/E Ratio']
                  return [`₹${value.toLocaleString('en-IN')}`, 'Volume']
                }}
              />
              <Legend />
              <Bar
                yAxisId="right"
                dataKey="volume"
                fill="#94a3b8"
                name="Volume"
                opacity={0.6}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey={chartType === 'Price' ? 'price' : 'pe'}
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                name={chartType}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.section>
  )
}

export default StockPriceChart

