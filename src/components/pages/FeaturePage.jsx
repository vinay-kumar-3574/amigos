const FeaturePage = ({ featureCards, comfortCards }) => (
  <>
    <h2 className="underlined-heading"> Advanced Features </h2>
    <div className="mega-news-wrapper layout-1up">
      {featureCards.map((card) => (
        <div className="mega-news-card featured" style={{ '--bgColor': card.bg }} key={card.title}>
          <div className="mega-news-content">
            <h3>{card.title}</h3>
            <p1>{card.text}</p1>
          </div>
        </div>
      ))}
    </div>
    <h2 className="underlined-heading">Basic Features of a vehicle with extra safety and comfort</h2>
    <div className="comfort-section-wrapper">
      {comfortCards.map((card) => (
        <div className="comfort-card" style={{ '--bgColor': '#555' }} key={card.title}>
          <div className="comfort-card-content">
            <h3>{card.title}</h3>
            <p1>{card.text}</p1>
          </div>
        </div>
      ))}
    </div>
    <a href="/" className="back-btn">
      Back to Home
    </a>
  </>
)

export default FeaturePage

