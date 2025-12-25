import { motion } from 'framer-motion'

const ProsAndCons = () => {
  const pros = [
    'Advanced bi-fuel CNG technology with safety systems',
    'Competitive pricing compared to international brands',
    'Strong warranty coverage (30 months)',
    'Growing demand in industrial and agricultural sectors',
  ]

  const cons = [
    'Limited brand recognition compared to global players',
    'Smaller service network than established competitors',
    'Dependency on CNG infrastructure availability',
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-neutral-800 mb-6">Pros & Cons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-green-700 mb-4">Pros</h3>
          <ul className="space-y-2">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span className="text-neutral-700">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-red-700 mb-4">Cons</h3>
          <ul className="space-y-2">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-600 mr-2">✗</span>
                <span className="text-neutral-700">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default ProsAndCons

