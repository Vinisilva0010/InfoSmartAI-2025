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
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="assunto">Assunto:</label>
            <input type="text" id="assunto" name="assunto" />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows={5} required></textarea>
          </div>
          <button type="submit" className="contato-submit-btn">Enviar Mensagem</button>
        </form>

        <div className="contato-info">
          <p>Ou fale conosco:</p>
          <p>Email: contato@infosmart.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <p>WhatsApp: (XX) 9XXXX-XXXX</p>
        </div>
      </section>
    </main>
  );
} 