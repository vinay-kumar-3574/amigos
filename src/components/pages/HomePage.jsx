import { useEffect } from 'react'
import ProductsGrid from '../ProductsGrid.jsx'
import { FeaturesSectionWithHoverEffects } from '../ui/feature-section-with-hover-effects.jsx'
import ContactForm from '../ContactForm.jsx'
import { featureCards, comfortCards, contactBlock } from '../../data.js'

const HomePage = ({ products }) => {
  useEffect(() => {
    const heroVideo = document.getElementById('heroVideo')
    if (heroVideo) {
      heroVideo.playbackRate = 1.5
    }
  }, [])

  // Combine featureCards and comfortCards for the features section
  const allFeatures = [
    ...featureCards.map((f) => ({ title: f.title, text: f.text })),
    ...comfortCards.map((c) => ({ title: c.title, text: c.text })),
  ]

  return (
    <>
      <section id="home" className="hero">
        <video autoPlay muted loop id="heroVideo">
          <source
            src="https://cdn.glitch.global/2a1e26d9-ab9f-4d0d-922f-a475d812e321/backgroundvid.mp4?v=1735542558599"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="overlayy"></div>
        <div className="hero-text">
          <h1>Welcome to Amigos Pvt Ltd</h1>
        </div>
      </section>

      <ProductsGrid products={products} />
      <FeaturesSectionWithHoverEffects features={allFeatures} />
      <ContactForm contactBlock={contactBlock} />
    </>
  )
}

export default HomePage

