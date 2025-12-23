import { Link } from 'react-router-dom'

const ProductsGrid = ({ products, showBack }) => (
  <section id="products" className="products">
    <h2>Products</h2>
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.title}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <Link to={product.link} className="pp">
            Details
          </Link>
        </div>
      ))}
    </div>
    {showBack ? (
      <div>
        <Link to="/" className="back-btn">
          Back to Home
        </Link>
      </div>
    ) : null}
  </section>
)

export default ProductsGrid

