import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Agentes', to: '/agentes' },
  { label: 'Automações', to: '/automacoes' },
  { label: 'Sites', to: '/sites' },
  { label: 'Contato', to: '/contato' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-title">
            <span className="navbar-dot"></span>
            InfoSmart <span className="navbar-highlight"></span>
          </Link>
        </div>
        {/* Menu horizontal sempre, com scroll-x em mobile */}
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={
                  location.pathname === item.to
                    ? 'navbar-menu-link navbar-menu-link-active'
                    : 'navbar-menu-link'
                }
                style={{ fontWeight: 700, fontSize: '1.08em' }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
