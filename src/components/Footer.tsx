import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <span className="footer-title">InfoSmart 2.0</span>
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="footer-actions">
          <a href="#" >Instagram</a>
          <a href="#" >LinkedIn</a>
          <a href="#" >WhatsApp</a>
        </div>
        <div className="footer-links">
          <a href="#" >Termos de Uso</a>
          <a href="#" >Privacidade</a>
        </div>
      </div>
    </footer>
  );
} 