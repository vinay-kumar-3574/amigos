import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProductsGrid = ({ products, showBack }) => (
  <section id="products" className="w-full py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-4 text-neutral-800"
      >
        Our Products
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg px-4"
      >
        Explore our premium collection of hCNG vehicles designed for performance, safety, and sustainability
      </motion.p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Product Image */}
            <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Product Info */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-neutral-800 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
              <Link
                to={product.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-all duration-200 font-medium group-hover:gap-3 w-full justify-center"
              >
                View Details
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            {/* Hover Border Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.div>
        ))}
      </div>
      
      {showBack && (
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  </section>
)

export default ProductsGrid

