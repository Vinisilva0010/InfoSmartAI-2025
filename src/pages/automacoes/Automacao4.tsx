import '../../styles/AutomacoesDetalhes.css';

export default function Automacao4() {
  return (
    <div className="detalhes-bg">
      <div className="detalhes-container">
        <h1 className="detalhes-titulo">Atendimento Automático</h1>
        <p className="detalhes-impacto">
          Ofereça suporte instantâneo, eficiente e personalizado com atendimento automatizado 24/7.
        </p>

        <div className="detalhes-conteudo">
          <img src="/img/auto4.jpg" alt="Atendimento Automático" className="detalhes-img" />
          <div className="detalhes-texto">
            <h2>O que essa automação faz:</h2>
            <ul>
              <li>✔️ Responde dúvidas frequentes com IA em tempo real</li>
              <li>✔️ Encaminha solicitações específicas para humanos</li>
              <li>✔️ Coleta dados de clientes automaticamente</li>
              <li>✔️ Integra com WhatsApp, site, redes sociais e e-mail</li>
            </ul>
            <p>
              Com esse sistema, sua empresa economiza tempo, reduz filas de espera e melhora a experiência do cliente.
            </p>
          </div>
        </div>

        <div className="detalhes-video">
          <video controls poster="/img/poster-video-auto.jpg">
            <source src="/video/automacao-atendimento.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
