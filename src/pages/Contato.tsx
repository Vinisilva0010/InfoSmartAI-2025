import '../../styles/Contato.css';

export default function Contato() {
  return (
    <main className="contato-main">
      <section className="contato-section">
        <h1 className="contato-title">Entre em Contato</h1>
        <p className="contato-desc">
          Preencha o formulário abaixo ou utilize nossos canais de comunicação para falar com a gente.   
        </p>

        <form className="contato-form">
          <div className="contato-form-group">
            <label htmlFor="name" className="contato-label">Nome Completo:</label>
            <input type="text" id="name" name="name" className="contato-input" placeholder="Seu nome" required />
          </div>
          <div className="contato-form-group">
            <label htmlFor="email" className="contato-label">E-mail:</label>
            <input type="email" id="email" name="email" className="contato-input" placeholder="seu.email@example.com" required />
          </div>
          <div className="contato-form-group">
            <label htmlFor="phone" className="contato-label">Telefone (WhatsApp):</label>
            <input type="tel" id="phone" name="phone" className="contato-input" placeholder="(XX) XXXXX-XXXX" />
          </div>
          <div className="contato-form-group">
            <label htmlFor="subject" className="contato-label">Assunto:</label>
            <input type="text" id="subject" name="subject" className="contato-input" placeholder="Assunto da mensagem" required />
          </div>
          <div className="contato-form-group">
            <label htmlFor="message" className="contato-label">Sua Mensagem:</label>
            <textarea id="message" name="message" className="contato-textarea" rows={5} placeholder="Descreva sua necessidade ou dúvida..." required></textarea>
          </div>
          <button type="submit" className="contato-submit-btn">Enviar Mensagem</button>
        </form>

        <div className="contato-info">
          <h2 className="contato-subtitle">Outros Canais:</h2>
          <p className="contato-text">E-mail: <a href="mailto:contato@infosmart2.com" className="contato-link">contato@infosmart2.com</a></p>
          <p className="contato-text">Telefone: <a href="tel:+5511999999999" className="contato-link">+55 (11) 99999-9999</a></p>
          <p className="contato-text">Atendimento: Segunda a Sexta, das 9h às 18h.</p>
        </div>
      </section>
    </main>
  );
} 