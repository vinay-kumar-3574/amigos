import { Link, useLocation } from 'react-router-dom'

const Header = ({ navLinks, onOpenLogin, onOpenRegister }) => {
  const { pathname } = useLocation()

  return (
    <header className="site-header">
      <div className="Alogo">
        <img
          src="https://cdn.glitch.global/2a1e26d9-ab9f-4d0d-922f-a475d812e321/image-removebg-preview%20(2).png?1734947722146"
          alt="Amigos Logo"
        />
      </div>
      <div className="logo">Amigos Pvt. Ltd.</div>
      <nav>
        <ul>
          {navLinks.map((item) => (
            <li key={item.to} className={pathname === item.to ? 'active-nav' : ''}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="flex items-center gap-3">
            <button onClick={onOpenLogin} className="primary-btn">
              Login
            </button>
            <button onClick={onOpenRegister} className="secondary-btn">
              Register
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

