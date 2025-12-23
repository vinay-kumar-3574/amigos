import { Link } from 'react-router-dom'

const VideoGalleryPage = () => (
  <div className="gallery-container">
    <h1>Video Gallery</h1>
    <p>Explore our collection of videos showcasing our projects, services, and innovations.</p>
    <div className="video-grid">
      <div className="video-item">
        <video controls>
          <source
            src="https://cdn.glitch.me/2a1e26d9-ab9f-4d0d-922f-a475d812e321/lv_0_20241230154014.mp4?v=1735558460386"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h2>Run Trial</h2>
      </div>
    </div>
    <Link to="/" className="back-btn">
      Back to Home
    </Link>
  </div>
)

export default VideoGalleryPage

