import { Link, useNavigate } from 'react-router-dom'

const DetailPage = ({ slug, detailPages, productCards }) => {
  const navigate = useNavigate()
  const product = detailPages[slug]
  const otherProducts = productCards.filter((p) => p.link !== `/${slug}`)

  if (!product) return null

  return (
    <>
      <div className="about-container">
        <div className="info-section">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt="ATV Image" />
        </div>
        <div className="specifications-section">
          <table>
            <thead>
              <tr>
                <th colSpan={2}>Engine Specifications</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map(([label, value]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <section id="products" className="products">
        <h2>Products</h2>
        <div className="product-list">
          {otherProducts.map((productCard) => (
            <div className="product" key={productCard.title}>
              <img src={productCard.image} alt={productCard.title} />
              <h3>{productCard.title}</h3>
              <Link to={productCard.link} className="pp">
                Details
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button className="back-btn" onClick={() => navigate('/')}>
            Back to Home
          </button>
        </div>
      </section>
    </>
  )
}

export default DetailPage

