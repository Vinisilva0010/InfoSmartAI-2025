import '../styles/Contato.css';

export default function Contato() {
  return (
    <main className="contato-main">
      <section className="contato-section">
        <h1 className="contato-title">Entre em Contato</h1>
        <p className="contato-desc">
          Preencha o formulário abaixo ou utilize nossos canais de comunicação para falar com a gente.   
        </p>

        <form className="contato-form">
          <div className="form-group">
            <label htmlFor="name">Nome Completo:</label>
            <input type="text" id="name" name="name" placeholder="Seu nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="seu.email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone (WhatsApp):</label>
            <input type="tel" id="phone" name="phone" placeholder="(XX) XXXXX-XXXX" />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto:</label>
            <input type="text" id="subject" name="subject" placeholder="Assunto da mensagem" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Sua Mensagem:</label>
            <textarea id="message" name="message" rows={5} placeholder="Descreva sua necessidade ou dúvida..." required></textarea>
          </div>
          <button type="submit" className="contato-submit-btn">Enviar Mensagem</button>
        </form>

        <div className="contato-info">
          <h2 className="contato-subtitle">Outros Canais:</h2>
          <p className="contato-text">
            E-mail: <a href="mailto:contato@infosmart2.com" className="contato-link">contato@infosmart2.com</a>
          </p>
          <p className="contato-text">
            Telefone: <a href="tel:+5511999999999" className="contato-link">+55 (11) 99999-9999</a>
          </p>
          <p className="contato-text">
            Atendimento: Segunda a Sexta, das 9h às 18h.
          </p>
        </div>
      </section>
    </main>
  );
}
