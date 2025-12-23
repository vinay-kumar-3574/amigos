import { Link } from 'react-router-dom'

const FeaturesPreview = () => (
  <div className="features">
    <video autoPlay muted loop>
      <source
        src="https://cdn.glitch.global/2a1e26d9-ab9f-4d0d-922f-a475d812e321/78c38a23-1d9b-4595-968e-1a3c0e581ad1.WhatsApp%20Video%202024-12-30%2015.17.39_87cf2a1a.mp4?v=1735556125941"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <div className="feature-list">
      <h2 style={{ color: 'white', paddingLeft: '160px', fontSize: '32px', marginTop: '30px' }}> Features</h2>
      <div className="feature">
        <h3>High Performance</h3>
        <p>Our platform is optimized for speed and efficiency, ensuring a seamless experience.</p>
      </div>
      <div className="feature">
        <h3>Secure</h3>
        <p>We prioritize security with advanced encryption and safety features for your peace of mind.</p>
      </div>
      <div className="feature">
        <h3>User Friendly</h3>
        <p>Intuitive interfaces and easy-to-use tools make it simple for anyone to get started.</p>
      </div>
      <div className="feature">
        <h3>Cloud-Based</h3>
        <p>Access your content from anywhere, anytime, with our cloud storage solution.</p>
      </div>
      <Link to="/features" className="ppp">
        View more
      </Link>
    </div>
  </div>
)

export default FeaturesPreview

