import { Link } from 'react-router-dom'

const ServicesPage = ({ servicesList }) => (
  <div className="services-container">
    <h1>Our Services</h1>
    <p>We offer a range of high-quality services to meet your needs. Explore what we can do for you below:</p>
    <div className="services-list">
      {servicesList.map((item) => (
        <div className="service-item" key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    <Link to="/" className="back-btn">
      Back to Home
    </Link>
  </div>
)

export default ServicesPage

