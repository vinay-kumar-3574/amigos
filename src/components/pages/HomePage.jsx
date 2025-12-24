import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ImagesSlider } from '../ui/images-slider.jsx'
import ProductsGrid from '../ProductsGrid.jsx'
import { FeaturesSectionWithHoverEffects } from '../ui/feature-section-with-hover-effects.jsx'
import ContactForm from '../ContactForm.jsx'
import { featureCards, comfortCards, contactBlock } from '../../data.js'

const HomePage = ({ products }) => {
  const [showCursor, setShowCursor] = useState(true)
  
  // Hero images for the slider
  const heroImages = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  // Combine featureCards and comfortCards for the features section
  const allFeatures = [
    ...featureCards.map((f) => ({ title: f.title, text: f.text })),
    ...comfortCards.map((c) => ({ title: c.title, text: c.text })),
  ]

  return (
    <>
      <section id="home" className="hero">
        <ImagesSlider className="h-[60vh] sm:h-[70vh] md:h-screen w-full" images={heroImages}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center relative px-4 text-center"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-300 text-sm sm:text-base md:text-lg mb-4 font-light"
            >
              The road to freedom starts from here
            </motion.p>

            {/* Main Heading with highlighted word and cursor */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-center text-white py-4 drop-shadow-2xl"
            >
              Build awesome vehicles with <span className="text-blue-500">Amigos.</span>
              <span className={`ml-2 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>|</span>
            </motion.h1>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                Join now
              </button>
              
            </motion.div>
          </motion.div>
        </ImagesSlider>
      </section>

      <ProductsGrid products={products} />
      <FeaturesSectionWithHoverEffects features={allFeatures} />
      <ContactForm contactBlock={contactBlock} />
    </>
  )
}

export default HomePage

