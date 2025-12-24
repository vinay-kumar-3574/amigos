import { motion } from 'framer-motion'
import { ImagesSlider } from '../ui/images-slider.jsx'
import ProductsGrid from '../ProductsGrid.jsx'
import { FeaturesSectionWithHoverEffects } from '../ui/feature-section-with-hover-effects.jsx'
import ContactForm from '../ContactForm.jsx'
import { featureCards, comfortCards, contactBlock } from '../../data.js'

const HomePage = ({ products }) => {
  // Hero images for the slider
  const heroImages = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

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
            className="z-50 flex flex-col justify-center items-center relative px-4"
          >
            <motion.h1
              className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white py-4 drop-shadow-2xl"
            >
              Welcome to Amigos Pvt Ltd
            </motion.h1>
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

