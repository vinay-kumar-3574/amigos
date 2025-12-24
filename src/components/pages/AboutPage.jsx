import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AboutPage = ({ megaNewsCards }) => (
  <>
    {/* Hero Section */}
    <section className="w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent"
        >
          About Our Company
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed"
        >
          <p>
            Welcome to our business! By offering excellent features and services in our hCNG vehicles, our company is setting
            the standard in India&apos;s expanding hCNG market. Our goal is to prioritize customer safety while simplifying the
            shift to eco-friendly transportation, all at a reasonable and accessible price, establishing ourselves as a market
            leader.
          </p>
          <p>
            Our team of experts brings together diverse perspectives and skills to ensure the success of every project we
            undertake. From design and technology to customer service, we prioritize your satisfaction and strive to exceed
            expectations.
          </p>
          <p>
            Thank you for choosing us as your trusted partner. We look forward to growing together and achieving great milestones with you.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Cards Section */}
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-neutral-800"
        >
          Why Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-neutral-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
        >
          Discover what makes us the leader in eco-friendly transportation
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {megaNewsCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-neutral-800 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed whitespace-pre-line">
                  {card.text}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  </>
)

export default AboutPage

