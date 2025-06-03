export default function Contato() {
  return (
    <main className="sobre-main">
      <section className="sobre-section">
        <h1 className="sobre-title">Contato</h1>
        <p className="sobre-desc">Entre em contato conosco para dúvidas, orçamentos ou parcerias!</p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400, margin: '0 auto' }}>
          <input type="text" placeholder="Seu nome" style={{ padding: 8, borderRadius: 8, border: '1px solid #164e63' }} />
          <input type="email" placeholder="Seu e-mail" style={{ padding: 8, borderRadius: 8, border: '1px solid #164e63' }} />
          <textarea placeholder="Sua mensagem" rows={4} style={{ padding: 8, borderRadius: 8, border: '1px solid #164e63' }} />
          <button type="submit" className="sites-btn">Enviar</button>
        </form>
      </section>
    </main>
  );
} 