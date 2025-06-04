import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Agentes', to: '/agentes' },
  { label: 'Automações', to: '/automacoes' },
  { label: 'Sites', to: '/sites' },
  { label: 'Contato', to: '/contato' },
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuAberto, setMenuAberto] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo à esquerda */}
      <div className="navbar-logo">
        <Link to="/" className="navbar-title">
          <span className="navbar-dot">🤖</span>
          InfoSmart <span className="navbar-highlight"></span>
        </Link>
      </div>

      {/* Botão hamburguer */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menu à direita */}
      <nav className={`navbar-nav ${menuAberto ? 'active' : ''}`}>
        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`navbar-menu-link ${
                  location.pathname === item.to ? 'navbar-menu-link-active' : ''
                }`}
                onClick={() => setMenuAberto(false)} // Fecha o menu ao clicar em um link
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
