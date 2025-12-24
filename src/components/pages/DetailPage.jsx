import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'

const DetailPage = ({ slug, detailPages, productCards }) => {
  const navigate = useNavigate()
  const product = detailPages[slug]
  const otherProducts = productCards.filter((p) => p.link !== `/${slug}`)

  if (!product) return null

  // Split specs into categories for better organization
  const dimensionSpecs = product.specs.filter(([label]) => 
    label.includes('Length') || label.includes('Width') || label.includes('Height') || 
    label.includes('Wheelbase') || label.includes('Turning') || label.includes('Ground') ||
    label.includes('Seating') || label.includes('Weight')
  )
  
  const engineSpecs = product.specs.filter(([label]) => 
    label.includes('Engine') || label.includes('CC') || label.includes('Fuel') || 
    label.includes('Power') || label.includes('Torque') || label.includes('Speed') ||
    label.includes('Transmission') || label.includes('Drive')
  )
  
  const otherSpecs = product.specs.filter(([label]) => 
    !dimensionSpecs.some(([dimLabel]) => dimLabel === label) &&
    !engineSpecs.some(([engLabel]) => engLabel === label)
  )

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-8 sm:py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-neutral-300 hover:text-white transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back
          </motion.button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                {product.title.replace('About ', '')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed mb-6 sm:mb-8">
                {product.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent rounded-xl sm:rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-neutral-800"
          >
            Specifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Dimensions & Physical Specs */}
            {dimensionSpecs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  Dimensions & Physical
                </h3>
                <div className="space-y-4">
                  {dimensionSpecs.map(([label, value], index) => (
                    <div key={index} className="border-b border-neutral-200 pb-3 sm:pb-4 last:border-0">
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-sm sm:text-base text-neutral-600 font-medium">{label}</span>
                        <span className="text-sm sm:text-base text-neutral-800 font-bold text-right flex-shrink-0">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Engine & Performance Specs */}
            {engineSpecs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  Engine & Performance
                </h3>
                <div className="space-y-4">
                  {engineSpecs.map(([label, value], index) => (
                    <div key={index} className="border-b border-neutral-200 pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                        <span className="text-neutral-600 font-medium">{label}</span>
                        <span className="text-neutral-800 font-bold ml-4 text-right">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Other Specs */}
            {otherSpecs.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-neutral-800 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-pink-500" />
                  Additional Features
                </h3>
                <div className="space-y-4">
                  {otherSpecs.map(([label, value], index) => (
                    <div key={index} className="border-b border-neutral-200 pb-4 last:border-0">
                      <div className="flex justify-between items-start">
                        <span className="text-neutral-600 font-medium">{label}</span>
                        <span className="text-neutral-800 font-bold ml-4 text-right">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {otherProducts.length > 0 && (
        <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-neutral-800"
            >
              Explore Other Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            >
              Discover our complete range of premium hCNG vehicles
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {otherProducts.map((productCard, index) => (
                <motion.div
                  key={productCard.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                    <img
                      src={productCard.image}
                      alt={productCard.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-neutral-800 group-hover:text-blue-600 transition-colors">
                      {productCard.title}
                    </h3>
                    <Link
                      to={productCard.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-all duration-200 font-medium group-hover:gap-3 w-full justify-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </motion.button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default DetailPage

