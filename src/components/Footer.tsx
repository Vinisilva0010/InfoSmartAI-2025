export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-title">InfoSmart 2.0</span>
        <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
      <div className="footer-actions">
        <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">WhatsApp</a>
      </div>
      <div className="footer-links">
        <a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a>
      </div>
    </footer>
  );
} 