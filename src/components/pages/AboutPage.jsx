import { Link } from 'react-router-dom'

const AboutPage = ({ megaNewsCards }) => (
  <>
    <div className="content">
      <h1>About Our Company</h1>
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
      <p>Thank you for choosing us as your trusted partner. We look forward to growing together and achieving great milestones with you.</p>
      <Link to="/" className="back-btn">
        Back
      </Link>
    </div>
    <div className="mega-news-wrapper">
      {megaNewsCards.map((card) => (
        <div className="mega-news-card featured" style={{ '--bgColor': card.bg }} key={card.title}>
          <img src={card.image} alt={card.title} />
          <div className="mega-news-content">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  </>
)

export default AboutPage

